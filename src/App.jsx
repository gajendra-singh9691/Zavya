import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { useState } from 'react'
import Addtocart from './components/Addtocart'
import Footer from './components/Footer'
import JoinCommunity from './components/JoinCommunity'
function App() {
  const [addtocart,setaddtocart] = useState(false);
  const [data,setdata] = useState([])
  return (
    <>
     <BrowserRouter>
     <Nav addtocart={addtocart} fun={setaddtocart} data={data} />
     <Addtocart addtocart={addtocart} fun={setaddtocart} data={data} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <JoinCommunity />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
