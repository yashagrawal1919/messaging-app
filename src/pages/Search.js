import React from "react";
import Contact from "./Contact";

const Search = (props) => {
  return (
    <div>
      <Contact search={props.search} />
    </div>
  );
};

export default Search;
