import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Button from '../Button/Button'
import './OrderCard.scss'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/reducer/counter'
import { addItemToCart } from '../../redux/reducer/cart'

const OrderCard = ({movieData}) => {

    const order = useSelector(state => state.order.value)
    const dispatch = useDispatch()

    const price = 100000;
    const total = price * order;

    const handlePlus = () => {
        dispatch(increment())
    }
    
    const handleMinus = () => {
        if(order > 1) {
            dispatch(decrement())
        }
    }

    const addToCart = () => {
        dispatch(addItemToCart({
            poster: movieData.Poster, 
            title: movieData.Title, 
            price: total
        }))
    }

    return (
        <div className="card-order">
            <p>Jumlah Pesanan</p>
            <div className="total-order-wrapper">
                <Icon icon="akar-icons:minus" className="min-btn" onClick={handleMinus}/>
                <input type="text" className="input-order" value={order}/>
                <Icon icon="akar-icons:plus" className="plus-btn" onClick={handlePlus}/>
            </div>
            <div className="subtotal-info">
                <p>Subtotal</p>
                <p>Rp.{total}</p>
            </div>
            <div className="btn-order">
                <Button label="Masukkan Kedalam Keranjang" icon="akar-icons:cart" onClick={addToCart}/>
            </div>
        </div>
    )
}

export default OrderCard
