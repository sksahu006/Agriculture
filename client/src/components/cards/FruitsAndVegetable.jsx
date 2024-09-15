import React, { useState } from 'react';
import { Eye, RefreshCw, Heart, ShoppingCart } from 'lucide-react';
import pro1 from '../../assets/img-pro-01.jpg';
import pro2 from '../../assets/img-pro-02.jpg';
import pro3 from '../../assets/img-pro-03.jpg';
import pro4 from '../../assets/img-pro-04.jpg';

const ProductCard = ({ image, title, price, saleType }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${saleType === 'sale' ? 'bg-red-500' : 'bg-green-500'}`}>
        {saleType === 'sale' ? 'Sale' : 'New'}
      </span>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="flex space-x-2">
          <button className="p-2 bg-white rounded-full text-gray-800 hover:text-green-500"><Eye size={20} /></button>
          <button className="p-2 bg-white rounded-full text-gray-800 hover:text-green-500"><RefreshCw size={20} /></button>
          <button className="p-2 bg-white rounded-full text-gray-800 hover:text-green-500"><Heart size={20} /></button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-green-600 font-bold">${price}</p>
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
        <ShoppingCart size={20} className="mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

const FruitsAndVegetables = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const products = [
    { id: 1, title: "Fresh Apple", price: 7.79, image: pro1, saleType: "sale", category: "best-seller" },
    { id: 2, title: "Organic Banana", price: 9.79, image: pro2, saleType: "new", category: "top-featured" },
    { id: 3, title: "Red Tomato", price: 10.79, image: pro3, saleType: "sale", category: "top-featured" },
    { id: 4, title: "Green Lettuce", price: 15.79, image:pro4, saleType: "sale", category: "best-seller" },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <div className="bg-gradient-to-r from-[#c5f3b8] to-[#d3f2c0] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Fruits & Vegetables</h1>
          <p className="text-gray-600">Fresh and organic produce for your healthy lifestyle.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['all', 'top-featured', 'best-seller'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${tab === 'all' ? 'rounded-l-lg' : ''} ${
                  tab === 'best-seller' ? 'rounded-r-lg' : ''
                } border border-gray-200`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitsAndVegetables;