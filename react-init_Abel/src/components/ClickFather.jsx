import React from 'react'
import ClickChild from './ClickChild'

export default function ClickFather() {

    const print = (text) => {
        console.log("Soy el padre, " + text);
    }

    return (
        <div>
            <ClickChild fnPrint={print}></ClickChild>
        </div>
    )
}
