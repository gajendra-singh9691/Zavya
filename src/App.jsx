import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { useState } from 'react'
import Addtocart from './components/Addtocart'

function App() {
  const [addtocart,setaddtocart] = useState(false);
  const [data,setdata] = useState(['data','data'])
  return (
    <>
     <BrowserRouter>
     <Nav addtocart={addtocart} fun={setaddtocart} />
     <Addtocart addtocart={addtocart} fun={setaddtocart} data={data} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
