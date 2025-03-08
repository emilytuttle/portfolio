import React from 'react'
import Navbar from './Navbar'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
        <h1 className={classes.navName}>EMILY TUTTLE</h1>
        {/* Render the imported Navbar in the header component */}
        <Navbar />
      
    
    </header>
  )
}

export default Header