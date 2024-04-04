import React from 'react'

export default function ClickChild({ fnPrint }) {

    const noReusable = () => {
        fnPrint("Pepe")
    }

    return (
        <div>
            {/* ESTAS TRES FORMAS HACEN LO MISMO. ENVIAN UNA FUNCION QUE EJECUTA PRINT PASANDOLE "PEPE" */}
            <button onClick={() => fnPrint("Pepe")}>Hacer click</button>
            <button onClick={function () { fnPrint("Pepe") }}>Hacer click</button>
            <button onClick={noReusable}>Hacer click</button>


            {/* ESTAS DOS LINEAS SON LO MISMO. ENVIAS UNDEFINED */}
            <button onClick={fnPrint("Pepe")}>Hacer click</button>
            <button onClick={undefined}>Hacer click</button>
        </div>
    )
}