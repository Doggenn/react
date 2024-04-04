import axios from 'axios';
import 'bootstrap/scss/bootstrap.scss';
import './Characters.scss'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [search1, setSearch] = useState('')
    const [gender, setGender] = useState('')
    let arrCharacters = []
    let baseUrl = `https://rickandmortyapi.com/api/character?name=${search1}&gender=${gender}&page=`
    let buscar = "";
    let genero1 = "";
    const getCharacters = async () => {
        // if (search1 !== "") {
        //     buscar = `&name=${search1}`;
        //     console.log('Hola')
        //     getCharacters(baseUrl)
        // }
        // if (gender !== "") {
        //     genero1 = `&gender=${gender}`;
        //     console.log('Hola')
        // }
        for (let index = 1; index <= 42; index++) {
            const res = await axios(`${baseUrl}${index}`)
            console.log(index)
            console.log(search1)
            console.log(res.data.results);
            arrCharacters = [...arrCharacters, ...res.data.results]
        }
        setCharacters(arrCharacters)
    }
    useEffect(() => {
        getCharacters();
    },[baseUrl])
    const getStatus = (estado)=>{
        if (estado === "Alive") {
            return "Vivo"
        } else if (estado === "unknown") {
            return "Desconocido"
        } else if (estado === "Dead") {
            return "Fallecido"
        }
    }
    const getGender = (genero) => {
        if (genero === "Male") {
            return "Masculino"
        } else if (genero === "Female") {
            return "Femenino"
        } else if (genero === "unknown") {
            return "Desconocido"
        } else if (genero === "Genderless") {
            return "Sin género"
        }
    }
    const getSpecies = (especie) => {
        if (especie === "Alien") {
            return "Alienigena"
        } else if (especie === "Human") {
            return "Humano"
        } else if (especie === "Humanoid") {
            return "Humanoide"
        }else if (especie === "unknown") {
            return "Desconocido"
        } else if (especie === "Mythological Creature") {
            return "Criatura mitológica"
        } else {
            return especie
        }
    }
    const getType = (tipo) =>{
        if (tipo === "Parasite") {
            return <p> Tipo: Parasito</p>
        } else if(tipo === "Animal"){
            return <p>Tipo: Animal</p>
        }
    }
    
  return (
      <div className='content'>
          <nav className='row'>
              <div className='col-6'>
                    <select onChange={(gender)=>(mostrar(event.target.value))} className='col-6' name="" id="">
                        <option value="">Estado del personaje</option>
                        <option value="Alive">Vivo</option>
                        <option value="Died">Muerto</option>
                        <option value="unknown">Desconocido</option>
                    </select>
                    <select value={gender} onChange={(event)=>setGender(event.target.value)} className='col-6' name="" id="">
                        <option value="">Genero</option>
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>
                        <option value="unknown">Desconocido</option>
                        <option value="Genderless">Sin género</option>
                    </select>
              </div>
              <div className='col-6'>
                <input value={search1} onChange={(event)=>setSearch(event.target.value)} placeholder='Buscar por nombre' className='col-4' type="search" />  
              </div>
          </nav>
          <div className='row'>             
          {console.log(arrCharacters)}
          {characters.map((character, index) =>
              <div className='col-3' key={index}>
                  <img className='imagen' src={character.image} alt="" />
                  <h2>{index + 1}.  {character.name}</h2>
                  <p>Especie: {getSpecies(character.species)}</p>
                  {getType(character.type)}
                  <p>Genero: {getGender(character.gender)}</p>
                  <p>Estado: {getStatus(character.status)}</p>
          </div>)}  
        </div>
      </div>
  )
}
