export default function WhyChooseUs() {
  const features = [
    { title: "High Precision & Tolerances", desc: "State-of-the-art printers ensuring ±0.1mm accuracy.", img:'https://images.ctfassets.net/q2hzfkp3j57e/3e2eacf84999572091f21e350f7469b98bd829a3/424fd84a9143da4c11f4bbede2463b15/dimensional_accuracy.webp?w=1600&h=1200&fm=jpg&q=82' },
    { title: "Wide Material Selection", desc: "PLA, ABS, Resin, Nylon, Metal – choose what fits your need.", img:'https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/pe-news/eh3b8746.jpg?sfvrsn=6b2c9412_0' },
    { title: "Fast Turnaround", desc: "Prototype to final product in shortest time possible.", img:'https://cdn1.vogel.de/FEkL_EhOn6oQMJs7CAVWctxKHsw=/fit-in/800x0/p7i.vogel.de/wcms/0c/dd/0cdd37db0b18645f04f5420f7693cf08/0121406284v1.jpeg'  },
    { title: "Quality Assurance", desc: "Multiple checks at each stage for best finishing.",  img:'https://site.dev2024.replique.io/wp-content/uploads/2022/05/measurement_edited-1024x697.jpg'  },
    { title: "Experienced Team", desc: "Skilled engineers & technicians guiding you.",  img:'https://wevolver-project-images.s3.us-west-1.amazonaws.com/0.gz7imww8nd83duni.jpg'  },
    { title: "Competitive Pricing", desc: "Best value for high-quality additive work.", img:'https://tgndata.com/wp-content/uploads/2024/05/Untitled-design-7.png'  },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose Sakthi 3D Printers
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* placeholder image or icon */}
              {/* <div className={`bg-[url(${f.img})] bg-cover bg-center h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500`}></div> */}
              <img src={f.img} alt={f.title} className="h-40 w-full object-cover rounded-lg" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2 text-black">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
