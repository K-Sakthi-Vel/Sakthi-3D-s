export default function IndustriesSection() {
  const industries = [
    {
      name: "Automotive",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Aerospace",
      img: "https://www.zeal3dprinting.com.au/wp-content/uploads/2019/12/unnamed.jpg",
    },
    {
      name: "Architecture",
      img: "https://i.all3dp.com/wp-content/uploads/2021/01/25101916/3D-architecture-model-from-purpleplatypus-dot-com.jpg",
    },
    {
      name: "Medical & Dental",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlri218-A9ktYxaAI2FBDjzn4XHwJ307IcuQ&s",
    },
    {
      name: "Education & Research",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Consumer Products",
      img: "https://www.rapiddirect.com/wp-content/uploads/2024/02/3d-printing-in-consumer-products-manufacturing.webp",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Industries We Serve
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden text-center"
          >
            <img
              src={industry.img}
              alt={industry.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {industry.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
