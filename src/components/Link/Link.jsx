import React from 'react'
import { removeItemFromCart } from '../../redux/reducer/cart'
import './Link.scss'

const Link = ({dispatch, id}) => {

    const handleRemove = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <div className="btn-remove">
            <p onClick={handleRemove}>Remove</p>
        </div>
    )
}

export default Link
