import React, { useEffect, useState } from 'react'

import './BuyCrypto.css'
import axios from 'axios'


const BuyCrypto = () => {
    const [inp1, setInp1] = useState("")
    const [inp2, setInp2] = useState("")
    const [select1, setSelect1] = useState("1")
    const [select2, setSelect2] = useState("96326")
    const [flag, setFlag] = useState(true)

    const [data, setData] = useState(null)
    const [coins, setCoins] = useState([])

    const getHotCoins = async () => {
        const coins = await axios.get("http://localhost:3000/api/coins")
        setData(coins.data)
        const top5Coins = coins.data.coins.slice(0, 5);
        setCoins(top5Coins)
        console.log( coins.data);
        
    }

    useEffect(() => {
        getHotCoins();
        const interval = setInterval(() => {
            getHotCoins();
        }, 240000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        handleChange()
    }, [inp1, inp2, select1, select2])

    function handleChange() {
        if (flag) {
            setInp2((select1 / select2) * inp1)
        } else {
            setInp1((select2/ select1) * inp2)
        }
    }

    return (
        <>
            <div className="container">
                <div className="crypto-sec">
                    <h1>Buy Crypto</h1>
                    <div className='hot-Cryptos'>
                        <h3>Hot Cryptos</h3>
                        {

                            coins.map((coin, index) => (

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

                <div className="buy-crypto">
                    <h1>Buy</h1>

                    <div className="receve">
                        <input
                            value={inp1}
                            onChange={(e) => {
                                setInp1(e.target.value)
                                handleChange()
                                setFlag(true)
                            }} placeholder='0' type="text" />

                        <select
                            value={select1}
                            onChange={(e) => {
                                setFlag(true)
                                setSelect1(e.target.value)
                                handleChange()
                            }}
                            className="custom-select">
                            <option value="1">USD $</option>
                            {data &&
                                data.currency.map(item =>
                                    <option value={1 / item.rate} > {item.fullName} - {item.symbol} </option>
                                )
                            }
                        </select>
                    </div>

                    <div className="spend">
                        <input
                            value={inp2}
                            onChange={(e) => {
                                setFlag(false)
                                setInp2(e.target.value)
                                handleChange()
                            }}
                            placeholder='3.000-1,350,000' type="text" />
                        <select
                            value={select2}
                            onChange={(e) => {
                                setFlag(false)
                                setSelect2(e.target.value)
                                handleChange()
                            }}
                            className="custom-select">
                            {data &&
                                data.coins.map(item =>
                                    <option value={item.current_price}> {item.name} </option>
                                )
                            }
                        </select>


                    </div>
                    <button>Verify Identity</button>

                </div>
            </div>
        </>
    )
}

export default BuyCrypto
