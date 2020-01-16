import React, { useState } from "react";
import { Link } from "react-router-dom";

const Entry = () => {
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Welcome to your custom weather report!</h2>
      <p>
        This app uses local storage in your browser to save your name and zip
        code to check the weather. If you clear your storage, you will need to
        re-enter your information for your forecast.
      </p>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
      </label>
      <Link
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
