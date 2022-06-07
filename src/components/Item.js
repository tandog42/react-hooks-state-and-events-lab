import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setAdded] = useState(true);
  const cart = isAdded ? "Add to Cart" : "Remove From Cart";

  function itemAdded() {
    setAdded((isAdded) => !isAdded)
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="in-cart" onClick={itemAdded}>
        {isAdded ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
