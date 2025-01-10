import './App.css'
import {Routes,Route } from 'react-router'
import Contact from './component/Contact/Contact'
import Navbar from './component/Navbar/Navbar'
import Signin from './component/SignIn/Signin'
import Home from './component/Home/Home'
import Signup from './component/Signup/Signup'
import Store from './component/Store/Store'
import AllLaptops from './component/Product/AllLaptops'


function App() {

  return (
    <> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='signin' element={ <Signin/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/products' element={<AllLaptops/>}/>
    

    </Routes>

    </>
  )
}

export default App
