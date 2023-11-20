import React from "react";

export default function Form() {
  return (
    <div>
      <h2 class="city">Type the name of the city you're looking for:</h2>
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="text"
              placeholder="Enter city name"
              class="text"
              id="search"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="submit" />
          </div>
          <h3>An <a href="https://github.com/Saathviga9605/using-react-weather">open source</a> code by Saathviga Balaji </h3>
        </div>
      </form>
    </div>
  );
}
