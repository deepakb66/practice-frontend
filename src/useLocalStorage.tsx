import React, { useState, useEffect} from "react";

function useLocalStorage(key : any, initialValue : any) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') return initialValue
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch(error) {
            console.log(error)
            return initialValue
        }
    })

    const setValue = (value : any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(value)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue] as const
}

export default useLocalStorage