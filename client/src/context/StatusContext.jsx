import { createContext, useState } from 'react'
export const STATUS = createContext(null)
function StatusContext({ children }) {
    const [status, setStatus] = useState(localStorage.getItem("userid"))
    const [sidebar, setSidebar] = useState(false)
    function handleSidebar() {
        setSidebar(!sidebar)
    }
    return (
        <STATUS.Provider value={{ status, setStatus ,handleSidebar, sidebar}} >
            {children}
        </STATUS.Provider>
    )
}

export default StatusContext