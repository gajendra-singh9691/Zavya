import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Import the FontAwesome envelope

const JoinCommunity = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed: ${email}`);
        setEmail("");
    };

    return (
        <div className="bg-white/40 backdrop-blur-md shadow-xl rounded-xl p-8 w-full flex items-center justify-between">
            <div className="flex gap-6 items-center">
                <div className="mb-4 text-indigo-700">
                    <FaEnvelope size={48} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 text-wrap w-44 text-center">Join Our Community</h2>
                <p className="text-gray-600 text-center">
                    Get exclusive updates and invites. No spam, ever.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-fit flex gap-2"
            >
                <input
                    type="email"
                    className="flex-grow px-4 py-3 w-md rounded-full border border-gray-200  focus:outline-none text-gray-900 placeholder-gray-400 bg-white/60 shadow-sm max-w-md"
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 focus:scale-105 duration-150"
                >
                    SUBSCRIBE →
                </button>
            </form>
        </div>
    );
};

export default JoinCommunity;
