import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function IdCard() {
  const [member, setMember] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("memberData");

    if (data) {
      setMember(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen flex items-center justify-center py-16">

        <div className="print-card bg-white shadow-2xl rounded-[40px] p-12 w-full max-w-5xl border-8 border-orange-500">

          <div className="flex items-center justify-between border-b-2 border-orange-300 pb-6">

            <div className="flex items-center gap-5">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24"
              />

              <div>
                <h1 className="text-4xl font-bold text-orange-600">
                  BAJRANG DAL
                </h1>

                <p className="text-lg text-gray-600">
                  Official Member Identity Card
                </p>
              </div>
            </div>

            <div className="text-right mr-10">
  <h2 className="text-2xl font-bold text-orange-600">
    MEMBER ID
  </h2>
</div>

          </div>

          <div className="flex gap-10 mt-10">

            <div className="w-1/3 flex flex-col items-center">

              <img
                src={member.photo || "/profile.png"}
                alt="Profile"
                className="w-52 h-52 rounded-full border-4 border-orange-500 object-cover"
              />

              <h2 className="mt-5 text-2xl font-bold text-orange-600">
                Volunteer
              </h2>

            </div>

            <div className="w-2/3">

              <div className="grid grid-cols-2 gap-y-6 text-xl">                <b>Name</b>
                <span className="font-semibold">
                  {member.fullName}
                </span>

                <b>Member ID</b>
                <span className="font-semibold text-orange-600">
                  {member.memberId}
                </span>

                <b>Mobile</b>
                <span className="font-semibold">
                  {member.mobile}
                </span>

                <b>Email</b>
                <span className="font-semibold">
                  {member.email}
                </span>

                <b>State</b>
                <span className="font-semibold">
                  {member.state}
                </span>

                <b>District</b>
                <span className="font-semibold">
                  {member.district}
                </span>

                <b>Age</b>
                <span className="font-semibold">
                  {member.age}
                </span>

                <b>Occupation</b>
                <span className="font-semibold">
                  {member.occupation}
                </span>

                <b>Volunteer</b>
                <span className="font-semibold">
                  {member.volunteerType}
                </span>

                <b>Status</b>
                <span className="text-green-600 font-bold">
                  ACTIVE MEMBER
                </span>

              </div>

            </div>

          </div>          <div className="mt-10 border-t-2 border-orange-300 pt-6 flex items-center justify-between">

            <div>
              <p className="text-gray-600 text-lg">
                Bajrang Dal Official Membership
              </p>

              <p className="text-sm text-gray-500 mt-2">
                This card is valid only for registered members.
              </p>
            </div>

            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold text-lg"
              onClick={() => window.print()}
            >
              Download ID Card
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}