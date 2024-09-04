import React from 'react';

const MentorCard = ({ name, description, videoPlaceholder }) => {
    return (
        <div className=" bg-gray-800 rounded-lg overflow-hidden w-full shadow-xl">
          <div className="p-2 sm:p-5">
            <img className="w-full" src={videoPlaceholder} alt="Video thumbnail" />
          </div>
          <div className="p-2 sm:px-6 pb-2">
            <div className="font-semibold text-xl mb-2 text-white">{name}</div>
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </div>
      );
};

export default MentorCard;