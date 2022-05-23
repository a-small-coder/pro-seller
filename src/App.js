import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles/styles.scss'
// import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import { useState } from 'react';
import Store from './components/Store/Store';

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
        <Route path='/store' element={<Store auth={isUserLogin} />}></Route>
        {/* <Route path='*' element={<NoMatchPage/>}></Route> */}
      </Routes>
    </div>
      
      
    </BrowserRouter>
  );
}

export default App;

