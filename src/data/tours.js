const tmiiMap = "https://www.google.com/maps?q=Taman%20Mini%20Indonesia%20Indah&output=embed";

export const tours = [
  {
    id: 1,
    name: "Anjungan Daerah",
    slug: "anjungan-daerah",
    location: "Kawasan Anjungan Daerah, TMII",
    srcMaps: tmiiMap,
    operationalHours: "08.00 - 16.00 WIB",
    category: {
      name: "Budaya Nusantara",
      slug: "budaya-nusantara"
    },
    image: {
      image: "tmii/tmii-anjungan.jpg",
      alt: "Deretan anjungan daerah dan rumah adat di TMII",
      caption: "Anjungan daerah dengan ragam rumah adat Nusantara"
    },
    gallery: [
      { image: "tmii/tmii-rumah-adat.jpg" },
      { image: "tmii/tmii-budaya.jpg" },
      { image: "tmii/tmii-danau-arsipel.jpg" },
    ],
    regency: {
      name: "Kawasan Budaya"
    },
    island: {
      name: "budaya"
    },
    facilities: ["Anjungan Provinsi", "Area Foto", "Toilet", "Akses Shuttle"],
    description: "Deretan rumah adat dan representasi budaya daerah Indonesia dalam satu kawasan.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Anjungan Daerah menampilkan rumah adat, arsitektur, pakaian, seni, dan cerita budaya dari berbagai provinsi Indonesia.</li><li><strong>Cocok untuk:</strong> Wisata edukasi, foto budaya, dan kunjungan keluarga atau sekolah.</li><li><strong>Tips:</strong> Mulai dari area yang paling dekat dengan pintu masuk pilihan Anda, lalu gunakan shuttle atau sepeda sewa agar eksplorasi lebih ringan.</li></ul>",
    topWisata: 1
  },
  {
    id: 2,
    name: "Danau Arsipel Indonesia",
    slug: "danau-arsipel-indonesia",
    location: "Danau Miniatur Kepulauan Indonesia, TMII",
    srcMaps: tmiiMap,
    operationalHours: "05.00 - 20.00 WIB",
    category: {
      name: "Ruang Terbuka",
      slug: "ruang-terbuka"
    },
    image: {
      image: "tmii/tmii-danau-arsipel.jpg",
      alt: "Danau Arsipel Indonesia di kawasan TMII",
      caption: "Danau Arsipel sebagai orientasi awal menjelajah TMII"
    },
    gallery: [
      { image: "tmii/tmii-hero.jpg" },
      { image: "tmii/tmii-skyview.jpg" },
      { image: "tmii/tmii-anjungan.jpg" },
    ],
    regency: {
      name: "Danau Arsipel"
    },
    island: {
      name: "ruang-terbuka"
    },
    facilities: ["Jalur Pejalan Kaki", "Area Duduk", "Spot Foto", "Shuttle Kawasan"],
    description: "Ikon lanskap TMII berupa danau dengan miniatur kepulauan Indonesia.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Danau Arsipel menghadirkan miniatur pulau-pulau Indonesia yang dapat dilihat dari tepi danau maupun dari wahana ketinggian.</li><li><strong>Cocok untuk:</strong> Jalan santai, foto panorama, dan orientasi awal sebelum menjelajahi area TMII lainnya.</li><li><strong>Tips:</strong> Datang pagi atau sore untuk cahaya yang lebih nyaman dan suasana yang lebih sejuk.</li></ul>",
    topWisata: 1
  },
  {
    id: 3,
    name: "Teater Keong Emas",
    slug: "teater-keong-emas",
    location: "Area Keong Emas, TMII",
    srcMaps: tmiiMap,
    operationalHours: "Mengikuti jadwal pertunjukan",
    category: {
      name: "Wahana Rekreasi",
      slug: "wahana-rekreasi"
    },
    image: {
      image: "tmii/tmii-keong-mas.jpg",
      alt: "Bangunan Teater Keong Emas di TMII",
      caption: "Teater Keong Emas sebagai ikon rekreasi dan spot foto"
    },
    gallery: [
      { image: "tmii/tmii-skyview.jpg" },
      { image: "tmii/tmii-istana-anak.jpg" },
      { image: "tmii/tmii-hero.jpg" },
    ],
    regency: {
      name: "Wahana Rekreasi"
    },
    island: {
      name: "rekreasi"
    },
    facilities: ["Loket Wahana", "Area Tunggu", "Toilet", "Akses Kendaraan Kawasan"],
    description: "Bangunan ikonik berbentuk keong emas untuk pengalaman hiburan dan foto landmark.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Keong Emas dikenal sebagai salah satu ikon visual TMII dengan bentuk bangunan yang mudah dikenali.</li><li><strong>Cocok untuk:</strong> Keluarga, pencinta arsitektur unik, dan pengunjung yang ingin mengabadikan landmark TMII.</li><li><strong>Tips:</strong> Cek jadwal pertunjukan sebelum datang karena jam layanan dapat berubah mengikuti agenda pengelola.</li></ul>",
    topWisata: 1
  },
  {
    id: 4,
    name: "Istana Anak-anak Indonesia",
    slug: "istana-anak-anak-indonesia",
    location: "Area Istana Anak-anak Indonesia, TMII",
    srcMaps: tmiiMap,
    operationalHours: "Area luar dapat dikunjungi mengikuti jam kawasan",
    category: {
      name: "Ikon Arsitektur",
      slug: "ikon-arsitektur"
    },
    image: {
      image: "tmii/tmii-istana-anak.jpg",
      alt: "Istana Anak-anak Indonesia di TMII",
      caption: "Istana Anak-anak Indonesia untuk foto keluarga"
    },
    gallery: [
      { image: "tmii/tmii-budaya.jpg" },
      { image: "tmii/tmii-keong-mas.jpg" },
      { image: "tmii/tmii-anjungan.jpg" },
    ],
    regency: {
      name: "Wahana Rekreasi"
    },
    island: {
      name: "rekreasi"
    },
    facilities: ["Area Foto", "Ruang Terbuka", "Toilet Terdekat", "Akses Shuttle"],
    description: "Bangunan bergaya istana yang menjadi spot foto keluarga dan anak-anak.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Fasad istana yang megah membuat area ini populer untuk foto keluarga dan dokumentasi perjalanan.</li><li><strong>Cocok untuk:</strong> Pengunjung bersama anak, sesi foto, dan rute santai setelah menjelajahi anjungan.</li><li><strong>Tips:</strong> Gunakan area luar sebagai spot foto utama dan tetap perhatikan pembaruan akses dari pengelola.</li></ul>",
    topWisata: 1
  },
  {
    id: 5,
    name: "Kereta Gantung TMII",
    slug: "kereta-gantung-tmii",
    location: "Stasiun Kereta Gantung, TMII",
    srcMaps: tmiiMap,
    operationalHours: "09.00 - 16.30 WIB pada hari kerja, lebih panjang saat akhir pekan",
    category: {
      name: "Wahana Rekreasi",
      slug: "wahana-rekreasi"
    },
    image: {
      image: "tmii/tmii-skyview.jpg",
      alt: "Pemandangan TMII dari kereta gantung",
      caption: "Pemandangan danau dan anjungan dari ketinggian"
    },
    gallery: [
      { image: "tmii/tmii-danau-arsipel.jpg" },
      { image: "tmii/tmii-hero.jpg" },
      { image: "tmii/tmii-anjungan.jpg" },
    ],
    regency: {
      name: "Wahana Rekreasi"
    },
    island: {
      name: "rekreasi"
    },
    facilities: ["Stasiun Wahana", "Loket Tiket", "Area Antre", "Pemandangan Kawasan"],
    description: "Wahana untuk melihat danau, anjungan, dan lanskap TMII dari ketinggian.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Kereta gantung memberi sudut pandang luas ke danau arsipel dan susunan area TMII.</li><li><strong>Cocok untuk:</strong> Pengunjung pertama kali, keluarga, dan wisatawan yang ingin melihat orientasi kawasan dengan cepat.</li><li><strong>Tips:</strong> Siapkan waktu antre pada akhir pekan dan cek harga tiket wahana sebelum berangkat.</li></ul>",
    topWisata: 1
  },
  {
    id: 6,
    name: "Museum Indonesia",
    slug: "museum-indonesia",
    location: "Kawasan Museum, TMII",
    srcMaps: tmiiMap,
    operationalHours: "08.00 - 17.00 WIB",
    category: {
      name: "Museum & Edukasi",
      slug: "museum-edukasi"
    },
    image: {
      image: "tmii/tmii-budaya.jpg",
      alt: "Area budaya dan edukasi di TMII",
      caption: "Ruang pamer budaya untuk mengenal keragaman Indonesia"
    },
    gallery: [
      { image: "tmii/tmii-rumah-adat.jpg" },
      { image: "tmii/tmii-anjungan.jpg" },
      { image: "tmii/tmii-istana-anak.jpg" },
    ],
    regency: {
      name: "Museum"
    },
    island: {
      name: "edukasi"
    },
    facilities: ["Ruang Pamer", "Area Edukasi", "Toilet", "Akses Pejalan Kaki"],
    description: "Ruang pamer budaya Indonesia untuk memahami ragam identitas Nusantara.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Museum Indonesia menjadi tempat yang tepat untuk membaca konteks budaya sebelum atau sesudah melihat anjungan daerah.</li><li><strong>Cocok untuk:</strong> Wisata edukasi, riset ringan, dan pengunjung yang ingin memahami keragaman budaya secara lebih tertata.</li><li><strong>Tips:</strong> Sisihkan waktu khusus agar kunjungan museum tidak terburu-buru.</li></ul>",
    topWisata: 1
  },
  {
    id: 7,
    name: "Taman Burung Jagat Satwa Nusantara",
    slug: "taman-burung-jagat-satwa-nusantara",
    location: "Jagat Satwa Nusantara, TMII",
    srcMaps: tmiiMap,
    operationalHours: "09.00 - 17.00 WIB",
    category: {
      name: "Alam & Satwa",
      slug: "alam-satwa"
    },
    image: {
      image: "tmii/tmii-rumah-adat.jpg",
      alt: "Rumah adat dan area edukasi satwa di TMII",
      caption: "Area edukasi keluarga dengan suasana budaya Nusantara"
    },
    gallery: [
      { image: "tmii/tmii-hero.jpg" },
      { image: "tmii/tmii-danau-arsipel.jpg" },
      { image: "tmii/tmii-budaya.jpg" },
    ],
    regency: {
      name: "Jagat Satwa"
    },
    island: {
      name: "edukasi"
    },
    facilities: ["Area Konservasi", "Jalur Pengunjung", "Edukasi Satwa", "Rest Area"],
    description: "Area satwa dan edukasi konservasi yang cocok untuk keluarga dan pelajar.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Taman Burung Jagat Satwa Nusantara memperkenalkan keragaman burung Indonesia dalam area edukasi dan konservasi.</li><li><strong>Cocok untuk:</strong> Keluarga, anak-anak, pelajar, dan pengunjung yang menyukai pengalaman alam.</li><li><strong>Tips:</strong> Ikuti arahan petugas dan hindari memberi makan satwa tanpa izin.</li></ul>",
    topWisata: 1
  },
  {
    id: 8,
    name: "Green Zone TMII",
    slug: "green-zone-tmii",
    location: "Ruang Terbuka Hijau TMII",
    srcMaps: tmiiMap,
    operationalHours: "05.00 - 20.00 WIB",
    category: {
      name: "Ruang Terbuka",
      slug: "ruang-terbuka"
    },
    image: {
      image: "tmii/tmii-hero.jpg",
      alt: "Ruang terbuka hijau di Taman Mini Indonesia Indah",
      caption: "Ruang hijau TMII untuk berjalan santai dan beristirahat"
    },
    gallery: [
      { image: "tmii/tmii-danau-arsipel.jpg" },
      { image: "tmii/tmii-budaya.jpg" },
      { image: "tmii/tmii-skyview.jpg" },
    ],
    regency: {
      name: "Ruang Terbuka"
    },
    island: {
      name: "ruang-terbuka"
    },
    facilities: ["Area Jalan Santai", "Ruang Hijau", "Transportasi Kawasan", "Tempat Duduk"],
    description: "Ruang hijau untuk berjalan santai, bersepeda, dan menikmati wajah baru TMII.",
    fullDescription: "<ul><li><strong>Daya tarik:</strong> Green Zone menghadirkan suasana TMII yang lebih tertata, hijau, dan nyaman untuk perjalanan santai.</li><li><strong>Cocok untuk:</strong> Jalan pagi, rekreasi ringan, fotografi, dan jeda di antara kunjungan wahana.</li><li><strong>Tips:</strong> Gunakan alas kaki nyaman karena eksplorasi TMII melibatkan banyak berjalan kaki.</li></ul>",
    topWisata: 1
  }
]
