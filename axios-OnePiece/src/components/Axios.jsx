
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Axios() {
    const [characters, setCharacters] = useState([])
    //_____________PARA_PODER_USAR_AXIOS_HAY_QUE_HACER_UN_NPM_I_AXIOS________________________________
    useEffect(() => {
        const getCharacters = async () => {
            const res = await axios('https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count')
            console.log(res.data);
            setCharacters(res.data.data)
        }
        getCharacters();
    })
  return (
      <div>
          {characters.map((character, index) => <div key={index}><p>{character.attributes.canonicalTitle}</p> <img src={character.attributes.posterImage.original} alt="" /></div>)}
          {/* {characters.map((character, index) => <div key={index}></div> )} */}
      </div>
  )
}
