import axios from 'axios'
import { useEffect, useState } from "react"

export default function AxiosRick() {
    const [characters, setCharacters] = useState([])
    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // })

    // useEffect(() => {
    //     const getCharacters = async () => {
    //         const res = await fetch('https://rickandmortyapi.com/api/character')
    //         const character = await res.json();
    //         console.log(character);
    //     }
    //     getCharacters();
    // })



    //_____________PARA_PODER_USAR_AXIOS_HAY_QUE_HACER_UN_NPM_I_AXIOS________________________________

    const [page, setPage]=useState(1)

    const changePage = (newPage) => {
        setPage(newPage)
        getCharacters(newPage);
    }

    const getCharacters = async (page) => {
        const res = await axios('https://rickandmortyapi.com/api/character?page='+ page)
        console.log(res.data);
        setCharacters(res.data.results)
    }

    useEffect(() => {
        getCharacters(page, genero, nombre);
    })

  return (
        <div>
          {characters.map((character, index) => <div key={index}><p>{character.name}</p> <img src={character.image} alt="" /></div>)}
          
          <button onClick={() => changePage(page - 1)}>{"<"}</button>
          <span>{page}</span>
          <button onClick={() => changePage(page + 1)}>{">"}</button>
        </div>
  )
}
