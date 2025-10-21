// src/components/NavBar.jsx
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f4f4f4'
    }}>
      <h1 style={{ fontSize: '1.5rem' }}>Huillín</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <a href="#">Contacto</a>
      </div>

      <CartWidget />
    </nav>
  )
}

export default NavBar
