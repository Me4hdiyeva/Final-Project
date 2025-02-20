import React from 'react'
import "../settings/settings.css"
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
                <button>edit</button>
            </div>
                </div>
                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>C2C Profile</h2>
            <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
            </div>
            <div className="edit">
                <div className="div-avatar">
                    {/* bash herfi */}
                    <img src="" alt="" />
                </div>
                <span>gmail.com</span>
                <button>edit</button>
            </div>
                </div>

                <div className="about-set-profile-avatar">
            <div className="about-settings">
            <h2>Password</h2>
            <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
            </div>
            <div className="edit">
             
                <span>******</span>
                <button>edit</button>
            </div>
                </div>



        </div>





      </div>


    </div>
    </>
  )
}

export default Settings
