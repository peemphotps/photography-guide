# 📷 Photography Guide — คู่มือถ่ายภาพให้สวย

เว็บ **static (HTML/CSS/JS ล้วน)** รวมความรู้การถ่ายภาพแบบอ่านง่าย — การจัดองค์ประกอบ (composition),
การจัดแสง, แนวการถ่ายภาพ, การตั้งค่ากล้อง และเทคนิคมือโปร พร้อมภาพประกอบ (SVG) และคำแนะนำว่าแต่ละแบบ
เหมาะกับการถ่ายอะไร · รองรับสองภาษา **ไทย / อังกฤษ** (กดปุ่ม TH/EN มุมขวาบน)

ไม่มี server · ไม่ต้อง build · ไม่ต้องใช้ API key — deploy ขึ้น GitHub Pages ได้เลย

## เนื้อหา
1. 🎯 **Composition** — กฎสามส่วน, สัดส่วนทอง, เส้นนำสายตา, เฟรมมิ่ง, สมมาตร, สามเหลี่ยม, เส้นทแยง, พื้นที่ว่าง ฯลฯ (12 แบบ) — **มีรูปจริงพร้อมกริดซ้อนทับ** แสดงวิธีใช้
2. 💡 **Lighting** — golden/blue hour, แสงนุ่ม/แข็ง, ย้อนแสง, แสงข้าง, Rembrandt, แสงหน้าต่าง
3. 📸 **Genres** — portrait, landscape, street, macro, food, architecture, wildlife, night, product, event
4. ⚙️ **Camera Settings** — Exposure Triangle (รูรับแสง / ชัตเตอร์ / ISO) พร้อมตารางค่าแนะนำ
5. 🎓 **Pro Tips** — focal length, RAW vs JPEG, white balance, focus modes, เช็กลิสต์, ข้อผิดพลาดที่พบบ่อย
6. 🎛️ **Filters** — UV/protection, CPL (โพลาไรซ์), ND, Variable ND, GND, Black Mist, ฟิลเตอร์สี พร้อมวิธีใช้
7. 📤 **Export & Sharing** — ส่งออกภาพลงโซเชียลให้คมสวยสีตรง: sRGB, ขนาด IG/Facebook ปี 2025, JPEG 85%, ปิดชาร์ป, ฟอร์แมต/เมตาดาตา
8. 📋 **Cheat Sheet** — ตารางสรุปค่าตั้งต้นแต่ละสถานการณ์

## รูปตัวอย่าง
การ์ดแต่ละใบใช้ **รูปถ่ายจริง** โหลดจาก [LoremFlickr](https://loremflickr.com) ตามคีย์เวิร์ด (ฟรี ไม่ต้องมี API key)
ถ้าโหลดไม่ได้จะ fallback ไป [Picsum](https://picsum.photos) อัตโนมัติ → **ต้องต่ออินเทอร์เน็ตตอนเปิดเว็บ**

อยากเปลี่ยนคีย์เวิร์ดรูป หรือใช้รูปของตัวเอง แก้ที่ตาราง `PHOTOS` ใน [`js/render.js`](js/render.js)
(เปลี่ยน URL เป็นไฟล์ในโฟลเดอร์ `assets/` ได้ถ้าอยากให้เว็บทำงานออฟไลน์เต็มรูปแบบ)

## เปิดดูในเครื่อง
เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้ตรงๆ หรือรันเซิร์ฟเวอร์เล็กๆ:
```bash
cd photography-guide
python3 -m http.server 8000
# เปิด http://localhost:8000
```

## Deploy ขึ้น GitHub Pages
1. สร้าง repo แล้ว push โฟลเดอร์นี้ขึ้นไป (ให้ `index.html` อยู่ราก repo หรือในโฟลเดอร์ `docs/`)
   ```bash
   git init && git add . && git commit -m "Photography guide site"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. ไปที่ **Settings → Pages** ของ repo
3. เลือก **Source: Deploy from a branch** → Branch `main` → folder `/ (root)` (หรือ `/docs`) → Save
4. รอสักครู่ เว็บจะออนไลน์ที่ `https://<user>.github.io/<repo>/`

## โครงสร้างไฟล์
```
photography-guide/
├── index.html       # โครงหน้า + nav
├── css/style.css    # ธีม responsive
├── js/data.js       # เนื้อหาทั้งหมด (แก้/เพิ่มเทคนิคที่นี่)
├── js/render.js     # สร้างการ์ด + วาด SVG diagram
└── js/main.js       # nav, สลับภาษา, scroll-spy, ค้นหา
```

## เพิ่ม/แก้เนื้อหา
แก้ที่ `js/data.js` เท่านั้น — เพิ่ม object ใน `items[]` ของแต่ละ section
ข้อความใส่เป็น `{ th: "ไทย", en: "English" }` ระบบจะสลับภาษาให้อัตโนมัติ
