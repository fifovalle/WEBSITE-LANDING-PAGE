// FILE REACT
import { BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import {
  FaGoogleWallet,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
// FILE SAYA
import Unggulan1 from "../assets/img/1.jpg";
import Unggulan2 from "../assets/img/2.jpg";
import Unggulan3 from "../assets/img/3.jpg";
import Bayam from "../assets/img/bayam.jpg";
import Cabe from "../assets/img/cabe.jpg";
import Selada from "../assets/img/selada.jpg";
import Jahe from "../assets/img/jahe.jpg";
import Tomat from "../assets/img/tomat.jpg";
import Kentang from "../assets/img/kentang.jpg";
import Brokoli from "../assets/img/brokoli.jpg";
import Wortel from "../assets/img/wortel.jpg";
import Terong from "../assets/img/terong.jpg";
import BawangMerah from "../assets/img/bawang-merah.jpg";
import KembangKol from "../assets/img/kembang-kol.jpg";
import BawangPutih from "../assets/img/bawang-putih.jpg";
import Logo1 from "../assets/img/logo1.jpg";
import Logo2 from "../assets/img/logo2.jpg";
import Logo3 from "../assets/img/logo3.jpg";
import Logo4 from "../assets/img/logo4.jpg";

export const DaftarNavigasiBar = [
  {
    id: 0,
    nama: "Akun Saya",
    ikon: (
      <BsPerson className="mr-4 text-white bg-black rounded-full" size={25} />
    ),
  },
  {
    id: 1,
    nama: "Pesanan Saya",
    ikon: (
      <TbTruckReturn
        className="mr-4 text-white bg-black rounded-full"
        size={25}
      />
    ),
  },
  {
    id: 2,
    nama: "Favorit Saya",
    ikon: (
      <MdOutlineFavorite
        className="mr-4 text-white bg-black rounded-full"
        size={25}
      />
    ),
  },
  {
    id: 3,
    nama: "Dompet Saya",
    ikon: (
      <FaGoogleWallet
        className="mr-4 text-white bg-black rounded-full"
        size={25}
      />
    ),
  },
  {
    id: 4,
    nama: "Bantuan",
    ikon: (
      <MdHelp className="mr-4 text-white bg-black rounded-full" size={25} />
    ),
  },
];

export const FotoUnggulan = [
  {
    id: 0,
    foto: Unggulan1,
  },
  {
    id: 1,
    foto: Unggulan2,
  },
  {
    id: 2,
    foto: Unggulan3,
  },
];

export const DaftarTeratas = [
  {
    id: 0,
    nama: "Bayam",
    harga: "Rp 1.500",
    foto: Bayam,
  },
  {
    id: 1,
    nama: "Cabe",
    harga: "Rp 500",
    foto: Cabe,
  },
  {
    id: 2,
    nama: "Selada",
    harga: "Rp 1.000",
    foto: Selada,
  },
  {
    id: 3,
    nama: "Jahe",
    harga: "Rp 500",
    foto: Jahe,
  },
  {
    id: 4,
    nama: "Tomat",
    harga: "Rp 2.000",
    foto: Tomat,
  },
  {
    id: 5,
    nama: "Ketang",
    harga: "Rp 1.000",
    foto: Kentang,
  },
];

export const DaftarTombol = [
  {
    id: 0,
    nama: "Semuanya",
  },
  {
    id: 1,
    nama: "Sayuran Daun",
  },
  {
    id: 2,
    nama: "Sayuran Akar",
  },
  {
    id: 3,
    nama: "Sayuran Buah",
  },
  {
    id: 4,
    nama: "Sayuran Berbunga",
  },
  {
    id: 5,
    nama: "Sayuran Umbi",
  },
];

export const DaftarSayuran = [
  {
    id: 0,
    nama: "Bayam",
    harga: "Rp 1.500",
    kategori: "Sayuran Daun",
    foto: Bayam,
  },
  {
    id: 1,
    nama: "Cabe",
    harga: "Rp 500",
    kategori: "Sayuran Buah",
    foto: Cabe,
  },
  {
    id: 2,
    nama: "Selada",
    harga: "Rp 1.000",
    kategori: "Sayuran Daun",
    foto: Selada,
  },
  {
    id: 3,
    nama: "Jahe",
    harga: "Rp 500",
    kategori: "Sayuran Umbi",
    foto: Jahe,
  },
  {
    id: 4,
    nama: "Tomat",
    harga: "Rp 2.000",
    kategori: "Sayuran Buah",
    foto: Tomat,
  },
  {
    id: 5,
    nama: "Ketang",
    harga: "Rp 1.000",
    kategori: "Sayuran Akar",
    foto: Kentang,
  },
  {
    id: 6,
    nama: "Brokoli",
    harga: "Rp 3.000",
    kategori: "Sayuran Berbunga",
    foto: Brokoli,
  },
  {
    id: 7,
    nama: "Wortel",
    harga: "Rp 2.000",
    kategori: "Sayuran Akar",
    foto: Wortel,
  },
  {
    id: 8,
    nama: "Bawang Merah",
    harga: "Rp 5.00",
    kategori: "Sayuran Akar",
    foto: BawangMerah,
  },
  {
    id: 9,
    nama: "Kembang Kol",
    harga: "Rp 5.000",
    kategori: "Sayuran Berbunga",
    foto: KembangKol,
  },
  {
    id: 10,
    nama: "Bawang Putih",
    harga: "Rp 5.00",
    kategori: "Sayuran Akar",
    foto: BawangPutih,
  },
  {
    id: 11,
    nama: "Terong",
    harga: "Rp 5.00",
    kategori: "Sayuran Buah",
    foto: Terong,
  },
];

export const DaftarSponsor = [
  {
    id: 0,
    nama: "Sponsor 1",
    Logo: Logo1,
  },
  {
    id: 1,
    nama: "Sponsor 2",
    Logo: Logo2,
  },
  {
    id: 2,
    nama: "Sponsor 3",
    Logo: Logo3,
  },
  {
    id: 3,
    nama: "Sponsor 4",
    Logo: Logo4,
  },
];

export const DaftarSosialMedia = [
  {
    id: 0,
    nama: "Facebook",
    Icon: (
      <FaFacebookSquare className="hover:scale-105 duration-300" size={30} />
    ),
  },
  {
    id: 1,
    nama: "Instagram",
    Icon: (
      <FaInstagramSquare className="hover:scale-105 duration-300" size={30} />
    ),
  },
  {
    id: 2,
    nama: "Twitter",
    Icon: (
      <FaTwitterSquare className="hover:scale-105 duration-300" size={30} />
    ),
  },
  {
    id: 3,
    nama: "Whatsapp",
    Icon: (
      <FaWhatsappSquare className="hover:scale-105 duration-300" size={30} />
    ),
  },
];
