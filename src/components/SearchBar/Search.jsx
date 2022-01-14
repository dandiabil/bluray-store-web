import React from 'react'
import { Icon } from '@iconify/react'
import './Search.scss';

const Search = ({setSearch, onClick, value}) => {
    return ( 
    <>
        <input type="text" className="input-text" onChange={(e) => setSearch(e.target.value)} value={value}/>
        <Icon icon="akar-icons:search" className="search-icon" onClick={onClick}/>
    </>
    )
}

export default Search
