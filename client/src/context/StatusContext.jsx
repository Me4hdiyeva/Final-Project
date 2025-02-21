import { createContext, useState } from 'react'
export const STATUS = createContext(null)
function StatusContext({ children }) {
    const [status, setStatus] = useState(localStorage.getItem("userid"))
    return (
        <STATUS.Provider value={{status, setStatus} } >
            {children}
        </STATUS.Provider>
    )
}

export default StatusContext