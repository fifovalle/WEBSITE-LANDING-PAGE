// FILE REACT
import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
// FILE SAYA
import { DaftarSayuran } from "../utils/Data";
import { DaftarTombol } from "../utils/Data";

const Sayuran = () => {
  const [tombolAktif, aturTombolAktif] = useState(null);
  const [sayuran, aturSayuran] = useState(DaftarSayuran);
  const saring = (kategori) => {
    const saringSayuran =
      kategori === "Semuanya"
        ? DaftarSayuran
        : DaftarSayuran.filter((sayuran) => sayuran.kategori === kategori);
    aturSayuran(saringSayuran);
    aturTombolAktif(kategori);
  };
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-12">
      <h1 className="text-green-500 font-bold text-2xl text-center py-2">
        Sayuran Kami
      </h1>
      <div className="lg:flex md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 custom:grid custom:grid-cols-2 justify-center md:justify-center">
        {DaftarTombol.map((tombol) => (
          <button
            onClick={() => saring(tombol.nama)}
            key={tombol.id}
            className={`m-1 ${
              tombol.nama === tombolAktif
                ? "bg-white text-green-600 border-green-600"
                : "text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-green-600"
            }`}
          >
            {tombol.nama}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {sayuran.map((sayuran) => (
          <div
            key={sayuran.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              className="w-full h-[250px] object-cover rounded-lg"
              src={sayuran.foto}
              alt={sayuran.nama}
            />
            <div className="relative py-2 px-4">
              <div className="bg-green-500 h-[50px] w-[160px] rounded-full -mt-10 text-white py-4 px-2 border-8  absolute right-0 font-bold">
                <p className="absolute top-[4px] left-[50%] translate-x-[-50%]">
                  {sayuran.harga}
                </p>
              </div>
              <p className="font-bold">{sayuran.nama}</p>
            </div>
            <div className="pl-2 py-4 -mt-5">
              <p className="relative text-indigo-500">
                Lihat Selengkapnya
                <ArrowSmRightIcon className="absolute w-5 left-[45%] top-[10%] bottom-5" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sayuran;
