import { useState } from "react"
import Botones from "./Botones"
import './Exercise1.css'

export default function Exercise1() {
    const [count, setCount] = useState(1);
    const sumar = () => {
        setCount(count + 1)
    };
  return (
      <div>
          {count}

          <Botones funcion={sumar} text={"+"}></Botones>
          <Botones funcion={()=>setCount(count-1)} text={"-"}></Botones>
          <Botones funcion={()=>setCount(count*2)} text={"X"}></Botones>
          <Botones funcion={()=>setCount(count/2)} text={"/"}></Botones>
      </div>
  )
}
