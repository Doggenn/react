import React from 'react'

export default function OverAge({ age }) {

  // let toPrint;
  // if (age >= 18) {
  //   toPrint = <span>Tienes {age} años. Eres mayor de edad</span>
  // } else {
  //   toPrint = <span>Tienes {age} años. Eres menor de edad</span>
  // }

  return (
    <div>

      {/* {toPrint} */}

      {age >= 18 ? <span>Tienes {age} años. Eres mayor de edad</span> : <span>Tienes {age} años. Eres menor de edad</span>}
    </div>
  )
}
