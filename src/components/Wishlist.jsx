import React from "react";
import Cart from "./Cart";

const Wishlist = () => {
  // Example wishlist items array, replace with your actual data or props
  const wishlistItems = []; // empty array indicates wishlist is empty

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="py-8 flex flex-col items-center">
        <h1 className="text-2xl font-medium tracking-wide mb-1">Wishlist</h1>
        <span className="text-gray-500 text-sm">Home</span>
      </div>

      {/* Barcode Placeholder */}
      <div className="flex justify-center mb-10">
        <div className="flex space-x-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={`h-4 rounded ${
                i % 3 === 0 ? "w-2 bg-gray-700" : "w-1 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Wishlist Conditional Rendering */}
      <div className="flex justify-center">
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-10 flex flex-col items-center w-72">
            <span className="text-gray-400 text-lg font-semibold">
              No item in wishlist
            </span>
          </div>
        ) : (
          wishlistItems.map((item, idx) => {
            return <Cart key={idx} rakhi={item} />
          } )
        )}
      </div>
    </div>
  );
};

export default Wishlist;
