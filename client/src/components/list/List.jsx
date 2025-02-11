import React, { useState } from 'react'

import './List.css'

const List = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const handleClick = () => {
    setIsVisible(prevState => !prevState);
  };
  return (
    <div>
  
    <button onClick={handleClick}>
      {isVisible ? "What is a cryptocurrency exchange?" : "What is a cryptocurrency exchange?"}
    </button>
    {isVisible && <h2>Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.</h2>}
  </div>
  )
}

export default List
