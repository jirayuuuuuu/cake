import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="mb-4 p-5  border border-blue-700 rounded text-blue-700 ">
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default ProductCard