// FILE REACT
import React from "react";

const Buletin = () => {
  return (
    <div className="max-w-[1520px] mx-auto text-black px-4">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="mt-12">
            Membutuhkan saran dari anda agar kami bisa lebih baik
          </h1>
          <p>Daftar untuk bergabung dengan kami serta membantu kami</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black shadow-lg"
              type="text"
              placeholder="Email Anda"
            />
            <button className="bg-green-500 text-white rounded-md font-medium w-[240px] h-[50px] ml-4 my-6 px-6 border-none duration-300 hover:bg-green-600">
              Beritahu Kami
            </button>
          </div>
          <p>
            Kami menjaga data anda secara aman, Baca{" "}
            <span className="text-green-500"> Kebijakan Privasi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buletin;
