import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  const events = [
    {
      title: "🚩 Hanuman Jayanti Shobha Yatra",
      date: "Every Year",
      location: "Bareilly",
      description:
        "A grand religious procession with devotees, bhajans, cultural performances and community participation.",
    },
    {
      title: "🩸 Blood Donation Camp",
      date: "Throughout the Year",
      location: "Kanpur",
      description:
        "Organizing voluntary blood donation camps to help hospitals and save lives.",
    },
    {
      title: "🌳 Tree Plantation Drive",
      date: "Monsoon Season",
      location: "Nainital",
      description:
        "Planting trees to promote environmental awareness and a greener future.",
    },
    {
      title: "🧹 Swachhata Abhiyan",
      date: "Monthly",
      location: "Bareilly",
      description:
        "Cleanliness campaigns in temples, parks and public places to spread awareness.",
    },
    {
      title: "🐄 Gau Seva Program",
      date: "Regular Activity",
      location: "Mathura",
      description:
        "Service activities including cow feeding, shelter support and awareness programs.",
    },
    {
      title: "👨‍🎓 Youth Awareness Workshop",
      date: "Quarterly",
      location: "Bareilly",
      description:
        "Programs focused on leadership, discipline, culture and youth development.",
    },
    {
      title: "🧘 Yoga Camp",
      date: "International Yoga Day & Special Camps",
      location: "Bareilly",
      description:
        "Yoga and wellness sessions promoting a healthy lifestyle.",
    },
    {
      title: "🤝 Disaster Relief & Food Distribution",
      date: "As Required",
      location: "Prayagraj",
      description:
        "Relief work, food distribution and volunteer support during emergencies.",
    },
    {
      title: "🇮🇳 Tiranga Yatra",
      date: "15 August / 26 January",
      location: "Delhi",
      description:
        "Patriotic rally celebrating national pride and unity.",
    },
    {
      title: "🛕 Cultural & Religious Awareness Program",
      date: "Throughout the Year",
      location: "Varanasi",
      description:
        "Cultural activities, seminars and awareness programs based on Indian traditions.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-orange-600 mb-4">
            Our Events
          </h1>

          <p className="text-center text-gray-600 mb-12 text-lg">
            Social, Cultural and Community Activities conducted throughout the year.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border-t-4 border-orange-500"
              >
                <h2 className="text-2xl font-bold text-orange-600 mb-3">
                  {event.title}
                </h2>

                <p className="text-gray-700 mb-2">
                  <strong>📅 Date:</strong> {event.date}
                </p>

                <p className="text-gray-700 mb-3">
                  <strong>📍 Location:</strong> {event.location}
                </p>

                <p className="text-gray-600 leading-7">
                  {event.description}
                </p>

                <button className="mt-6 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Events;