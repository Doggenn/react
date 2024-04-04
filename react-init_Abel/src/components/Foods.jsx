import React from 'react'

export default function Foods({ list }) {
    return (
        <div>
            <ul>
                {list.map((item, index) => <li key={index}>{item.name}</li>)}
            </ul>
        </div>
    )
}
