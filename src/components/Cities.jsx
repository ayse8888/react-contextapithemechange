import React from "react";
import { citiesData } from "../data/citiesData";
import { Link, Switch, Route } from "react-router-dom";
import CitiesDetail from "./CitiesDetail";
import "./styles.css";

function Cities(props) {
  const citiesMap = citiesData.map(item => (
    <li>
      <Link to={`/cities/${item._id}`}>{item.header}</Link>
    </li>
  ));

  return (
    <div className="cities">
      <h1>Cities</h1>
      <hr />
      {citiesMap}
    </div>
  );
}

export default Cities;
