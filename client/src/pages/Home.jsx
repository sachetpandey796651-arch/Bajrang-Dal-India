import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-50 min-h-screen flex items-center py-10">
        <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-12 items-center">

          <div className="ml-16">
            <h1 className="text-5xl font-bold text-orange-600 leading-tight">
              Bajrang Dal India
            </h1>

            <h2 className="text-2xl font-semibold mt-4 text-gray-700">
              Community & Volunteer Portal
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Welcome to the official Bajrang Dal India community portal.
              Stay connected with announcements, volunteer activities,
              social service programs, religious events and youth awareness
              campaigns across India.
            </p>

            <div className="mt-8 flex gap-4">
              <a
  href="/join"
  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
>
  Join Now
</a>

              <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Community"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-orange-600 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold">5000+</h2>
            <p className="mt-2 text-lg">👥 Volunteers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="mt-2 text-lg">📅 Events</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="mt-2 text-lg">🌍 States</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="mt-2 text-lg">🤝 Service Programs</p>
          </div>

        </div>
      </section>
{/* Need Help Section */}

<section className="bg-red-50 py-16">
  <div className="max-w-7xl mx-auto px-20">

    <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
      🆘 Need Help?
    </h2>

    <p className="text-center text-gray-600 mb-12">
      We are always ready to help people in need through our volunteers and service activities.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-4">🩸</div>
        <h3 className="text-2xl font-bold text-red-600">
          Blood Donation
        </h3>
        <p className="mt-3 text-gray-600">
          Need blood urgently? Contact our volunteers anytime.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-4">🚑</div>
        <h3 className="text-2xl font-bold text-red-600">
          Emergency Help
        </h3>
        <p className="mt-3 text-gray-600">
          Disaster relief, medical support and emergency assistance.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-4">📞</div>
        <h3 className="text-2xl font-bold text-red-600">
          Contact Volunteers
        </h3>
        <p className="mt-3 text-gray-600">
          Call: +91-9761016602
          <br />
          Email: sachetpandey796651@gmail.com
        </p>
      </div>

    </div>

  </div>
</section>
{/* Gallery Preview Section */}

<section className="bg-orange-50 py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">
      📸 Our Service & Religious Activities
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Some memorable moments from our service and community activities.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?1"
          className="w-full h-56 object-cover"
          alt="Hanuman Jayanti"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">📿 Hanuman Jayanti</h3>
          <p className="text-gray-500 text-sm">14 April 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?2"
          className="w-full h-56 object-cover"
          alt="Blood Donation"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">🩸 Blood Donation Camp</h3>
          <p className="text-gray-500 text-sm">20 May 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?3"
          className="w-full h-56 object-cover"
          alt="Temple Service"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">🛕 Temple Service</h3>
          <p className="text-gray-500 text-sm">10 June 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?4"
          className="w-full h-56 object-cover"
          alt="Tree Plantation"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">🌳 Tree Plantation</h3>
          <p className="text-gray-500 text-sm">05 July 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?5"
          className="w-full h-56 object-cover"
          alt="Bhandara"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">🍛 Bhandara</h3>
          <p className="text-gray-500 text-sm">15 August 2026</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src="https://picsum.photos/400/250?6"
          className="w-full h-56 object-cover"
          alt="National Event"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">🇮🇳 National Event</h3>
          <p className="text-gray-500 text-sm">26 January 2026</p>
        </div>
      </div>

    </div>

    <div className="text-center mt-10 mb-20">
      <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold">
        View Full Gallery
      </button>
    </div>

  </div>
</section>
      <Footer />
    </>
  );
}

export default Home;