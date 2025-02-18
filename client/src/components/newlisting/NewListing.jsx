import React, { useEffect, useState } from "react";
import "./NewListing.css";
import axios from "axios";
import { Link } from "react-router";

const NewListing = () => {
  const [coins, setCoins] = useState([]); 
  const [filter, setFilter] = useState("all"); 

  // Yenilənmiş coinləri götürmək üçün funksiya
  const getNewCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "gecko_desc", 
            per_page: 4, 
            page: 1,
            sparkline: false,
          },
        }
      );
      setCoins(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getPopularCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc", 
            per_page: 4,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCoins(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (filter === "popular") {
      getPopularCoins(); 
    } else {
      getNewCoins(); 
    }

    const interval = setInterval(() => {
      if (filter === "popular") {
        getPopularCoins();
      } else {
        getNewCoins();
      }
    }, 300000); 

    return () => clearInterval(interval); 
  }, [filter]);

  return (
    <>
      <div className="filter-buttons">
        <button onClick={() => setFilter("popular")}>Popular</button>
        <button onClick={() => setFilter("all")}>New Listing</button>
        <Link to={"./allCoins"}>
        <button style={{ color: "gray" }}>View All 350+ Coins</button>
        </Link>
      </div>

      <div className="papular-list">
        <div className="coins-container">
          {coins.length > 0 ? (
            coins.map((item) => (
              <div className="coins-list" key={item.id}>
                <h1>
                
                  {item.symbol.toUpperCase()} <span>{item.name}</span>
                </h1>
                <p>${item.market_cap.toLocaleString()}</p>
                <p
                    style={{
                      color:
                          item.price_change_percentage_24h < 0 ? "red" : "green",
                  }}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewListing;
