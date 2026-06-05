/* ============================================================
   data.js — เนื้อหาทั้งหมดของเว็บ (ไทย + อังกฤษ)
   โครงสร้าง: DATA.sections[] -> items[]
   ข้อความสองภาษาใช้รูปแบบ { th: "...", en: "..." }
   ============================================================ */

const I18N = {
  "brand.sub": { th: "คู่มือถ่ายภาพให้สวย", en: "Make your photos better" },
  "hero.title": { th: "ถ่ายรูปให้สวย เริ่มจากเข้าใจหลักการ", en: "Better photos start with understanding the rules" },
  "hero.lead": {
    th: "คู่มือรวมเทคนิคการจัดองค์ประกอบ การจัดแสง และการตั้งค่ากล้อง พร้อมภาพประกอบและคำแนะนำว่าแต่ละแบบเหมาะกับการถ่ายอะไร — สำหรับมือใหม่ถึงมืออาชีพ",
    en: "A guide to composition, lighting, and camera settings — with diagrams and advice on when to use each technique. From beginner to pro."
  },
  "foot.made": { th: "สร้างด้วย HTML/CSS/JS ล้วน · เปิดได้ทันที ไม่ต้องมีเซิร์ฟเวอร์", en: "Built with plain HTML/CSS/JS · No server required" },
  "label.bestFor": { th: "เหมาะกับ", en: "Best for" },
  "label.tips": { th: "เคล็ดลับ", en: "Tips" },
  "search.placeholder": { th: "ค้นหาเทคนิค… (เช่น thirds, แสง, portrait)", en: "Search techniques… (e.g. thirds, light, portrait)" },
  "stats.techniques": { th: "เทคนิคจัดองค์ประกอบ", en: "Composition rules" },
  "stats.lighting": { th: "รูปแบบแสง", en: "Lighting styles" },
  "stats.genres": { th: "แนวการถ่าย", en: "Photo genres" },
};

