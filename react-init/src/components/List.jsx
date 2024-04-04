import { useState } from "react"

const  defaultCars = ["BMW", "Mercedes", "Mazda", "Subaru"]
export default function List() {
    const [cars, setCars] = useState(defaultCars);
    const removeLastCar = () => {
        const copyCars = [...cars]
        copyCars.splice(cars.length - 1, 1);

        // Actualizo cars con los valores de la copia, que tiene en el ultimo nuevo
        setCars(copyCars)
    }
    const removeCar = (index) => {
        const copyCars = [...cars]
        copyCars.splice(index, 1);
        setCars(copyCars)
    }

  return (
      <div>
          {cars.map((car, index) => <li key={index}>{car} <button onClick={() =>removeCar(index)}>Eliminar</button></li>)}
          <button onClick={removeLastCar}>Eliminar el ultimo</button>
        </div>
  )
}
