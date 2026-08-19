export const WA_NUMBER = "6285162987626";
export const WA_DISPLAY = "+62 851-6298-7626";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const MSG = {
  umum: "Halo, saya mau tanya-tanya soal paket katering",
  paket: (nama: string) => `Halo, saya mau pesan ${nama}`,
  custom: "Halo, saya mau diskusi paket katering custom untuk acara saya",
  menuLengkap: "Halo, boleh minta daftar menu lengkap Dapur Berkah Mama Dewi?",
};
