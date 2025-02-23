import React, { useState } from 'react'

import './List.css'

const List = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  // Her bir yazıya tıklandığında activeIndex'i değiştirir
  const handleClick = (index) => {
    // Eğer aynı yazıya tıklanırsa, o yazıyı kapat
    if (activeIndex === index) {
      setActiveIndex(null); // Yazıyı kapat
    } else {
      setActiveIndex(index); // Yeni bir yazıyı aç
    }
  };

  return (
    <>
      <div className="lists">

        <div>
          <button onClick={() => handleClick(0)}> <span>1</span> What is a cryptocurrency exchange?</button>
          {activeIndex === 0 && <p>Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.</p>}
        </div>
        <div>
          <button onClick={() => handleClick(1)}>  <span>2</span> What products does Binance provide?</button>
          {activeIndex === 1 && <p className='aksd-quastion'>Binance is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.

            With Binance users can:
            Trade hundreds of cryptocurrencies on Spot, Margin, and Futures markets.
            Buy and sell cryptocurrencies with Binance P2P.
            Earn interest on your crypto with Binance Earn.
            Buy or earn new tokens on Binance Launchpad.
            Trade, stake, and loan NFTs on Binance NFT marketplace.</p>}
        </div>
        <div>
          <button onClick={() => handleClick(2)}> <span>3</span> How to buy Bitcoin and other cryptocurrencies on Binance</button>
          {activeIndex === 2 && <p>There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.</p>}
        </div>
        <div>
          <button onClick={() => handleClick(3)}> <span>4</span> How to track cryptocurrency prices</button>
          {activeIndex === 3 && <p>The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time</p>}
        </div>
        <div>
          <button onClick={() => handleClick(4)}>
            <span>5</span> How to trade cryptocurrencies on Binance</button>
          {activeIndex === 4 && <p>You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.</p>}
        </div>


      </div>
    </>

  )
}

export default List
