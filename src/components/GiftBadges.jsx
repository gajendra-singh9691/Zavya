import React from "react";
import { Link } from "react-router-dom";

// Star badge Tailwind CSS style with arbitrary clip-path
const baseBadge =
  "flex items-center justify-center w-40 h-40 bg-[#13235B] text-white m-3 " +
  "font-montserrat text-center shadow-md ";
const polygon = "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 67% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)"
const GiftBadges = () => (
  <div className="font-montserrat">
    <div className="text-center mt-6 mb-8 font-semibold text-lg">Gifts by Budget</div>
    <div className="flex flex-wrap justify-center gap-3">
      <Link className={baseBadge} style={{clipPath: polygon}}>
        <div >
          Under<br />
          <span className="text-3xl font-bold">₹999</span>
        </div>
      </Link>
      <Link className={baseBadge} style={{clipPath: polygon}}>
        <div>
          Under<br />
          <span className="text-3xl font-bold">₹1999</span>
        </div>
      </Link>
      <Link className={baseBadge} style={{clipPath: polygon}}>
        <div>
          Under<br />
          <span className="text-3xl font-bold">₹2999</span>
        </div>
      </Link>
      <Link className={baseBadge} style={{clipPath: polygon}}>
        <div>
          <span className="text-2xl">Premium</span><br />
          <span className="text-2xl">Gifts</span>
        </div>
      </Link>
    </div>
  </div>
);

export default GiftBadges;