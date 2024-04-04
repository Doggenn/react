import React, { useState } from 'react'

export default function Counter() {
    // let num = 0;
    const [num, setNum] = useState(0);
    
    const plus = () => {
        // num = num + 1
        setNum(num + 1)
    }

    return (
        <div>
            <button onClick={plus}>Sumar</button>

            {num}
        </div>
    )
}
