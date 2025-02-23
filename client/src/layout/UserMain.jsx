import React, { useEffect, useState } from 'react'
import "./User/user.css"
import LabTabs from '../components/markets-section/LabTabs'
import SimpleBottomNavigation from '../components/CardsPending/SimpleBottomNavigation'
import { getUserById } from '../services/api'
import { Link } from 'react-router'
import TableCrypto from '../components/TableCrypto/TableCrypto'
const level = ["Regular", "Bronze", "Silver", "Gold", "Platinum"]
function UserMain() {

    const [kripto, setKripto] = useState(97_381)
    const [user, setUser] = useState(null)
    const [verify, setVerify] = useState(false)
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        getUserById(localStorage.getItem("userid")).then(
            res => {
                setUser(res)
                setVerify(res.verified_email)
            }
        )
    }, [])

    return (
        <>
            <div className="container">
                <div className="users-page">
                    <div className="user-data">
                        <div className='user-name'>
                            <div className="user-img">
                                <img
                                    src={user?.profileImage ? user.profileImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/191px-Binance_Logo.svg.png?20210315012944"} alt="User profile foto"
                                />
                            </div>
                            <div>
                                <h1>{user?.username}</h1>
                                <p>{user?.email}</p>
                            </div>
                        </div>

                        <div className="id">
                            <h1>UID</h1>
                            <span>{user?._id?.slice(0, 10)} </span>
                        </div>
                        <div className="level">
                            <h1>VIP Level</h1>
                            <span>
                                {
                                    user?.balance < 100 ? level[0] :
                                        user?.balance < 300 ? level[1] :
                                            user?.balance < 500 ? level[2] :
                                                user?.balance < 1000 ? level[3] : level[4]
                                } level
                            </span>
                        </div>
                        <div className="following">
                            <h1>Following</h1>
                            <span>0</span>
                        </div>
                        <div className="followers">
                            <h1>Followers</h1>
                            <span>0</span>
                        </div>
                    </div>

                    <div className="pending">
                        <h1>Get Started</h1>
                        <SimpleBottomNavigation verify={verify} balance={user?.balance} />
                    </div>

                    <div className="balances">
                        <h1>Estimated Balance </h1>

                        <h2>{hidden ? (user?.balance / +kripto).toFixed(10) : "****"} <span>
                            <select onChange={(e) => {
                                setKripto(e.target.value)
                            }} >
                                <option value="97381">BTC</option>
                                <option value="2646">ETH</option>
                                <option value="648">BNB</option>
                                <option value="0.998">USDT</option>
                            </select>
                        </span>
                            <span>= ${hidden ? user?.balance : "****"}</span>

                            <i style={{ display: hidden ? "inline-block" : "none" }} onClick={() => setHidden(!true)} className="fa-solid fa-eye"></i>
                            <i style={{ display: !hidden ? "inline-block" : "none" }} onClick={() => setHidden(!false)} className="fa-solid fa-eye-slash"></i>
                        </h2>

                        <Link to={"payment"}> <button>Deposit</button></Link>
                        {/* <button></button> */}
                    </div>


                    <div className="markets">
                        <h1>Coins</h1>
                        <div className="nav-market">
                            {/* <LabTabs /> */}
                     <TableCrypto/>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UserMain