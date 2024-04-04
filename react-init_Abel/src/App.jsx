import './App.css'
import Btn from './components/Btn'
import InputBtn from './components/InputBtn'
import OverAge from './components/OverAge';
import Xyz from './components/Xyz'
import ForUsers from './components/ForUsers';
import ForCapital from './components/ForCapital';
import Foods from './components/Foods';
import Father from './components/Father';
import Gallery from './components/Gallery';
import ClickBtn from './components/ClickBtn';
import ClickFather from './components/ClickFather';
import Counter from './components/Counter';
import List from './components/List';

const sins = ["Lujuria", "Soberbia", "Envidia", "Pereza", " Ira", "Avaricia", "Gula"];
const foods = [
  {
    "name": "Manzana",
    "color": "Rojo"
  },
  {
    "name": "Espinaca",
    "color": "Verde"
  },
  {
    "name": "Zanahoria",
    "color": "Naranja"
  },
  {
    "name": "Arándano",
    "color": "Azul"
  },
  {
    "name": "Plátano",
    "color": "Amarillo"
  },
  {
    "name": "Berenjena",
    "color": "Morado"
  }
];
const name = "Enviar";

const games = [
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
      <section>
        <h2>Basic</h2>
        <Xyz></Xyz>
        <Xyz></Xyz>
        <Xyz></Xyz>
        <Xyz></Xyz>
        <Xyz></Xyz>
      </section>

      <section>
        <h2>Btn</h2>

        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </section>

      <section>
        <h2>Btn input</h2>
        <InputBtn text={name}></InputBtn>
        <InputBtn text={100}></InputBtn>
        <InputBtn text={true}></InputBtn>
        <InputBtn text="Cancelar"></InputBtn>
        <InputBtn text="Editar"></InputBtn>
        <InputBtn text="Volver"></InputBtn>
      </section>

      <section>
        <h2>AGE IF</h2>

        <OverAge age={18}></OverAge>
        <OverAge age={40}></OverAge>
        <OverAge age={15}></OverAge>
        <OverAge age={12}></OverAge>
      </section>

      <section>
        <h2>PADRES E HIJOS</h2>

        <Father></Father>
        <Father></Father>
        <Father></Father>
      </section>

      <article>
        <h2>For</h2>
        <section>
          <ForUsers></ForUsers>
        </section>

        <section>
          <ForCapital sins={["Lujuria", "Soberbia", "Envidia", "Pereza", " Ira", "Avaricia", "Gula"]}></ForCapital>
          <ForCapital sins={sins}></ForCapital>
        </section>

        <section>
          <Foods list={foods}></Foods>
        </section>

        <section>
          <Gallery list={games}></Gallery>
        </section>


      </article>

      <article>
        <h2>Click</h2>
        <section>
          <ClickBtn></ClickBtn>

        </section>

        <section>
          <ClickFather></ClickFather>
        </section>
      </article>


      <article>
        <h2>Use state</h2>

        <section>
          <Counter></Counter>
        </section>

        <section>
          <List></List>
        </section>
      </article>

    </>
  )
}

export default App