import React from 'react';
import Card from '../Card';
import './Store.scss'

function Store(props) {
    return (
        <section className='page store'>
            <div className='store__category category'>
                <h2 className='category__title'>Категория</h2>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </section>
    );
}

export default Store;