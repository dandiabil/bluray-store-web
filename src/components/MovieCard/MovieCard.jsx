import React from 'react'
import { useNavigate } from 'react-router'
import './MovieCard.scss'

const MovieCard = ({poster, title, imdbID, year}) => {

    const navigate = useNavigate();

    return (
        <div className="movie-card" onClick={() => navigate(`/catalog/${imdbID}`)}>
            <div className="poster-wrapper">
                <img src={poster} alt="" className="poster"/>
            </div>
            <div className="detail-wrapper">
                <p className="title">{title} ({year})</p>
                <p className="genre">{imdbID}</p>
                <p className="price">Rp.100.000</p>
            </div>
        </div>
    )
}

export default MovieCard
