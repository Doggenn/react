import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function UsersDatailPage() {
    const { id } = useParams()
    const [anime, setAnime] = useState();
    useEffect(() => {
        const getAnime = async () => {
            const { data: { data } } = await axios("https://kitsu.io/api/edge/anime?fields%5Bcategories%5D=slug%2Ctitle&filter%5Bslug%5D=one-piece&include=categories")
            setAnime(data[0])
        }
        getAnime();
    })
  return (
      <div>UsersDatailPage{id}
          <h2>
            {anime.atributes.canonicalTitle} 
          </h2>
          <img src={anime.atributes.posterImage.original} alt="" />
      </div>
  )
}
