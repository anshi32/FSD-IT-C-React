//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import MainLayout from './component/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/mainlayout' element={<MainLayout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
