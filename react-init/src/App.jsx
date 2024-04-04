import './App.css'
import Abc from './components/Abc'
import AxiosRick from './components/AxiosRick'
import Btn from './components/Btn'
import ClickBtn from './components/ClickBtn'
import Counter from './components/Counter'
import Edad from './components/Edad'
import EffectCounter from './components/EffectCounter'
import ForPecados from './components/ForPecados'
import ForUsers from './components/ForUsers'
import Frutas from './components/Frutas'
import Gallery from './components/Gallery'
import Img from './components/Img'
import InputBtn from './components/InputBtn'
import List from './components/List'
import ToDoLists from './components/ToDoLists'
const sins = ["Lujuria", "Soberbia", "Envidia", "Pereza", " Ira", "Avaricia", "Gula"];
const toDoLists = [
      { name: "Hacer la compra", isDone: false },
      { name: "Lavar el coche", isDone: true },
      { name: "Ir al gimnasio", isDone: false },
      { name: "Terminar el informe", isDone: false },
      { name: "Llamar a mamá", isDone: true },
      { name: "Revisar el correo electrónico", isDone: false },
      { name: "Pasear al perro", isDone: true },
      { name: "Preparar la cena", isDone: false },
      { name: "Leer un libro", isDone: false }
];
const frutas = [
  { "name": "Manzana", "color": "Rojo" },
  { "name": "Espinaca", "color": "Verde" },
  { "name": "Zanahoria", "color": "Naranja" },
  { "name": "Arándano", "color": "Azul" },
  { "name": "Plátano", "color": "Amarillo" },
  { "name": "Berenjena", "color": "Morado" }
]
const gallery = [
  {
    "name": "The Legend of Zelda: Breath of the Wild",
    "category": "Aventura/Exploración",
    "year": "2017"
  },
  {
    "name": "God of War",
    "category": "Acción/Aventura",
    "year": "2018"
  },
  {
    "name": "Minecraft",
    "category": "Sandbox/Sobrevivencia",
    "year": "2011"
  },
  {
    "name": "The Witcher 3: Wild Hunt",
    "category": "RPG",
    "year": "2015"
  },
  {
    "name": "Among Us",
    "category": "Party/Misterio",
    "year": "2018"
  },
  {
    "name": "Fortnite",
    "category": "Battle Royale",
    "year": "2017"
  }
]

function App() {


  return (
    <>
      <Abc></Abc>
      <Btn></Btn>
      <InputBtn text="Enviar"></InputBtn>
      <InputBtn text="1"></InputBtn>
      <InputBtn text="2"></InputBtn>
      <InputBtn text="3"></InputBtn>
      <InputBtn text="4"></InputBtn>
      <InputBtn text="5"></InputBtn>
      <section>
        <Img url={"https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1600.jpg"}></Img>
      </section>
      <section>
        <Edad edad={10}></Edad>
        <Edad edad={18}></Edad>
        <Edad edad={32}></Edad>
        <Edad edad={58}></Edad>
        <Edad edad={18}></Edad>
        <Edad edad={11}></Edad>
        <Edad edad={79}></Edad>
      </section>
      <section>
        <ForUsers></ForUsers>
      </section>
      <section>
        {/* <ForPecados sins={["Lujuria", "Soberbia", "Envidia", "Pereza", " Ira", "Avaricia", "Gula"]}></ForPecados> */}
        <ForPecados sins={sins}></ForPecados>
      </section>
      <section>
        <ToDoLists toDoLists={toDoLists}></ToDoLists>
      </section>
      <section>
        <Frutas frutas={frutas}></Frutas>
      </section>
      <section>
        <Gallery gallery={gallery}></Gallery>
      </section>
      <section>
        <ClickBtn></ClickBtn>
      </section>
      <article>
        <section>
          <h2>Counter</h2>
          <Counter></Counter>
        </section>
      </article>
      <article>
        <section>
          <List></List>
        </section>
      </article>
      <article>
        <section>
          <EffectCounter></EffectCounter>
        </section>
      </article>
      <article>
        <section>
          <AxiosRick></AxiosRick>
        </section>
      </article>
    </>
  )
}

export default App
