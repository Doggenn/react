// let num = 0;

import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(0);
    const plus = () => {
        setNum(num + 1)
    }
  return (
      <div>
          <p>
              {num}
          </p>
          <button onClick={plus}>Contador</button>
    </div>
  )
}
