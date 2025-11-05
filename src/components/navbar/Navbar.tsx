import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'


function Navbar() {
  return (
      <div className='h-14 border-2 shadow flex items-center'>
    <Container>
        <div className='flex justify-between'>
          <ul className='flex'>
            <li className='mr-4'><Link to="/">Home</Link></li>
            <li className='mr-4'><Link to="/store">Store</Link></li>
        </ul>
        <Link to="/cart"><button>Store Cart</button></Link>
        </div>
    </Container>
        </div>
  )
}

export default Navbar