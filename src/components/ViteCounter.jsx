import { React, useState } from 'react'


const ViteCounter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <button onClick={() => setCount((count) => count = 0)}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default ViteCounter