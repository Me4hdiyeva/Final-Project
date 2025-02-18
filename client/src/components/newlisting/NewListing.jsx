import React from 'react'
import { useState } from "react";

import './NewListing.css'



const NewListing = () => {
  const [filter, setFilter] = useState("all");

  const items = [
    { id: 1, name: "Item 1", category: "popular" },
    { id: 2, name: "Item 2", category: "regular" },
    { id: 3, name: "Item 3", category: "popular" },
    { id: 4, name: "Item 4", category: "regular" },
  ];

  const filteredItems = filter === "all" ? items : items.filter(item => item.category === "popular");

  return (
    <>
      <div className='filter-buttons'>

        <button
          onClick={() => setFilter("popular")}
        >
          Popular
        </button>

        <button
          onClick={() => setFilter("all")}
        >
          New Listing
        </button>
        <button style={{  color: 'gray' }}>

          View    All 350+ Coins
        </button>

      </div>


      <div className="papular-list">

        {/* {filteredItems.map(item => (
          <div key={item.id} >
            {item.name}
          </div>
        ))} */}
        <div className='coins-list'>
          <h1><img src="" alt="" />BTC <span>Bitcoin</span></h1>
          <p>$95,406,00</p>
          <p style={{ color: "red" }}>-1.32%</p>
        </div>
        <div className='coins-list'>
          <h1><img src="" alt="" />BTC <span>Bitcoin</span></h1>
          <p>$95,406,00</p>
          <p style={{ color: "red" }}>-1.32%</p>
        </div>
        <div className='coins-list'>
          <h1><img src="" alt="" />BTC <span>Bitcoin</span></h1>
          <p>$95,406,00</p>
          <p style={{ color: "red" }}>-1.32%</p>
        </div>


      </div>


    </>
  )
}

export default NewListing
