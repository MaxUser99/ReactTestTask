import React from "react";
import { connect } from "react-redux";

const Vehicles = ({ vehicles, isURL }) => {
  let content;
  if (isURL(vehicles)) {
    content = "LOADING...";
  } else {
    content = (
      <ul>
        {vehicles.map((obj, i) => <li key={i}>{obj}</li>)}
      </ul>
    );
  }
  return <div>Vehicles:{content}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  vehicles: state.data[ownProps.id].vehicles,
  isURL:    ownProps.isURL
});

export default connect(mapStateToProps)(Vehicles);
