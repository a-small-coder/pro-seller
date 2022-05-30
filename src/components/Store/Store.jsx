import React from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import './Store.scss'
import { useLocation, useNavigate } from 'react-router-dom';

function Store(props) {

    let history = useLocation()
    const history_p = history.pathname.split('/')
    let last_category_type_path = history_p[history_p.length - 1]
    let category_id = 0
    if (!isNaN(parseFloat(last_category_type_path))){
        if (history_p.length > 2){
            last_category_type_path = history_p[history_p.length - 2]
            category_id = parseInt(history_p[history_p.length - 1])
        }
        else{
            last_category_type_path = history_p[history_p.length - 1]
        }
        
    }

    let categories
    let need_back = false
    let add_product = false
    let products

    if (last_category_type_path === ''){
        categories = props.store.categories.map( c => (
            <Card 
                key={c.id} 
                data={{...c, need_back:need_back, with_products:add_product}} 
                link={`category/${c.id}`}
            />
        ))
    }

    if (last_category_type_path === 'category'){
        need_back = true
        if (props.store.categories.length > 0){
            let category = get_category(category_id, props.store.categories)
            if (category.subcategories.length > 1){
                categories = category.subcategories.map( (sc, i) => {
                    if (i > 0 ){
                        need_back = false
                    }
                    return (
                        <Card 
                            key={sc.id} 
                            data={{...sc, need_back:need_back, with_products:add_product}} 
                            link={`subcategory/${sc.id}`}
                        />
                    )
                })
            }
            if (category.subcategories.length === 1){
                add_product = true
                let sc = category.subcategories[0]
                categories =  (
                    <Card 
                        key={sc.id} 
                        data={{...sc, need_back:need_back, with_products:add_product}}
                        />
                )
                if (sc.products.length > 0){
                    products = sc.products.map( p => (
                        <Product key={p.id} data={p}/>
                    ))
                }
            }
            if (category.subcategories.length === 0){
                add_product = true
                categories =  (
                    <Card 
                        key={category.id} 
                        data={{...category, need_back:need_back, with_products:add_product}}
                        />
                )
                if (category.products.length > 0){
                    products = category.products.map( p => (
                        <Product key={p.id} data={p}/>
                    ))
                }
            }
        }
    }
    if (last_category_type_path === 'subcategory'){
        need_back = true
        add_product = true
        let subcategory_id = category_id
        category_id = parseInt(history_p[history_p.length - 3])
        
        if (props.store.categories.length > 0){
            let category = get_category(category_id, props.store.categories)
            let sc = get_category(subcategory_id, category.subcategories)
            categories =  (
                <Card 
                    key={sc.id} 
                    data={{...sc, need_back:need_back, with_products:add_product}}
                    />
            )
            if (sc.products.length > 0){
                products = sc.products.map( p => (
                    <Product key={p.id} data={p}/>
                ))
            }
        }
    }

    

    return (
        <section className='page store'>
            {/* <div className='store__category category'>
                <h2 className='category__title'>Категория</h2>
                
            </div> */}
            <div className='store__categories'>
                {categories}
            </div>
            

            {products}
            
        </section>
    );
}

let mapStateToProps = (state) => {
    return {
        store: state.store
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const StoreContainer = connect(mapStateToProps, mapDispatchToProps)(Store);

export default StoreContainer;


function get_category(category_id, categories_list){
    let category = -1
    categories_list.forEach( c => {
        if (category_id === c.id){
            category = c
        }
    })
    return category
}