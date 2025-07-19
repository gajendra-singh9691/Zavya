import React from "react";

const PartnerWithUs = () => {
    return (
        <div className="bg-gray-50 ">
            <h1 className="text-4xl text-center font-bold py-4">Partner With Us</h1>
            <div className="min-h-screen  flex items-center justify-center py-8 px-4">
                <div className="w-full max-w-11/12 rounded-lg  flex flex-col md:flex-row p-8 gap-8">
                    {/* Left Section */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">
                                14k Gold-plated Jewellery and Lab-Grown Diamonds
                            </h2>
                            <p className="text-gray-700 text-sm">
                                Got a sparkle in your eye for exquisite pieces and dazzling designs? We're on the lookout for partners who can help us craft 18K gold-plated jewelry and lab-grown diamonds. If you’re ready to add some extra shine, fill up now!
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">
                                925 Sterling Silver Jewellery:
                            </h2>
                            <p className="text-gray-700 text-sm">
                                Showcase your craftsmanship and designs through our platform. We specialize in 925 sterling silver jewellery and welcome vendors to join us in offering quality pieces to our discerning audience.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">
                                Vendor Collaboration for Repair Services:
                            </h2>
                            <p className="text-gray-700 text-sm">
                                Are you <span className="text-blue-600 underline">skilled in jewellery repair?</span> Partner with us to provide expert repair services for our customers. Together, let's ensure every piece maintains its beauty and longevity.
                            </p>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex-1">
                        <form className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
                            <h3 className="text-xl font-semibold mb-2">Fill Out the Form!</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Please feel free to contact us using this form, and we will respond as quickly as possible.
                            </p>
                            <div className="mb-2">
                                <span className="block font-medium">Phone:</span>
                                <span className="text-gray-700 text-sm ml-2">+ (91) 98108 99644</span>
                            </div>
                            <div className="mb-4">
                                <span className="block font-medium">Email:</span>
                                <span className="text-gray-700 text-sm ml-2">buying@zavya.co</span>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-sm"
                                    type="text"
                                    placeholder="Last Name *"
                                    required
                                />
                                <input
                                    className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-sm"
                                    type="text"
                                    placeholder="First Name *"
                                    required
                                />
                            </div>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-sm"
                                type="email"
                                placeholder="Email *"
                                required
                            />
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-sm"
                                type="tel"
                                placeholder="Phone Number"
                            />
                            <textarea
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 text-sm"
                                rows={4}
                                placeholder="Tell us about yourself?"
                            ></textarea>
                            <div className="mb-2">
                                <span className="text-gray-600 text-sm">Do Share your work expertise</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Lab-Grown Diamonds
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Silver Jewellery Vendor
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2" />
                                    Jewellery Repair
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUs;
