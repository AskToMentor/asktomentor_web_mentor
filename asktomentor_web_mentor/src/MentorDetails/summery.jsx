import React from 'react';
import './summery.css'; // Import the CSS file for styling

function Popup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4>Service summary</h4>

        <div className="section">
          <div className="section-title">Name:</div>
          <p>1 to 1</p>
        </div>

        <div className="section">
          <div className="section-title">Description:</div>
          <p>Data Scientist with extensive experience in AI Technology</p>
        </div>

        <div className="section">
          <div className="section-title">Category:</div>
          <p>Machine Learning</p>
        </div>

        <div className="section">
          <div className="section-title">Customer type:</div>
          <div className="button-group">
            <button>P2B</button>
            <button>P2P</button>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Pricing:</div>
          <div className="button-group">
            <div className="price-button">$35/h P2P</div>
            <div className="price-button">$200/h P2B</div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Date & Time:</div>
          <p>All days 7:15 PM - 7:45 PM</p>
        </div>

        <div className="button-group">
          <button>Save & Add</button>
          <button>Add</button>
        </div>

        <button className="popup-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Popup;
