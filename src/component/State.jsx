import React, { useState } from 'react'

const State = () => {
    const [count, setcount] = useState(0)

    let handle = () => {
        setcount(count - 1)
    }
    let mins = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <div className="count">
                <button onClick={handle}>-</button>
                <div className="number">
                    {count}
                </div>
                <button onClick={mins}>+</button>
            </div>
        </div>
    )
}

export default State
