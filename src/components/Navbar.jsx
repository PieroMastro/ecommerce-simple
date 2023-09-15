import { ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="links">
                <Link to='/'>
                    <header>
                        <p>OrgonitasBe-Li</p>
                    </header>
                </Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar