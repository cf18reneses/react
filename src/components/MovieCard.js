import React from 'react'

import './styles/MovieCard.css'

class MovieCard extends React.Component{

    render(){
        const {title} = this.props

        return (
            <div className="mt-4 col-4">
                <div className="movieCard" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div class="row movieInfo">
                        <div class="col-2 rate">{this.props.rate}</div>
                        <div class="col-10">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.direction}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard