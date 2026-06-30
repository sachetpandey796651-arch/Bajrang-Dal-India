import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  const navigate = useNavigate();

const handlePayment = () => {
  navigate("/idcard");
};
  
  return (
    <>
      <Navbar />

      <section className="bg-orange-50 min-h-screen py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 text-center">

          <h1 className="text-4xl font-bold text-orange-600">
            Registration Payment
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Complete your registration by paying the registration fee.
          </p>

          <div className="mt-8 bg-orange-100 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-gray-800">
              Registration Fee
            </h2>

            <h1 className="text-6xl font-bold text-orange-600 mt-4">
              ₹100
            </h1>

            <p className="mt-4 text-gray-700">
              One-Time Registration Fee
            </p>

            <div className="mt-8 flex justify-center">
              <div className="bg-white border-2 border-dashed border-orange-400 rounded-2xl p-6">

                <img
                  src="/qr.png"
                  alt="UPI QR Code"
                 className="w-96 h-96 mx-auto object-contain"
                />

                <p className="mt-4 text-gray-700">
                  Scan the QR Code and pay <b>₹100</b>
                </p>

                <button
                onClick={handlePayment}
                  className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold text-lg"
                >
                  Pay ₹100 Now
                </button>

                <p className="mt-4 text-sm text-gray-500">
                  Secure Payment • UPI • Debit Card • Credit Card • Net Banking
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}