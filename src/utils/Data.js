// FILE REACT
import { BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
// FILE SAYA
import Unggulan1 from "../assets/img/1.jpg";
import Unggulan2 from "../assets/img/2.jpg";
import Unggulan3 from "../assets/img/3.jpg";

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
