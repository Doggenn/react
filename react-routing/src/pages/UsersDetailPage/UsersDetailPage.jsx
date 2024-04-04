import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UsersDetailPage() {
    const { id } = useParams()
    const [anime, setAnime] = useState();


    useEffect(() => {
        const getAnime = async () => {
            const { data: { data } } = await axios(`https://kitsu.io/api/edge/anime?fields%5Bcategories%5D=slug%2Ctitle&filter%5Bslug%5D=${id}&include=categories%2CanimeProductions.producer`)
            setAnime(data[0])
        }

        getAnime();
    }, [])

    return (
        <div>

            {anime && <>
                <h2>{anime.attributes.canonicalTitle}</h2>

                <img src={anime.attributes.posterImage.original} alt="" />
                <p>{anime.attributes.description}</p>
            </>}
        </div>
    )
}
