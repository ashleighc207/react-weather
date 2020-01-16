import React, { useState, useEffect } from "react";
import "../styles/HomepageStyles.css";
import axios from "axios";
import { useLocation } from "react-router";

const Homepage = ({ props }) => {
  const { name, zip } = useLocation();

  const [firstName, setFirstName] = useState(
    localStorage.getItem("name") || ""
  );
  const [zipCode, setZipCode] = useState(localStorage.getItem("zip") || "");
  const [data, setData] = useState({});
  const [dateArr, setDateArr] = useState([]);

  const getWeather = async zip => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      await setData(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      getWeather(21234);
      if (zip) {
        setZipCode(zip);
        localStorage.setItem("zip", zip);
      }
      if (name) {
        setFirstName(name);
        localStorage.setItem("name", name);
      }
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

  useEffect(() => {
    console.log(dateArr);
  }, [dateArr]);

  return (
    <div className="main night">
      <div>Welcome, {firstName}</div>
      <p>The weather today is x in {zipCode}</p>
      {dateArr &&
        dateArr.map(d => {
          return (
            <div className="border">
              {d.map(date => {
                return (
                  <div key={date.dt}>
                    <span>
                      {`${new Date(date.dt * 1000).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                      })}`}{" "}
                    </span>
                    <span>
                      {`${
                        new Date(date.dt * 1000).getHours() < 12
                          ? new Date(date.dt * 1000).getHours()
                          : new Date(date.dt * 1000).getHours() - 12
                      }:${
                        new Date(date.dt * 1000).getMinutes() < 10 ? "0" : ""
                      }${new Date(date.dt * 1000).getMinutes()} ${
                        new Date(date.dt * 1000).getHours() < 12 ? " AM" : " PM"
                      }`}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Homepage;
