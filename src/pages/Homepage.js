import "../assets/style.css"
import Nav from "../molekul/Nav";
import Biodata from "../molekul/Biodata";
import BiodataContent from "../molekul/BiodataContent";
import RiwayatPendidikan from "../molekul/RiwayatPendidikan";
import RiwayatPendidikanContent from "../molekul/RiwayatPendidikanContent";
import RiwayatPekerjaan from "../molekul/RiwayatPekerjaan";
import RiwayatPekerjaanContent from "../molekul/RiwayatPekerjaanContent";
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
  <div id="contact">
    <h1>CONTACT PERSON</h1>
    <div className="contact">
      <label htmlFor="form">ingin menghubungi Saya?:</label>
      <textarea placeholder="Ketik disini untuk mengirim pesan" defaultValue={""} />
      <button>Kirim</button>
    </div>
  </div>
  <footer>
    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="wa" /><a href="https://wa.me/qr/CEV3LRSEW5USE1">: 0895385133627</a>
    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="ig" /><a href="https://www.instagram.com/christian_haerani/">: christian_haerani</a>
    <img className="perbesar" src="https://www.bambucoworking.com/wp-content/uploads/2017/04/facebook-logo-png-2335.png" alt="fb" /> <a href="https://m.facebook.com/christian.haerani">: Christian Haerani</a> 
  </footer>
</div>
    )
}