// FILE REACT
import React from "react";
// FILE SAYA
import { DaftarSponsor } from "../utils/Data";

const Sponsor = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-4">
      <h1 className="text-green-500 font-bold text-2xl text-center py-2">
        Sponsor Kami
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 custom:grid-cols-2 gap-5 py-5 px-2">
        {DaftarSponsor.map((sponsor) => {
          return (
            <div
              key={sponsor.id}
              className="p-4 flex justify-center items-center hover:scale-105 duration-300"
            >
              <img
                className="object-cover rounded-xl w-40 h-40 cursor-pointer shadow-xl"
                src={sponsor.Logo}
                alt={sponsor.nama}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
