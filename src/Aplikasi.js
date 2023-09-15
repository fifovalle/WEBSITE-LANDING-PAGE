// FILE SAYA
import NavigasiBar from "./components/NavigasiBar";
import Unggulan from "./components/Unggulan";
import Pengiriman from "./components/Pengiriman";
import ProdukTeratas from "./components/ProdukTeratas";
import Sayuran from "./components/Sayuran";
import Sponsor from "./components/Sponsor";
import Buletin from "./components/Buletin";
import Penutup from "./components/Penutup";

function Aplikasi() {
  return (
    <div>
      <NavigasiBar />
      <Unggulan />
      <Pengiriman />
      <ProdukTeratas />
      <Sayuran />
      <Sponsor />
      <Buletin />
      <Penutup />
    </div>
  );
}

export default Aplikasi;
