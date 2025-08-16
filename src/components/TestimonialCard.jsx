import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, rating, feedback }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-gray-800 
                transition-all duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((star, index) => (
          <FaStar
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-400 mb-4">"{feedback}"</p>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
