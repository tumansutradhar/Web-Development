import React, { useState, useEffect } from 'react';

function CountApp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '+') {
                setCount(count + 1);
            } else if (event.key === '-') {
                setCount(count - 1);
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [count]);

    return (
        <>
            <div className="container">
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    );
}

export default CountApp;