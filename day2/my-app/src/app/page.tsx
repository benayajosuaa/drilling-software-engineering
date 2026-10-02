import Image from "next/image";

export default function Home() {
  return (
    // Section Company
    // DIV UTAMA
    <div className="bg-amber-100 p-10 h-screen w-screen flex gap-x-10 items-center justify-center">

        
        {/* DIV GAMBAR */}
        <div>
          <img src="/jenis-mobil/bens.webp" className="w-1000 h-auto" alt="gambar mobil mercedes" />
        </div>

        {/* DIV PESAN */}
        <div className="flex flex-col gap-y-10">
          {/* DIV 1 */}
          <div className="flex gap-y-10">
            <h1 className="text-3xl font-semibold">Mercedes-Benz C 180</h1>
          </div>
          {/* DIV 2 */}
          <div className="">
             <p className="text-xl">Mercedes-Benz C 180 adalah sedan mewah entry-level yang menawarkan keseimbangan sempurna antara prestise, kenyamanan, dan efisiensi bahan bakar khas pabrikan asal Jerman tersebut. Ditenagai oleh mesin berkapasitas lebih kecil yang dilengkapi turbocharger modern, mobil ini sangat ideal dan praktis untuk penggunaan harian di area perkotaan yang padat. Meskipun berada di posisi terbawah dalam keluarga C-Class, interiornya tetap menyuguhkan kemewahan tinggi dengan material berkualitas premium serta sistem hiburan yang canggih. Selain itu, pengendaraannya terasa sangat halus berkat dukungan transmisi otomatis responsif dan peredaman suspensi yang terkenal empuk. Keunggulan utamanya terletak pada biaya operasional serta pajak kendaraan yang lebih bersahabat dibandingkan varian C-Class bermesin lebih besar.</p>
          </div>
        </div>

    </div>
  );
}
