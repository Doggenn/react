import React from 'react'
import GalleryItem from './GalleryItem'

export default function Gallery({list}) {

  const print = (gameName)=>{
    console.log("El videojuego se llama " + gameName)
  }

  
  return (
    <div>
        {list.map((item, index)=> <GalleryItem onPrint={print} data={item} key={index}></GalleryItem>)}
    </div>
  )
}
