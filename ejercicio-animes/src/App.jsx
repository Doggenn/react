import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Galeria from "./components/Galeria";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
const animes = [
  {
    "nombre": "Naruto",
    "categoria": "Shonen"
  },
  {
    "nombre": "Attack on Titan",
    "categoria": "Acción"
  },
  {
    "nombre": "Your Lie in April",
    "categoria": "Romance"
  },
  {
    "nombre": "Death Note",
    "categoria": "Suspenso"
  },
  {
    "nombre": "Spirited Away",
    "categoria": "Fantasía"
  },
  {
    "nombre": "Fullmetal Alchemist: Brotherhood",
    "categoria": "Aventura"
  },
  {
    "nombre": "One Punch Man",
    "categoria": "Comedia"
  },
  {
    "nombre": "Demon Slayer",
    "categoria": "Acción"
  },
  {
    "nombre": "My Hero Academia",
    "categoria": "Shonen"
  },
  {
    "nombre": "Steins;Gate",
    "categoria": "Ciencia Ficción"
  }
]

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Galeria galeria={animes}></Galeria>} />
          <Route path="/exercise1" element={<Exercise1></Exercise1>} />
          <Route path="/exercise2" element={<Exercise2></Exercise2>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
