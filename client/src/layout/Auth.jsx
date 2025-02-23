import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Login from '../pages/Login/Login'
import { verifyToken } from '../services/api'


function Auth({ children }) {
    const navigate = useNavigate()
    const token = window.location.search.split("=").at(-1)
    const localToken = localStorage.getItem("token")
    const [status, setStatus] = useState(false)
    useEffect(() => {
        yonlendir()
    }, [])

    async function yonlendir() {
        if (token) {
            localStorage.setItem("token", token)
            setStatus(true)
            navigate("/dashboard")

        }

        if (token || localToken) {
            const verify = await verifyToken()
            if (!verify.status) navigate("/login")
            setStatus(verify.status)
            localStorage.setItem("username", verify.username)
            localStorage.setItem("profileImage", verify.profileImage)
            localStorage.setItem("balance", verify.balance)
            localStorage.setItem("userid", verify.user_id)
        } else {
            navigate("/login")
        }
    }
    return (
        <>
            {status ? children :
                <div className='h-screen w-full flex justify-center align-center'>
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
                </div>
            }
        </>
    )
}

export default Auth