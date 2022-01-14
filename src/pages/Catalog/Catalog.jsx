import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Catalog.scss'

const Catalog = ({movieDatas}) => {

    // const searchResult = () => {
    //     if(movieDatas !== undefined){
    //         movieDatas.map((movie, i) => {
    //         return(
    //             <>
    //             <MovieCard poster={movie.Poster} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} key={i}/>
    //             </>
    //         )
    //     })
    //     }
    // }

    const searchResult = movieDatas !== undefined ? 
        movieDatas.map((movie, i) => {
            return <MovieCard poster={movie.Poster} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} key={i}/>
        })
        :
        <p className="label">Search For Movies</p>

    return (
        <div className="catalog">
            <div className="catalog-wrapper">
                {
                    searchResult
                }
            </div>
        </div>
    )
}

export default Catalog
