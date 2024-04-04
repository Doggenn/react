import React from 'react'

export default function ClickBtn() {

    const clicked = () => {
        console.log("Me he clicado");
    }

    // function clicked(){
    //     console.log("Me he clicado");
    // }
    
    return (
        <div>
            <button onClick={clicked}>Click me</button>
        </div>
    )
}
