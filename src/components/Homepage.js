import React, { useState, useEffect } from "react";
import "../styles/HomepageStyles.css";
import axios from "axios";

const Homepage = () => {
  const [zip, setZip] = useState(localStorage.getItem("zip") || 0);
  const [name, setName] = useState(localStorage.getItem("name") || "Guest");
  const [data, setData] = useState(localStorage.getItem("weatherData") || {});

  const getWeather = async zip => {
    try {
      if (!localStorage.getItem("weatherData")) {
        // let response = await axios.get(
        //   `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        // );
        // setData(response.data);
        // localStorage.setItem("weatherData", JSON.stringify(response.data));
        // console.log(JSON.stringify(response, null, 2));
      } else {
        let wd = JSON.parse(localStorage.getItem("weatherData"));
        console.log(wd);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      getWeather(21234);
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div class="main night">
      <div>Welcome, {name}</div>
      <p>The weather today is </p>
    </div>
  );
};

export default Homepage;
