export default function Hero() {
  return (
    <section className="relative bg-[url('../assets/hero_bg1.jpg')] bg-cover bg-center text-white py-40 md:py-50 flex items-center justify-center text-center">
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Empower Your Business with Smart Solutions
    </h1>
    <p className="text-lg md:text-xl text-white/90 mb-8">
      Professional services designed to help you grow faster and smarter.
    </p>
    <a
      href="#featured"
      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
    >
      Explore Services
    </a>
  </div>
</section>

  );
}
