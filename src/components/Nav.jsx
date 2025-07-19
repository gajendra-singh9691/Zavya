import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({addtocart,fun,data}) => {
  const [searchQuery, setSearchQuery] = useState('');
      
  const shopItems = [
    { name: "Rakhi", path: '/shop/rakhi' },
    { name: "Anklets", path: '/shop/anklets' },
    { name: 'Bracelets', path: '/shop/bracelets' },
    { name: 'Necklaces & Pendants', path: '/shop/nacklaces-pendats' },
    { name: 'Chain', path: '/shop/chain' },
    { name: 'Jewellery Sets', path: '/shop/jewellery-sets' },
    { name: 'Rings', path: '/shop/rings' },
    { name: 'Toe Rings', path: '/shop/toe-rings' },
    { name: 'Mangalsutra', path: '/shop/mangalsutra' },
    { name: 'Nose pin', path: '/shop/nose-pin' },
    { name: 'Shop All', path: '/shop/all' },
  ];

  const collectionItems = [
    { name: 'Rakhi Collection', path: '/collections/rakhi' },
    { name: 'Ruby Collection', path: '/collections/ruby' },
    { name: 'Peacock Collection', path: '/collections/peacock' },
    { name: 'Infinity Collection', path: '/collections/infinity' },
    { name: 'Pure Silve', path: '/collections/pure-silve' },
    { name: 'Heart Collection', path: '/collections/heart' },
    { name: 'Starry Night Collection', path: '/collections/starry-night' },
    { name: 'Ocean Blue Collection', path: '/collections/ocean-blu' },
    { name: 'Solitaire Collection', path: '/collections/solitaire' },
    { name: 'Minimal Collection', path: '/collections/minimal' },
    { name: 'Date Night Collection', path: '/collections/date-night' },
    { name: 'Evil Eye Collection', path: '/collections/evil-eye' },
    { name: 'Pearl-tastic Collection', path: '/collections/pearl-tastic' },
    { name: 'Nature Inspired Collection', path: '/collections/nature-inspired' },
  ];

  const aboutItems = [
    { name: 'About Brand', path: '/about/brand' },
    { name: 'Our Launch Campaign', path: '/about/our-launch-campaign' },
    { name: 'Careers', path: '/about/careers' },
    { name: 'Partner with Us', path: '/about/partner-with-us' },
  ];

  const blogItems = [
    { name: 'Jewellery Care', path: '/blogs/jewellery-care' },
    { name: 'Styling Tips', path: '/blogs/styling-tips' },
  ];

  const NavItem = ({ title, items, path }) => (
    <div className="relative group">
      <Link 
        to={path || '#'} 
        className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200 py-2 px-3"
      >
        <span className="font-medium">{title}</span>
        <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-200"></i>
      </Link>
      
      {items && (
        <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      
      <nav className="bg-white  border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div >
              <Link to="/" className="text-3xl font-bold text-black border-t-2 border-b-2">zavya</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavItem title="Shop" items={shopItems} path="/shop" />
              <NavItem title="Collections" items={collectionItems} path="/collections" />
              <NavItem title="About Us" items={aboutItems} path="/about" />
              <NavItem title="Blogs" items={blogItems} path="/blogs" />
            </div>

            <div className="flex max-w-md mx-8 md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* User Icon */}
              <Link a="/profile" className="text-gray-700 hover:text-black transition-colors duration-200">
                <i className="fas fa-user text-lg"></i>
              </Link>

              {/* Wishlist Icon */}
              <Link a="/wishlist" className="relative text-gray-700 hover:text-black transition-colors duration-200">
                <i className="fas fa-heart text-lg"></i>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>

              {/* Cart Icon */}
              <button className="relative text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer" onClick={()=>fun(!addtocart)}>
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {data.length}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-700 hover:text-black transition-colors duration-200">
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                // placeholder="Search \"Bracelets\""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;