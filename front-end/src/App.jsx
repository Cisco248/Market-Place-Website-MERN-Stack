import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ElectronicPage from './pages/ElectronicPage'
import {BidPage} from './pages/BidPage'
import PostadPage from './pages/PostadPage'
 


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electronic' element={<ElectronicPage />} />
        <Route path='/bid page' element={<BidPage />} />
        <Route path='/postad' element={<PostadPage/>} />
      </Routes>
    </>
  )
}

export default App
