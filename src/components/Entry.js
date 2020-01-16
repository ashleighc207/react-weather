import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/EntryStyles.css";

const Entry = () => {
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="main-container">
      <h2 className="heading">Welcome to your custom weather report!</h2>
      <p className="description">
        This app uses local storage in your browser to save your name and zip
        code to check the weather. If you clear your storage, you will need to
        re-enter your information for your forecast.
      </p>
      <label className="label" htmlFor="name">
        Name:
      </label>
      <input
        className="input"
        type="text"
        value={name}
        id="name"
        onChange={e => setName(e.target.value)}
      />
      <label className="label" htmlFor="zip">
        Zip Code:
      </label>
      <input
        className="input"
        type="text"
        value={zip}
        id="zip"
        onChange={e => setZip(e.target.value)}
      />
      <Link
        className="button"
        to={{
          pathname: "/Home",
          name: name,
          zip: zip
        }}
      >
        Save
      </Link>
    </div>
  );
};

export default Entry;
