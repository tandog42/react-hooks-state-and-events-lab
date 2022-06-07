import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isSelected, setIsSelected] = useState("all");

  function catChange(e) {
    setIsSelected(e.target.value);
  }

  const displaytems = items.filter(item => {
    if (isSelected === "all") {
      return true;
    }
    return item.category === isSelected;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={catChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displaytems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
