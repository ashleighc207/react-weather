import React, { useState, useEffect } from "react";
import "../styles/HomepageStyles.css";
import axios from "axios";
import { useLocation } from "react-router";

const Homepage = ({ props }) => {
  const { name, zip } = useLocation();

  const [firstName, setFirstName] = useState(
    localStorage.getItem("name") || name
  );
  const [zipCode, setZipCode] = useState(localStorage.getItem("zip") || zip);
  const [data, setData] = useState({});
  const [dateArr, setDateArr] = useState([]);
  const [city, setCity] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("dawn");

  const getWeather = async () => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      await setData(response);
      await setCity(response.data.city.name);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const setInfo = async () => {
    if (zip && zip != zipCode) {
      await setZipCode(zip);
      await localStorage.setItem("zip", zip);
    }
    if (name & (name != firstName)) {
      await setFirstName(name);
      await localStorage.setItem("name", name);
    }
  };

  useEffect(() => {
    console.log(zip, name, zipCode, firstName);
    setInfo();
  }, [zip, zipCode, name, firstName, setInfo, getWeather]);

  useEffect(() => {
    getWeather();
  }, [zipCode, firstName]);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      let today = new Date();

      today.getHours() < 5
        ? setTimeOfDay("night")
        : today.getHours() < 8
        ? setTimeOfDay("dawn")
        : today.getHours() < 12
        ? setTimeOfDay("morning")
        : today.getHours() < 17
        ? setTimeOfDay("daytime")
        : today.getHours() < 20
        ? setTimeOfDay("sunset")
        : setTimeOfDay("night");
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  const generateDayGroups = () => {
    let newArray = [];
    for (var date in data) {
      newArray.push(data[date]);
    }
    setDateArr(newArray);
    return newArray;
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (data.data) {
        const groups = data.data.list.reduce((groups, date) => {
          const datePoint = new Date(date.dt * 1000).getDate();
          if (!groups[datePoint]) {
            groups[datePoint] = [];
          }
          groups[datePoint].push(date);
          return groups;
        }, {});
        setData(groups);
        console.log(groups);
      }
      if (!data.data) {
        generateDayGroups();
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [data]);

  return (
    <div className={`main ${timeOfDay}`}>
      <div className="welcome-container">
        <div className="welcome">Welcome, {firstName || "Guest"}</div>
        {console.log(city)}
        <p className="today">
          Here's your 5-day forecast{city && ` for ${city}`}
        </p>
      </div>
      {dateArr && (
        <div className="date-card-container">
          {dateArr &&
            dateArr.map(d => {
              return (
                <div key={d[0].dt} className="date-card">
                  <span className="main-date-title">
                    {new Date(d[0].dt * 1000).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                  <div
                    className={`weather-row ${
                      d.length >= 4 ? "inset-shadow" : ""
                    }`}
                  >
                    {d.map(date => {
                      return (
                        <div key={date.dt} className="weather-block">
                          <div>
                            <span className="date-time">
                              {` @ ${
                                new Date(date.dt * 1000).getHours() < 12
                                  ? new Date(date.dt * 1000).getHours()
                                  : new Date(date.dt * 1000).getHours() - 12
                              }:${
                                new Date(date.dt * 1000).getMinutes() < 10
                                  ? "0"
                                  : ""
                              }${new Date(date.dt * 1000).getMinutes()} ${
                                new Date(date.dt * 1000).getHours() < 12
                                  ? " AM"
                                  : " PM"
                              }`}
                            </span>
                          </div>
                          <div>
                            <span className="weather-title ">Temperature:</span>
                            <span className="temp">{`${date.main.temp.toFixed(
                              0
                            )} `}</span>
                          </div>

                          <div>
                            <span className="weather-title">Weather:</span>
                            <div className="weather-description">
                              <img
                                className="weather-icon"
                                src={`http://openweathermap.org/img/w/${date.weather[0].icon}.png`}
                              />
                              <span>
                                {" "}
                                {`${date.weather[0].main} -  ${date.weather[0].description}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Homepage;
