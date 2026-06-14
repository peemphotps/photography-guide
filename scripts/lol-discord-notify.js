#!/usr/bin/env node
// Polls the LoL Esports schedule API and posts a Discord message
// whenever a tracked match goes live.
//
// Env vars:
//   DISCORD_WEBHOOK_URL  - required, Discord webhook to post to
//   LOL_LEAGUES          - optional, comma-separated league slugs
//                          (default: "first_stand,lck,msi,worlds")
//   LOL_API_KEY          - optional, lolesports public API key override

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_BASE = "https://esports-api.lolesports.com/persisted/gw";
// Public key used by the lolesports.com web client itself.
const API_KEY =
  process.env.LOL_API_KEY || "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const LEAGUE_SLUGS = (process.env.LOL_LEAGUES || "first_stand,lck,msi,worlds")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

const STATE_FILE = path.join(__dirname, "..", "data", "lol-notified-matches.json");
const MAX_STATE_ENTRIES = 300;

async function apiGet(endpoint, params = {}) {
  const url = new URL(`${API_BASE}/${endpoint}`);
  url.searchParams.set("hl", "en-US");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  const res = await fetch(url, { headers: { "x-api-key": API_KEY } });
  if (!res.ok) {
    throw new Error(`LoL API ${endpoint} request failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function getTrackedLeagues() {
  const { data } = await apiGet("getLeagues");
  const leagues = data.leagues.filter((league) =>
    LEAGUE_SLUGS.includes(league.slug.toLowerCase())
  );

  const missing = LEAGUE_SLUGS.filter(
    (slug) => !leagues.some((league) => league.slug.toLowerCase() === slug)
  );
  if (missing.length) {
    console.warn(`Could not find league(s) for slug(s): ${missing.join(", ")}`);
  }
  return leagues;
}

async function getLiveAndUpcomingEvents(leagueIds) {
  const { data } = await apiGet("getSchedule", { leagueId: leagueIds.join(",") });
  return data.schedule.events;
}

function loadState() {
  if (!existsSync(STATE_FILE)) return { notified: [] };
  try {
    const parsed = JSON.parse(readFileSync(STATE_FILE, "utf-8"));
    return { notified: Array.isArray(parsed.notified) ? parsed.notified : [] };
  } catch {
    return { notified: [] };
  }
}

function saveState(state) {
  mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  const trimmed = state.notified.slice(-MAX_STATE_ENTRIES);
  writeFileSync(STATE_FILE, JSON.stringify({ notified: trimmed }, null, 2) + "\n");
}

function buildEmbed(event, league) {
  const teams = event.match?.teams ?? [];
  const teamNames = teams.map((t) => t.name || t.code || "TBD").join("  vs  ");
  const startUnix = Math.floor(new Date(event.startTime).getTime() / 1000);
  const strategy = event.match?.strategy;
  const format = strategy ? `Best of ${strategy.count}` : "";
  const blockName = event.blockName ? `${event.blockName}` : "";

  return {
    title: `🔴 LIVE: ${teamNames}`,
    url: "https://lolesports.com/en-US/schedule",
    description: [`**${league?.name ?? event.league?.name}**`, blockName, format]
      .filter(Boolean)
      .join(" · "),
    color: 0x00d166,
    fields: [{ name: "Started", value: `<t:${startUnix}:R>`, inline: true }],
    thumbnail: league?.image ? { url: league.image } : undefined,
    timestamp: new Date().toISOString(),
  };
}

async function sendDiscordMessage(embed) {
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
  });
  if (!res.ok) {
    throw new Error(`Discord webhook request failed: ${res.status} ${res.statusText}`);
  }
}

async function main() {
  if (!WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL environment variable is required");
  }

  const leagues = await getTrackedLeagues();
  if (!leagues.length) {
    console.warn("No matching leagues found, nothing to do.");
    return;
  }

  const leagueById = new Map(leagues.map((l) => [l.id, l]));
  const events = await getLiveAndUpcomingEvents(leagues.map((l) => l.id));

  const state = loadState();
  const notified = new Set(state.notified);
  let changed = false;

  for (const event of events) {
    const matchId = event.match?.id;
    if (!matchId) continue;
    if (event.state !== "inProgress") continue;
    if (notified.has(matchId)) continue;

    const league = leagueById.get(event.league?.id);
    const embed = buildEmbed(event, league);
    console.log(`Match started: ${embed.title} (${league?.name ?? "unknown league"})`);
    await sendDiscordMessage(embed);

    notified.add(matchId);
    state.notified.push(matchId);
    changed = true;
  }

  if (changed) {
    saveState(state);
  } else {
    console.log("No new matches have started.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
