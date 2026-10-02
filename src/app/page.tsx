import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* contoh flex-row */}
      <div className="flex flex-row w-full justify-between">
        <div className=" bg-amber-500 p-10">Logo</div>
        <div className=" bg-green-500 p-10">Contact</div>
        <div className=" bg-green-500 p-10">Our Work</div>
        <div className="bg-green-500 p-10">Pricing</div>
        <div className=" bg-red-500 p-10">Contact Us</div>
      </div>
    </div>
  );
}





// Catatan :
// 1. jika ada tag yang bercampur dalam 1 div, dia tidak bisa di manipulasi layoutnya
// 2. Flex col -> 
// 3. Flex row ->



// TENTANG FLEX:
// 1. pengertia -> mengatur arah, jarak, dan susunan
// jenis: flex-col & flex-row


// flex-row = membuat div kedalam susunan kolom, menyamping, ke arah samping bukan ke bawah
// flex-row = membuat div kedalam susunan baris, kebawah, ke arah bawah bukan ke samping
