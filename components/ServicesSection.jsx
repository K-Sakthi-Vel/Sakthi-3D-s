export default function ServicesSection() {
  const services = [
    {
      title: "Rapid Prototyping",
      desc: "Fast turnarounds for concept models and functional prototypes.",
      img: "https://www.protiq.com/out/pictures/ddmedia/Rapid%20Prototyping%20Diagramm%20-%20PROTIQ.png", // use a placeholder
    },
    {
      title: "Custom Print (Plastic & Metal)",
      desc: "PLA, ABS, Resin, Nylon & Metal based printing options.",
      img: "https://quickparts.com/wp-content/uploads/2022/04/dmp_Metal-Parts_2000.jpg",
    },
    {
      title: "Large Volume & Batch Prints",
      desc: "Scale up production while maintaining quality.",
      img: "https://lh3.googleusercontent.com/Mg_f72KiH5Q5XXGDKCPT6JVwthfqQb5v4OoXbUCLv_OzqrZKGQRr2Wx1q8peejPpxOoyLGn5UUiv_uzizESUbU3uWlw=w900",
    },
    {
      title: "Surface Finishing & Post-Processing",
      desc: "Polishing, smoothing, painting – we deliver ready-to-use parts.",
      img: "https://www.additive-x.com/wp-content/uploads/2023/04/advanced-support-removal-work-inward.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
