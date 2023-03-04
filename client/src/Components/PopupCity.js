import React from "react";
import { Link } from 'react-router-dom'

function PopupCity({ city }) {

  const destinations = []

  for (let i = 0; i < city.destinations.length; i++) {
    destinations.push(city.destinations[i])
  }

  return (
    <div>
      <h1>Click on a route for recommendations from other travellers:</h1>
      <ul>
      {destinations.map((destination) =>
      <li key={destination.id} ><Link to={`/routes/${destination.routeid}`}>{city.name} to {destination.name}</Link></li>
      )}
      </ul>
    </div>
  );
}
export default PopupCity;

