import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'


const Navbar = () => {

    // Make it clear which link is the current view by making a style that makes it different from the others

    let activeStyle = {
        'font-weight': 'bold'

      };
    
  return (
    // Create the navbar with the NavLinks that match those made in App.js so that it will show the right view, also add or remove the active style when needed
    <nav className={classes.mainNav}>
        <ul>
        <li >
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    className={classes.navlink}
                
                >
                    Home
                </NavLink>
            </li>
            
            <li>
                <NavLink
                    to="/about-me"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/resume"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    Work History
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar