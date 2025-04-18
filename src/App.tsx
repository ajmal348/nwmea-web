 
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUsPage';

function App() {
   

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
