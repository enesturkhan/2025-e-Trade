import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ background: 'linear-gradient(135deg, #EFF6E0 0%, #AEC3B0 100%)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#01161E]">
            Doğadan İlham Alan Sağlık Ürünleri
          </h1>
          <p className="text-lg text-[#124559] max-w-xl">
            Bitkisel içerikli, doğa dostu ve yenilikçi sağlık ürünlerimizle kendinizi ve sevdiklerinizi koruyun. Doğanın gücünü evinize taşıyın!
          </p>
          <button className="mt-4 px-8 py-3 rounded-full text-white font-semibold shadow-lg" style={{ background: '#598392' }}>
            Ürünleri Keşfet
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <Image
            src="/product-images/1.jpg"
            alt="Bitkisel Ürün"
            width={340}
            height={340}
            className="rounded-3xl shadow-2xl object-cover border-4 border-[#AEC3B0]"
          />
          <Image
            src="/leaf.png"
            alt="Yaprak"
            width={120}
            height={120}
            className="absolute -top-8 -left-8 opacity-70 rotate-12"
          />
        </div>
      </section>
      {/* Tanıtım Kartları */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <Image src="/product-images/2.jpg" alt="Ürün 2" width={80} height={80} className="rounded-full mb-4" />
          <h2 className="text-xl font-bold text-[#124559] mb-2">Bitkisel Takviyeler</h2>
          <p className="text-[#598392]">Doğal içerikli, güvenilir ve etkili bitkisel takviyelerle sağlığınızı destekleyin.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <Image src="/product-images/1.jpg" alt="Ürün 1" width={80} height={80} className="rounded-full mb-4" />
          <h2 className="text-xl font-bold text-[#124559] mb-2">Vitamin & Mineral</h2>
          <p className="text-[#598392]">Vücudunuzun ihtiyacı olan vitamin ve mineralleri en saf haliyle sunuyoruz.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <Image src="/leaf.png" alt="Yaprak" width={80} height={80} className="mb-4" />
          <h2 className="text-xl font-bold text-[#124559] mb-2">Doğa Dostu</h2>
          <p className="text-[#598392]">Çevreye duyarlı, sürdürülebilir ve doğa dostu ürünler ile geleceğe yatırım yapın.</p>
        </div>
      </section>
    </main>
  );
}
