import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-orange-600 text-center mb-10">
          About Bajrang Dal India
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/logo.png"
            alt="Bajrang Dal Logo"
            className="w-80 mx-auto rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Community & Volunteer Organization
            </h2>

            <p className="text-gray-700 leading-8 mb-4">
              Bajrang Dal India is a volunteer-based community platform that
              promotes social service, cultural awareness, youth development,
              and community participation through various programs and events.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              Our mission is to connect volunteers, organize events, encourage
              social work, and build a strong community across India.
            </p>

            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;