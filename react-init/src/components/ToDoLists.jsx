// let toDoLists = [
//       { name: "Hacer la compra", isDone: false },
//       { name: "Lavar el coche", isDone: true },
//       { name: "Ir al gimnasio", isDone: false },
//       { name: "Terminar el informe", isDone: false },
//       { name: "Llamar a mamá", isDone: true },
//       { name: "Revisar el correo electrónico", isDone: false },
//       { name: "Pasear al perro", isDone: true },
//       { name: "Preparar la cena", isDone: false },
//       { name: "Leer un libro", isDone: false }
// ];
// Cread un componente que pinte esta lista de cosas que hacer pero que solo pinte aquellos que isDone = false. Pasad la lista como prop. Desde el app

export default function ToDoLists({toDoLists}) {
  return (
      <div>
        {toDoLists.map((toDo, index) => 
          toDo.isDone != true &&
          <p key={index}>{toDo.name}</p>
        )}
    </div>
  )
}
