import React from "react";

const GeneralSetting = () => {
  return (
    <div>
      <div className="genreral-conatiner">
        <div className="fields">
          <h4>General settings</h4>
          <select className="general-fields">
            <option>1 to 1</option>
            <option>1 to many</option>
            <option>many to many</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="Description"
            className="general-fields"
          />
          <br />
          <select className="general-fields">
            <option>Machine learning</option>
            <option>Data Science</option>
            <option>javascript</option>
          </select>
        </div>
        <div>
          <p>from whom you will be provide this service</p>
          <br />
          <input type="checkbox" />
          P2P(person to person)
          <span>
            <input
              className="p2p"
              type="text"
              placeholder="$ 35 /hour"
            />
          </span>
          <br />
          <input type="checkbox" />
          P2B(person to Business)
          <span>
            <input
              className="p2b"
              type="text"
              placeholder="$ 200 /hour"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;
