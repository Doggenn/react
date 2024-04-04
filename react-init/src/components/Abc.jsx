// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react'


const name = "Adrian"
const url = "https://static.printler.com/cache/b/d/e/4/6/9/bde46975a186eb17f441a26b2a0b1cbfb1b0b129.jpg"
export default class Abc extends PureComponent {
  render() {
    return (
        <div>
            <p> Hola mundo! Soy {name}</p>
        <img src={url} />
        {name === 'Adrian' ? <span>Abc</span>: <span>Hola</span>}
        </div>
        
    )
  }
}
