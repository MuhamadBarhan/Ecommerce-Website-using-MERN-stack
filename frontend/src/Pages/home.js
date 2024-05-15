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
import banner from '../data/Images/banner.png'

import { addProduct } from '../redux/reducer/products';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../url'
import { setCartItems } from '../redux/reducer/cart';
import toast, { Toaster } from 'react-hot-toast';
import Sponsored from './Components/Sponsored';


const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  console.log(allProducts, data);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/allproducts`);
        dispatch(addProduct(response.data));
        setAllProducts(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Network Error");
      }
    };

    if (localStorage.getItem('auth-token')) {
      axios.post(`${baseUrl}/getcart`, {}, {
        headers: {
          Accept: '*/*',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          dispatch(setCartItems(res.data));
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    }


    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const result = allProducts.filter((curData) => curData.category && curData.category.includes('android'));
    setData(result);
  }, [allProducts]); // This effect runs whenever allProducts changes.
  


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
      <Toaster />
      {loading ? (
        <div className="loading-animation">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container">
          <div className="category-container">
            {category.map((product, index) => (
              <div className="shop-category" key={product.id}>
                <Link to={product.link}><img src={product.image} alt={product.name} className="shopImage" id='cat-img' /></Link>
                <label htmlFor='cat-img' className='catlabel'>{product.name}</label>
              </div>
            ))}
          </div>
          <div className="image-carousel">
            <ImageCarousel images={images} />
          </div>
          <ProductCard product={allProducts} />
          <img src={banner} alt="banner" className='banner' />
          <Sponsored product={data}/>
          <ProductCard product={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
