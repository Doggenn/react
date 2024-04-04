import { useState } from "react";
import Botones from "./Botones";


export default function Galeria({ galeria }) {
  const [anime, setAnime] = useState(galeria)
  
  
  const send = () => {
     let copyAnime = [...anime]
    copyAnime.push()
    setAnime
  }
  const eliminar = () => {
    let copyAnime = [...anime]
    copyAnime.pop()
    setAnime(copyAnime)
  }
  return (
      <div>
          {galeria.map((anime, index) => (
                  <div key={index}>
                  <h2>{anime.nombre}</h2>
              <p>{anime.categoria}</p>
            </div>))}
      <div>
      <input type="text" placeholder="nombre" />
      <input type="text" placeholder="categoria"/>
      <Botones text={"Añadir"} funcion={send}></Botones>
      <Botones text={"Borrar"} funcion={eliminar}></Botones>
      </div>
    </div>
  )
}
