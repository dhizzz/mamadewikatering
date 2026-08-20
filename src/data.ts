export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/0dc31afa-9b93-4ac9-9786-0bb206ba2fd4/_result.png",
  nasiBox: "https://image.qwenlm.ai/generated-images/b30ee3eb-e305-418d-90cb-4bfdc8f8f152/_result.png",
  prasmanan: "https://image.qwenlm.ai/generated-images/838309eb-040d-4cd2-b971-c8599fc98b0e/_result.png",
  snack: "https://image.qwenlm.ai/generated-images/a55ba7ef-00da-4b46-ac52-dcaea7029b7c/_result.png",
  tumpeng: "https://image.qwenlm.ai/generated-images/197d6afc-d85d-4401-9647-1f9f3ac97f92/_result.png",
  wedding: "https://image.qwenlm.ai/generated-images/5998c4d0-53df-47c1-90e1-7404892cb582/_result.png",
  office: "https://image.qwenlm.ai/generated-images/f186a035-ce0d-4597-a9ab-9efa04c8139d/_result.png",
  dessert: "https://image.qwenlm.ai/generated-images/c2818804-e2e9-4f28-a899-469c56797fb7/_result.png",
};

export const NAV_ITEMS = [
  { id: "beranda", label: "Beranda" },
  { id: "menu", label: "Menu" },
  { id: "paket", label: "Paket" },
  { id: "testimoni", label: "Testimoni" },
  { id: "kontak", label: "Kontak" },
];

export const TICKER_ITEMS = [
  "Nasi Box",
  "Prasmanan",
  "Tumpeng Mini",
  "Snack Box",
  "Coffee Break",
  "Nasi Uduk",
  "Menu Harian Kantor",
  "Arisan & Pengajian",
  "Jumat Berkah",
];

export type Reason = {
  icon: "leaf" | "tag" | "clock" | "chef";
  title: string;
  desc: string;
  tint: string;
  iconBox: string;
};

export const REASONS: Reason[] = [
  {
    icon: "leaf",
    title: "Bahan Segar Berkualitas",
    desc: "Belanja sayur, daging, dan bumbu segar dari pasar setiap subuh. Tidak pakai bahan sisa kemarin.",
    tint: "bg-brand-50",
    iconBox: "bg-brand-500 text-cream-50",
  },
  {
    icon: "tag",
    title: "Harga Terjangkau",
    desc: "Mulai Rp 9.000 per porsi. Ada paket hemat untuk acara kecil sampai ribuan porsi sekalipun.",
    tint: "bg-sunny-100",
    iconBox: "bg-sunny-400 text-cocoa-900",
  },
  {
    icon: "clock",
    title: "Tepat Waktu",
    desc: "Tim antar sendiri yang hafal jalan. Katering selalu datang sebelum tamu pertama tiba.",
    tint: "bg-leaf-100",
    iconBox: "bg-leaf-500 text-cream-50",
  },
  {
    icon: "chef",
    title: "Bisa Custom Menu",
    desc: "Mau menu khas daerah, vegetarian, atau request khusus? Tinggal bilang saja ke Mama Dewi.",
    tint: "bg-chili-100",
    iconBox: "bg-chili-500 text-cream-50",
  },
];

export type Category = "Lauk Pauk" | "Sayur & Tumis" | "Nasi & Pendamping" | "Minuman & Dessert";

export type Dish = {
  name: string;
  desc: string;
  price: number;
  cat: Category;
  best?: boolean;
};

export const MENU_CATS: Category[] = ["Lauk Pauk", "Sayur & Tumis", "Nasi & Pendamping", "Minuman & Dessert"];

export const DISHES: Dish[] = [
  { name: "Ayam Bakar Madu", desc: "Dimarinasi 12 jam, dibakar di atas arang", price: 12000, cat: "Lauk Pauk", best: true },
  { name: "Rendang Sapi", desc: "Empuk, bumbu pekat khas Minang", price: 15000, cat: "Lauk Pauk", best: true },
  { name: "Sate Ayam Madura", desc: "10 tusuk + lontong & bumbu kacang", price: 14000, cat: "Lauk Pauk" },
  { name: "Gurame Asam Manis", desc: "Fillet crispy, saus asam manis segar", price: 18000, cat: "Lauk Pauk" },
  { name: "Tumis Brokoli Jamur", desc: "Renyah, bawang putih & saus tiram", price: 7000, cat: "Sayur & Tumis" },
  { name: "Sayur Lodeh Rumahan", desc: "Santan gurih, labu siam & kacang panjang", price: 6000, cat: "Sayur & Tumis" },
  { name: "Capcay Bakso", desc: "Sayur segar + bakso sapi kenyal", price: 8000, cat: "Sayur & Tumis" },
  { name: "Nasi Kuning Komplit", desc: "Lauk pendamping, telur & kerupuk", price: 9000, cat: "Nasi & Pendamping" },
  { name: "Nasi Uduk Betawi", desc: "Semur, bihun, telur balado", price: 9000, cat: "Nasi & Pendamping" },
  { name: "Es Buah Segar", desc: "Melon, semangka, nata de coco", price: 6000, cat: "Minuman & Dessert" },
  { name: "Puding Karamel", desc: "Lembut, saus karamel manis-pahit", price: 5000, cat: "Minuman & Dessert" },
  { name: "Jus Jeruk Peras", desc: "Jeruk peras asli, tanpa pemanis buatan", price: 6000, cat: "Minuman & Dessert" },
];

