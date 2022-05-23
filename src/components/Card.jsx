import React from 'react';
import img from '../image/card_img.jpeg'
import './Card.scss'

function Card(props) {

    const showSubcategories = () => {

    }

    return (
        <div className='card-item'>
            <div className='card-item__image'>
                <img src={img} className='img-responsive' alt=''/>
            </div>
            <div className='card-item__category'>
                <h3 className='card-item__title'>Название категории</h3>
                <div className='card-item__subcategories'>
                    <button 
                        className='card-item__subcategories_btn'
                        onClick={showSubcategories}>
                        <span>подкатегории</span>
                    </button>
                </div>
            </div>

            <div className='card-item__subcategories-list subcategories-list'>
                
            </div>
            

        </div>
    );
}

export default Card;