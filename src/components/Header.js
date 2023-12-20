import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import styles from './Header.module.css'

const Header = ({customers}) => {
  return (
    <div className={styles.header}>
      <Link to='/'>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </Link>
        
        <nav className='nav-bar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='customers' >Customers({customers.length})</NavLink>
            <NavLink to='about' >About us </NavLink>
            <NavLink to='contact' >Contact us</NavLink>
            <NavLink to='login' >LogIn</NavLink>
        </nav>      
    </div>
  )
}

export default Header
