import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './allCoins.css'
import TableCoinsAll from '../../components/TableCoinsAll'

const AllCoins = () => {
    const [coins, setCoins] = useState([])
    const[ newCoin , setNewCoin] = useState([])
    const [ marketCaps , setMarketCaps] = useState([])
    const [tradingVolume, setTradingVolume] = useState([]);
    
    const getCoin = async () => {
        const getCryptos = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=3&page=1", {
            params: {
                //   vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 3,
                page: 1,
                //   sparkline: false,
            },
        })
        console.log(getCryptos.data);
        setCoins(getCryptos.data)





        // const getListingcoins = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd0", {
        //     params: {
        //         //   vs_currency: "usd",
        //         order: "market_cap_desc",
        //         per_page: 3,
        //         page: 2,
        //         //   sparkline: false,
        //     },
        // })
        // console.log(getListingcoins.data);





    }

    const getnewCoins = async () => {
       const getCoin =  await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    //    console.log(getCoin.data);
       const newDatas = getCoin.data.slice(-3)
       console.log(newDatas);
       setNewCoin(newDatas)
    }

    const marketCap = async () => {
        const getMarketCap = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=3&page=1")
        setMarketCaps(getMarketCap.data)
        console.log(getMarketCap.data);
        
    }

    useEffect(() => {
        getCoin();
        getTradingVolume()
        marketCap()
        getnewCoins()
        const interval = setInterval(() => {
            getCoin();
        }, 240000);

        return () => clearInterval(interval);
    }, []);


    const getTradingVolume = async () => {
        const getVolume = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=3&page=1");
        setTradingVolume(getVolume.data);
        console.log(getVolume.data);
    };




    return (
        <>
            <div className="container">

                <div className="allcoins">
                    <div className="row flex-wrap justify-center lg:justify-between">
                        <div className="col-3 !w-[500px]">
                            <div className='hot-Cryptos'>
                                <h3>Hot Cryptos</h3>
                                {
                                    coins.map((item, index) => (
                                        <div className="crypts">
                                            <div className="div-img">
                                                <img src={item.image} alt="" />
                                                <h1>
                                                    {item.symbol.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="price">

                                                ${item.current_price}
                                            </div>



                                            <div className="procent-crypto">
                                                <p
                                                    style={{
                                                        color:
                                                            item.price_change_percentage_24h < 0 ? "red" : "green",
                                                    }}
                                                >
                                                    {item.price_change_percentage_24h.toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>

                                    ))
                                }







                            </div>








                        </div>
                        <div className="col-3 !w-[500px]">
                            <div className='hot-Cryptos'>
                                <h3>New Cryptos</h3>
                                {
                                    newCoin.map((item, index) => (
                                        <div className="crypts">
                                            <div className="div-img">
                                                <img src={item.image} alt="" />
                                                <h1>
                                                    {item.symbol.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="price">

                                                ${item.current_price}
                                            </div>



                                            <div className="procent-crypto">
                                                <p
                                                    style={{
                                                        color:
                                                            item.price_change_percentage_24h < 0 ? "red" : "green",
                                                    }}
                                                >
                                                    {item.price_change_percentage_24h.toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>

                                    ))
                                }







                            </div>








                        </div>
                        <div className="col-3 !w-[500px]">
                            <div className='hot-Cryptos'>
                                <h3>Market Cap</h3>
                                {
                                    marketCaps.map((item, index) => (
                                        <div className="crypts">
                                            <div className="div-img">
                                                <img src={item.image} alt="" />
                                                <h1>
                                                    {item.symbol.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="price">

                                                ${item.current_price}
                                            </div>



                                            <div className="procent-crypto">
                                                <p
                                                    style={{
                                                        color:
                                                            item.price_change_percentage_24h < 0 ? "red" : "green",
                                                    }}
                                                >
                                                    {item.price_change_percentage_24h.toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>

                                    ))
                                }







                            </div>








                        </div>
                        <div className="col-3 !w-[500px]">
                            <div className='hot-Cryptos'>
                                <h3>Trading Volume</h3>
                                {
                                    tradingVolume.map((item, index) => (
                                        <div className="crypts">
                                            <div className="div-img">
                                                <img src={item.image} alt="" />
                                                <h1>
                                                    {item.symbol.toUpperCase()}
                                                </h1>
                                            </div>
                                            <div className="price">

                                                ${item.current_price}
                                            </div>



                                            <div className="procent-crypto">
                                                <p
                                                    style={{
                                                        color:
                                                            item.price_change_percentage_24h < 0 ? "red" : "green",
                                                    }}
                                                >
                                                    {item.price_change_percentage_24h.toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>

                                    ))
                                }







                            </div>








                        </div>



                    </div>


                    <TableCoinsAll />



                </div>




            </div>
        </>
    )
}

export default AllCoins
