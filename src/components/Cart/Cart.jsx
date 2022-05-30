import React from 'react';
import './Cart.scss';
import img_p1 from '../../image/product_1.png'
import img_p2 from '../../image/product_2.png'
import img_p3 from '../../image/product_3.png'
import img_p4 from '../../image/product_4.png'
import CartCard from '../CartCard/CartCard';

function Cart(props) {

    const data = {
        title: 'Ваша корзина',
        subtitle: 'товара',
        products: [
            {
                id: 1,
                title: "10 000 марок",
                price: 2000,
                old_price: 2500,
                count: 0,
                img: img_p1,
            },
            {
                id: 2,
                title: "5 000 марок",
                price: 1500,
                old_price: 1500,
                count: 0,
                img: img_p2,
            },
            {
                id: 3,
                title: "2 500 марок",
                price: 1000,
                old_price: 1000,
                count: 0,
                img: img_p3,
            },
            {
                id: 4,
                title: "1000 марок",
                price: 500,
                old_price: 750,
                count: 0,
                img: img_p4,
            },
        ],
        total_sum: 0,
        after_sale_sum: 0
    }

    return (
        <section className='cart page'>
            <div className='cart__header header-cart'>
                <h2 className='header-cart__title'>{data.title}</h2>
                <p className='header-cart__products-count'>{data.products.length} {data.subtitle}</p>
            </div>

            <div className='cart__products'>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/> 
            </div>

            <div className='cart__summary summary-cart'>
                <p className='summary-cart__item'>product 1<span>2500</span></p>
                <p className='summary-cart__item'>product 2<span>3000</span></p>

                <p className='summary-cart__item _big'>Total <span>5500</span></p>
            </div>

            <div className='cart__buy-button'>
                <button className='buy-button _button'>
                    Оформить заказ
                </button>
                
            </div>

        </section>
    );
}

export default Cart;