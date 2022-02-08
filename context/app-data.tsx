import { createContext, useContext, useState } from 'react'

const AppContext = createContext(undefined)

export function AppStateProvider({ children }) {
    const [data, setData] = useState({})
    return (
        <AppContext.Provider
            value={{
                data,
                setData,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)

    if (!context)
        throw new Error('useApp must be used inside a `AppStateProvider`')

    return context
}
