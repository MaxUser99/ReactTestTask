import React from "react";
import { connect } from "react-redux";

const Films = ({ films, isURL }) => {
  let content;
  let label = "";

  if (isURL(films)) {
    content = <p>Films: LOADING...</p>;
  } else if (films.length > 1) {
    content = <ul>{films.map((film, i) => <li key={i}>{films[i]}</li>)}</ul>;
    label = "Films";
  } else {
    content = <p>Film: {films[0]}</p>;
  }

  return <div>{label}{content}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  films: state.data[ownProps.id].films,
  isURL: ownProps.isURL
});

export default connect(mapStateToProps)(Films);
