// src/components/ItemListContainer.jsx
import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>{greeting}</h2>
    </section>
  )
}

export default ItemListContainer
