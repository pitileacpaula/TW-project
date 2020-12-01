import React from "react";
import SearchClass from "./TableRow";

export default function Container(props) {
  function search(query) {
    console.log(query);
  }

  return (
    <div>
      <SearchClass onSearch={search} />
    </div>
  );
}
