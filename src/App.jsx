import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './create';
import Update from './Update';

const App = () => {
  return (
    <BrowserRouter basename="/crude">
    <Routes>
      <Route path="/" element={<Home/>}></Route>

     
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit/:id" element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App