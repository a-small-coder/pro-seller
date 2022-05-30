import React from 'react';
import './CartCard.scss'
import img from '../../image/product_1.png'

function CartCard(props) {

    const data = {
        id: 1,
        img: img,
        title: 'product name',
        price: 1,
        old_price: 2,
        count: 1,
        descr: 'description'
    }

    return (
        <div className='cart-card'>
            <div className='cart-card__image'>
                <img src={data.img} className='img-responsive' alt=''/>
            </div>

            <div className='cart-card__info info-card'>
                <h3 className='info-card__title'>
                    {data.title}
                </h3>

                <div className='info-card__price'>
                    <span className='price'>{data.price} p.</span>
                    <span className='old_price'>{data.old_price} p.</span>
                </div>

                <div className='info-card__description'>
                    {data.descr}
                </div>
            </div>

            <div className='cart-card__counter'>
                <div className='counter'>
                    <span className='counter__plus'>+</span>

                    <span className='counter__counts'>
                        {data.count}
                    </span>

                    <span className='counter__minus'>-</span>
                </div>
            </div>
        </div>
    );
}

export default CartCard;