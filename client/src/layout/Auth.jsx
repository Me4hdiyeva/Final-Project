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
            navigate("/dashboard")
        }

        if (token || localToken) {
            const verify = await verifyToken()
            if (!verify.status) navigate("/login")
            setStatus(verify.status)
            localStorage.setItem("username", verify.username)
            localStorage.setItem("userid", verify.user_id)
        } else {
            navigate("/login")
        }
    }
    return (
        <>
            {status ? children : <Login />}
        </>
    )
}

export default Auth