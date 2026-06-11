# Jelajah TMII

Website panduan wisata Taman Mini Indonesia Indah untuk proyek UAS Pemrograman Web. Aplikasi ini membantu pengunjung melihat destinasi, zona kunjungan, artikel blog, detail tempat wisata, galeri foto, dan informasi kontak dalam satu antarmuka yang responsif.

## Identitas Proyek

| Keterangan | Detail |
| --- | --- |
| Nama proyek | Jelajah TMII |
| Jenis proyek | Website wisata / travel guide |
| Mata kuliah | Pemrograman Web |
| Pengembang | Zahir Hadi Athallah |
| Framework | Vue 3 + Vite |

## Fitur Utama

- Beranda dengan hero carousel destinasi unggulan.
- Daftar destinasi TMII dengan pencarian, filter kategori, filter area, dan pagination.
- Detail destinasi berisi galeri foto, informasi singkat, fasilitas, jam operasional, lokasi, dan peta.
- Zona jelajah: budaya, rekreasi, edukasi, dan ruang terbuka.
- Blog wisata dengan pencarian, filter kategori, urutan waktu, detail artikel, dan daftar artikel lain dari penulis yang sama.
- Halaman author untuk melihat artikel berdasarkan penulis.
- Halaman kontak dengan form pengiriman pesan.
- Dark mode dan tampilan responsif untuk desktop maupun mobile.
- Aset gambar sudah disesuaikan dengan konten/caption artikel dan destinasi.

## Teknologi

- Vue 3
- Vue Router
- Vite
- Tailwind CSS
- PostCSS
- JavaScript

## Struktur Folder

```text
.
├── public/
│   ├── assets/
│   │   └── tmii/              # Gambar utama destinasi dan blog TMII
│   ├── logo.svg
│   └── not-found.gif
├── src/
│   ├── components/            # Komponen reusable
│   ├── data/                  # Data destinasi, kategori, blog, user, zona
│   ├── router/                # Konfigurasi route Vue Router
│   ├── views/                 # Halaman utama aplikasi
│   ├── css/                   # Entry CSS Tailwind
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Halaman Aplikasi

| Route | Deskripsi |
| --- | --- |
| `/` | Beranda |
| `/destinasi` | Daftar destinasi |
| `/destinasi/:slug` | Detail destinasi |
| `/destinasi/zona/:name` | Destinasi berdasarkan zona |
| `/post` | Daftar artikel blog |
| `/post/:slug` | Detail artikel blog |
| `/post/author/:username` | Artikel berdasarkan author |
| `/kontak` | Form kontak |

## Instalasi

Pastikan Node.js dan npm sudah terpasang.

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build untuk production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Konfigurasi Environment

Form kontak menggunakan endpoint SheetMonkey melalui environment variable berikut:

```env
VITE_SHEETMONKEY_URL=https://api.sheetmonkey.io/form/...
```

Jika variable ini belum diisi, tampilan website tetap berjalan, tetapi fitur submit form kontak tidak akan mengirim data ke spreadsheet.

## Data dan Aset

Data konten disimpan secara statis di folder `src/data`, sehingga aplikasi dapat berjalan tanpa backend. Aset gambar yang aktif berada di `public/assets/tmii`, sementara aset lama yang tidak digunakan sudah dibersihkan agar struktur proyek lebih rapi.

## Validasi

Perintah build sudah berhasil dijalankan:

```bash
npm run build
```

Hasil build dibuat oleh Vite di folder `dist/`.

## Catatan Pengembangan

- Gunakan komponen `PostCard.vue` untuk tampilan kartu artikel.
- Gunakan komponen `DestinationCard.vue` untuk tampilan kartu destinasi.
- Tambahkan data destinasi baru melalui `src/data/tours.js`.
- Tambahkan artikel baru melalui `src/data/posts.js`.
- Simpan gambar baru di `public/assets/tmii` atau folder aset khusus yang relevan, lalu pastikan path-nya direferensikan dari data.

## Lisensi

Proyek ini dibuat untuk kebutuhan UAS dan pembelajaran.
