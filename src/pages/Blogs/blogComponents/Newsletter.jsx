import React from 'react';
import './style/Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container mb-10">
      <div className="content">
        <h1>Subscribe To Our Newsletter</h1>
        <p className="subheading">Receive news, stay updated, and special offers</p>

        <div className="email-input-container">
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
            aria-label="email"
          />
          <button className="subscribe-button">
            Subscribe
          </button>
        </div>

        <p className="footer-text">
          Subscribe now and receive weekly newsletters with educational materials, new courses,
          interesting posts, popular books, and much more!
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
