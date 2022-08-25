import React from "react";
import {useState} from "react"

function Item({ name, category }) {

  const [cart, setClick] = useState(false)

  function clickHandler(){
    setClick((cart) => !cart)
  }

  const liClass = cart ? "in-cart" : ""

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
