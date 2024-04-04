//Crea un componente que pinte el texto "Estoy aprendiendo" y un botón que diga "Cambiar". Si haces click en el botón cambia el texto de "Estoy aprendiendo" a "Soy un pro". Si le vuelves a dar pasaria de "Soy un pro" a "Estoy aprendiendo" y asi siempre...

import { useState } from "react"
import Botones from "./Botones"

const defaultText = "Estoy aprendiendo"
export default function Exercise2() {
    const [text, setText] = useState(defaultText)
    const changeText = () => {
        if (text === "Estoy aprendiendo") {
            setText("Soy un pro")
        } else {
            setText("Estoy aprendiendo")
        }
    }
  return (
      <div>
        {text}
        <Botones funcion={changeText} text={"Pulsame"}></Botones>
      </div>
  )
}
