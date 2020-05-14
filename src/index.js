/* Esto sería javaScript sin react. */

//const element = document.createElement('h1')
//element.innerText = "Hello react"

//const container = document.getElementById('root')
//container.appendChild(element)



import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

const container = document.getElementById('root')

// .render lo que hace es decir (que asignamos, donde lo asignamos)
ReactDom.render(<App />, container)