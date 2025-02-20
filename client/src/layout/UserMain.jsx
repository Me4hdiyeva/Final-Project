import React from 'react'
import "./User/user.css"



function UserMain() {
    return (
        <>

            <div className="container">
                <div className="users-page">

                    <div className="user-data">
                        <div className='user-name'>
                            <div className="user-img">
                                <img src="" alt="" />
                            </div>
                            <h1>User name</h1>
                        </div>

                        <div className="id">
                            <h1>UID</h1>
                            <span>1068734689 </span>
                        </div>
                        <div className="level">
                            <h1>VIP Level</h1>
                            <span>Regular Level</span>
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

                    <div className="balances">
                        <h1>Estimated Balance </h1>

                        <h2>0.00 <span>
                            <select name="" id="">
                                <option value="">BTC</option>
                                <option value="">ETH</option>
                                <option value="">BNB</option>
                                <option value="">USDT</option>
                            </select>
                        </span>
                        </h2>
                        <span>= $0.00</span>
                        <h3>Today‘s PnL
                            <span>
                                + $0.00(0.00%)
                            </span>
                            <i class="fa-solid fa-eye"></i>
                            <i class="fa-solid fa-eye-slash"></i>
                        </h3>

                        <button>Deposit</button>
                        {/* <button></button> */}
                    </div>



                </div>




            </div>















        </>
    )
}

export default UserMain