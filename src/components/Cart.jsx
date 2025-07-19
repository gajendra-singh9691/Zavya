import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function RakhiCard({ rakhi }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 p-3 h-60 w-60">
          <img
            src={rakhi.image || "/placeholder.svg?height=120&width=120&query=beautiful+rakhi+traditional+indian"}
            alt={rakhi.title}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Label Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-purple-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
            {rakhi.label}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`w-3 h-3 transition-colors duration-200 ${
              isWishlisted ? "text-red-500" : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>

        {/* Discount Badge */}
        <div className="absolute bottom-2 right-2">
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
            {rakhi.discount}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title */}
        <h3 className="text-xs font-medium text-gray-800 leading-tight line-clamp-2 min-h-[2rem]">{rakhi.title}</h3>

        {/* Price Section */}
        <div className="text-center py-1">
          <span className="text-lg font-bold text-gray-900">₹{rakhi.price}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="w-3 h-3 group-hover:scale-110 transition-transform duration-200"
          />
          <span className="text-xs">ADD TO CART</span>
        </button>
      </div>
    </div>
  )
}