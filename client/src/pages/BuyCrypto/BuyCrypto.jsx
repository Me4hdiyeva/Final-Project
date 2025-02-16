import React, { useEffect, useState } from 'react'

import './BuyCrypto.css'
import axios from 'axios'


const BuyCrypto = () => {


    const [ coins, setCoins ] = useState([])

    const getHotCoins =async()=>{
     const coins = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    //  console.log(coins.data);
     
     const top5Coins = coins.data.slice(0, 5);
     console.log(top5Coins);
     setCoins(top5Coins)
     

    }
    useEffect(() => {
        // İlk məlumat çəkmə
        getHotCoins();
    
        // Hər 4 dəqiqədən bir məlumat çəkmək üçün interval təyin edirik (4 dəqiqə = 240,000 ms)
        const interval = setInterval(() => {
          getHotCoins();
        }, 240000);
    
        // Cleanup - komponent silindikdə intervalı təmizləyirik
        return () => clearInterval(interval);
      }, []); // Yalnız bir dəfə mount olduğunda işləyir




    return (
        <>
            <div className="container">
                <div className="crypto-sec">
                    <h1>Buy Crypto</h1>
                    <div className='hot-Cryptos'>
                        <h3>Hot Cryptos</h3>
                        {

                            coins.map((coin,index)=>(

                        <div key={index} className="crypts">
                            <div className="div-img">
                                <img src={coin.image} alt="" />
                               {coin.symbol}
                            </div>
                            <div className="price-crypyto">${coin.current_price}</div>
                            <div className="procent-crypto">{coin.price_change_percentage_24h}</div>
                        </div>
                            ))



                        }
                   

                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyCrypto
