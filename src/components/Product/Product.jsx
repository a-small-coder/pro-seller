import React, { useEffect, useState } from 'react';
import './Product.scss'

function Product(props) {

    useEffect(() => {
        return () => {
            // Anything in here is fired on component unmount.
        }
    }, [])

    const data = props.data

    const [count, set_count] = useState(data.count)

    const change_count = (target) =>{
       const target_class = target.target.className
        if (target_class === '_plus'){
            set_count(count + 1)
        }
        if (target_class === '_minus'){
            set_count(count - 1)
        }
    }

    const add_in_cart = () => {
        if (count === 0){
            set_count(1)
        }
        
    }

    const add_button_text = count === 0 ? "Добавить" : `В корзине (${count})`

    return (
        <div className='product'>
            <div className='product__wrapper'>
                <div className='product__image'>
                    <img src={data.img} className='' alt=''/>
                </div>

                <div className='product__descr descr-body'>
                    <div className='descr-body__title'>
                        {data.title}
                    </div>
                    <div className='descr-body__price'>
                        {data.price}p.
                    </div>
                </div>

                <div className='product__add-button'>
                    {
                        count > 0 ? (
                            <span className='_minus' onClick={change_count}>-</span>
                        ) : null
                    }
                    <button className='_btn' onClick={add_in_cart}>{add_button_text}</button>
                    {
                        count > 0 ? (
                            <span className='_plus' onClick={change_count}>+</span>
                        ) : null
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Product;