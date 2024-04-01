import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/headerNav.css"

const HeaderNav = () => {
  return (
    <div className='headerNav'>
        <h1><Link to="/">Ecommerce Final</Link></h1>
        <nav className='navoff'>
          <ul className='headerNav__list'>
            <li><Link to="/login">
            <box-icon name='user'></box-icon>
            </Link></li>
            <li><Link to="/purchases">
            <box-icon name='purchase-tag' ></box-icon>  
              </Link></li>
            <li><Link to="/cart">
            <box-icon name='cart-alt' ></box-icon>  
              </Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav