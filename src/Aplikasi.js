// FILE SAYA
import NavigasiBar from "./components/NavigasiBar";
import Unggulan from "./components/Unggulan";
import Pengiriman from "./components/Pengiriman";
import Teratas from "./components/Teratas";

function Aplikasi() {
  return (
    <div className="Aplikasi">
      <NavigasiBar />
      <Unggulan />
      <Pengiriman />
      <Teratas />
    </div>
  );
}

export default Aplikasi;
