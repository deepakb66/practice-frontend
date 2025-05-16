import React, { useState, useReducer, useEffect, useRef } from "react";

type State = {
    title: string,
    count: number
}

type Action = 
    | { type: 'change-title' }
    | { type: 'increment-count' }

const initialState = { title: 'Hello, initial title', count: 0}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'change-title':
            return {...state, title: 'Title changed using reducer'}
        case 'increment-count':
            return {...state, count: state.count + 1}
        default:
            throw new Error()
    }
};

const Hooks: React.FC = () => {
    const [title, setTitle] = useState('Hello, initial title')
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log('State changed: ', state)
    }, [state])

    const handleClick = () => {
        setTitle('Title just changed')
    }

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <p>Example of useState</p>
                <button onClick={handleClick}>Change title</button>
            </div>
            <div>
                <p>Example of useReducer</p>
                <h3>Title: {state.title}, Count: {state.count}</h3>
                <button onClick={() => dispatch({ type: 'change-title' })}>Change title</button>
                <button onClick={() => dispatch({ type: 'increment-count' })}>Increment count</button>
            </div>
        </div>
    )
}

export default Hooks;