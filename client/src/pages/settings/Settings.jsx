import React from 'react'
import "./settings.css"
const Settings = () => {
  return (
    <>
    <div className="container">


      <div className="settings">

        <div className="profile-settings">
                <h1>Profile</h1>
                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>Nickname & Avatar</h2>
            <p>Set up an avatar and nickname, it is suggested not to use your real name or the name of your social account as a nickname.</p>
            </div>
            <div className="edit">
                <div className="div-avatar">
                    <img src="" alt="" />
                </div>
                <span>Nickname</span>
                <button>Edit</button>
            </div>
                </div>
                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>C2C Profile</h2>
            <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
            </div>
            <div className="edit">
                <div className="div-avatar">
                 
                    <img src="" alt="" />
                </div>
                <span>gmail.com</span>
                <button>Edit</button>
            </div>
                </div>

                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>Password</h2>
            <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
            </div>
            <div className="edit">
             
                <span>******</span>
                <button>Edit</button>
            </div>
                </div>
        </div>
        <div className="profile-settings set-second">
                <h1>Notifications</h1>
                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>Notification Language</h2>
            <p>This will affect the language settings of E-mail and App push..</p>
            </div>
            <div style={{paddingLeft:"90px"}} className="edit">
         
                <span>Default</span>
                <button>Edit</button>
            </div>
                </div>
                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>Notification Preferences</h2>
            <p>Once configured, you will receive relevant on-site inbox notifications within the app and website.</p>
            </div>
            <div className="edit">
           
                <span style={{width:"200px", paddingLeft:"90px"}}>Activities, Trade Notification, Binance News</span>
                <button>Edit</button>
            </div>
                </div>

        </div>
        <div className="profile-settings">
                <h1>Privacy</h1>
                <div className="about-set-profile-avatar">
            <div style={{display:"flex", gap:"743px", justifyContent:"space-between"}} className="about-settings set-three">
            <h2>Delete Account</h2>
          <button className='btn-del-set' >Delete</button>
            </div>
      
                </div>
        

        </div>




   {/* bash herfi */}
      </div>


    </div>
    </>
  )
}

export default Settings
