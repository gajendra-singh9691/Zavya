import React, { useState } from 'react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg', // Replace with your image path
    title: 'Celebrate Bonds with',
    highlight: 'SILVER TIES',
  },
  {
    image: 'https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg', // Replace with your image path
    title: 'Celebrate Bonds with',
    highlight: 'SILVER TIES',
  },
  {
    image: 'https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg', // Replace with your image path
    title: 'Celebrate Bonds with',
    highlight: 'SILVER TIES',
  },
  // Add more slides as needed
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full flex transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Left: Image / Product Shot */}
          <div className="w-1/2 flex items-center justify-center bg-orange-50">
            <img src={slide.image} alt="" className="object-cover h-60 rounded-xl shadow" />
          </div>
          {/* Right: Text with gradient background */}
          <div className="w-1/2 flex flex-col justify-center px-8 bg-gradient-to-l from-orange-400 to-orange-200 h-full text-right">
            <span className="text-xl font-medium text-white">{slide.title}</span>
            <span className="text-4xl mt-2 font-bold text-white tracking-widest">{slide.highlight}</span>
          </div>
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-orange-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Optional: Prev/Next buttons */}
      {/* <button onClick={prevSlide} ... /> */}
      {/* <button onClick={nextSlide} ... /> */}
    </div>
  );
};

export default Slider;