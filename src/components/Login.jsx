import { useState } from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  const [mobile, setMobile] = useState("");
  const closeaccount = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center fixed top-0 z-10 bg-[#010101b0]" onClick={closeaccount}>
      <div className="w-full max-w-5xl p-4 rounded-xl bg-pink-600 bg-opacity-60 flex flex-col md:flex-row items-center gap-4">
        {/* Left side: Info */}
        <div className="flex-1 text-white flex flex-col items-center md:items-start gap-6">
          <div>
            <span className="text-5xl font-bold tracking-widest">zavya</span>
            <span className="ml-2 text-base font-semibold">Powered by <span className="text-yellow-300">Kwik&#9889;Pass</span></span>
          </div>
          <h2 className="text-xl font-bold text-center md:text-left">Welcome! Register to avail the best deals!</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <FeatureBox label="Zero Subscription Fees" text="Access KwikPass without any subscription charges" />
            <FeatureBox label="Lowest price guaranteed" text="Explore unbeatable prices and unmatchable value" />
            <FeatureBox label="100% secure & spam free" text="Guaranteed data protection & spam-free inbox" />
          </div>
        </div>

        {/* Right side: Registration */}
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Unlock Superior Discounts</h3>
          <div className="flex items-center w-full mb-4 border rounded-lg overflow-hidden">
            <span className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold">+91</span>
            <input
              type="tel"
              className="flex-1 p-2 outline-none"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/, ""))}
              maxLength={10}
            />
          </div>
          <div className="flex items-center w-full mb-2">
            <input type="checkbox" id="notify" className="mr-2" />
            <label htmlFor="notify" className="text-gray-600 text-sm select-none">
              Notify me for any updates & offers
            </label>
          </div>
          <button
            className="w-full mt-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md py-2 transition"
            // onClick handler for register/login here
          >
            Continue
          </button>
          <div className="mt-4 text-xs text-gray-500 text-center">
            I accept that I have read & understood Gokwik's{" "}
            <span className="underline cursor-pointer text-pink-600">Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer text-pink-600">T&Cs</span>.
          </div>
          <div className="mt-2">
            <a href="#" className="text-xs text-pink-600 underline hover:text-pink-800">
              Trouble logging in?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";

// function RegisterPage() {
  

//   return (
    
//   );
// }

function FeatureBox({ label, text }) {
  return (
    <div className="bg-pink-500 bg-opacity-80 rounded-lg p-4 flex flex-col items-center shadow w-full max-w-xs">
      <span className="text-yellow-300 text-2xl mb-2">✯</span>
      <span className="font-semibold text-base mb-1 text-center">{label}</span>
      <span className="text-sm text-center">{text}</span>
    </div>
  );
}
