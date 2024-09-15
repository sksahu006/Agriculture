import React from 'react';
import category1 from '../../assets/categories_img_01.jpg';
import category2 from '../../assets/categories_img_02.jpg';
import category3 from '../../assets/categories_img_03.jpg';

const CategoryCard = ({ imageUrl, category }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <img 
      src={imageUrl} 
      alt={category} 
      className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full p-4">
      <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
      <a 
        href="#" 
        className="inline-block bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-green-500 hover:text-white"
      >
        Shop Now
      </a>
    </div>
  </div>
);

const VegetableCard = () => {
  const categories = [
    { imageUrl: category1, category: "Fresh Vegetables" },
    { imageUrl: category2, category: "Organic Fruits" },
    { imageUrl: category3, category: "Quality Meats" },
  ];

  return (
    <div className='mt-6'>
      <div className='container mx-auto px-4'>
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard key={index} imageUrl={cat.imageUrl} category={cat.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;