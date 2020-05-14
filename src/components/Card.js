import React from 'react'
import movies from './img/movies.png'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Card.css'


//Se utiliza para no recargar la pagina
import { Link } from 'react-router-dom'

class Card extends React.Component{
    render(){

        //Para utilizar los props del index, podemos definir una constante
        // y así no tener que repetir this.props todo el rato, ejemplo backgroundColor;
        const  {title, description, image, bgColor, path} = this.props

        return(
            <Link to={path} style={{ textDecoration: 'none' }}>
                <div className="cardMovies mx-auto mt-4" style={{
                    backgroundColor: bgColor
                }}>
                    <div>
                        <img src={require(`./img/${this.props.image}`)}/>
                    </div>
    
                    <div className="text">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Card