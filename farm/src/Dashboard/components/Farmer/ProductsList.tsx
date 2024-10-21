import React, { useState, useEffect } from 'react'
import axios from 'axios'

type Product = {
  id: string;
  images: string[];
  product_name: string;
  stock: 'In Stock' | 'Out of Stock';
  price: number;
  created_at: string;
  category: string;
  color: string;
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = ({ children, className, variant = 'outline', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
  const variantClasses = variant === 'primary' 
    ? 'bg-orange-500 text-white hover:bg-orange-600' 
    : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input 
      type="checkbox" 
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
      {...props} 
    />
  )
}

const ActionPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
      <div className="py-1">
        <button onClick={() => { console.log('Edit clicked'); onClose(); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
        <button onClick={() => { console.log('Delete clicked'); onClose(); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
        <button onClick={() => { console.log('Show clicked'); onClose(); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Show</button>
      </div>
    </div>
  )
}

export default function Component() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeActionPanel, setActiveActionPanel] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [keywordFilter, setKeywordFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string[]>([])
  const [colorFilter, setColorFilter] = useState<string[]>([])
 const user : string | null = sessionStorage.getItem('user')

  console.log('====================================');
  console.log(products);
  console.log('====================================');
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (user) {
          const tokenId = JSON.parse(user)
         
        setLoading(true)
        const response = await axios.get<Product[]>(import.meta.env.VITE_API+'/products/farmer/671121a369968286a0b05f48', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': tokenId.token, // Include the auth token in the header
          },
        })
      
        setProducts(response.data)
        setFilteredProducts(response.data)
      }
      } catch (err) {
        setError('Failed to fetch products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesKeyword = product.product_name.toLowerCase().includes(keywordFilter.toLowerCase())
      const matchesCategory = categoryFilter.length === 0 || categoryFilter.includes(product.category)
      const matchesColor = colorFilter.length === 0 || colorFilter.includes(product.color)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesKeyword && matchesCategory && matchesColor && matchesPrice
    })
    setFilteredProducts(filtered)
  }, [products, keywordFilter, categoryFilter, colorFilter, priceRange])

  const toggleActionPanel = (productId: string) => {
    setActiveActionPanel(activeActionPanel === productId ? null : productId)
  }

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const handleColorChange = (color: string) => {
    setColorFilter(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="text-blue-600 font-medium">Dashboard</span>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          <span>Products</span>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 flex justify-between items-center border-b">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">All Products</span>
              <Button className="flex items-center">
                Sort
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Button>
              <Button className="flex items-center">
                10
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Button>
            </div>
            <Button variant="primary" className="flex items-center">
              Actions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4 text-left"><Checkbox /></th>
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Photo</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Stock</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Created At</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts &&
                filteredProducts?.map((product) => (
                  <tr key={product.id} className="text-sm text-gray-700">
                    <td className="py-4 px-4"><Checkbox /></td>
                    <td className="py-4 px-4 text-orange-500 font-medium">{product.id}</td>
                    <td className="py-4 px-4">
                      <img src={product.images[0]} alt={product.product_name} className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="py-4 px-4 font-medium">{product.product_name}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${product.stock === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-4">{product.created_at}</td>
                    <td className="py-4 px-4 relative">
                      <button 
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => toggleActionPanel(product.id)}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                      </button>
                      {activeActionPanel === product.id && (
                        <ActionPanel onClose={() => setActiveActionPanel(null)} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Keywords</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Phone, Headphone, Shoe ..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={keywordFilter}
                  onChange={(e) => setKeywordFilter(e.target.value)}
                />
                <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {['All', 'Accessories', 'Phone', 'Headphone', 'Camera'].map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={category} 
                      checked={categoryFilter.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={category} className="ml-2 text-sm text-gray-700">{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Price</h3>
              <div className="relative pt-1">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Colors</h3>
              <div className="flex space-x-2">
                {['blue', 'green', 'purple', 'red', 'yellow', 'orange'].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color}-500 cursor-pointer border-2 ${colorFilter.includes(color) ? 'border-gray-800' : 'border-white'} shadow-sm`}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}