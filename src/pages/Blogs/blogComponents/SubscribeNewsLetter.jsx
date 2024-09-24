import React from 'react';
import './style/SubscribeNewsLetter.css';
import newsletterBg from '../assets/newsletter-bg-1.svg';
import subscribeInputBg from '../assets/rectangle-166.svg';
import subscribeButtonBg from '../assets/rectangle-168.svg';

const SubscribeNewsLetter = () => {
  return (
    <div className="subscription-container">
      <img src={newsletterBg} alt="Background" className="newsletter-bg" />
      <div className="subscription-content">
        <h2>Subscribe To Our Newsletter</h2>
        <p>Receive news, stay updated and special offers</p>
        <div className="email-input-container">
          <img src={subscribeInputBg} alt="Input Background" className="input-background" />
          <input 
            type="text" 
            placeholder="Your email address" 
            className="email-input" 
          />
          <button className="subscribe-button">
            <img src={subscribeButtonBg} alt="Button Background" className="button-background" />
            Subscribe
          </button>
        </div>
        <p>Subscribe now and receive weekly newsletters with educational materials, new courses, 
           interesting posts, popular books, and much more!</p>
      </div>
    </div>
  );
}

export default SubscribeNewsLetter;
