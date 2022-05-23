import img from '../img/img.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

const SET_IS_AUTH = "SET_IS_AUTH";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_IS_NEED_REDIRECT = "SET_IS_NEED_REDIRECT";
const SET_USER_DATA = "SET_USER_DATA";




let initialState = {
    current_page : 1,
    page_size: false,
    cards: [
        {
            id: 1,
            img_url: img,
            number: '599777702',
            reference: 'ttps://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B4%D0%B0%D1%87%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4508715',
            date: '01.05.22 10:10',
            status: 1
        },
        {
            id: 2,
            img_url: img2,
            number: '599777702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-1-%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4676736',
            date: '01.05.22 10:11',
            status: 1
        },
        {
            id: 3,
            img_url: img3,
            number: '599777704',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%B4%D0%B0%D1%87%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83%D1%80%D0%B8%D0%B0%D0%BD%D0%B8-4508758',
            date: '01.05.22 10:13',
            status: 1
        },
        {
            id: 4,
            img_url: img4,
            number: '599763702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0--%D0%B7%D0%B0-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B4%D0%BE%D0%BC-%D0%B1%D0%BE%D1%80%D0%B6%D0%BE%D0%BC%D0%B8-4974075',
            date: '01.05.22 10:13',
            status: 1
        },
        {
            id: 5,
            img_url: img4,
            number: '594627702',
            reference: 'https://ss.ge/ru/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0--%D0%B7%D0%B0-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B4%D0%B0%D1%87%D0%B0-%D1%86%D0%B5%D0%BC%D0%B8-4973967',
            date: '01.05.22 10:14',
            status: 1
        },
    ]
    
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_IS_AUTH: {
            
            let stateCopy= {...state, isAuth: action.isAuth}
            return stateCopy
        }
        case SET_IS_LOADING: {
            
            let stateCopy = {...state, isLoading: action.isLoading}
            return stateCopy
        }
        case SET_IS_NEED_REDIRECT:{
            
            let stateCopy = {...state, isNeedRedirect: action.isNeedRedirect}
            return stateCopy
        }
        case SET_USER_DATA: {
            
            let stateCopy = {...state, user: {...action.userData}}
            return stateCopy
        }
        default: 
            return state
    }
}

export const setIsAuthAC = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setIsLoadingAC = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const setIsNeedRedirectAC = (isNeedRedirect) => ({type: SET_IS_NEED_REDIRECT, isNeedRedirect});
export const setUserDataAC = (userData) => ({type: SET_USER_DATA, userData})
export default authReducer