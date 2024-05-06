import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import ImageCarousel from './Components/ImageCarousel';
import './Styles/home.css';
// import { products } from '../data/Products';
import ProductCard from './Components/ProductCard'
import image1 from '../data/Images/image1.jpg'
import image2 from '../data/Images/image2.jpg'
import image3 from '../data/Images/image3.jpg'
import image4 from '../data/Images/image4.jpg'
import image5 from '../data/Images/image5.png'
import image6 from '../data/Images/image6.png'
import image7 from '../data/Images/image7.png'
import image8 from '../data/Images/image8.png'
import image9 from '../data/Images/image9.png'

import { addProduct } from '../redux/reducer/products';
import { useDispatch } from 'react-redux';


const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/allproducts");
        dispatch(addProduct(response.data));
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  //Carousel Images
  const images = [image1, image2, image3, image4,];

  //Product Category
  const category = [
    { id: 1, name: 'Mobiles', image: image5, link: '/mobiles' },
    { id: 2, name: 'Electronics', image: image6, link: '/products' },
    { id: 3, name: 'Smart Watches', image: image7, link: '/products' },
    { id: 4, name: 'Shoes', image: image8, link: '/products' },
    { id: 5, name: 'Accessories', image: image9, link: '/products' },
  ];


  return (
    <div>
      <div className="container">
        <div className="category-container">
          {category.map((product, index) => (
            <div className="shop-category">
              <Link to={product.link}><img src={product.image} alt={product.name} className="shopImage" id='cat-img' /></Link>
              <label for='cat-img' className='catlabel'>{product.name}</label>
            </div>
          ))}
        </div>
        <div className="image-carousel">
          <ImageCarousel images={images} />
        </div>
        <div className="productCardContainer">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
