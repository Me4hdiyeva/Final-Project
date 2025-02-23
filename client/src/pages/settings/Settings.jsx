import React, { useContext, useState } from 'react'
import "../settings/settings.css"
import { deleteUser, editProfileImg, updateUserNickname, updateUserPassword } from '../../services/api'
import { useNavigate } from 'react-router'
import { STATUS } from '../../context/StatusContext'
import toast from 'react-hot-toast'
const Settings = () => {
    const navigate = useNavigate()
    const { setStatus } = useContext(STATUS)
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState(localStorage.getItem("username") || "");
    const path = "http://localhost:3000"
    const [img, setImg] = useState(path + (localStorage.getItem("profileImage") || ""))

    async function delAccount() {
        const silinen = await deleteUser()
        console.log(silinen);
        const thema = localStorage.getItem("theme");
        localStorage.clear()
        localStorage.setItem("theme", thema)
        setStatus(false)
        navigate("/")
    }



    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };



























    const handleUpload = async () => {
        const id = localStorage.getItem("userid")
        const username = localStorage.getItem("username")
        if (selectedFile) {
            const response = await editProfileImg(id, selectedFile);





































            if (response.message) {
                setImg(path + response.user.profileImage)
                toast.success(response.message);
            } else {
                toast.error("Şəkil yüklənərkən xəta baş verdi.");
            }
        }
        if ((username.trim() != name.trim()) && name.trim() != "") {
            const data = await updateUserNickname(id, name)
            localStorage.setItem("username", data.user.username)
            setName(data.user.username)
            toast.success("username deyisdirildi")
        }
    };

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    async function editPass() {
        if (!currentPassword || !newPassword) {
            return toast.error("Zəhmət olmasa bütün sahələri doldurun!");
        }

        try {
            const id = localStorage.getItem("userid")

            const response = await updateUserPassword(id, currentPassword, newPassword)

            toast.success("Sifre deyisdirildi");
        } catch (error) {
            toast.error(error.response?.data?.message || "Xəta baş verdi!");
        }
    }

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
                                <div className="div-avatar flex justify-center items-center">
                                    <img src={img} alt="" />
                                    <label id='userLabel'>
                                        <i className="fa-solid fa-pen"></i>
                                        <input onChange={handleFileChange} type="file" name="" id="" className='hidden' />
                                    </label>
                                </div>
                                <span>
                                    <input type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    />
                                </span>
                                <button onClick={handleUpload}>Edit</button>
                            </div>
                        </div>
                        <div className="about-set-profile-avatar">
                            <div className="about-settings">
                                <h2>C2C Profile</h2>
                                <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
                            </div>
                            <div className="edit">

                                <span>gmail.com</span>
                            </div>
                        </div>

                        <div className="about-set-profile-avatar">
                            <div className="about-settings">
                                <h2>Password</h2>
                                <p>Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
                            </div>
                            <div className="edit">
                                <input
                                    value={currentPassword}
                                    type="password" onChange={(e) => {
                                        setCurrentPassword(e.target.value)
                                    }} placeholder='Current password' />
                                <input
                                    value={newPassword}
                                    type="password" onChange={(e) => {
                                        setNewPassword(e.target.value)
                                    }} placeholder='New password' />
                                <button onClick={editPass}> Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-settings">
                        <h1>Notifications</h1>
                        <div className="about-set-profile-avatar">
                            <div className="about-settings">
                                <h2>Notification Language</h2>
                                <p>This will affect the language settings of E-mail and App push..</p>
                            </div>
                            <div style={{ paddingLeft: "90px" }} className="edit">
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
                                <span style={{ width: "200px", paddingLeft: "90px" }}>Activities, Trade Notification, Binance News</span>
                                <button>Edit</button>
                            </div>
                        </div>

                    </div>
                    <div className="profile-settings">
                        <h1>Privacy</h1>
                        <div className="about-set-profile-avatar">
                            <div style={{ display: "flex", gap: "743px", justifyContent: "space-between" }} className="about-settings">
                                <h2>Delete Account</h2>
                                <button onClick={delAccount} className='btn-del-set' >Delete</button>
                            </div>

                        </div>


                    </div>


                </div>


            </div>
        </>
    )
}

export default Settings