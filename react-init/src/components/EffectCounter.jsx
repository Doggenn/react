import { useEffect, useState } from "react"

export default function EffectCounter() {

    const [count, setCount] = useState(0);
    const [count2, setCount2]= useState(0)

    useEffect(() => {
        console.log('Me inicio.')
        return () => {
            console.log('Me destruyo');
        }
    }, [])
    useEffect(() => {
        console.log('He cambiado el contador');
    }, [count])
    useEffect(() => {
        console.log('He cambiado el contador2');
    }, [count2])
    useEffect(() => {
        console.log('He cambiado ambos contadores');
    }, [count, count2])

  return (
      <div>
          <h2>
          {count},{count2}
          </h2>

          <p>
          <button onClick={() => setCount(count + 1)}>Sumar</button>
          <button onClick={()=> setCount2(count2 + 1)}>Sumar</button>
          </p>
          <p>
          <button onClick={() => setCount(count + 5)}>Sumar 5</button>
          <button onClick={()=> setCount2(count2 + 5)}>Sumar 5</button>
          </p>
          <p>
          <button onClick={() => setCount(count + 10)}>Sumar 10</button>
          <button onClick={()=> setCount2(count2 + 10)}>Sumar 10</button>
          </p>
          <p>
          <button onClick={() => setCount(count - 1)}>Restar</button>
          <button onClick={()=> setCount2(count2 - 1)}>Restar</button>
          </p>
          <p>
          <button onClick={() => setCount(count - 5)}>Restar 5</button>
          <button onClick={()=> setCount2(count2 - 5)}>Restar 5</button>
          </p>
          <p>
          <button onClick={() => setCount(count - 10)}>Restar 10</button>
          <button onClick={()=> setCount2(count2 - 10)}>Restar 10</button>
          </p>
        </div>
  )
}
