import React from "react";

import "./ListGroup.css";

const ListGroup = ({ list, onItemSelect, selectedItem }) => {
  return (
    <select
      className="list"
      value={selectedItem}
      onChange={(e) => onItemSelect(e.target.value)}
    >
      {list.map((option) => (
        <option key={option._id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default ListGroup;
