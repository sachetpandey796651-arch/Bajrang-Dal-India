import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-orange-600">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mt-3 mb-10">
            Get in touch with us anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 text-gray-700">
                <p><strong>📍 Address:</strong><br/>  Sirauli Bareilly Uttar Pradesh, India</p>
                <p><strong>📞 Phone:</strong><br/> +91 789593557460</p>
                <p><strong>📧 Email:</strong><br/> sachetpandey796651@gmail.com</p>
                <p><strong>🕒 Office Hours:</strong><br/>  All Time</p>
                <p><strong>🌐 Website:</strong><br/>www.bajrangdalindia.org</p>
              </div>

              <div className="mt-8">
                <iframe
                  title="map"
                  className="w-full h-64 rounded-xl"
                  src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" placeholder="Full Name" className={inputClass}/>
                <input type="email" placeholder="Email Address" className={inputClass}/>
                <input type="tel" placeholder="Mobile Number" className={inputClass}/>
                <textarea rows="5" placeholder="Your Message" className={inputClass}></textarea>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold">
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl text-center">
                    ✅ Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
