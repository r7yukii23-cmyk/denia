# 🌸 Denia Base – WhatsApp Bot

<p align="center">
  <img src="https://upld.zone.id/uploads/4xiq6f1iq/1001629573.webp" width="320"/>
</p>

<p align="center">
  <b>“Kelihatannya manis… tapi performanya serius ya ✨”</b>
</p>

---

## ✨ Tentang

Denia Base adalah base bot WhatsApp modern berbasis **Multi Device (MD)** yang mendukung sistem **pairing code**.

Dirancang untuk kamu yang ingin:
- Setup cepat tanpa ribet QR
- Bot yang stabil untuk jangka panjang
- Struktur yang mudah dipahami dan dikembangkan

Base ini dibuat sederhana di luar, tapi tetap kuat di dalam.

---

## 🌷 Kenapa Denia Base?

Karena kamu gak butuh base yang terlalu rumit untuk mulai.

Yang kamu butuhkan itu:
- Jalan dulu
- Stabil
- Mudah diubah

Dan Denia Base dibuat dengan prinsip itu.

---

## 🚀 Fitur Utama

- 📱 Multi Device (MD)
- 🔑 Login via Pairing Code (tanpa QR)
- ⚡ Ringan & cepat
- 🧩 Struktur modular
- 📦 Clean & rapi
- 🤖 Support banyak command
- 🌐 Bisa integrasi API
- 🔒 Lebih stabil dari versi lama

---

## 📁 Struktur Project

```bash
.
├── case/
├── lib/
├── src/
├── database/
├── config.js
├── index.js
└── package.json
```

---

## ⚙️ Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/r7yukii23-cmyk/denia-base.git
cd denia-base
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Bot
```bash
node index.js
```

---

## 🔑 Login (Pairing Code)

Perhatiin baik-baik ya… jangan asal skip 😌

1. Jalankan bot
2. Masukkan nomor WhatsApp (format: 628xxx)
3. Bot akan menampilkan **kode pairing**
4. Buka WhatsApp kamu
5. Masuk ke **Perangkat Tertaut (Linked Devices)**
6. Pilih **Tautkan dengan kode**
7. Masukkan kode tersebut
8. Selesai, bot langsung aktif ✨

---

## 🛠️ Konfigurasi

Edit file `config.js`:

```js
global.owner = "628xxxx"
global.botnumber = "628xxxx"
global.botname = "Denia Base"
global.packname = "Denia"
global.author = "Denia"
```

Kalau config salah… jangan heran kalau botnya ikut error 😗

---

## 📌 Menambahkan Command

Masuk ke folder `case/`

Contoh:

```js
case 'ping': {
  m.reply('Pong 🏓')
}
break
```

Mau nambah fitur lain?  
Silakan. Base ini memang dibuat untuk dikembangkan.

---

## 🌍 Hosting

Denia Base bisa dijalankan di:

- VPS
- Pterodactyl Panel
- Termux
- Local PC / Laptop

---

## ⚠️ Catatan Penting

Ini penting. Jangan di-skip.

- Gunakan nomor cadangan
- Jangan spam fitur
- Jangan abuse API
- Gunakan dengan bijak
- Tidak ada sistem yang 100% anti banned

---

## 💬 Sedikit Pesan

Kalau bot kamu gak jalan…

Coba cek:
- Config
- Module
- Koneksi

Kadang bukan botnya yang salah 😌

---

## ❤️ Credits

- Baileys
- Creator Base {Yue only}

---

## 📞 Support

- WhatsApp: 6285726176199
- Telegram: @nesiadev

---

## 🎐 Saluran Denia MD
- https://whatsapp.com/channel/0029Vb7sH6V11ulFksvujt3I

---

## 📝 License

Free to use, edit, dan recode.  
Tapi tetap hargai creator, jangan hapus credit.

---

<p align="center">
  <b>“Aku cuma base… tapi bisa jadi sesuatu yang besar kalau kamu serius ✨”</b>
</p>