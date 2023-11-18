import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <h1>
          {" "}
          <span className="city-name">Chennai </span>
        </h1>
        <h2 className="calendar">Date</h2>
        <h1>
          <span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              id="icon"
              className="icon"
            />
            <strong id="temperature"> 12</strong>
            <span className="units">
                ℃| ℉
              
            </span>
          </span>
        </h1>
      </div>
      <div className="col-6">
        <h3 className="description">Clear Sky</h3>
        <h3>
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </h3>
      </div>
    </div>
  );
}