import React, { useContext } from 'react'
import { MenuIcon, agrozamLogo, alternativePicture } from '../assets/content';
import { CiSearch } from "react-icons/ci";
import Avatar from '../shared/avatar';
import AuthContext from '../context/AutContext';
import BtnShop from '../shared/btnShop';
import { Link } from 'react-router-dom';
import DrawerContext from '../context/DrawerContext';
import Flex from './Flex';


function Navbar() {

    const { toggleDrawer } = useContext(DrawerContext);
    const { user } = useContext(AuthContext)
    

    let username = ''
    let imgProfile = alternativePicture
    if (user) {
        if (user.full_name) {
            username = user.full_name.split(' ')[0]
            imgProfile = user.avatar_url || alternativePicture

        } else {
            console.log('no hay Nombre')
        }
    }

    return (
        <>
            <div className="navbar fixed lg:w-[80%] bg-white z-20 ">
                <div
                    onClick={toggleDrawer(true)}
                    className='lg:hidden navbar-start w-[20%] btn bg-white hover:bg-white border-none relative' >
                    <MenuIcon className='relative' color='black' height={20} width={30} />
                </div>
                <Flex className="navbar-start lg:flex hidden w-[20%]">
                    <a className="text-xl ">
                        <img className='w-16 h-16' src={agrozamLogo} alt="logo" />
                    </a>
                </Flex>
                <div className="navbar-center flex gap-2 grow lg:justify-center lg:w-[60%] ms-4">
                    <Link className='lg:block hidden' to='/'>Inicio</Link>
                    <Link className='lg:block hidden' to='/shop'>Productos</Link>
                    <Link className='lg:block hidden' to='/product_detail'>D Products</Link>
                    <Link className='lg:block hidden' to='/pay'>Pagos</Link>
                    <img className='w-16 h-16 lg:hidden mx-auto block' src={agrozamLogo} alt="logo" />
                </div>
                <div className='navbar-end w-[20%]'>
                    {
                        user ? (
                            <>
                                <BtnShop className='hidden lg:block' />

                                <Avatar classDiv='rounded-full w-10 z-20' imgSrc={imgProfile} />
                                <p className='lg:block hidden ms-2'>{username}</p>

                            </>

                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar