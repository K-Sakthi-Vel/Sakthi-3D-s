const listings = [
  {
    title: "Business Strategy",
    desc: "Create a roadmap for success with expert consulting.",
    img: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630",
  },
  {
    title: "Marketing Solutions",
    desc: "Boost your online presence with data-driven marketing.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Financial Planning",
    desc: "Optimize your finances and reach your business goals.",
    img: "https://www.forbes.com/advisor/wp-content/uploads/2022/06/960x0.jpeg-9-1.jpg",
  },
];

export default function FeaturedSection() {
  return (
    <section id="featured" className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Featured Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {listings.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
