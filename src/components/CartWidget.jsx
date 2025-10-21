// src/components/CartWidget.jsx
import React from 'react'

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/107/107831.png" 
        alt="Carrito" 
        style={{ width: '30px', marginRight: '5px' }}
      />
      <span>3</span>
    </div>
  )
}

export default CartWidget
