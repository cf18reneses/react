import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import movies from './img/movies.png'
import './styles/Card2.css'


//Se utiliza para no recargar la pagina
import { Link } from 'react-router-dom'

class Card2 extends React.Component{
    render(){

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

export default Card2