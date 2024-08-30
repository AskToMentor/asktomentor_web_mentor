import React from 'react';

const MentorCard = ({ name, description, videoPlaceholder }) => {
    return (
        <div className=" bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="p-5">
            <img className="w-full" src={videoPlaceholder} alt="Video thumbnail" />
          </div>
          <div className="px-6 pb-2">
            <div className="font-semibold text-xl mb-2 text-white">{name}</div>
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </div>
      );
};

export default MentorCard;