import React, {useState} from 'react'
import axios from "axios"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import Catalog from '../pages/Catalog/Catalog'
import './MainPage.scss';
import Checkout from '../pages/Checkout/Checkout'
import Payment from '../pages/Payment/Payment'

const MainPage = () => {

    const navigate = useNavigate();

    const [movieDatas, setMovieDatas] =  useState([])
    const [search, setSearch] = useState("");

    const getMovieDatas = () => {
        axios.get(`http://www.omdbapi.com/?apikey=d18d6c96&s=${search}`)
        .then(res => {
        setMovieDatas(res.data.Search);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="main-container">
            <Header navigate={navigate} setSearch={setSearch} search={search} getMovieDatas={getMovieDatas}/>
            <div className="content-wrapper">
            <Routes>
                <Route path="/" exact element={<Dashboard />}/>
                <Route path="/catalog/:imdbID" element={<ProductDetail/>} />
                <Route path="/catalog" element={<Catalog movieDatas={movieDatas}/>} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            </div>
            <Footer />
        </div>
    )  
}

export default MainPage
