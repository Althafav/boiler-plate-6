"use client"
import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';




export default function MenuComponent() {
    const [isToggle, setIsToggle] = useState(false)

    const handleToggle = () => {
        setIsToggle(prevState => !prevState)
    }
    return (
        <nav className='menu-wrapper'>
            <div className="container flex items-center justify-between mx-auto px-3">
                <div className="logo-wrapper">
                    <img className='menu-logo' src="/assets/icons/cch-logo-no-name.png" alt=""
                        loading="lazy" />
                </div>

                <ul className='menu-items'>
                    <li className='menu-item'>WHO WE ARE</li>
                    <li className='menu-item'>OUR SERVICES</li>
                    <li className='menu-item'>PORTFOLIO</li>

                    <div className='menu-cta-wrapper'>
                        <button className='menu-cta-btn'><span>MAKE AN INQUIRY</span></button>
                    </div>
                </ul>

                <div className="menu-icon-wrapper lg:hidden block" onClick={handleToggle}>
                    {isToggle ? <IoMdClose size={32} color='white' cursor="pointer" /> : <HiOutlineMenuAlt2 size={32} color='white' cursor="pointer" />}

                </div>

            </div>


            <div className={`mobile-menu-nav lg:hidden block ${isToggle ? 'block' : 'hidden'}`}>

                <ul className='mobile-menu-items'>
                    <li className='mobile-menu-item'>WHO WE ARE</li>
                    <li className='mobile-menu-item'>OUR SERVICES</li>
                    <li className='mobile-menu-item'>PORTFOLIO</li>

                    <li className='menu-cta-wrapper'>
                        <button className='mobile-menu-cta-btn'><span>MAKE AN INQUIRY</span></button>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
