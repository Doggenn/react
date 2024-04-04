
// [
//   {
//     "name": "The Legend of Zelda: Breath of the Wild",
//     "category": "Aventura/Exploración",
//     "year": "2017"
//   },
//   {
//     "name": "God of War",
//     "category": "Acción/Aventura",
//     "year": "2018"
//   },
//   {
//     "name": "Minecraft",
//     "category": "Sandbox/Sobrevivencia",
//     "year": "2011"
//   },
//   {
//     "name": "The Witcher 3: Wild Hunt",
//     "category": "RPG",
//     "year": "2015"
//   },
//   {
//     "name": "Among Us",
//     "category": "Party/Misterio",
//     "year": "2018"
//   },
//   {
//     "name": "Fortnite",
//     "category": "Battle Royale",
//     "year": "2017"
//   }
// ]
// Crea un componente  llamado Gallery y enviale como props el array y pinta por cada una de las posiciones otro componente llamado Card al cual le envies la informacion individual y pinta el nombre, la categoria y el año

import Games from "./Games";
import "./Gallery.css"
export default function Gallery({gallery}) {
  const print = (gameName) => {
    console.log(gameName)
  }
  return (
    <div className="box">
        {gallery.map((game, index) =>  <Games onPrint={print} key={index} game={game}></Games> )} 
    </div>
  )
}
