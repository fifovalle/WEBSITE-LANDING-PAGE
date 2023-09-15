// FILE REACT
import React from "react";
// FILE SAYA
import FotoPengiriman from "../assets/img/aplikasi.png";

const Pengiriman = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-green-500 font-bold text-2xl text-center">
        Aplikasi DapurKu
      </h3>
      <div className="max-w-[1340px] w-full py-4 px-4 mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src={FotoPengiriman}
          alt="Foto Aplikasi Pengiriman"
        />
        <div className="flex flex-col justify-center">
          <p className="text-green-500 font-bold text-2xl">Unduh Aplikasinya</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Kenyamanan Tanpa Batas
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tenetur fugiat voluptatem, excepturi nostrum quaerat totam iste in?
            Iusto repellat voluptas quis iste nihil doloremque sequi
            perferendis, error, ipsum maxime ipsam nulla. Repellat iste,
            veritatis fugit harum mollitia, nemo reiciendis distinctio laborum
            ut delectus sit recusandae enim itaque obcaecati rem aspernatur
            commodi accusantium, ipsa inventore tempora et asperiores magni
            atque. Temporibus animi natus autem eum dolorum quo quos tempore.
            Hic ea eos aperiam amet dignissimos explicabo aut in accusamus rerum
            quae sequi, commodi cum facere id enim adipisci illo quo nemo. Odio
            voluptatem aliquid necessitatibus sunt rerum aperiam autem harum?
          </p>
          <button className="bg-green-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-green-600 duration-300">
            Mulai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengiriman;
