import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import IndexMenu from '../pages/IndexMenu'
import MoviesList from '../pages/MoviesList'
import MoviesAdd from '../pages/MoviesAdd'
import MoviesWish from '../pages/MoviesWish'

//El atribut exact s'utilitza per que no trobi semblances entre una ruta i l'altre.

function App(props){
    return(
        //Per a cada ruta, mostra un component o l'altre.
        <BrowserRouter>
            <Route exact path="/" component={IndexMenu} />
            <Route exact path="/movies/list" component={MoviesList} />
            <Route exact path="/movies/add" component={MoviesAdd} />
            <Route exact path="/movies/wishlist" component={MoviesWish} />
        </BrowserRouter>
    )
}

export default App