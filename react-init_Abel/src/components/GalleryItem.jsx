import React from 'react'

export default function GalleryItem({data, onPrint}) {
  return (
    <div>
        <p>Name: {data.name}</p>
        <p>Category: {data.category}</p>
        <p>Year: {data.year}</p>
        <button onClick={() => onPrint(data.name)}>Mostrar nombre</button>
    </div>
  )
}
