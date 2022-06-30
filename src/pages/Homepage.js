import "../assets/style.css"
import Nav from "../molekul/Nav";
import Biodata from "../molekul/Biodata";
import BiodataContent from "../molekul/BiodataContent";
import RiwayatPendidikan from "../molekul/RiwayatPendidikan";
import RiwayatPendidikanContent from "../molekul/RiwayatPendidikanContent";
import RiwayatPekerjaan from "../molekul/RiwayatPekerjaan";
import RiwayatPekerjaanContent from "../molekul/RiwayatPekerjaanContent";
import Footer from "../molekul/Footer";
import Contact from "../molekul/Contact";
export default function Homepage() {
    return(
<div>
  <Nav/>
  <Biodata/>
  <BiodataContent/>
  <RiwayatPendidikan/>
  <RiwayatPendidikanContent/>
  <RiwayatPekerjaan/>
  <RiwayatPekerjaanContent/>
  <Contact/>
  <Footer/>
</div>
    )
}