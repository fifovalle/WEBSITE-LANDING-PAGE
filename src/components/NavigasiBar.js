// FILE REACT
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
// FILE SAYA
import { DaftarNavigasiBar } from "../utils/Data";

const NavigasiBar = () => {
  const [buka, aturBuka] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center font-semibold">
        <div onClick={() => aturBuka(!buka)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Dapur<span className="font-bold">Ku</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className=" bg-green-500 text-white rounded-full p-2 font-bold">
            Gratis
          </p>
          <p className="p-2 font-bold">Ongkir</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Cari Sayuran"
        />
      </div>
      <button className="bg-green-500 text-white font-bold hidden md:flex items-center py-2 rounded-full hover:bg-green-600 duration-300">
        <BsFillCartFill className="mr-1" size={20} /> Keranjang
      </button>
      {buka ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          buka
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 font-semibold"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 font-semibold"
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => aturBuka(!buka)}
          size={25}
        />
        <h2 className="text-2xl p-4">
          Dapur<span className="text-green-500 font-bold">Ku</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            {DaftarNavigasiBar.map((daftar) => {
              return (
                <li
                  key={daftar.id}
                  className="text-xl py-4 flex hover:text-green-500"
                >
                  {daftar.ikon}
                  {daftar.nama}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigasiBar;
