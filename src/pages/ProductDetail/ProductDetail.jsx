import React, {useState, useEffect} from 'react'
import OrderCard from '../../components/OrderCard/OrderCard';
import CardData from '../../components/CardData/CardData';
import './ProductDetail.scss'
import { useParams } from 'react-router';
import axios from 'axios';

const ProductDetail = ({addToCart}) => {

    const { imdbID } = useParams();
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=d18d6c96&i=${imdbID}`)
        .then(res => {
        setMovieData(res.data);
        })
        .catch(err => console.log(err));
    }, [imdbID])

    const data1 = [
        { "title": "Title", "result": movieData.Title && movieData.Title },
        { "title": "Genre", "result": movieData.Genre && movieData.Genre },
        { "title": "Released Date", "result": movieData.Released && movieData.Released },
        { "title": "Director", "result": movieData.Director && movieData.Director },
        { "title": "Actors", "result": movieData.Actors && movieData.Actors },
        { "title": "Plot", "result": movieData.Plot && movieData.Plot },
        { "title": "Rating", "result": movieData.imdbRating && movieData.imdbRating },
    ]

    return (
        <div className="product">
            <div className="product-wrapper">
                <div className="poster-wrapper">
                    <img src={movieData.Poster} alt="" className="poster"/>
                </div>
                <div className="info-wrapper">
                    <p className="title">{movieData.Title} ({movieData.Year})</p>
                    <p className="genre">{movieData.Genre}</p>
                    <p className="price">Rp.100.000</p>
                    <OrderCard movieData={movieData}/>
                </div>
            </div>
            <div className="description-wrapper">
                <CardData label="Deskripsi" data={data1}/>
            </div>
        </div>
    )
}

export default ProductDetail
