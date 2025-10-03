"use client";
import { CheckCircleIcon } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "1. Share Your Idea",
      desc: "Upload your design or share your concept. Our team helps you refine it for 3D printing.",
    },
    {
      title: "2. Choose Material & Finish",
      desc: "We offer multiple materials like PLA, ABS, and resin with various finishing options.",
    },
    {
      title: "3. Printing & Quality Check",
      desc: "We print with high precision and inspect every detail to ensure top-notch quality.",
    },
    {
      title: "4. Delivery or Pickup",
      desc: "Get your printed model delivered to your doorstep or pick it up from our store.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-black">Our Printing Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="text-blue-500 w-10 h-10" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-black">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
