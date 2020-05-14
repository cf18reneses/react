import React from 'react'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Welcome from '../components/Welcome'

//Lo creamos como si fuera un componente. 

class IndexMenu extends React.Component{
    render(){
        return(
            <div>

                <Welcome
                    username="Oriol"
                />

                <Card 
                    title="Llistat de pel·lícules"
                    description="Llistat de pelicules vistes durant el confinament"
                    image="movies.png"
                    bgColor="#a42514"
                    path="/movies/list"
                />

                <Card2 
                    title="Afegir pel·lícules"
                    description="Formulari per afegir una nova pel·lícula"
                    image="addmovie.png"
                    bgColor="#A47114"
                    path="/movies/add"
                />

                <Card3 
                    title="Pel·lícules que vull veure"
                    description="Formulari per afegir pel·lícules que voldré veure en un futur"
                    image="video.png"
                    bgColor="#0D6B53"
                    path="/movies/wishlist"
                />
                  
            </div>
        )
    }
}

export default IndexMenu