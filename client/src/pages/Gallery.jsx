import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  { id:1,title:"📿 Hanuman Jayanti Shobha Yatra",date:"14 April 2026",image:"https://picsum.photos/600/400?random=1"},
  { id:2,title:"🚩 Ram Navami Utsav",date:"30 March 2026",image:"https://picsum.photos/600/400?random=2"},
  { id:3,title:"🛕 Mandir Seva & Safai Abhiyan",date:"12 May 2026",image:"https://picsum.photos/600/400?random=3"},
  { id:4,title:"🩸 Blood Donation Camp",date:"Coming Soon",image:"https://picsum.photos/600/400?random=4"},
  { id:5,title:"🌳 Tree Plantation Drive",date:"5 July 2026",image:"https://picsum.photos/600/400?random=5"},
  { id:6,title:"🍛 Bhandara & Prasad Distribution",date:"Coming Soon",image:"https://picsum.photos/600/400?random=6"},
  { id:7,title:"🇮🇳 National Festival",date:"15 August 2026",image:"https://picsum.photos/600/400?random=7"},
  { id:8,title:"🙏 Dharmik Sabha & Satsang",date:"Coming Soon",image:"https://picsum.photos/600/400?random=8"},
  { id:9,title:"📚 Dharma Jagran Program",date:"Coming Soon",image:"https://picsum.photos/600/400?random=9"},
  { id:10,title:"👥 Volunteers Group Photo",date:"Coming Soon",image:"https://picsum.photos/600/400?random=10"},
  { id:11,title:"🚑 Seva Karya",date:"Coming Soon",image:"https://picsum.photos/600/400?random=11"},
  { id:12,title:"🚩 Vishesh Aayojan",date:"Coming Soon",image:"https://picsum.photos/600/400?random=12"},
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />
      <section className="bg-orange-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-orange-600 mb-4">Gallery</h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            Our Service, Cultural & Religious Activities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-orange-600">{item.title}</h2>
                  <p className="text-gray-500 mt-2">📅 {item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-5xl w-[90%] rounded-xl"
              />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
