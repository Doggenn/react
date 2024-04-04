import "./Games.css"

export default function Games({game, onPrint}) {
  return (
      <div className="box">
          <p className="box-w">
            Nombre: {game.name}
          </p>
          <p className="box-w">
              Año: {game.year}
          </p>
          <p className="box-w">
              Categoria: {game.category}
          </p>
          <button onClick={()=>onPrint(game.name)}>Pulsame y mira la consola</button>
    </div>
  )
}

// Añadid un boton en el componente que pinta el hijo y que cuando haga click ejecute una funcion del padre que pinte el nombre del videojuego por console.log