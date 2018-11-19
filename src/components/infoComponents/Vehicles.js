import React from "react";

function Vehicles({ vehicles }) {
  const content = vehicles
    .map((obj, i) => <p key={i}>vehicle: {obj.name}, model = {obj.model}</p>);
  return <div>{content}</div>;
}

export default Vehicles;
