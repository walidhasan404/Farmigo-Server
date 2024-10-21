import React, { useState } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'

export default function AddProducts() {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [image, setImage] = useState<string[]>([]);  // Image array state
  const [newImageUrl, setNewImageUrl] = useState<string>(""); 
  const [rating, setRating] = useState('')
  const [featured, setFeatured] = useState(false)

  const categories = ['Dairy & Meats', 'Vegetables', 'Honey & Jam', 'Fruits', 'Grain & Cereal', 'Poultry']

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    const productData = {
      product_name: productName,
      category,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      images: image,
      rating: parseFloat(rating),
      featured
    }
    console.log('Product Data:', productData)
    // Here you would typically send this data to your backend
    try {
      const token = sessionStorage.getItem('user');
      /* if (token !== null) without this line show type error because token will be string or null */
      if (token !== null) { // If the token is valid and you have access to the product data then send it to the backend   
        const tokenId = JSON.parse(token); // Get auth token from local storage or context
      
      console.log('====================================');
      console.log(tokenId.token);
      console.log('====================================');
      const response = await axios.post(import.meta.env.VITE_API+'/products/create', productData, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': tokenId.token, // Include the auth token in the header
        },
      });
    
      // Handle success (e.g., show a success message, reset the form, etc.)
      console.log('Product created successfully:', response.data);
    }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error creating product:', error);
    } finally {
      // Set loading state back to false after the request completes
      setLoading(false);
    }
  
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update inputValue with current input
    setNewImageUrl(value);

    // Split the input by commas and trim whitespace, then filter out empty values
    const imageUrls = value.split(',').map(url => url.trim()).filter(url => url);
    
    setImage(imageUrls);  // Update the image array
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages(prevImages => [...prevImages, ...newImages])
    }
  }

  const handleImageDelete = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product name *
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image *
                </label>
                <input
                  type="text"
                  id="image"
                  value={newImageUrl}  // Bind input to newImageUrl state
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                >
                  <option value="">Choose category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price *
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter price"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity *
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter quantity"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload images *</label>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative border rounded-lg p-2">
                      <img src={image} alt={`Product ${index + 1}`} className="w-full h-32 object-cover" />
                      <button
                        type="button"
                        onClick={() => handleImageDelete(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                        <span className="sr-only">Delete image</span>
                      </button>
                    </div>
                  ))}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      multiple
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <p className="text-sm text-gray-500">Click to upload</p>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating *
                </label>
                <input
                  type="number"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter rating (0-5)"
                  min="0"
                  max="5"
                  step="0.1"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                  Featured product
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
               {loading ? 'Creating...' : 'Add product'}
             
            </button>
            <button
              type="button"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-4 rounded"
            >
              Save as draft
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}