import React, { useEffect, useState } from 'react'
import './earn.css'
import axios from 'axios'
import TableCrypto from '../../components/TableCrypto/TableCrypto'
import toast from 'react-hot-toast';
import { getAllUserCoins } from '../../services/api';
import { Link } from 'react-router';

const Earn = () => {
    const [inp1, setInp1] = useState(""); // Coin miqdarı
    const [inp2, setInp2] = useState(""); // Dollar miqdarı
    const [selectCoin, setSelectCoin] = useState("1"); // Seçilən Coin
    const [coins, setCoins] = useState(null); // API-dən gələn coinlər
    const [userCoins, setUserCoins] = useState(null); // İstifadəçinin coini

    async function fetchUserCoins() {
        const cripto = await getAllUserCoins();
        setUserCoins(cripto);
        console.log("user::", cripto);

    }

    const fetchCoins = async () => {
        const response = await axios.get(`http://localhost:3000/api/coins`);
        setCoins(response.data.coins);
    };

    useEffect(() => {
        fetchCoins();
        fetchUserCoins();
    }, []);

    useEffect(() => {
        handleChange();
    }, [inp1, selectCoin]);

    function handleChange() {
        setInp2(inp1 * selectCoin)
    }

    async function sellCoin() {
        const balance = parseFloat(localStorage.getItem("balance")) || 0;
        const userCoin = userCoins?.find(c => c.currency === selectCoin);

        if (!userCoin || parseFloat(userCoin?.count) < parseFloat(inp1)) {
            return toast.error("Sizdə kifayət qədər bu coin yoxdur!");
        }

        try {
            const newBalance = balance + parseFloat(inp2);
            localStorage.setItem("balance", newBalance.toFixed(2));
            toast.success("Coin satıldı, balansınız artırıldı!");
            fetchCoins()
        } catch (error) {
            console.log(error);
            return toast.error("Gözlənilməz xəta baş verdi");
        }
    }

    if (userCoins?.status == 500) {
        return <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
            <h2 className="text-2xl font-semibold text-gray-900  mb-4">
                Sizin əvvəlcə giriş etməlisiniz
            </h2>
            <Link to={"/login"} >
                <button style={{ padding: 10 , marginTop:20}} className=" bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200">
                    Giriş et
                </button>
            </Link>
        </div>
    }



    return (
        <>
            <div className="container">
                <div style={{ margin: "0 auto", paddingBottom: "200px", maxWidth: 500 }} className="buy-crypto">
                    <h1>Sell Crypto</h1>

                    <div className="spend">
                        <input
                            value={inp1}
                            onChange={(e) => {
                                setInp1(e.target.value);
                                handleChange();
                            }}
                            placeholder='0' type="text"
                        />
                        {
                            userCoins &&
                            <select
                                value={selectCoin}
                                onChange={(e) => {
                                    setSelectCoin(e.target.value);
                                    handleChange();
                                }}
                                className="custom-select"
                            >
                                {/* {userCoins && userCoins?.map((item, i) => (
                                    <option key={i} value={item.currency}>
                                        {item.type} ({item.count} ədəd)
                                    </option>
                                ))} */}
                            </select>
                        }
                    </div>

                    <div className="receve ">
                        <input
                            value={inp2}
                            placeholder='0'
                            type="text"
                            disabled
                        />
                        <span className='custom-select1'>USD</span>
                    </div>

                    <button onClick={sellCoin}>Sell Coin</button>
                </div>
            </div>
            <div style={{ paddingBottom: "130px" }} className="tables">
                <TableCrypto />
            </div>
        </>
    );
}

export default Earn;
