import { createContext, useState } from 'react'

const ToggleContext = createContext()
function ToggleMenuContext ({ children }) {
    const [toggle, setToggle] = useState(false)
    return (
        <ToggleContext.Provider value={[toggle, setToggle]}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext, ToggleMenuContext }
