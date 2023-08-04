import {Routes , Route } from 'react-router-dom'
import Home from '../Views/Home'
import Contact from '../Views/Contact'
import About from '../Views/About'
import Register from '../Views/Register'
import Login from '../Views/Login'



function Routing1(){

    var auth = false

    return(
        <>
        {auth==true ?
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Home/>}/>
            
        </Routes>
        : 
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
        
        </Routes>
        }
        </>
    )
}

export default Routing1