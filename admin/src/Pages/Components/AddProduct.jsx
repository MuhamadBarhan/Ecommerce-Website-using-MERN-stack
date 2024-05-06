import React, { useState } from 'react'
import '../Styles/AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const [image , setImage] = useState(false);
  const [productDetails , setProductdetails] = useState({
    name : "",
    image: "",
    category:"android",
    new_price: "",
    old_price: "",
  });

  const imageHandler=(e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler=(e)=> {
    setProductdetails({...productDetails , [e.target.name]:e.target.value})
  }

  const addProduct = async ()=>{
    console.log(productDetails);
    let responseData;
    let product=productDetails;

    let formData =new FormData();
    formData.append('product' , image);
    await fetch('http://localhost:4000/upload' , {
      method:'POST',
      headers:{
        Accept:"application/json",
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=> {responseData=data});

    if(responseData.success){
      product.image=responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct' , {
        method:'POST' ,
        headers : {
          Accept:"application/json",
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert("Product added successfully"):alert("Failed to add product")
      })
    }

  }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type='text' value={productDetails.name} onChange={changeHandler} name='name' placeholder='Enter Product Title..' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type='text' value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Enter old price..' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type='text' value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Enter new price..' />
        </div>
      </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select name="category" value={productDetails.category} onChange={changeHandler} className='addproduct-selector'>
            <option value="android">Android</option>
            <option value="iOS">iOS</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
          </label>
          <input type="file" onChange={imageHandler} name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn' onClick={()=>addProduct()}>ADD</button>
    </div>
  )
}

export default AddProduct