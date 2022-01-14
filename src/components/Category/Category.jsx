import React from 'react'
import { Icon } from '@iconify/react'
import './Category.scss'

const Category = () => {
    return (
        <div className="category">
            <Icon icon="ci:hamburger" className="burger-icon"/>
            <p>Categories</p>
        </div>
    )
}

export default Category
