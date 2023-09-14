// FILE REACT
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// FILE SAYA
import { FotoUnggulan } from "../utils/Data";
import { RxDotFilled } from "react-icons/rx";

const Unggulan = () => {
  const [indeksSaatIni, aturIndeksSaatIni] = useState(0);
  const geserKeKiri = () => {
    const apakahIndeksSaatIni = indeksSaatIni === 0;
    const indeksBaru = apakahIndeksSaatIni
      ? FotoUnggulan.length - 1
      : indeksSaatIni - 1;
    aturIndeksSaatIni(indeksBaru);
  };
  const geserKeKanan = () => {
    const apakahIndeksSaatIni = indeksSaatIni === FotoUnggulan.length - 1;
    const indeksBaru = apakahIndeksSaatIni ? 0 : indeksSaatIni + 1;
    aturIndeksSaatIni(indeksBaru);
  };
  const klikGeser = (geserKeIndeks) => {
    aturIndeksSaatIni(geserKeIndeks);
  };
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative mx-auto group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${FotoUnggulan[indeksSaatIni].foto})` }}
      />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-500 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={geserKeKiri} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-500 text-white cursor-pointer">
        <BsChevronCompactRight onClick={geserKeKanan} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {FotoUnggulan.map((indeks) => (
          <div
            key={indeks.id}
            className="text-2xl cursor-pointer"
            onClick={() => klikGeser(indeks.id)}
          >
            <RxDotFilled
              className={indeksSaatIni === indeks.id ? "text-green-500" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unggulan;
