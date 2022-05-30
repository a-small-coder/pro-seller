import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles/styles.scss'
// import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import { useState } from 'react';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(true)

  const setAuth = (data) =>{
    setIsUserLogin(data)
  }
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header auth={isUserLogin}/>
      <Routes>
        <Route path='/' element={<Store />}></Route>
        <Route path='/category/:id' element={<Store />}></Route>
        <Route path='/category/:id/subcategory/:id' element={<Store/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        {/* <Route path='*' element={<NoMatchPage/>}></Route> */}
      </Routes>
    </div>
      
      
    </BrowserRouter>
  );
}

export default App;

