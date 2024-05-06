import React, { useState } from 'react'
import './Styles/mobiles.css'
import ProductCard from './Components/ProductCard'
import { products } from '../data/Products'

const Mobiles = () => {

    const [data, setData] = useState(products.filter((element)=> {
        return element.type.includes('mobile');
    }));



    const filterResult = (catItem) => {
        let result = products.filter((curData) => {
            return curData.tag.includes(catItem);
        })
        setData(result);
    }

    const filterCategory = () => {
        var x=document.getElementById('android');
        var y=document.getElementById('ios');
        
        if (x.checked) {
            y.checked=false;
            let result = products.filter((curData) => {
                return curData.category.includes('android');
            })
            setData(result);
        }
        
        if (y.checked) {
            x.checked=false;
            let result = products.filter((curData) => {
                return curData.category.includes('ios');
            })
            setData(result);
        }
    }




    return (
        <div>
            <div className="mobile-list">
                <div className="leftside">
                    <div className="category-list">
                        <span className="title">Categories</span>
                        <span className='listitems'><input type="checkbox" id="android" name="android" value="android" onChange={filterCategory} />
                            <label for="android">Android</label></span>
                        <span className='listitems'><input type="checkbox" id="ios" name="ios" value="ios" onChange={filterCategory} />
                            <label for="ios">iOS</label></span>
                    </div>
                    <div className="tag-list">
                        <span className="title">Tag</span>
                        <span className='listitems' onClick={() => filterResult('Xiaomi')}>Xiaomi</span>
                        <span className='listitems' onClick={() => filterResult('Oneplus')}>Oneplus</span>
                        <span className='listitems'>Vivo</span>
                        <span className='listitems'>Samsung</span>
                        <span className='listitems'>Oppo</span>
                    </div>
                </div>
                <div className="rightside">
                    <div className="products-list">
                        {data.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobiles