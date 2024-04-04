import React from 'react'

export default function ForCapital({sins}) {
  return (
    <div>
        {sins.map((sin,index) => <p key={index}>{sin}</p>)}
    </div>
  )
}

