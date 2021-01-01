import React from "react";
import { useParams } from "react-router-dom";
import { citiesData } from "../data/citiesData";

const CitiesDetails = () => {
  const params = useParams();
  const { cityID } = useParams();

  const city = citiesData.filter(item => item._id === Number(cityID));

  return (
    <div className="cities">
      <h1 class="mb-5">Cities</h1>
      <h2>{city[0].header}</h2>
      <p>{city[0].text}</p>
    </div>
  );
};
export default CitiesDetails;
