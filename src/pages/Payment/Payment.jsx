import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Payment.scss'

const Payment = () => {

    const navigate = useNavigate();
    
    const paymentInfo = useSelector(state => state.payment)
    console.log(paymentInfo)

    const handlerDone = () => {
        navigate('/');
    }

    return (
        <div className='payment'>
            <div className='header'>
                <p>INFO PEMBAYARAN</p>
            </div>
            <div className='body'>
                <div className='row'>
                    <p>Kode Transaksi</p>
                    <p>{paymentInfo.id_transaction}</p>
                </div>
                <div className='row'>
                    <p>Tanggal Transaksi</p>
                    <p>{paymentInfo.date}</p>
                </div>
                <div className='row'>
                    <p>No. Virtual Account</p>
                    <p>192038748</p>
                </div>
                <div className='row'>
                    <p>Status</p>
                    <p>Pending</p>
                </div>
                <div className='row'>
                    <p>Total</p>
                    <p>Rp.{paymentInfo.price}</p>
                </div>
                <div className='row'>
                    <p>Batas Waktu</p>
                    <p>{paymentInfo.time_limit}</p>
                </div>
                <Button label={"Selesai"} onClick={handlerDone}/>
            </div>
        </div>
    )
}

export default Payment
