import React, { useState } from 'react'

const defaultCars = ["BMW", "Mercedez", "Mazda", "Subaru"];

export default function List() {
    const [cars, setCars] = useState(defaultCars);

    const removeLastCar = () => {
        const copyCars = [...cars];
        copyCars.splice(cars.length - 1, 1);

        // actualizo cars con los valores de la copia, que tiene el último nuevo
        setCars(copyCars);
    }

    const removeCar = (index) => {
        const copyCars = [...cars];
        copyCars.splice(index, 1);

        // actualizo cars con los valores de la copia, que tiene el último nuevo
        setCars(copyCars);
    }


    // const remove = (index) => {
    //     const copyCars = [...cars];
    //     copyCars.splice(index ? index : cars.length - 1, 1);

    //     // actualizo cars con los valores de la copia, que tiene el último nuevo
    //     setCars(copyCars);
    // }

    return (
        <div>
            <ul>
                {cars.map((car, index) => <li key={index}>{car} <button onClick={() => removeCar(index)}>Eliminar</button></li>)}
                <button onClick={removeLastCar}>Eliminar el último</button>
            </ul>
        </div>
    )
}
