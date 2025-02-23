import React, { useEffect, useState } from 'react'

import './BuyCrypto.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { buyCripto } from '../../services/api'


const BuyCrypto = () => {
    const [param, setParam] = useState(new URLSearchParams(location.search).get("param"));

    const [inp1, setInp1] = useState("")
    const [inp2, setInp2] = useState("")
    const [select1, setSelect1] = useState("1")
    const [select2, setSelect2] = useState("96326")
    const [flag, setFlag] = useState(true)
    const [name, setName] = useState("Bitcoin")
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [coins, setCoins] = useState([])

    const getHotCoins = async () => {
        const coins = await axios.get(`http://localhost:3000/api/coins`)
        setData(coins.data)
        const top5Coins = coins.data.coins.slice(0, 5);
        setCoins(top5Coins)
        console.log(data);

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
            setInp1((select2 / select1) * inp2)
        }
    }





    async function buyCoin() {
        const balance = localStorage.getItem("balance")
        if (+balance < +inp1) {
            return toast.error("Balansinizda kifayet qeder mebleg yoxdur!")
        }

        try {
            const id = localStorage.getItem("userid");
            const alis = await buyCripto(id, name, inp2, inp1)
            localStorage.setItem("balance", balance - inp2)
            toast.success("Coin pul qabina elave olundu")
        } catch (error) {
            console.log(error);
            return toast.error("Gozlenilmez xeta bas verdi")

        }

    }

    return (
        <>
            {/* <button
                onClick={() => {
                    console.log(param)
                }}>
                sdfjcgsdhufcbshdjb</button> */}
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
                                    <div style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }} className="procent-crypto">{coin.price_change_percentage_24h}</div>
                                </div>
                            ))



                        }


                    </div>
                </div>

                <div className="buy-crypto">
                    <h1>Buy</h1>

                    <div className="spend">
                        <input
                            value={inp2}
                            onChange={(e) => {
                                setFlag(false)
                                setInp2(e.target.value)
                                handleChange()
                            }}
                            placeholder='3.000-1,350,000' type="text" />
                        {
                            data &&
                            <select
                                value={select2}
                                defaultValue={data?.coins[param]?.name
                                }
                                onChange={(e) => {
                                    setFlag(false);
                                    setSelect2(e.target.value);
                                    handleChange();
                                    // setParam("/garfic?param"+ );
                                    setName(e.target.options[e.target.selectedIndex].dataset.name)
                                    navigate("/grafic?param=" + e.target.options[e.target.selectedIndex].dataset.id);
                                    getHotCoins()
                                    toast.success("Qrafikdə dəyişiklik baş verdi")
                                }}
                                className="custom-select"
                            >

                                {data.coins.map((item, i) => (
                                    <option key={i} value={item.current_price} data-id={i} data-name={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        }


                    </div>

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


                    <button onClick={buyCoin}>Verify Identity</button>

                </div>
            </div>
        </>
    )
}

export default BuyCrypto
