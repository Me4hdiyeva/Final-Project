import React, { useEffect, useState } from 'react'

import './earn.css'
import axios from 'axios'
import TableCrypto from '../../components/TableCrypto/TableCrypto'
import toast from 'react-hot-toast';
import { buyCripto, getAllUserCoins, sellUserCoin } from '../../services/api';
import { Link } from 'react-router';

const Earn = () => {

    const [inp1, setInp1] = useState("")
    const [inp2, setInp2] = useState("")
    const [select2, setSelect2] = useState("96326")
    const [data, setData] = useState([])
    const [name, setName] = useState(null)
    const [count, setCount] = useState(null)

    async function handleData() {
        const cripto = await getAllUserCoins()
        setData(cripto);
        setSelect2(cripto[0]?.currency)
        setCount(cripto[0]?.count)
        setName(cripto[0]?.type)
        console.log(data);

    }

    useEffect(() => {
        handleData()
    }, [])

    useEffect(() => {
        handleChange()
    }, [inp1, inp2, select2])

    function handleChange() {
        setInp1((select2) * inp2)
    }

    async function sellCoin() {
        if (!localStorage.getItem("userid")) {
            return navigate("/login")
        }

        if (data.length == 0) {
            return toast.error("Balansinizda kifayet coin yoxdur!")
        }

        if (+inp2 > +count) {
            return toast.error("Balansinizda kifayet coin yoxdur!")
        }

        try {
            const id = localStorage.getItem("userid");
            const satis = await sellUserCoin(id, name, inp2, inp1)
            localStorage.setItem("balance", satis.newBalance)
            toast.success("Coin satisa verildi")
        } catch (error) {
            console.log(error);
            return toast.error("Gozlenilmez xeta bas verdi")
        }
    }

    if (data?.length == 0) {
        return (
            <>
                <main className='h-screen flex justify-center items-top'>
                    <div className='text-center'>
                        <h1 className='font-bold'>
                            Sizin sata bileceyiniziz coininiz yoxdur!
                        </h1>
                        <Link to={"/grafic"}>
                            <button style={{ padding: 10, marginTop: "30px" }} class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Özünüzə coin alın
                            </button>
                        </Link>
                    </div>
                </main>
            </>
        )
    }
    return (
        <>
            <div className="container">


                <div style={{ margin: "0 auto", paddingBottom: "200px" }} className="buy-crypto">
                    <h1>Sell</h1>

                    <div className="spend">
                        <input
                            value={inp2}
                            onChange={(e) => {
                                setInp2(e.target.value)
                                handleChange()
                            }}
                            placeholder='3.000-1,350,000' type="text" />
                        {
                            data.length > 0 &&
                            <select
                                value={select2}
                                onChange={(e) => {
                                    setSelect2(e.target.value);
                                    handleChange();
                                    setCount(e.target.options[e.target.selectedIndex].dataset.count)
                                    setName(e.target.options[e.target.selectedIndex].dataset.name)
                                }}
                                className="custom-select"
                            >

                                {data?.map((item, i) => (
                                    <option key={i}
                                        value={item.currency}
                                        data-count={item.count}
                                        data-name={item.type}
                                    >
                                        {item.type} count:({item.count})
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
                            }} placeholder='0' type="text" />

                        <div className='custom-select1'>
                            USD $
                        </div>
                    </div>
                    <button onClick={sellCoin}>Verify Identity</button>
                </div>
            </div>
            <div style={{ paddingBottom: "130px" }} className="tables">
                <TableCrypto />
            </div>

        </>
    )
}

export default Earn
