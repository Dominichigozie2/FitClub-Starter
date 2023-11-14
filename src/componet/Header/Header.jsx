import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='headerMenu'>
            <li>Home</li>
            <li>Progress</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testmonials</li>
        </ul>
    </div> 
  )
}

export default Header