import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './style.css'; 
import Navbar from './components/navbar'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
import Register from './Register'; 
import Login from './Login'; 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<div> 
<Router> 
<Navbar/> 
    <h1>Welcome</h1>
<Routes> 
<Route path="/about" element={<h1>About</h1>}/> 
<Route path="/register" element={<Register/>}/> 
</Routes> 
</Router> 
</div> 
);