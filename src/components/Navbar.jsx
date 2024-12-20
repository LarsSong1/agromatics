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
    const { user, profile } = useContext(AuthContext)
    const { toggleCartDrawer } = useContext(DrawerContext)


    let username = ''
    let imgProfile = alternativePicture
    if (user) {
        if (user.full_name) {
            username = user.full_name.split(' ')[0]
            imgProfile = user.avatar_url || alternativePicture

        } else {
            console.log('No username')
        }
    }

    return (
        <>
            <div className="navbar fixed lg:w-[80%] bg-white z-20 ">
                <div
                    className='lg:hidden navbar-start w-[20%] ps-4 pe-4 bg-white hover:bg-white border-none relative' >
                    <MenuIcon onClick={toggleDrawer(true)} className='relative' color='black' height={20} width={30} />

                </div>
                <Flex className="navbar-start lg:flex hidden w-[20%]">
                    <a className="text-xl ">
                        <img className='w-16 h-16' src={agrozamLogo} alt="logo" />
                    </a>
                </Flex>
                <div className="navbar-center flex gap-2 grow lg:justify-center lg:w-[60%] ms-4">
                    <Link className='lg:block hidden' to='/'>Inicio</Link>
                    <Link className='lg:block hidden' to='/shop'>Productos</Link>
                    {profile?.admin ? <Link className="lg:block hidden" to='/dashboard'>Dashboard</Link> : <></>}
                    {/* <Link className='lg:block hidden' to='/pay'>Pagos</Link>
                    <Link className='lg:block hidden' to='/cart'>Carrito</Link> */}
                    <img className='w-16 h-16 lg:hidden mx-auto block' src={agrozamLogo} alt="logo" />
                </div>
                <div className='navbar-end w-[20%]'>
                    {
                        user ? (
                            <>
                                <BtnShop className='hidden lg:block'
                                    onClick={toggleCartDrawer(true)}
                                />

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