import React from 'react'


const name = "Abel"
const url = "https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/1583254719.jpg"

export default function Xyz() {
  
  return (
    <div>

      {name}
      name
      {name === "Abel" ? <span>pepe</span> : <span>juan</span>}

      <img src={url} alt="" width={300}/>
      
    </div>
  )
}