const DATA = {
  sections: [
    /* ===================== 1. COMPOSITION ===================== */
    {
      id: "composition", emoji: "🎯", type: "cards",
      title: { th: "การจัดองค์ประกอบ", en: "Composition" },
      desc: {
        th: "หลักการจัดวางสิ่งต่างๆ ในเฟรมให้ภาพน่ามอง นำสายตา และเล่าเรื่องได้ — เลือกใช้ให้เหมาะกับสิ่งที่ถ่าย",
        en: "How to arrange elements in the frame to guide the eye and tell a story — pick the one that fits your subject."
      },
      items: [
        {
          name: "Rule of Thirds", nameTh: "กฎสามส่วน", diagram: "rule-of-thirds", level: 1,
          desc: { th: "แบ่งเฟรมเป็นตาราง 3×3 แล้ววางจุดเด่นไว้ที่เส้นหรือจุดตัด ภาพจะดูสมดุลและมีพลังกว่าวางกลางภาพ", en: "Divide the frame into a 3×3 grid and place key subjects on the lines or intersections for a balanced, dynamic look." },
          bestFor: { th: "ทิวทัศน์ · บุคคล · ภาพทั่วไป (ใช้ได้แทบทุกแนว)", en: "Landscapes · portraits · almost anything" },
          tags: ["Landscape", "Portrait", "Beginner"],
          tips: [
            { th: "วางเส้นขอบฟ้าตรงเส้นบนหรือล่าง อย่าวางกลางภาพ", en: "Put the horizon on the top or bottom line, not the middle." },
            { th: "วางดวงตาของคนไว้แถวเส้นบน", en: "Place a person's eyes near the upper line." },
            { th: "เปิดเส้นกริดในกล้อง/มือถือช่วยจัดง่ายขึ้น", en: "Turn on your camera's grid overlay to help." }
          ]
        },
        {
          name: "Golden Ratio / Fibonacci", nameTh: "สัดส่วนทอง", diagram: "golden-ratio", level: 3,
          desc: { th: "สัดส่วน 1:1.618 ที่พบในธรรมชาติ วางจุดเด่นตามเส้นโค้งก้นหอยหรือกริดทอง ให้ความรู้สึกลื่นไหลเป็นธรรมชาติกว่ากฎสามส่วน", en: "The 1:1.618 ratio found in nature. Place the subject along the spiral or golden grid for a more organic flow than the rule of thirds." },
          bestFor: { th: "บุคคล · งานศิลป์ · ภาพที่ต้องการความประณีต", en: "Portraits · fine art · refined compositions" },
          tags: ["Portrait", "Fine Art", "Advanced"],
          tips: [
            { th: "ให้ก้นหอยม้วนเข้าหาจุดสำคัญที่สุดของภาพ", en: "Let the spiral curl toward the most important point." },
            { th: "เหมาะกับการจัดภาพหลังถ่าย (crop) มากกว่าจัดสด", en: "Often easier to apply when cropping than in-camera." }
          ]
        },
        {
          name: "Leading Lines", nameTh: "เส้นนำสายตา", diagram: "leading-lines", level: 1,
          desc: { th: "ใช้เส้น เช่น ถนน รั้ว แม่น้ำ นำสายตาผู้ชมเข้าไปหาจุดเด่นของภาพ สร้างมิติและความลึก", en: "Use lines — roads, fences, rivers — to draw the viewer's eye toward the subject and create depth." },
          bestFor: { th: "ทิวทัศน์ · สถาปัตยกรรม · ถนน/เมือง", en: "Landscapes · architecture · street" },
          tags: ["Landscape", "Architecture"],
          tips: [
            { th: "ให้เส้นเริ่มจากมุมล่างของเฟรมจะทรงพลังที่สุด", en: "Lines starting from a bottom corner feel strongest." },
            { th: "เส้นทแยงให้ความรู้สึกเคลื่อนไหวมากกว่าเส้นตรง", en: "Diagonal lines feel more dynamic than straight ones." }
          ]
        },
        {
          name: "Framing", nameTh: "การสร้างกรอบ", diagram: "framing", level: 2,
          desc: { th: "ใช้วัตถุรอบๆ เช่น ซุ้มประตู หน้าต่าง กิ่งไม้ มาเป็นกรอบล้อมจุดเด่น เพิ่มความลึกและดึงสายตา", en: "Use surrounding objects — arches, windows, branches — to frame the subject, adding depth and focus." },
          bestFor: { th: "บุคคล · สถาปัตยกรรม · ท่องเที่ยว", en: "Portraits · architecture · travel" },
          tags: ["Portrait", "Travel"],
          tips: [
            { th: "กรอบมืดหน้าจุดเด่นสว่างช่วยขับให้เด่นขึ้น", en: "A dark frame around a bright subject adds contrast." },
            { th: "ระวังกรอบดึงความสนใจไปจากตัวแบบ", en: "Don't let the frame steal attention from the subject." }
          ]
        },
        {
          name: "Symmetry", nameTh: "ความสมมาตร", diagram: "symmetry", level: 1,
          desc: { th: "จัดภาพให้สองฝั่งสมดุลเท่ากัน ให้ความรู้สึกสงบ มั่นคง เป็นระเบียบ เหมาะกับสถาปัตยกรรมและการสะท้อนน้ำ", en: "Balance both halves equally for a calm, orderly feel — great for architecture and reflections." },
          bestFor: { th: "สถาปัตยกรรม · ภาพสะท้อน · มินิมอล", en: "Architecture · reflections · minimal" },
          tags: ["Architecture", "Minimal"],
          tips: [
            { th: "วางเส้นแกนสมมาตรไว้กลางเฟรมพอดี", en: "Center the axis of symmetry precisely." },
            { th: "ภาพสะท้อนน้ำ/กระจกสร้างสมมาตรได้ง่าย", en: "Water or mirror reflections create instant symmetry." }
          ]
        },
        {
          name: "Triangle / Golden Triangles", nameTh: "องค์ประกอบสามเหลี่ยม", diagram: "triangle", level: 2,
          desc: { th: "จัดวางองค์ประกอบให้เกิดรูปสามเหลี่ยม สร้างความมั่นคงและนำสายตาไปตามมุม นิยมในภาพหมู่และยังไลฟ์", en: "Arrange elements into triangles for stability and to guide the eye along the angles — common in group and still-life shots." },
          bestFor: { th: "ภาพหมู่ · ยังไลฟ์ · อาหาร", en: "Groups · still life · food" },
          tags: ["Still Life", "Group"],
          tips: [
            { th: "หัวคน 3 คนจัดเป็นสามเหลี่ยมจะดูเป็นกลุ่มเดียวกัน", en: "Three heads in a triangle read as one group." }
          ]
        },
        {
          name: "Diagonals & Dynamic", nameTh: "เส้นทแยงมุม", diagram: "diagonal", level: 2,
          desc: { th: "เส้นทแยงให้ความรู้สึกเคลื่อนไหว มีพลัง และไม่หยุดนิ่ง เหมาะกับภาพกีฬา แอ็คชัน หรือสร้างความตื่นเต้น", en: "Diagonal lines add energy and movement — ideal for sports, action, or to create tension." },
          bestFor: { th: "กีฬา · แอ็คชัน · สตรีท", en: "Sports · action · street" },
          tags: ["Action", "Sports"],
          tips: [
            { th: "เอียงกล้องเล็กน้อย (Dutch angle) เพิ่มความตื่นเต้นได้", en: "A slight tilt (Dutch angle) heightens drama." }
          ]
        },
        {
          name: "Negative Space", nameTh: "พื้นที่ว่าง", diagram: "negative-space", level: 2,
          desc: { th: "เว้นพื้นที่ว่างรอบจุดเด่นเยอะๆ ให้ภาพดูโล่ง สงบ และเน้นตัวแบบให้โดดเด่น สื่ออารมณ์เหงาหรือมินิมอล", en: "Leave lots of empty space around the subject for a clean, calm look that emphasizes it — minimal or lonely moods." },
          bestFor: { th: "มินิมอล · โฆษณา · อารมณ์", en: "Minimal · advertising · mood" },
          tags: ["Minimal", "Mood"],
          tips: [
            { th: "ให้ตัวแบบเล็กแต่อยู่ในตำแหน่งที่ใช่", en: "Keep the subject small but well placed." },
            { th: "เผื่อพื้นที่ว่างไว้ใส่ข้อความถ้าทำโฆษณา", en: "Leave room for text if it's for an ad." }
          ]
        },
        {
          name: "Fill the Frame", nameTh: "เต็มเฟรม", diagram: "fill-frame", level: 1,
          desc: { th: "เข้าใกล้จนตัวแบบเต็มเฟรม ตัดสิ่งรบกวนออกหมด เน้นรายละเอียดและอารมณ์ ใกล้ชิดและทรงพลัง", en: "Get close so the subject fills the frame, cutting out distractions — intimate and powerful." },
          bestFor: { th: "บุคคล (โคลสอัพ) · มาโคร · รายละเอียด", en: "Close-up portraits · macro · detail" },
          tags: ["Portrait", "Macro"],
          tips: [
            { th: "ซูมด้วยเท้า (เดินเข้าใกล้) ได้ภาพคมกว่าซูมเลนส์", en: "Zoom with your feet for sharper results." }
          ]
        },
        {
          name: "Pattern & Repetition", nameTh: "ลวดลายซ้ำ", diagram: "pattern", level: 2,
          desc: { th: "ลวดลายหรือสิ่งที่ซ้ำกันสร้างจังหวะให้ภาพ ยิ่งถ้ามีสิ่งหนึ่งแตกต่างจะกลายเป็นจุดเด่นทันที", en: "Repeating patterns create rhythm — and one element breaking the pattern becomes an instant focal point." },
          bestFor: { th: "สถาปัตยกรรม · นามธรรม · ธรรมชาติ", en: "Architecture · abstract · nature" },
          tags: ["Abstract", "Architecture"],
          tips: [
            { th: "หา 'ตัวที่แตกต่าง' มาทำลายลวดลายเพื่อสร้างจุดสนใจ", en: "Find a 'break' in the pattern for interest." }
          ]
        },
        {
          name: "Depth & Layering", nameTh: "การสร้างมิติ", diagram: "depth", level: 3,
          desc: { th: "ใส่องค์ประกอบทั้งฉากหน้า กลาง และหลัง ให้ภาพ 2 มิติดูมีความลึกเหมือน 3 มิติ", en: "Include foreground, midground, and background to give a 2D photo a sense of 3D depth." },
          bestFor: { th: "ทิวทัศน์ · ท่องเที่ยว · สตรีท", en: "Landscapes · travel · street" },
          tags: ["Landscape", "Travel", "Advanced"],
          tips: [
            { th: "หาอะไรมาวางฉากหน้า เช่น ก้อนหิน ดอกไม้", en: "Add a foreground element like a rock or flower." },
            { th: "ใช้รูรับแสงแคบ (f/8-f/16) ให้คมทั้งภาพ", en: "Use a small aperture (f/8–f/16) to keep all layers sharp." }
          ]
        },
        {
          name: "Rule of Odds", nameTh: "กฎจำนวนคี่", diagram: "rule-of-odds", level: 1,
          desc: { th: "จัดวัตถุเป็นจำนวนคี่ (3, 5, 7) ตาดูสบายและน่าสนใจกว่าจำนวนคู่ที่ดูแบ่งครึ่ง", en: "Group subjects in odd numbers (3, 5, 7) — more natural and engaging than even numbers." },
          bestFor: { th: "ยังไลฟ์ · อาหาร · สินค้า", en: "Still life · food · products" },
          tags: ["Still Life", "Food"],
          tips: [
            { th: "3 ชิ้นคือจำนวนที่จัดง่ายและดูดีที่สุด", en: "Three is the easiest and most pleasing count." }
          ]
        }
      ]
    },

    /* ===================== 2. LIGHTING ===================== */
    {
      id: "lighting", emoji: "💡", type: "cards",
      title: { th: "การจัดแสง", en: "Lighting" },
      desc: {
        th: "แสงคือหัวใจของการถ่ายภาพ — ทิศทาง คุณภาพ และเวลาของแสงเปลี่ยนอารมณ์ภาพได้ทั้งหมด",
        en: "Light is everything in photography — its direction, quality, and timing change the entire mood."
      },
      items: [
        {
          name: "Golden Hour", nameTh: "ชั่วโมงทอง", diagram: "light-golden", level: 1,
          desc: { th: "ช่วงหลังพระอาทิตย์ขึ้นและก่อนตกราว 1 ชม. แสงนุ่ม อบอุ่น สีทอง เงายาวนุ่มนวล สวยที่สุดสำหรับเกือบทุกแนว", en: "The hour after sunrise / before sunset. Soft, warm, golden light with long gentle shadows — flattering for almost everything." },
          bestFor: { th: "บุคคล · ทิวทัศน์ · ท่องเที่ยว", en: "Portraits · landscapes · travel" },
          tags: ["Portrait", "Landscape", "Warm"],
          tips: [
            { th: "ถ่ายย้อนแสงได้ขอบทอง (rim light) สวยมาก", en: "Shoot into the sun for a golden rim light." },
            { th: "แสงเปลี่ยนเร็ว เตรียมตัวให้พร้อมก่อนเวลา", en: "Light changes fast — be set up early." }
          ]
        },
        {
          name: "Blue Hour", nameTh: "ชั่วโมงสีน้ำเงิน", diagram: "light-blue", level: 2,
          desc: { th: "ช่วงโพล้เพล้ก่อนฟ้าสว่างหรือหลังตะวันลับ ท้องฟ้าสีน้ำเงินเข้ม เหมาะกับภาพเมืองที่ไฟเริ่มติด ให้อารมณ์สงบลึกลับ", en: "Twilight when the sky turns deep blue — perfect for cityscapes as lights turn on, giving a calm, moody feel." },
          bestFor: { th: "ภาพเมือง · สถาปัตยกรรม · กลางคืน", en: "Cityscapes · architecture · night" },
          tags: ["City", "Night", "Cool"],
          tips: [
            { th: "ต้องใช้ขาตั้งกล้องเพราะแสงน้อย", en: "Use a tripod — light is low." }
          ]
        },
        {
          name: "Soft vs Hard Light", nameTh: "แสงนุ่ม vs แสงแข็ง", diagram: "light-soft-hard", level: 1,
          desc: { th: "แสงนุ่ม (วันเมฆมาก/ในร่ม) เงาอ่อน ผิวเนียน อ่อนโยน — แสงแข็ง (แดดเที่ยง/แฟลชตรง) เงาคม คอนทราสต์สูง ดราม่า", en: "Soft light (overcast/shade) = gentle shadows, smooth skin. Hard light (noon sun/direct flash) = sharp shadows, high contrast, drama." },
          bestFor: { th: "นุ่ม → บุคคล/อาหาร · แข็ง → แฟชั่น/สตรีท", en: "Soft → portraits/food · Hard → fashion/street" },
          tags: ["Portrait", "Mood"],
          tips: [
            { th: "ยิ่งแหล่งแสงใหญ่และใกล้ ยิ่งนุ่ม", en: "Bigger and closer light source = softer light." },
            { th: "วันเมฆมากคือซอฟต์บ็อกซ์ธรรมชาติขนาดยักษ์", en: "An overcast sky is a giant natural softbox." }
          ]
        },
        {
          name: "Backlight & Silhouette", nameTh: "ย้อนแสง & เงาดำ", diagram: "light-back", level: 2,
          desc: { th: "วางแหล่งแสงไว้ด้านหลังตัวแบบ ได้ขอบเรืองแสงหรือทำเป็นเงาดำสนิทตัดกับฉากหลังสว่าง อารมณ์ดราม่าและเล่าเรื่อง", en: "Place the light behind the subject for a glowing rim — or expose for the background to get a dramatic silhouette." },
          bestFor: { th: "บุคคล · พระอาทิตย์ตก · อารมณ์", en: "Portraits · sunsets · mood" },
          tags: ["Portrait", "Drama"],
          tips: [
            { th: "ทำเงาดำให้วัดแสงที่ท้องฟ้าสว่าง", en: "For silhouettes, meter on the bright sky." },
            { th: "ให้รูปทรงตัวแบบชัดเจน ไม่ทับซ้อนกัน", en: "Keep the subject's shape clean and separated." }
          ]
        },
        {
          name: "Side Light", nameTh: "แสงข้าง", diagram: "light-side", level: 2,
          desc: { th: "แสงเข้าด้านข้าง 90° ขับพื้นผิวและรายละเอียดให้เด่น สร้างมิติและความรู้สึกสามมิติ", en: "Light from 90° to the side reveals texture and detail, creating depth and a 3D feel." },
          bestFor: { th: "อาหาร · ยังไลฟ์ · พอร์ตเทรตดราม่า", en: "Food · still life · dramatic portraits" },
          tags: ["Food", "Texture"],
          tips: [
            { th: "ใช้แผ่นสะท้อนแสงฝั่งเงาเพื่อลดความมืด", en: "Use a reflector on the shadow side to fill." }
          ]
        },
        {
          name: "Rembrandt Light", nameTh: "แสงแบบเรมบรันต์", diagram: "light-rembrandt", level: 3,
          desc: { th: "จัดไฟทำมุม ~45° ให้เกิดสามเหลี่ยมแสงเล็กๆ บนแก้มฝั่งเงา เป็นแสงพอร์ตเทรตคลาสสิกที่ดูมีมิติและหรู", en: "Light at ~45° creating a small triangle of light on the shadow-side cheek — a classic, dimensional portrait look." },
          bestFor: { th: "พอร์ตเทรตในสตูดิโอ · ภาพคน", en: "Studio portraits · headshots" },
          tags: ["Portrait", "Studio", "Advanced"],
          tips: [
            { th: "สามเหลี่ยมแสงควรกว้างไม่เกินดวงตา", en: "The light triangle should be no wider than the eye." }
          ]
        },
        {
          name: "Window Light", nameTh: "แสงจากหน้าต่าง", diagram: "light-window", level: 1,
          desc: { th: "แสงธรรมชาติจากหน้าต่างนุ่มและสวยฟรี เหมาะมือใหม่ จัดตัวแบบทำมุมกับหน้าต่างได้แสงมีมิติ", en: "Free, soft natural light from a window — great for beginners. Angle the subject to the window for dimension." },
          bestFor: { th: "บุคคลในร่ม · อาหาร · สินค้า", en: "Indoor portraits · food · products" },
          tags: ["Portrait", "Food", "Beginner"],
          tips: [
            { th: "หน้าต่างหันทิศเหนือให้แสงนุ่มสม่ำเสมอทั้งวัน", en: "North-facing windows give even soft light all day." }
          ]
        }
      ]
    },

    /* ===================== 3. GENRES ===================== */
    {
      id: "genres", emoji: "📸", type: "cards",
      title: { th: "แนวการถ่ายภาพ", en: "Photo Genres" },
      desc: {
        th: "แต่ละแนวมีหลักการ องค์ประกอบ และการตั้งค่าที่ต่างกัน — เลือกดูแนวที่คุณสนใจ",
        en: "Each genre has its own rules, composition, and settings — explore the one you love."
      },
      items: [
        {
          name: "Portrait", nameTh: "ภาพบุคคล", diagram: "genre-portrait", level: 1,
          desc: { th: "เน้นใบหน้าและอารมณ์ ใช้รูรับแสงกว้างละลายฉากหลัง โฟกัสที่ดวงตาเสมอ", en: "Focus on the face and emotion. Use a wide aperture to blur the background, and always focus on the eyes." },
          bestFor: { th: "เลนส์ 50-85mm · f/1.8-2.8 · แสงนุ่ม", en: "50–85mm · f/1.8–2.8 · soft light" },
          tags: ["50-85mm", "f/1.8", "Eyes"],
          tips: [
            { th: "องค์ประกอบ: กฎสามส่วน วางตาบนเส้นบน", en: "Composition: thirds — eyes on the upper line." },
            { th: "ถ่ายช่วง golden hour ได้ผิวสวย", en: "Golden hour gives flattering skin tones." }
          ]
        },
        {
          name: "Landscape", nameTh: "ทิวทัศน์", diagram: "genre-landscape", level: 1,
          desc: { th: "เก็บความกว้างใหญ่ของธรรมชาติ ใช้รูรับแสงแคบให้คมทั้งภาพ และใส่ฉากหน้าสร้างมิติ", en: "Capture the vastness of nature. Use a narrow aperture for front-to-back sharpness and add foreground for depth." },
          bestFor: { th: "เลนส์ไวด์ 16-35mm · f/8-11 · ขาตั้ง", en: "Wide 16–35mm · f/8–11 · tripod" },
          tags: ["Wide", "f/8-11", "Tripod"],
          tips: [
            { th: "องค์ประกอบ: เส้นนำสายตา + กฎสามส่วน", en: "Composition: leading lines + thirds." },
            { th: "ฟิลเตอร์ ND/CPL ช่วยคุมแสงและสะท้อน", en: "ND/CPL filters tame light and reflections." }
          ]
        },
        {
          name: "Street", nameTh: "ภาพแนวสตรีท", diagram: "genre-street", level: 2,
          desc: { th: "จับช่วงเวลาจริงบนท้องถนน ต้องไว ใช้ระยะชัดลึกเผื่อโฟกัส (zone focus) และกล้าเข้าใกล้", en: "Capture candid moments on the street. Be quick, use deep focus (zone focusing), and get close." },
          bestFor: { th: "35mm · f/8 · ISO สูงหน่อย · ชัตเตอร์ไว", en: "35mm · f/8 · higher ISO · fast shutter" },
          tags: ["35mm", "Candid", "Fast"],
          tips: [
            { th: "ตั้งกล้องโหมด A/Av รอจังหวะ กดได้ทันที", en: "Use aperture-priority and pre-set so you're ready." },
            { th: "เคารพความเป็นส่วนตัวของคนถ่าย", en: "Respect your subjects' privacy." }
          ]
        },
        {
          name: "Macro", nameTh: "มาโคร (ระยะใกล้)", diagram: "genre-macro", level: 3,
          desc: { th: "ถ่ายของเล็กๆ ให้ใหญ่เกินจริง เช่น แมลง ดอกไม้ ระยะชัดบางมาก ต้องนิ่งและแม่นยำ", en: "Photograph tiny subjects larger than life — insects, flowers. Depth of field is razor-thin; precision is key." },
          bestFor: { th: "เลนส์มาโคร · f/8-16 · ขาตั้ง · แฟลช", en: "Macro lens · f/8–16 · tripod · flash" },
          tags: ["Macro lens", "f/11", "Advanced"],
          tips: [
            { th: "โฟกัสด้วยมือและขยับตัวเข้า-ออกแทน", en: "Focus manually by rocking in and out." },
            { th: "เทคนิค focus stacking ให้คมทั้งตัวแบบ", en: "Focus stacking keeps the whole subject sharp." }
          ]
        },
        {
          name: "Food", nameTh: "อาหาร", diagram: "genre-food", level: 1,
          desc: { th: "ทำให้อาหารน่ากิน ใช้แสงข้างหรือแสงหน้าต่าง จัดจานสะอาด เน้นพื้นผิวและไอร้อน", en: "Make food look delicious with side or window light, clean plating, and emphasis on texture and steam." },
          bestFor: { th: "เลนส์ 50mm/มาโคร · แสงข้าง · f/4-5.6", en: "50mm/macro · side light · f/4–5.6" },
          tags: ["Side light", "50mm"],
          tips: [
            { th: "มุมยอดนิยม: 45° และ top-down (90°)", en: "Popular angles: 45° and top-down (90°)." },
            { th: "องค์ประกอบ: จำนวนคี่ + สามเหลี่ยม", en: "Composition: rule of odds + triangles." }
          ]
        },
        {
          name: "Architecture", nameTh: "สถาปัตยกรรม", diagram: "genre-architecture", level: 2,
          desc: { th: "เก็บเส้นสายและรูปทรงของอาคาร ระวังเส้นตั้งให้ตรง ใช้สมมาตรและลวดลายซ้ำ", en: "Capture a building's lines and forms. Keep verticals straight; use symmetry and repeating patterns." },
          bestFor: { th: "เลนส์ไวด์ · f/8 · ตอนแสงเฉียง", en: "Wide lens · f/8 · raking light" },
          tags: ["Wide", "Symmetry", "Lines"],
          tips: [
            { th: "ถ่ายตรงๆ หรือเงยให้สุดเพื่อเลี่ยงเส้นเอียง", en: "Shoot straight-on or fully up to avoid keystoning." }
          ]
        },
        {
          name: "Wildlife", nameTh: "สัตว์ป่า", diagram: "genre-wildlife", level: 3,
          desc: { th: "ถ่ายสัตว์จากระยะไกล ต้องใช้เลนส์เทเลโฟโต้ ชัตเตอร์ไว และความอดทนสูง", en: "Photograph animals from afar — needs a telephoto lens, fast shutter, and lots of patience." },
          bestFor: { th: "เลนส์ 300mm+ · 1/1000s+ · ISO อัตโนมัติ", en: "300mm+ · 1/1000s+ · auto ISO" },
          tags: ["Telephoto", "Fast shutter", "Advanced"],
          tips: [
            { th: "โฟกัสที่ดวงตาสัตว์ ใช้ continuous AF", en: "Focus on the eye; use continuous AF." },
            { th: "เผื่อพื้นที่ว่างด้านที่สัตว์มองไป", en: "Leave space in the direction it's looking." }
          ]
        },
        {
          name: "Night / Astro", nameTh: "กลางคืน / ดวงดาว", diagram: "genre-night", level: 3,
          desc: { th: "ถ่ายในที่แสงน้อยหรือทางช้างเผือก ต้องใช้ขาตั้ง เปิดชัตเตอร์นาน และ ISO สูง", en: "Shoot in low light or the Milky Way — needs a tripod, long exposure, and high ISO." },
          bestFor: { th: "เลนส์ไวด์ f/2.8 · 15-25s · ISO 1600-3200", en: "Wide f/2.8 · 15–25s · ISO 1600–3200" },
          tags: ["Tripod", "Long exposure", "Advanced"],
          tips: [
            { th: "กฎ 500: เวลา = 500 ÷ ทางยาวโฟกัส (เลี่ยงดาวยืด)", en: "500 rule: time = 500 ÷ focal length (avoid star trails)." },
            { th: "โฟกัสแมนนวลไปที่ระยะอนันต์", en: "Focus manually to infinity." }
          ]
        },
        {
          name: "Product", nameTh: "สินค้า", diagram: "genre-product", level: 2,
          desc: { th: "เน้นสินค้าให้ชัดเจน สะอาด ฉากหลังเรียบ คุมแสงและเงาให้ดูพรีเมียม", en: "Show the product clearly on a clean background with controlled light and shadow for a premium look." },
          bestFor: { th: "เลนส์ 50-100mm · f/8-11 · ซอฟต์บ็อกซ์", en: "50–100mm · f/8–11 · softbox" },
          tags: ["50-100mm", "Studio", "Clean"],
          tips: [
            { th: "ใช้พื้นที่ว่างเยอะให้ดูพรีเมียม", en: "Use plenty of negative space for a premium feel." }
          ]
        },
        {
          name: "Event", nameTh: "งานอีเวนต์", diagram: "genre-event", level: 2,
          desc: { th: "เก็บบรรยากาศและช่วงเวลาสำคัญ ต้องไว ปรับตัวกับแสงหลากหลาย และเล่าเรื่องเป็นชุดภาพ", en: "Capture atmosphere and key moments — be fast, adapt to mixed light, and tell a story across many frames." },
          bestFor: { th: "เลนส์ซูม 24-70mm · f/2.8 · แฟลชเด้ง", en: "24–70mm zoom · f/2.8 · bounce flash" },
          tags: ["24-70mm", "f/2.8", "Fast"],
          tips: [
            { th: "เด้งแฟลชกับเพดานให้แสงนุ่มเป็นธรรมชาติ", en: "Bounce flash off the ceiling for natural light." },
            { th: "ถ่ายทั้งภาพรวมและรายละเอียดเล็กๆ", en: "Shoot both wide scenes and small details." }
          ]
        }
      ]
    },

    /* ===================== 4. CAMERA SETTINGS ===================== */
    {
      id: "settings", emoji: "⚙️", type: "triangle",
      title: { th: "การตั้งค่ากล้อง", en: "Camera Settings" },
      desc: {
        th: "สามเหลี่ยมการเปิดรับแสง (Exposure Triangle) — ISO, รูรับแสง, และความเร็วชัตเตอร์ ทำงานร่วมกันเพื่อคุมความสว่างและลุคของภาพ",
        en: "The Exposure Triangle — ISO, aperture, and shutter speed work together to control brightness and the look of your photo."
      },
      triangle: {
        nodes: [
          { key: "aperture", label: "Aperture", labelTh: "รูรับแสง", color: "var(--accent-2)" },
          { key: "shutter", label: "Shutter", labelTh: "ชัตเตอร์", color: "var(--gold)" },
          { key: "iso", label: "ISO", labelTh: "ISO", color: "var(--pink)" }
        ]
      },
      pillars: [
        {
          name: "Aperture (f-stop)", nameTh: "รูรับแสง", color: "var(--accent-2)",
          desc: { th: "ขนาดรูที่แสงเข้า ควบคุม 'ระยะชัด' (depth of field) f เลขน้อย (f/1.8) = รูกว้าง ฉากหลังเบลอ · f เลขมาก (f/16) = รูแคบ ชัดทั้งภาพ", en: "Controls depth of field. Low f (f/1.8) = wide opening, blurry background. High f (f/16) = narrow, all sharp." },
          rows: [
            ["f/1.4 – f/2.8", { th: "ฉากหลังเบลอมาก · บุคคล", en: "Heavy blur · portraits" }],
            ["f/4 – f/5.6", { th: "เบลอกำลังดี · ทั่วไป", en: "Moderate blur · general" }],
            ["f/8 – f/11", { th: "คมเกือบทั้งภาพ · ทิวทัศน์", en: "Mostly sharp · landscapes" }],
            ["f/16 – f/22", { th: "ชัดลึกสุด · มาโคร/แลนด์สเคป", en: "Max depth · macro/landscape" }]
          ]
        },
        {
          name: "Shutter Speed", nameTh: "ความเร็วชัตเตอร์", color: "var(--gold)",
          desc: { th: "ระยะเวลาที่เซนเซอร์รับแสง ควบคุม 'การเคลื่อนไหว' เร็ว = หยุดการเคลื่อนไหวคมกริบ · ช้า = สร้างการไหลเบลอ (ต้องใช้ขาตั้ง)", en: "How long the sensor is exposed. Fast = freezes motion. Slow = motion blur (needs a tripod)." },
          rows: [
            ["1/1000s +", { th: "หยุดแอ็คชัน · กีฬา/สัตว์", en: "Freeze action · sports/wildlife" }],
            ["1/250 – 1/500s", { th: "คนเดิน · ทั่วไป", en: "Walking people · general" }],
            ["1/60 – 1/125s", { th: "ถือกล้องนิ่งได้ · ในร่ม", en: "Handheld limit · indoors" }],
            ["1s – 30s", { th: "ไฟรถเป็นเส้น · น้ำตกนุ่ม (ขาตั้ง)", en: "Light trails · silky water (tripod)" }]
          ]
        },
        {
          name: "ISO", nameTh: "ความไวแสง", color: "var(--pink)",
          desc: { th: "ความไวของเซนเซอร์ต่อแสง ต่ำ = ภาพสะอาดไม่มี noise · สูง = ถ่ายที่มืดได้แต่มี noise (เม็ดสี) เพิ่มขึ้น", en: "Sensor's sensitivity to light. Low = clean image. High = shoot in the dark but with more noise (grain)." },
          rows: [
            ["ISO 100 – 200", { th: "สะอาดที่สุด · กลางแจ้งสว่าง", en: "Cleanest · bright daylight" }],
            ["ISO 400 – 800", { th: "ในร่ม/เมฆมาก", en: "Indoors/overcast" }],
            ["ISO 1600 – 3200", { th: "แสงน้อย · งานเลี้ยง", en: "Low light · events" }],
            ["ISO 6400 +", { th: "มืดมาก · กลางคืน (มี noise)", en: "Very dark · night (noisy)" }]
          ]
        }
      ]
    },

    /* ===================== 5. PRO TIPS ===================== */
    {
      id: "protips", emoji: "🎓", type: "cards",
      title: { th: "เทคนิคมือโปร & เวิร์กโฟลว์", en: "Pro Tips & Workflow" },
      desc: {
        th: "เคล็ดลับที่ช่างภาพมืออาชีพใช้ ตั้งแต่การเลือกเลนส์ไปจนถึงการเตรียมตัวก่อนถ่าย",
        en: "What pros actually do — from choosing lenses to preparing before a shoot."
      },
      items: [
        {
          name: "Focal Length & Perspective", nameTh: "ทางยาวโฟกัสกับมุมมอง", diagram: "skip", level: 2,
          desc: { th: "เลนส์ไวด์ (16-35mm) ขยายระยะ ดูกว้างแต่บิดเบือนใกล้ๆ · เทเล (85mm+) บีบระยะ ฉากหลังดูใกล้และละลายสวย เลือกตามเรื่องที่จะเล่า", en: "Wide (16–35mm) exaggerates space but distorts up close. Telephoto (85mm+) compresses, pulling the background closer. Choose by story." },
          bestFor: { th: "เข้าใจเลนส์ก่อนซื้อตัวใหม่", en: "Understand lenses before buying" },
          tags: ["Lens", "Perspective"],
          tips: [
            { th: "พอร์ตเทรตใช้ 85mm หน้าไม่บิด สัดส่วนสวย", en: "85mm flatters faces with natural proportions." },
            { th: "อย่าใช้ไวด์ถ่ายหน้าใกล้ๆ จมูกจะใหญ่", en: "Don't shoot faces wide and close — noses enlarge." }
          ]
        },
        {
          name: "RAW vs JPEG", nameTh: "RAW กับ JPEG", diagram: "skip", level: 1,
          desc: { th: "RAW เก็บข้อมูลครบ แก้ไขได้เยอะ (แสง/สี) แต่ไฟล์ใหญ่ ต้องล้างไฟล์ · JPEG เล็ก พร้อมใช้ แต่แก้ได้น้อย", en: "RAW keeps all data for heavy editing but files are big. JPEG is small and ready-to-use but less flexible." },
          bestFor: { th: "RAW → งานจริงจัง · JPEG → แชร์เร็ว", en: "RAW → serious work · JPEG → quick sharing" },
          tags: ["Workflow", "Editing"],
          tips: [
            { th: "ถ่าย RAW+JPEG ได้ทั้งสองอย่างถ้าการ์ดพอ", en: "Shoot RAW+JPEG to get both if you have space." }
          ]
        },
        {
          name: "White Balance", nameTh: "สมดุลแสงขาว", diagram: "skip", level: 1,
          desc: { th: "ปรับให้สีขาวเป็นขาวจริงภายใต้แสงต่างๆ แสงหลอดส้ม/ฟลูออเรสเซนต์เขียว ตั้ง WB ให้ตรงหรือถ่าย RAW แล้วแก้ทีหลัง", en: "Makes whites look white under any light. Fix tungsten's orange or fluorescent's green — or shoot RAW and fix later." },
          bestFor: { th: "ภาพในร่ม · แสงผสม", en: "Indoor · mixed light" },
          tags: ["Color", "Beginner"],
          tips: [
            { th: "อยากได้อารมณ์อุ่นตอนเย็น อย่าตั้ง auto", en: "For a warm sunset mood, avoid auto WB." }
          ]
        },
        {
          name: "Focus Modes", nameTh: "โหมดโฟกัส", diagram: "skip", level: 2,
          desc: { th: "Single AF (AF-S) สำหรับวัตถุนิ่ง · Continuous AF (AF-C) ตามวัตถุเคลื่อนไหว · เลือกจุดโฟกัสเองให้แม่นกว่าให้กล้องเลือก", en: "Single AF for still subjects, Continuous AF to track motion. Pick your own focus point for precision." },
          bestFor: { th: "AF-C → กีฬา/สัตว์ · AF-S → ทิวทัศน์", en: "AF-C → sports/wildlife · AF-S → landscapes" },
          tags: ["Focus", "Action"],
          tips: [
            { th: "ใช้ back-button focus แยกโฟกัสกับชัตเตอร์", en: "Try back-button focus to separate focus from shutter." }
          ]
        },
        {
          name: "Pre-Shoot Checklist", nameTh: "เช็กลิสต์ก่อนถ่าย", diagram: "skip", level: 1,
          desc: { th: "เตรียมให้พร้อมไม่พลาดช็อตสำคัญ: แบตเต็ม · ฟอร์แมตการ์ด · เช็ก ISO/WB · ทำความสะอาดเลนส์ · ตั้งค่าใหม่จากครั้งก่อน", en: "Don't miss the shot: full battery, formatted card, check ISO/WB, clean lens, reset settings from last time." },
          bestFor: { th: "ทุกงาน โดยเฉพาะงานสำคัญ", en: "Every shoot, especially important ones" },
          tags: ["Preparation"],
          tips: [
            { th: "พกแบตและการ์ดสำรองเสมอ", en: "Always carry spare battery and card." }
          ]
        },
        {
          name: "Common Mistakes", nameTh: "ข้อผิดพลาดที่พบบ่อย", diagram: "skip", level: 1,
          desc: { th: "หลีกเลี่ยง: เส้นขอบฟ้าเอียง · โฟกัสผิดจุด · ฉากหลังรก · ISO สูงเกินจำเป็น · วางตัวแบบกลางภาพตลอด", en: "Avoid: tilted horizons, missed focus, cluttered backgrounds, unnecessary high ISO, always centering the subject." },
          bestFor: { th: "มือใหม่ทุกคนควรอ่าน", en: "Every beginner should read this" },
          tags: ["Beginner", "Fix"],
          tips: [
            { th: "เช็กขอบเฟรมก่อนกดทุกครั้ง มีอะไรรกไหม", en: "Scan the frame edges before every shot." }
          ]
        }
      ]
    },

    /* ===================== 6. FILTERS ===================== */
    {
      id: "filters", emoji: "🎛️", type: "cards",
      title: { th: "ฟิลเตอร์หน้าเลนส์", en: "Lens Filters" },
      desc: {
        th: "ฟิลเตอร์ช่วยคุมแสง ลดแสงสะท้อน และสร้างลุคที่ทำในกล้องได้เลย — รู้จักแต่ละชนิดและเลือกใช้ให้ถูกงาน",
        en: "Filters control light, cut reflections, and create looks in-camera — know each type and when to use it."
      },
      items: [
        {
          name: "UV / Protection Filter", nameTh: "ฟิลเตอร์ป้องกันเลนส์", level: 1,
          desc: { th: "กระจกใสติดหน้าเลนส์ ปัจจุบันแทบไม่มีผลกับภาพ ใช้เพื่อ 'ปกป้อง' หน้าเลนส์จากฝุ่น น้ำ รอยขีดข่วนเป็นหลัก", en: "A clear glass on the front of the lens. Today it barely affects the image — mainly used to protect the front element from dust, water, and scratches." },
          bestFor: { th: "ใช้ทุกวัน · กลางแจ้ง · ที่มีฝุ่น/ละอองน้ำ", en: "Everyday · outdoors · dusty or wet places" },
          tags: ["Protection", "Beginner"],
          tips: [
            { th: "เลือกของคุณภาพดี ไม่งั้นเกิดแฟลร์/ลดความคม", en: "Buy good quality or it causes flare and softens the image." },
            { th: "ถ้าถ่ายย้อนแสงแล้วเจอแสงหลอน ลองถอดออก", en: "If you get ghosting against the light, take it off." }
          ]
        },
        {
          name: "Polarizer (CPL)", nameTh: "ฟิลเตอร์โพลาไรซ์", level: 2,
          desc: { th: "หมุนปรับเพื่อ 'ลบแสงสะท้อน' บนผิวน้ำ กระจก ใบไม้ ทำให้ท้องฟ้าน้ำเงินเข้มและสีอิ่มขึ้น เป็นเอฟเฟกต์ที่แก้ทีหลังในคอมไม่ได้", en: "Rotate to cut reflections off water, glass, and leaves, deepen blue skies, and boost saturation — an effect you can't replicate in editing." },
          bestFor: { th: "ทิวทัศน์ · น้ำ/ทะเล · ใบไม้เขียว", en: "Landscapes · water/sea · green foliage" },
          tags: ["Landscape", "Reflections"],
          tips: [
            { th: "ผลแรงสุดเมื่อเล็งตั้งฉาก 90° กับดวงอาทิตย์", en: "Strongest when shooting 90° from the sun." },
            { th: "ลดแสงราว 1-2 สต็อป · เลี่ยงใช้กับเลนส์ไวด์มาก (ฟ้าจะไม่สม่ำเสมอ)", en: "Costs ~1–2 stops · avoid on ultra-wide lenses (uneven sky)." }
          ]
        },
        {
          name: "Neutral Density (ND)", nameTh: "ฟิลเตอร์ลดแสง", level: 2,
          desc: { th: "กระจกสีเทาลดแสงลงเท่ากันทั้งภาพ ทำให้เปิดชัตเตอร์นานได้กลางแดด — น้ำตกนุ่มเป็นสายไหม เมฆไหล หรือเปิดรูรับแสงกว้างกลางแจ้ง", en: "Grey glass that cuts light evenly, letting you use long shutter speeds in daylight — silky waterfalls, streaking clouds, or wide apertures outdoors." },
          bestFor: { th: "น้ำตก · ทะเล · เมฆเคลื่อน · long exposure", en: "Waterfalls · seascapes · moving clouds · long exposure" },
          tags: ["Long exposure", "Landscape"],
          tips: [
            { th: "มีหลายความเข้ม: ND8 (3 สต็อป), ND64 (6), ND1000 (10)", en: "Comes in strengths: ND8 (3 stops), ND64 (6), ND1000 (10)." },
            { th: "ใช้ขาตั้งเสมอ · โฟกัสให้เสร็จก่อนใส่ ND เข้มๆ", en: "Always use a tripod · focus before attaching a strong ND." }
          ]
        },
        {
          name: "Variable ND", nameTh: "ND ปรับค่าได้", level: 2,
          desc: { th: "หมุนปรับความเข้มได้ในตัวเดียว สะดวกมากโดยเฉพาะถ่ายวิดีโอที่ต้องคงชัตเตอร์ ~1/50 ขณะแสงเปลี่ยน", en: "One filter with adjustable density by rotating — very handy for video, keeping shutter at ~1/50 as light changes." },
          bestFor: { th: "วิดีโอ · ถ่ายเร็วแสงเปลี่ยนบ่อย", en: "Video · run-and-gun shooting" },
          tags: ["Video", "Flexible"],
          tips: [
            { th: "อย่าหมุนสุดทาง จะเกิดรอยกากบาทดำ (X-pattern)", en: "Don't max it out — you'll get a dark X-pattern." },
            { th: "คุณภาพต่างกันมาก เลือกรุ่นดีๆ", en: "Quality varies a lot — pick a good one." }
          ]
        },
        {
          name: "Graduated ND (GND)", nameTh: "ND ครึ่งซีก", level: 3,
          desc: { th: "ครึ่งบนเข้มครึ่งล่างใส ใช้กดท้องฟ้าที่สว่างจัดให้สมดุลกับพื้นดินที่มืดกว่า เก็บรายละเอียดได้ทั้งสองส่วน", en: "Dark on top, clear on the bottom — tames a bright sky to balance it with darker land, keeping detail in both." },
          bestFor: { th: "ทิวทัศน์พระอาทิตย์ขึ้น/ตก · ทะเล", en: "Sunrise/sunset landscapes · seascapes" },
          tags: ["Landscape", "Advanced"],
          tips: [
            { th: "วางรอยต่อให้ตรงเส้นขอบฟ้า · มีแบบขอบนุ่ม (soft) และขอบคม (hard)", en: "Align the transition to the horizon · soft vs hard edge versions." },
            { th: "ทางเลือก: ถ่ายคร่อมแสง (bracket) แล้วรวมในคอม", en: "Alternative: bracket exposures and blend in post." }
          ]
        },
        {
          name: "Black Mist / Diffusion", nameTh: "ฟิลเตอร์ฟุ้ง", level: 2,
          desc: { th: "ลดคอนทราสต์ ทำให้ไฮไลต์ฟุ้งเรืองและภาพดูนุ่มฝัน ให้ลุคหนังภาพยนตร์ ลดความคมของผิวลงนิดหน่อย", en: "Lowers contrast, blooms the highlights, and softens the image for a dreamy, cinematic film look." },
          bestFor: { th: "บุคคล · วิดีโอ · ลุคซีเนมาติก · ไฟกลางคืน", en: "Portraits · video · cinematic look · night lights" },
          tags: ["Cinematic", "Portrait"],
          tips: [
            { th: "เห็นผลชัดสุดตอนมีไฟจุดเล็กๆ ในเฟรม (กลางคืน)", en: "Most visible with small point lights in frame (at night)." },
            { th: "ความเข้มยอดนิยม: 1/4 และ 1/8", en: "Popular strengths: 1/4 and 1/8." }
          ]
        },
        {
          name: "Color / Creative", nameTh: "ฟิลเตอร์สี/สร้างสรรค์", level: 1,
          desc: { th: "เพิ่มโทนอุ่น/เย็น หรือเอฟเฟกต์พิเศษ เช่น เส้นแสง (streak) ปริซึม หมอก ทำลุคแปลกใหม่ได้ในกล้องเลย", en: "Add warm/cool tones or special effects like light streaks, prism, or fog — creating unusual looks right in-camera." },
          bestFor: { th: "งานสร้างสรรค์ · วิดีโอ · มิวสิกวิดีโอ", en: "Creative work · video · music videos" },
          tags: ["Creative", "Video"],
          tips: [
            { th: "หลายเอฟเฟกต์ทำในคอมได้ แต่ในกล้องให้ฟีลธรรมชาติกว่า", en: "Many effects can be done in post, but in-camera feels more organic." }
          ]
        }
      ]
    },

    /* ===================== 7. EXPORT & SHARING ===================== */
    {
      id: "export", emoji: "📤", type: "cards",
      title: { th: "เอ็กซ์พอร์ต & แชร์ลงโซเชียล", en: "Export & Social Sharing" },
      desc: {
        th: "ตั้งค่าการบันทึกไฟล์ให้ภาพคมชัด สีตรง ไม่โดนบีบอัดจนเสียคุณภาพเมื่อลงโซเชียล — พร้อมขนาดที่เหมาะกับแต่ละแพลตฟอร์มอัปเดตปี 2025",
        en: "Export your photos so they stay sharp and color-accurate on social media instead of getting crushed by compression — with the right sizes for each platform, updated for 2025."
      },
      items: [
        {
          name: "Use sRGB Color Space", nameTh: "ใช้คัลเลอร์สเปซ sRGB", level: 1,
          desc: { th: "Instagram, Facebook และเว็บทั่วไปแสดงผลเฉพาะ sRGB แม้คุณแก้ภาพในสเปซกว้างกว่า (Adobe RGB / Display P3) ก็ควรส่งออกเป็น sRGB ไม่งั้นสีจะเพี้ยน โดยเฉพาะโทนแดง ส้ม และสีผิว", en: "Instagram, Facebook, and most of the web only display sRGB. Even if you edit in a wider space (Adobe RGB / Display P3), export to sRGB — otherwise colors shift, especially reds, oranges, and skin tones." },
          bestFor: { th: "ทุกภาพที่จะลงเว็บหรือโซเชียล", en: "Any photo going to the web or social" },
          tags: ["sRGB", "Color", "Beginner"],
          tips: [
            { th: "ตั้ง Color Space = sRGB ทุกครั้งตอน export สำหรับโซเชียล", en: "Always set Color Space = sRGB when exporting for social." },
            { th: "เก็บไฟล์ต้นฉบับสเปซกว้างไว้ต่างหากสำหรับงานพิมพ์", en: "Keep a wider-gamut master separately for printing." }
          ]
        },
        {
          name: "Right Size per Platform", nameTh: "ขนาดที่เหมาะกับแต่ละแพลตฟอร์ม", level: 1,
          desc: { th: "Instagram ย่อภาพที่กว้างเกิน ~1080px เสมอ ส่งออกให้ตรงขนาดเป้าหมายเองจะคมกว่าปล่อยให้แอปย่อ ภาพแนวตั้งกินพื้นที่ฟีดและได้ความละเอียดมากที่สุด", en: "Instagram always shrinks images wider than ~1080px. Export to the target size yourself for sharper results than letting the app resize. Vertical images use the most feed space and detail." },
          bestFor: { th: "ลง IG / Facebook ให้คมเต็มจอ", en: "Posting to IG / Facebook at full sharpness" },
          tags: ["1080px", "Sizing", "Instagram"],
          tips: [
            { th: "IG ฟีด: แนวตั้ง 1080×1350 (4:5) · จัตุรัส 1080×1080 · แนวนอน 1080×566", en: "IG feed: portrait 1080×1350 (4:5) · square 1080×1080 · landscape 1080×566." },
            { th: "IG สตอรี่/รีลส์: 1080×1920 (9:16) เว้นขอบบน-ล่าง ~250px ไว้ใส่ข้อความ", en: "IG Story/Reels: 1080×1920 (9:16) — keep ~250px clear top & bottom for text." },
            { th: "กริดโปรไฟล์ IG ใหม่เป็น 3:4 (1080×1440) เผื่อเฟรมไว้ไม่ให้โดนครอป", en: "New IG profile grid is 3:4 (1080×1440) — leave headroom so it isn't cropped." },
            { th: "Facebook: โพสต์ภาพ/ลิงก์ 1200×630 (1.91:1)", en: "Facebook: image/link posts 1200×630 (1.91:1)." }
          ]
        },
        {
          name: "JPEG Quality ~85%", nameTh: "คุณภาพ JPEG ราว 85%", level: 2,
          desc: { th: "ส่งออก JPEG ที่คุณภาพ 80–85% คือจุดที่ลงตัวที่สุด ไฟล์ 100% ใหญ่เกินไปจน Instagram บีบอัดหนักกว่า ผลลัพธ์มักแย่ลง ส่วน 85% โดนบีบเพิ่มน้อยมากจนแทบมองไม่เห็นความต่าง", en: "Export JPEG at 80–85% — the sweet spot. A 100% file is so large that Instagram compresses it harder, often looking worse. At 85% the extra compression is minimal and nearly invisible." },
          bestFor: { th: "ลดการสูญเสียคุณภาพจากการบีบอัดของแอป", en: "Minimizing quality loss from the app's compression" },
          tags: ["JPEG", "Quality", "Compression"],
          tips: [
            { th: "เลือก JPEG (แพลตฟอร์มแปลงเป็น JPEG/WebP อยู่แล้ว)", en: "Choose JPEG (platforms convert to JPEG/WebP anyway)." },
            { th: "อย่าดันคุณภาพ 100% เพราะไฟล์ใหญ่จะโดนบีบแรงขึ้น", en: "Don't push 100% — the bigger file gets compressed harder." }
          ]
        },
        {
          name: "Turn Off Output Sharpening", nameTh: "ปิดชาร์ปตอนส่งออก", level: 2,
          desc: { th: "Instagram ใส่ชาร์ปของตัวเองให้อัตโนมัติ ถ้าภาพที่ส่งออกใส่ output sharpening มาแล้ว ความคมจะซ้อนกันจนภาพดูแข็งกระด้างและเป็นดิจิทัล", en: "Instagram applies its own sharpening automatically. If your export already has output sharpening baked in, they stack — making the photo look harsh and digital." },
          bestFor: { th: "ภาพที่มีรายละเอียด เส้นผม ขนสัตว์ ใบไม้", en: "Detailed shots — hair, fur, foliage" },
          tags: ["Sharpening", "Detail"],
          tips: [
            { th: "ปิด output sharpening เมื่อส่งออกสำหรับโซเชียลโดยเฉพาะ", en: "Disable output sharpening specifically for social exports." },
            { th: "ถ้าภาพดูคมแข็งหลังโพสต์ ครั้งหน้าลดชาร์ปลง", en: "If posts look over-crunchy, dial sharpening back next time." }
          ]
        },
        {
          name: "File Format & Metadata", nameTh: "ฟอร์แมตไฟล์ & เมตาดาตา", level: 2,
          desc: { th: "Instagram รับ JPEG/PNG/HEIC แล้วแปลงเป็น WebP ตอนอัป การแปลงไฟล์ทุกครั้งคือการเสียคุณภาพ ส่ง JPEG sRGB ที่สะอาดไปเลยดีที่สุด และอย่าลบเมตาดาตาทั้งหมดเพราะจะลบ color profile ไปด้วย", en: "Instagram accepts JPEG/PNG/HEIC then converts to WebP on upload — each conversion costs quality, so hand it a clean sRGB JPEG. And don't strip all metadata: that removes the color profile too." },
          bestFor: { th: "คงคุณภาพและสีให้ตรงที่สุด", en: "Keeping quality and color intact" },
          tags: ["JPEG", "Metadata", "Workflow"],
          tips: [
            { th: "เลี่ยงการแปลงซ้ำ HEIC→JPEG→WebP ส่ง JPEG sRGB ตรงๆ", en: "Avoid repeat conversions (HEIC→JPEG→WebP) — send a JPEG directly." },
            { th: "เลือก 'camera info only' เพื่อเก็บโปรไฟล์สี/ค่ากล้องแต่ตัด GPS", en: "Use 'camera info only' to keep the color profile but remove GPS." },
            { th: "อัปจากเดสก์ท็อปมักได้คุณภาพดีกว่าแอปย่อภาพให้เอง", en: "Uploading from desktop often beats letting the app resize." }
          ]
        },
        {
          name: "Social Export Recipe", nameTh: "สูตรส่งออกลงโซเชียล", level: 1,
          desc: { th: "สูตรลัดที่ใช้ซ้ำได้ทุกครั้ง: sRGB · ด้านยาว 1080–1350px ตามอัตราส่วน · JPEG 85% · ปิดชาร์ป · คงโปรไฟล์สี แค่นี้ภาพก็คมสวยสีตรงบนฟีด", en: "A repeatable recipe: sRGB · long edge 1080–1350px for the ratio · JPEG 85% · sharpening off · keep the color profile. That's it — sharp, color-true photos in the feed." },
          bestFor: { th: "ตั้งเป็นพรีเซ็ตไว้ใช้ซ้ำ", en: "Save it as a reusable export preset" },
          tags: ["Recipe", "Preset", "Beginner"],
          tips: [
            { th: "บันทึกเป็นพรีเซ็ต export ใน Lightroom/แอปแก้ภาพไว้กดครั้งเดียว", en: "Save it as an export preset in Lightroom/your editor for one-click use." },
            { th: "เก็บไฟล์ต้นฉบับความละเอียดเต็มไว้เสมอ เผื่องานพิมพ์ภายหลัง", en: "Always keep the full-resolution master for future prints." }
          ]
        }
      ]
    }
  ],

  /* ===================== 7. CHEAT SHEET ===================== */
  cheatsheet: {
    id: "cheatsheet", emoji: "📋",
    title: { th: "สรุปฉบับย่อ (Cheat Sheet)", en: "Quick Cheat Sheet" },
    desc: { th: "ตารางสรุปการตั้งค่าเริ่มต้นสำหรับแต่ละสถานการณ์ — เปิดดูเร็วๆ ตอนออกถ่าย", en: "Starting settings for common situations — a quick reference in the field." },
    head: [
      { th: "สถานการณ์", en: "Situation" },
      { th: "รูรับแสง", en: "Aperture" },
      { th: "ชัตเตอร์", en: "Shutter" },
      { th: "ISO" , en: "ISO" },
      { th: "องค์ประกอบที่แนะนำ", en: "Composition" }
    ],
    rows: [
      [{ th: "บุคคลกลางแจ้ง", en: "Outdoor portrait" }, "f/2.0", "1/250s", "100", { th: "กฎสามส่วน", en: "Rule of thirds" }],
      [{ th: "ทิวทัศน์", en: "Landscape" }, "f/11", "1/125s", "100", { th: "เส้นนำสายตา + มิติ", en: "Leading lines + depth" }],
      [{ th: "กีฬา/แอ็คชัน", en: "Sports/action" }, "f/4", "1/1000s", "400-800", { th: "เส้นทแยง", en: "Diagonals" }],
      [{ th: "อาหาร", en: "Food" }, "f/4.5", "1/125s", "400", { th: "จำนวนคี่ + แสงข้าง", en: "Odds + side light" }],
      [{ th: "กลางคืน/ดาว", en: "Night/astro" }, "f/2.8", "20s", "1600-3200", { th: "ฉากหน้า + มิติ", en: "Foreground + depth" }],
      [{ th: "สตรีท", en: "Street" }, "f/8", "1/500s", "400", { th: "เฟรมมิ่ง + จังหวะ", en: "Framing + timing" }],
      [{ th: "มาโคร", en: "Macro" }, "f/11", "1/200s", "200", { th: "เต็มเฟรม", en: "Fill the frame" }],
      [{ th: "ในร่ม/งานเลี้ยง", en: "Indoor/event" }, "f/2.8", "1/160s", "1600", { th: "เฟรมมิ่ง + เด้งแฟลช", en: "Framing + bounce flash" }]
    ]
  },

  /* ===================== 8. EXPORT CHEAT SHEET ===================== */
  exportsheet: {
    id: "exportsheet", emoji: "📐",
    title: { th: "ตารางส่งออกภาพลงโซเชียล", en: "Social Export Size Reference" },
    desc: {
      th: "ขนาดและค่าที่เหมาะสมสำหรับแต่ละแพลตฟอร์ม — ทุกแพลตฟอร์ม: ใช้ sRGB · JPEG · ปิด output sharpening",
      en: "Optimal sizes and settings per platform — all platforms: sRGB · JPEG · output sharpening OFF"
    },
    head: [
      { th: "แพลตฟอร์ม", en: "Platform" },
      { th: "ขนาด (px)", en: "Size (px)" },
      { th: "อัตราส่วน", en: "Ratio" },
      { th: "คุณภาพ JPEG", en: "JPEG Quality" },
      { th: "หมายเหตุ", en: "Notes" }
    ],
    rows: [
      [{ th: "IG ฟีด — แนวตั้ง", en: "IG Feed — Portrait" }, "1080 × 1350", "4:5", "80–85%", { th: "พื้นที่ฟีดมากที่สุด แนะนำสุด", en: "Max feed real estate — recommended" }],
      [{ th: "IG ฟีด — จัตุรัส", en: "IG Feed — Square" }, "1080 × 1080", "1:1", "80–85%", { th: "รูปแบบคลาสสิก", en: "Classic format" }],
      [{ th: "IG ฟีด — แนวนอน", en: "IG Feed — Landscape" }, "1080 × 566", "1.91:1", "80–85%", { th: "พื้นที่ฟีดน้อยที่สุด", en: "Least feed space" }],
      [{ th: "IG โปรไฟล์ กริด (thumbnail)", en: "IG Profile Grid (thumbnail)" }, "1080 × 1440", "3:4", "80–85%", { th: "กริดใหม่ปี 2025 — เผื่อเฟรมไม่ให้โดนครอป", en: "2025 new grid — frame to avoid thumbnail crop" }],
      [{ th: "IG สตอรี่ / รีลส์", en: "IG Story / Reels" }, "1080 × 1920", "9:16", "80–85%", { th: "เว้นขอบบน-ล่าง ~250px สำหรับข้อความ UI", en: "Keep ~250px clear top & bottom for UI text" }],
      [{ th: "Facebook โพสต์ / ลิงก์พรีวิว", en: "Facebook Post / Link Preview" }, "1200 × 630", "1.91:1", "80–85%", { th: "ใช้ได้ทั้งโพสต์รูปและ link card", en: "Works for both image posts and link cards" }]
    ]
  }
};
