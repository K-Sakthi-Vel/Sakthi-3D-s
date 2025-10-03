"use client";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Product Designer",
      message:
        "Sakthi 3D Printers helped me turn my prototype idea into reality. The quality and precision were outstanding!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      message:
        "Their 3D printing services are fast, affordable, and reliable. I highly recommend Sakthi 3D Printers for all custom projects.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Mechanical Engineer",
      message:
        "Professional service and quick turnaround time. Sakthi 3D Printers is my go-to partner for prototyping needs.",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <p className="italic text-gray-600 mb-4">"{t.message}"</p>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
