import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './Style.css'; 
import Navbar from './components/navbar'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
import Register from './components/Register'; 
import Home1 from './components/Home1'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<div> 
    <Router> 
        <Navbar/> 
            <Home1/>
        <Routes> 
            <Route path="/about" element={<h1>About</h1>}/> 
            <Route path="/register" element={<Register/>}/> 
        </Routes> 
    </Router> 
</div> 
); 