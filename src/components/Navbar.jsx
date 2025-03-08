import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'


const Navbar = () => {

    let activeStyle = {
        'font-weight': 'bold'

      };
    
  return (
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