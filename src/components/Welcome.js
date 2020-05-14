import React from 'react'

function Welcome(props){
    return (
        <div className="container mt-5">
            <h2>Hola {props.username}</h2>
            <p> Pel·licules confinades</p>
        </div>
    )
}

export default Welcome