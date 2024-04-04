import React from 'react'

const name = "Abel";
export default function Conditional() {
    return (
        <div>
            {name === "Abel" ? <span>Es Abel</span> : <span>No se quien es</span>}

            {/* ALTERNATIVA */}
            {name === "Abel" && <span>Es Abel</span>}
            {name !== "Abel" && <span>No se quien es</span>}
        </div>
    )
}
