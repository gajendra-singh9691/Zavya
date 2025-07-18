import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    name: 'Rakhi Collection',
    image: 'https://tse2.mm.bing.net/th/id/OIP.6_yaEC-i0wt0ANNKjcKhJgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    path: '/collections/rakhi'
  },
  {
    name: 'Gifting Hampers',
    image: 'https://tse3.mm.bing.net/th/id/OIP.3zb_lpDXBeMcwQXfWNohUQHaGY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    path: '/collections/gifting-hampers'
  },
  {
    name: 'Ruby Collection',
    image: 'https://cdn.pixabay.com/photo/2015/02/06/03/28/jewelry-625726_1280.jpg',
    path: '/collections/ruby'
  },
  {
    name: 'Peacock Collection',
    image: 'https://i.pinimg.com/736x/75/50/31/755031b0fd2f2ca0a38188bae48d9041--gold-jewellery-bridal-collection.jpg',
    path: '/collections/peacock'
  },
  {
    name: 'Infinity Collection',
    image: 'https://tse3.mm.bing.net/th/id/OIP.0aCAcBYt7cuoZrPTfzQdcgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    path: '/collections/infinity'
  },
  {
    name: 'Ocean Blue',
    image: 'https://luigiricci.com/678-large_default/twister-925-sterling-silver-earrings-with-blue-opal-stone-rhodium-plating.jpg',
    path: '/collections/ocean-blue'
  }
];

const TopCollections = () => (
  <div className="px-8 py-6">
    <h2 className="text-xl font-semibold mb-6">Top Collections</h2>
    <div className="flex flex-wrap gap-6">
      {collections.map((col) => (
        <Link
          to={col.path}
          className="flex flex-col items-center w-40 rounded-xl hover:-translate-y-1 hover:scale-105 transition-transform duration-200 no-underline"
          key={col.name}
        >
          <img
            src={col.image}
            alt={col.name}
            className="w-28 h-28 object-cover rounded-lg"
          />
          <div className="mt-3 text-base text-gray-800 font-medium text-center">{col.name}</div>
        </Link>
      ))}
    </div>
  </div>
);

export default TopCollections;
