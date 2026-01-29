/**
 * ==============================
 * CAR & PRODUCT TYPES
 * ==============================
 */

/**
 * Varian mobil beserta harga resminya
 */
export interface CarVariant {
  /** Nama varian (contoh: GX MT, GL AT) */
  name: string;

  /** Harga On The Road (IDR) */
  price: number;
}

/**
 * Opsi warna mobil
 */
export interface CarColor {
  /** Nama warna (contoh: Pearl White, Black Metallic) */
  name: string;

  /** Kode warna (hex tunggal atau gradasi) */
  hex: string | string[];

  /** Gambar mobil sesuai warna */
  imageUrl: string;
}

/**
 * Data utama mobil
 */
export interface Car {
  /** ID unik mobil */
  id: string;

  /** Nama mobil */
  name: string;

  /** Gambar utama mobil */
  image: string;

  /** Tagline pemasaran */
  tagline: string;

  /** Deskripsi lengkap mobil */
  description: string;

  /** Daftar fitur unggulan */
  features: {
    /** Icon fitur */
    iconUrl: string;

    /** Deskripsi fitur */
    text: string;
  }[];

  /** Pilihan warna mobil */
  colors: CarColor[];

  /** Daftar varian dan harga */
  variants: CarVariant[];
}

/**
 * ==============================
 * TESTIMONIAL
 * ==============================
 */

/**
 * Testimoni pelanggan
 */
export interface Testimonial {
  /** Nama pelanggan */
  name: string;

  /** Mobil yang dibeli */
  car: string;

  /** Foto pelanggan */
  imageUrl: string;
}

/**
 * ==============================
 * ARTICLE / BLOG
 * ==============================
 */

/**
 * Artikel edukasi & SEO
 */
export interface Article {
  /** ID artikel */
  id: number;

  /** Judul artikel */
  title: string;

  /** Ringkasan artikel (preview) */
  excerpt: string;

  /** Isi artikel lengkap */
  content: string;

  /** Gambar utama artikel */
  imageUrl: string;

  /** Penulis artikel */
  author: string;

  /** Tanggal publikasi */
  publishDate: string;
}

/**
 * ==============================
 * TEST DRIVE FORM
 * ==============================
 */

/**
 * Data pengajuan test drive
 */
export interface TestDriveData {
  /** Nama calon pembeli */
  name: string;

  /** Mobil yang diminati */
  car: string;

  /** Alamat calon pembeli */
  address: string;

  /** Tanggal test drive */
  date: string;

  /** Waktu test drive */
  time: string;
}
