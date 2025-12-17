import React from 'react';

const ProductCard = ({ name, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
      <div className="p-4 h-24 flex flex-col justify-center">
        <h2 className="font-bold text-lg mb-1 text-gray-800 truncate">{name}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;