import React, { useState, useRef, useEffect, ChangeEvent } from "react";

const UsernameGenerator: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [username, setUserName] = useState('');
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const debounce = (cb: (...args: any[]) => void, delay: number) => {
        return (...args: any[]) => {
            if(debounceTimer.current) clearTimeout(debounceTimer.current)
            debounceTimer.current = setTimeout(() => cb(...args), delay)
        }
    }

    const generateUsername = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setUserName(value.split(' ').join('-'))
    }

    const debouncedGenerateUsername = debounce(generateUsername, 300)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        debouncedGenerateUsername(e)
    }

    return (
        <div>
            <input type="text" placeholder="Search name" value={inputValue} onChange={handleInputChange} />
            <p>Username: <strong>{username}</strong></p>
        </div>
    )

};

export default UsernameGenerator;