import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../image/card_img.jpeg'
import './Card.scss'
import { FiChevronLeft } from "react-icons/fi";


function Card(props) {

    const data = props.data

    const link = props.link

    const navigate = useNavigate()

    const go_back_click_handler = () => {
        navigate(-2)
    }
    const go_to_subcategories = () => {
        navigate(link)
    }

    let img_link
    let subcategories_link
    if (!data.with_products){
        img_link = (
            <Link to={link} className="card-item__image_link"></Link>
        )
        subcategories_link = (
            <Link
                to={link} 
                className=' _btn'
                onClick={go_to_subcategories}>
                <span>узнать больше</span>
            </Link>
        )
    }

    const go_back = (
        <button className='card-item__back-to-category' onClick={go_back_click_handler}>
            <FiChevronLeft/> вернуться назад
        </button>
    )

    return (
        <div className='card-item'>
            {data.need_back ? go_back : null}
            <div className='card-item__conteiner'>

                <div className='card-item__left-side'>
                    <div className='card-item__image'>
                        {img_link}
                        <img src={img} className='img-responsive' alt=''/>
                    </div>
                </div>
                <div className='card-item__right-side'>
                    <div className='card-item__category'>
                        <h3 className='card-item__title'>{data.title}</h3>
                        <p className='card-item__description'>
                            {data.descr}
                        </p>
                        <div className='card-item__subcategories'>
                            {subcategories_link}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Card;