import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ElectronicPage from './pages/ElectronicPage'
import {BidPage} from './pages/BidPage'
import PostadPage from './pages/PostadPage'
import {ProductPage} from './pages/ProductPage'
 


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electronic' element={<ElectronicPage />} />
        <Route path='/bid page' element={<BidPage />} />
        <Route path='/postad' element={<PostadPage/>} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
