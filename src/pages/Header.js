import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'>
            <img src={logo} style={{width:100}}/>
        </Link>        
    </header>
  )
}

export default Header