import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

const [foods, setFoods] = useState(items)
const [selectedCategory, setFilterBy] = useState("All")

function handleFilterChange(event){
  setFilterBy(event.target.value)
}

const itemsToDisplay =  items.filter((food) => {
  if (selectedCategory === 'All') return true
  return food.category === selectedCategory
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
