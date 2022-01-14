import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import './Header.scss';
import Search from '../SearchBar/Search';
import Category from '../Category/Category';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Header = ({navigate, setSearch, search, getMovieDatas}) => {

    const curLocation = useLocation();
    const cart = useSelector(state => state.cart);

    const searchHandle = (e) => {
        e.preventDefault();
        if(search){
            getMovieDatas();
            setSearch("");
        }
        if(curLocation.pathname !== "/catalog"){
            navigate('/catalog');
        }
    }

    return (
        <div className="header-container">
            <div className="upper-section">
                <p>Selamat Datang</p>
                <div className="link">
                    <p>About</p>
                    <p>Kontak</p>
                    <p>Cara Pembayaran</p>
                </div>
            </div>
            <div className="lower-section">
                <div className="website-logo" onClick={() => navigate('/')}>
                    <h2>BluStore</h2>
                </div>
                <div className="category-wrapper">
                    <Category />
                </div>
                <div className="search-wrapper">
                    <form onSubmit={searchHandle}>
                        <Search setSearch={setSearch} onClick={searchHandle} value={search}/>
                    </form>
                </div>
                <div className="cart-logo" onClick={() => navigate('/checkout')}>
                    {
                        cart.length !== 0 ? 
                        <Icon icon="clarity:shopping-cart-solid-badged"/>
                        :
                        <Icon icon="clarity:shopping-cart-solid" />
                    }
                </div>
                <div className="profile">
                    <Icon icon="gg:profile"/>
                    <p>Nama</p>
                </div>
            </div>
        </div>
    )
}

export default Header
