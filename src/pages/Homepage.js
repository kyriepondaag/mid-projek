import "../assets/style.css"
import Nav from "../molekul/Nav";
import Biodata from "../molekul/Biodata";
export default function Homepage() {
    return(
<div>
  <Nav/>
  <Biodata/>
  <div className="content">
    <table>
      <tbody><tr> 
          <td> Nama</td>
          <td>: CHRISTIAN SOLAFIDE HAERANI</td>
        </tr>
        <tr>
          <td> NIM</td>
          <td>: 105022010008</td>  
        </tr>
        <tr> 
          <td> Status</td>
          <td>: Mahasiswa</td>
        </tr>
        <tr> 
          <td> Tempat, Tanggal Lahir</td>
          <td>: Jakarta, 17 Januari 2002</td>
        </tr>
        <tr> 
          <td> Agama</td>
          <td>: Kristen</td>
        </tr>
        <tr> 
          <td> Jenis Kelamin</td>
          <td>: Laki-Laki</td>
        </tr>
        <tr> 
          <td> Alamat</td>
          <td>: Bitung Tengah</td>
        </tr>
        <tr> 
          <td> Hobby</td>
          <td>: Tenis Meja</td>
        </tr>
        <tr> 
          <td> Golongan Darah</td>
          <td>: A</td>
        </tr>
        <tr> 
          <td> Email</td>
          <td>: haeranic007@gmail.com</td>
        </tr>
        <tr> 
          <td> Fakultas/Jurusan</td>
          <td>: Fik/informatika</td>
        </tr>
        <tr className="hide">
          <td> Tempat, Tanggal Lahir</td>
          <td>: Menjabat sebagai MD di PT.Indomarco Prismatama</td>
        </tr>
      </tbody></table>
  </div>
  <div id="riwayatPendidikan">
    <h1>RIWAYAT PENDIDIKAN</h1>
  </div>
  <div className="content">
    <table>
      <tbody><tr>
          <td>2006-2007</td>
          <td>: Tk GMIM Nasaret Bitung</td>
        </tr>
        <tr>
          <td>2007-20013</td>
          <td>: SD Katolik 3 DonBosco Bitung</td>
        </tr>
        <tr>
          <td>20013-20016</td>
          <td>: SMP Kristen Bitung</td>
        </tr>
        <tr>
          <td>20016-20019</td>
          <td>: SMA Katolik DonBosco Bitung</td>
        </tr>
        <tr>
          <td>2020-sekarang</td>
          <td>: Perguruan Tinggi Universitas Klabat</td>
        </tr>
        <tr className="hide">
          <td> Tempat, Tanggal Lahir</td>
          <td>: Menjabat sebagai MD di PT.Indomarco Prismatama</td>
        </tr>
      </tbody></table>
  </div>
  <div id="riwayatPekerjaan">
    <h1>RIWAYAT PEKERJAAN</h1>
  </div>
  <div className="content">
    <table>
      <tbody><tr>
          <td>2019-2020</td>
          <td>: Menjabat sebagai MD di PT.Indomarco Prismatama</td>
        </tr>
        <tr className="hide">
          <td> Tempat, Tanggal Lahir</td>
          <td>: Menjabat sebagai MD di PT.Indomarco Prismatama</td>
        </tr>
      </tbody></table>
  </div>
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