import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";

function BtnShop({className}) {
    return (

        <>


            <a className={`lg:flex flex-nowrap items-center justify-center h-8 min-w-[120px] pe-2 ps-2 rounded-md bg-customGray hover:bg-black hover:text-white me-6 cursor-pointer ${className}`}>
                <AiOutlineShopping />
                <p className='ms-2 text-sm'>5 Items</p>
            </a>
            <div className='h-8 w-[0.2px] opacity-50 bg-black me-2'></div>
        </>
    )
}

export default BtnShop