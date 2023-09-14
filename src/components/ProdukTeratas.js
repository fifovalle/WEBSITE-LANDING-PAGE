// FILE REACT
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// FILE SAYA
import { DaftarTeratas } from "../utils/Data";

const Teratas = () => {
  const [perHalaman, aturPerHalaman] = useState(1);
  useEffect(() => {
    function menanganiUkuran() {
      if (window.innerWidth >= 1024) {
        aturPerHalaman(4);
      } else if (window.innerWidth >= 768) {
        aturPerHalaman(2);
      } else {
        aturPerHalaman(1);
      }
    }

    menanganiUkuran();
    window.addEventListener("resize", menanganiUkuran);

    return () => {
      window.removeEventListener("resize", menanganiUkuran);
    };
  }, []);
  return (
    <>
      <h1 className="text-green-500 font-bold text-2xl text-center py-2">
        Produk Teratas
      </h1>
      <div className="lg:flex max-w-[1520px] mx-auto py-4 px-4">
        <Splide
          options={{
            perPage: perHalaman,
            gap: "0.5rem",
            drag: "free",
            arrows: false,
          }}
        >
          {DaftarTeratas.map((daftar) => {
            return (
              <SplideSlide key={daftar.id}>
                <div className="rounded-3xl relative hover:scale-105 ease-out duration-300">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 pt-4 font-bold text-2xl">
                      {daftar.nama}
                    </p>
                    <p className="px-2">{daftar.harga}</p>
                    <button className="border-dotted border-white text-white mx-2 absolute bottom-4  hover:scale-105 ease-out duration-300 cursor-pointer">
                      Masukan Ke Keranjang
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl"
                    src={daftar.foto}
                    alt={daftar.nama}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Teratas;
