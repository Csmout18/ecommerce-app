import React, { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

function App() {

const [ products ] = useState([
  { id: 1, name: 'Wireless Headphones', price: 100, description: 'High-quality wireless headphones with noise cancellation' },
  { id: 2, name: 'Smart Watch', price: 150, description: 'Stylish smartwatch with fitness tracking' },
  { id: 3, name: 'Laptop Backpack', price: 40, description: 'Spacious and durable backpack for laptops' },
  { id: 4, name: 'Bluetooth Speaker', price: 60, description: 'Portable Bluetooth speaker with deep bass' },
])

return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Product List</h1>
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  )

}

export default App
