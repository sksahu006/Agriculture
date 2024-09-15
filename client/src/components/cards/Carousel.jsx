import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Correct import for Navigation, Pagination
import { Autoplay } from 'swiper/modules';  // Correct import for Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import banner1 from '../../assets/banner-01.jpg';
import banner2 from '../../assets/banner-02.jpg';
import banner3 from '../../assets/banner-03.jpg';

// Define the Carousel component
const Carousel = () => {
  const slides = [
    {
      image: banner1,
      title: 'Welcome To Freshshop',
      description: 'See how your users experience your website in real-time or view trends to see any changes in performance over time.',
    },
    {
      image: banner2,
      title: 'Fresh Vegetables',
      description: 'We offer a wide variety of fresh, organic vegetables delivered straight to your door.',
    },
    {
      image: banner3,
      title: 'Quality Fruits',
      description: 'Discover our selection of premium, hand-picked fruits from local and international orchards.',
    },
  ];

  return (
    <div className="relative max-w-full h-[80vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}  // Modules imported correctly
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
                  <a
                    href="#"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Shop New
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev absolute left-4 z-10 bg-black bg-opacity-50 p-2 rounded-full">
          <FaAngleLeft className="text-white text-3xl" />
        </div>
        <div className="swiper-button-next absolute right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full">
          <FaAngleRight className="text-white text-3xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
