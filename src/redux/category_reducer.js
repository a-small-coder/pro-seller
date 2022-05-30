import img from '../image/card_img.jpeg'
import img_p1 from '../image/product_1.png'
import img_p2 from '../image/product_2.png'
import img_p3 from '../image/product_3.png'
import img_p4 from '../image/product_4.png'

const ADD_CATEGORY = "ADD_CATEGOTY";
const SET_CATEGORY = "SET_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";




let initialState = {
    categories: [
        {
            id: 1,
            title: 'Lorem ipsum dolor: 1',
            image: img,
            descr: 'Lorem ipsum dolor sit amet, ',
            products: [

            ],
            need_back: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Lorem ipsum : 1',
                    image: img,
                    descr: 'Lorem ipsum  sit amet, ',
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
                    need_back: false,
                }
            ],
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor: 2',
            image: img,
            descr: 'Lorem ipsum dolor sit amet,',
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
            need_back: false,
            subcategories: [

            ],
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor: 3',
            image: img,
            descr: 'Lorem ipsum dolor sit amet, ',
            products: [

            ],
            need_back: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Lorem ipsum : 1',
                    image: img,
                    descr: 'Lorem ipsum  sit amet, ',
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
                    need_back: false,
                },
                {
                    id: 2,
                    title: 'Lorem ipsum : 2',
                    image: img,
                    descr: 'Lorem ipsum  sit amet, ',
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
                    need_back: false,
                },
            ],
        }
    ]
    
}

const categoryReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_CATEGORY: {
            
            let stateCopy= {...state, isAuth: action.isAuth}
            return stateCopy
        }
        case SET_CATEGORY: {
            
            let stateCopy = {...state, isLoading: action.isLoading}
            return stateCopy
        }
        case DELETE_CATEGORY:{
            
            let stateCopy = {...state, isNeedRedirect: action.isNeedRedirect}
            return stateCopy
        }
        default: 
            return state
    }
}

export const addCategoryAC = (isAuth) => ({type: ADD_CATEGORY, isAuth});
export const setCategoriesAC = (isLoading) => ({type: SET_CATEGORY, isLoading});
export const deleteCategoryAC = (isNeedRedirect) => ({type: DELETE_CATEGORY, isNeedRedirect});
export default categoryReducer