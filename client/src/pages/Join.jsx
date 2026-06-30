import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Join() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    aadhaar: "",
    state: "",
    district: "",
    pincode: "",
    age: "",
    gender: "",
    occupation: "",
    volunteerType: "",
    address: "",
    reason: "",
    photo: "",
  });

  const inputClass =
    "w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFormData({
        ...formData,
        photo: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberId = "BDI" + Date.now();

    localStorage.setItem(
      "memberData",
      JSON.stringify({
        ...formData,
        memberId,
      })
    );

    navigate("/payment");
  };

  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen flex items-center justify-center py-16">

        <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-orange-100">

          <h1 className="text-4xl font-bold text-center text-orange-600">
            Join Bajrang Dal
          </h1>

          <p className="text-center text-gray-600 mt-2 mb-8">
            Become a Volunteer and Serve Society
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          ><input
  type="text"
  name="fullName"
  placeholder="Full Name"
  value={formData.fullName}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="tel"
  name="mobile"
  placeholder="Mobile Number"
  value={formData.mobile}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="text"
  name="aadhaar"
  placeholder="Aadhaar Number"
  maxLength={12}
  value={formData.aadhaar}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="text"
  name="state"
  placeholder="State"
  value={formData.state}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="text"
  name="district"
  placeholder="District"
  value={formData.district}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="text"
  name="pincode"
  placeholder="Pincode"
  value={formData.pincode}
  onChange={handleChange}
  className={inputClass}
/>

<input
  type="number"
  name="age"
  placeholder="Age"
  value={formData.age}
  onChange={handleChange}
  className={inputClass}
/>

<select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
  className={inputClass}
>
  <option value="">Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>

<input
  type="text"
  name="occupation"
  placeholder="Occupation"
  value={formData.occupation}
  onChange={handleChange}
  className={inputClass}
/>

<select
  name="volunteerType"
  value={formData.volunteerType}
  onChange={handleChange}
  className={inputClass}
>
  <option value="">Select Volunteer Type</option>
  <option>Social Service</option>
  <option>Blood Donation</option>
  <option>Temple Service</option>
  <option>Tree Plantation</option>
  <option>Disaster Relief</option>
</select>

<div>
  <label className="block mb-2 font-semibold">
    Upload Photo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handlePhoto}
    className={inputClass}
  />
</div><div className="md:col-span-2">
  <textarea
    name="address"
    rows={3}
    placeholder="Full Address"
    value={formData.address}
    onChange={handleChange}
    className={inputClass}
  />
</div>

<div className="md:col-span-2">
  <textarea
    name="reason"
    rows={4}
    placeholder="Why do you want to join Bajrang Dal?"
    value={formData.reason}
    onChange={handleChange}
    className={inputClass}
  />
</div>

<div className="md:col-span-2">
  <label className="block mb-2 font-semibold">
    Upload Photo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handlePhoto}
    className={inputClass}
  />
</div>

<div className="md:col-span-2 flex items-center gap-2">
  <input type="checkbox" required />
  <span>I agree to the Terms & Conditions.</span>
</div>

<div className="md:col-span-2">
  <button
    type="submit"
    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold text-lg"
  >
    Continue to Payment
  </button>
</div>

</form>

</div>

</section>

<Footer />

</>
  );
}