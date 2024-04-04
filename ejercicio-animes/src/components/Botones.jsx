
export default function Botones({text, funcion}) {
  return (
    <div>
      <button onClick={funcion}>{text}</button>
      </div>
  )
}
