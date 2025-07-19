import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { useState } from 'react'
import Addtocart from './components/Addtocart'
import Footer from './components/Footer'
import JoinCommunity from './components/JoinCommunity'
import CartsParent from './components/CartsParent'
import Wishlist from './components/Wishlist'
import AboutSection from './components/Aboutus'
import TreatYourself from './components/TreatYourself'
import Login from './components/Login'
import PartnerWithUs from './components/Parterwithus'
function App() {
  const [addtocart,setaddtocart] = useState(false);
  const [data,setdata] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
     <BrowserRouter>
     <Nav addtocart={addtocart} fun={setaddtocart} data={data} onClick={openModal} />
     <Login open={isModalOpen} onClose={closeModal} />
     <Addtocart addtocart={addtocart} fun={setaddtocart} data={data} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<CartsParent />} />
        <Route path='/shop/anklets' element={<CartsParent />} />
        <Route path='/shop/bracelets' element={<CartsParent />} />
        <Route path='/shop/nacklaces-pendats' element={<CartsParent />} />
        <Route path='/shop/jewellery-sets' element={<CartsParent />} />
        <Route path='/shop/rings' element={<CartsParent />} />
        <Route path='/shop/toe-rings' element={<CartsParent />} />
        <Route path='/shop/mangalsutra' element={<CartsParent />} />
        <Route path='/shop/nose-pin' element={<CartsParent />} />
        <Route path='/shop/all' element={<CartsParent />} />
        <Route path='/shop/chain' element={<CartsParent />} />
        <Route path='/shop/rakhi' element={<CartsParent />} />




        <Route path='/collections' element={<CartsParent />} />
        <Route path='/collections/rakhi' element={<CartsParent />} />
        <Route path='/collections/ruby' element={<CartsParent />} />
        <Route path='/collections/peacock' element={<CartsParent />} />
        <Route path='/collections/infinity' element={<CartsParent />} />
        <Route path='/collections/pure-silve' element={<CartsParent />} />
        <Route path='/collections/heart' element={<CartsParent />} />
        <Route path='/collections/tarry-night' element={<CartsParent />} />
        <Route path='/collections/ocean-blu' element={<CartsParent />} />
        <Route path='/collections/solitaire' element={<CartsParent />} />
        <Route path='/collections/minimal' element={<CartsParent />} />
        <Route path='/collections/date-night' element={<CartsParent />} />
        <Route path='/collections/evil-eye' element={<CartsParent />} />
        <Route path='/collections/pearl-tastic' element={<CartsParent />} />
        <Route path='/collections/nature-inspired' element={<CartsParent />} />


        <Route path='/about' element={<AboutSection />} />
        <Route path='/about/our-launch-campaign' element={<TreatYourself />} />
        <Route path='/about/partner-with-us' element={<PartnerWithUs />} />

        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <JoinCommunity />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
