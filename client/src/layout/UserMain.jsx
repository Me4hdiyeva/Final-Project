import React from 'react'
import "./User/user.css"



function UserMain() {
    return (
        <>

        <div className="container">
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



            
        </div>











        
        
        
        
        </>
    )
}

export default UserMain