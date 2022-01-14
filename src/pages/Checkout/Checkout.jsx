import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
// import { BoxOfficePoster } from '../../assets/index';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Checkout.scss'
import Link from '../../components/Link/Link';
import { addToPayment } from '../../redux/reducer/payment';

const Checkout = () => {

    // eslint-disable-next-line
    const cart = useSelector(state => state.cart) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalOrder, setTotalOrder] = useState(0)

    console.log(cart)

    useEffect(() => {
        if(cart){
            setTotalOrder(cart.map(item => item.price).reduce((acc, curValue) => acc + curValue, 0));
        }
    }, [cart, dispatch])

    const cartItems = cart.map((item, i) => {
        return(
            <div key={i} className="item-order">
                <div className="poster-wrapper">
                    <img src={item.poster} alt="poster" className="poster"/>
                </div>
                <div className="info-wrapper">
                    <p className='title'>{item.title}</p>
                    <p className='price'>Rp.{item.price}</p>
                </div>
                <Link dispatch={dispatch} id={item.id}/>
            </div>
        )
    })

    const buyProduct = () => {
        dispatch(addToPayment({
            price: parseInt(totalOrder)
        }))
        navigate('/payment')
    }

    const emptyCart = (
                    <div className='empty-cart'>
                        <p>Keranjang Kosong</p>
                        <p>Ayo isi keranjangmu ;D</p>
                    </div>
                    )

    return (
        <div className="checkout">
            <div className="list-order">
                {cartItems}
            </div>
            <div className="detail-total">
                {
                    cart.length === 0 ? 
                    emptyCart
                    :
                    <>
                    <p>Detail Total</p>
                    <div className="subtotal-info">
                        <p>Subtotal</p>
                        <p>Rp.{totalOrder}</p>
                    </div>
                    <div className="btn-beli">
                        <Button label="Beli" onClick={buyProduct}/>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Checkout
