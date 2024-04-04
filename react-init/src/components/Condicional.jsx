export default function Condicional() {
  return (
      <div>
          {name === "Adrian" ? <span>Es Adrian</span> : <span>No se quien es...</span>}
          {/* ALTERNATIVA */}
          {name === "Adrian" && <span> Es Adrian!</span>}
          {name !== "Adrian" && <span> No se quien es!</span>}
      
      </div>
  )
}
