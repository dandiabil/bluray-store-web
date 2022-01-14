import React from 'react'
import { Icon } from '@iconify/react'
import './Button.scss'

const Button = ({label, onClick, className, icon}) => {



    return (
        <>
            {icon !== '' ? 
            <>
                <button onClick={onClick} className={`button ${className}`}>{label}</button>
                <Icon icon={icon} className="icon-btn"/>
            </>
            : 
            <button onClick={onClick} className={`button ${className}`}>{label}</button>
            }
            
        </>
    )
}

export default Button
