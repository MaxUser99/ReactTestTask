import React from "react";

const Films = ({ films }) => {
  let content;
  let label;
  if (films.length > 1) {
    const list = films.map((film, i) => <li key={i}>{films[i]}</li>);
    content = <ul>{list}</ul>;
    label = "Films: ";
  } else {
    content = <p>Film: {films || "LOADING..."}</p>;
  }
  return <div>{label}{content}</div>;
};

export default Films;
