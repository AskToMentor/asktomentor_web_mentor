import React from 'react';
import './style/JoinCommunity.css';
import arrowIcon from '../assets/akar-icons-arrow-up-right.svg';
import logo from '../assets/group-1597883105.svg';

const JoinCommunity = () => {
  return (
    <div className="h-fit flex flex-col sm:flex-row rounded-lg mt-20 mb-10 join-community-container">
      <img src={logo} alt="Namaste Learner" className="logo-image" />
      <div className="join-community-content">
        <p className="join-community-text">
          Join our community of mentors and start shaping the future today. Share your expertise, inspire others, and help mentees achieve their dreams.
        </p>
        <div className="buttons-container">
          <button className="try-yourself-button">Try Yourself</button>
          <button className="get-started-button">
            Get started
            <img src={arrowIcon} alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
