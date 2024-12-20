import React, { useContext, useEffect, useState } from 'react'
import { CartIcon } from '../assets/content';
import CartContext from '../context/CartContext';

function BtnShop({className, onClick}) {

    const {cart} = useContext(CartContext)
    const [number, setNumber] =useState(0)
    useEffect(()=>{
        if (cart){
            setNumber(cart.length)
        }
    }, [cart])
    return (

        <>
            <a onClick={onClick} className={`lg:flex flex-nowrap items-center justify-center h-8 min-w-[120px] pe-2 ps-2 rounded-md bg-customGray hover:bg-black hover:text-white me-6 cursor-pointer ${className}`}>
                <CartIcon/>
                <p className='ms-2 text-sm'>{number} Items</p>
            </a>
            <div className='h-8 w-[0.2px] opacity-50 bg-black me-2'></div>
        </>
    )
}

export default BtnShop