export type Paket = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  img: string;
  badge?: string;
  items: string[];
  minOrder: string;
};

export const PACKAGES: Paket[] = [
  {
    name: "Paket Nasi Box",
    tagline: "Praktis untuk rapat, Jumat Berkah & bagi-bagi",
    price: "18.000",
    unit: "/porsi",
    img: IMAGES.nasiBox,
    badge: "Paling Laris",
    items: [
      "Nasi putih hangat + lauk utama pilihan",
      "Ayam bakar / rendang / telur balado",
      "Tumis sayur + sambal + kerupuk",
      "Buah + air mineral gelas",
    ],
    minOrder: "Min. order 20 porsi",
  },
  {
    name: "Paket Prasmanan",
    tagline: "Buffet lengkap dengan peralatan & pramusaji",
    price: "32.000",
    unit: "/orang",
    img: IMAGES.prasmanan,
    badge: "Untuk Acara Besar",
    items: [
      "Nasi putih / nasi goreng + 2 lauk utama",
      "2 macam sayur + kerupuk & sambal",
      "Buah + puding + air mineral",
      "Peralatan makan & 2 pramusaji",
    ],
    minOrder: "Min. order 50 porsi",
  },
  {
    name: "Paket Snack Box",
    tagline: "Camilan cantik untuk rapat & pengajian",
    price: "9.000",
    unit: "/kotak",
    img: IMAGES.snack,
    badge: "Favorit Rapat",
    items: [
      "3 kue tradisional (lemper, risol, dadar gulung)",
      "1 kue modern (pastry / bolu)",
      "Air mineral gelas",
      "Kemasan box cantik + tisu",
    ],
    minOrder: "Min. order 30 kotak",
  },
];

export type GalleryItem = {
  img: string;
  caption: string;
  tag: string;
  span: string;
};

export const GALLERY: GalleryItem[] = [
  { img: IMAGES.tumpeng, caption: "Tumpeng syukuran kantor PT Cahaya", tag: "Syukuran", span: "col-span-2 row-span-2" },
  { img: IMAGES.hero, caption: "Hidangan khas Dapur Berkah", tag: "Signature", span: "col-span-1 row-span-2" },
  { img: IMAGES.wedding, caption: "Prasmanan resepsi Rina & Dimas", tag: "Pernikahan", span: "col-span-1 row-span-1" },
  { img: IMAGES.office, caption: "120 nasi box gathering kantor", tag: "Kantor", span: "col-span-1 row-span-2" },
  { img: IMAGES.nasiBox, caption: "Nasi box program Jumat Berkah", tag: "Nasi Box", span: "col-span-2 row-span-1" },
  { img: IMAGES.dessert, caption: "Aneka dessert & puding", tag: "Dessert", span: "col-span-1 row-span-1" },
  { img: IMAGES.prasmanan, caption: "Buffet arisan & ulang tahun", tag: "Prasmanan", span: "col-span-2 row-span-1" },
  { img: IMAGES.snack, caption: "Snack box pengajian rutin", tag: "Snack Box", span: "col-span-2 row-span-1" },
];

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  color: string;
  rotate: string;
  note: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "RW",
    name: "Ibu Ratna Wijaya",
    role: "Ketua Arisan PKK Kemang",
    quote:
      "Nasi box-nya selalu jadi rebutan tiap arisan. Porsinya kenyang, lauknya royal, dan nggak pernah telat. Ibu-ibu sampai minta nomor Mama Dewi semua.",
    color: "bg-brand-400",
    rotate: "-rotate-2",
    note: "Langganan 2 tahun",
  },
  {
    initials: "AP",
    name: "Bapak Andi Prasetyo",
    role: "HRD PT Sinar Jaya",
    quote:
      "Sudah 2 tahun langganan untuk rapat dan gathering kantor. Adminnya fast response, menu bisa ganti-ganti tiap minggu, invoice rapi. Recommended banget.",
    color: "bg-leaf-500",
    rotate: "rotate-1 md:mt-8",
    note: "Order rutin mingguan",
  },
  {
    initials: "DR",
    name: "Dina & Rangga",
    role: "Klien Wedding",
    quote:
      "Prasmanan pernikahan kami 800 porsi dan semua tamu bilang makanannya enak. Rendangnya juara! Terima kasih Mama Dewi, hari besar kami jadi sempurna.",
    color: "bg-sunny-500",
    rotate: "-rotate-1 md:mt-3",
    note: "800 porsi",
  },
];

export type Step = {
  icon: "chat" | "utensils" | "wallet";
  title: string;
  desc: string;
  circle: string;
};

export const STEPS: Step[] = [
  {
    icon: "chat",
    title: "Chat WhatsApp",
    desc: "Klik tombol WhatsApp di website ini, kamu langsung terhubung ke admin kami yang ramah.",
    circle: "bg-brand-500 text-cream-50",
  },
  {
    icon: "utensils",
    title: "Diskusi Menu & Porsi",
    desc: "Ceritakan acaramu, tanggal, dan jumlah tamu. Kami bantu susun menu yang pas dengan budget.",
    circle: "bg-sunny-400 text-cocoa-900",
  },
  {
    icon: "wallet",
    title: "Bayar DP, Beres!",
    desc: "Cukup DP 50%, sisanya setelah acara. Katering meluncur tepat waktu ke lokasimu.",
    circle: "bg-wa-500 text-cream-50",
  },
];
