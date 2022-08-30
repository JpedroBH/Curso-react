import React from "react"

export default (props) =>{  
    const { min, max } = props
    const resultado = Math.floor(Math.random() * (max - min)) + min;
    return(
        <>
        <h2>Valor aleatório</h2>
            <p><strong>Valor mínimo: {min}</strong></p>
            <p><strong>Valor máximo: {max}</strong></p>
            <p><strong>N° aleatório: {resultado}</strong></p>
        </>
    )
}