import React from 'react';

const InvoledCard = ({ name, description, videoPlaceholder }) => {
    return (
        <div className="max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="p-5 flex  items-center justify-center">
            <img className="w-20 h-20 rounded-full" src={videoPlaceholder} alt="Video thumbnail" />
          </div>
          <div className="px-6 pb-2">
            <div className="font-bold text-lg mb-2 text-white">{name}</div>
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </div>
      );
};

export default InvoledCard;