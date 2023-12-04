import React from 'react'
import Logo from '../assets/logo.jpg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <ul className={styles.navlist}>
            <li>Home</li>
            <li>Our Products</li>
            <li>About us </li>
            <li>Contact us</li>
            <li>LogIn</li>
        </ul>      
    </div>
  )
}

export default Header
