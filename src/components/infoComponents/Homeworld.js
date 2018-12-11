import React from "react";
import { connect } from "react-redux";

const Homeworld = ({ homeworld, isURL }) => (
  <p>homeworld: {isURL(homeworld) ? "LOADING..." : homeworld}</p>
);

const mapStateToProps = (state, ownProps) => ({
  homeworld: state.data[ownProps.id].homeworld,
  isURL:     ownProps.isURL
});

export default connect(mapStateToProps)(Homeworld);
