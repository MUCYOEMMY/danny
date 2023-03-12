import Login from './pages/Login';
import Register from './pages/Register';
import Studentinfo from './pages/Studentinfo';
import Teacherinfo from './pages/Teacherinfo';
import Teacherdash from './pages/Teacherdash';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>} />

    <Route path='regiter' element={<Register/>}/>
    <Route path='Studentinfo' element={<Studentinfo/>}/>
    <Route path='Teacherinfo' element={<Teacherinfo/>}/>
    <Route path='Teacherdash' element={<Teacherdash/>}/>

    </Routes>
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
