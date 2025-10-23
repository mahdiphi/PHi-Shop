import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-14 border-2 shadow flex justify-between items-center'>
        <ul className='flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
        </ul>
        <button>Store bag</button>
        </div>
  )
}

export default Navbar