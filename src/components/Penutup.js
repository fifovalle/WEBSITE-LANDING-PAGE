// FILE REACT
import React from "react";
// FILE SAYA
import { DaftarSosialMedia } from "../utils/Data";

const Penutup = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-4 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-green-500">DapurKu</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil unde
            harum temporibus! Ipsum excepturi dolores atque, modi sit cumque.
            Saepe laboriosam error vel inventore libero illum itaque sapiente
            odio rem!
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            {DaftarSosialMedia.map((sosmed) => (
              <div key={sosmed.id}>{sosmed.Icon}</div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Lokasi</h6>
            <ul>
              <li className="py-2 text-sm">Bandung</li>
              <li className="py-2 text-sm">Jakarta</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Pengembang</h6>
            <ul>
              <li className="py-2 text-sm">Naufal FIFA</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Kontak</h6>
            <ul>
              <li className="py-2 text-sm">Pa Heri Saputra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penutup;
