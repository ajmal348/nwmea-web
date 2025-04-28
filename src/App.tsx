 
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUsPage';
import { GOOGLE_MAP_API_KEY } from './constants';
import { APIProvider as MapAPIProvider } from '@vis.gl/react-google-maps';
function App() {
   

  return (
    <>
    <MapAPIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <AppNavigationComponent/>
      </MapAPIProvider>
    </>
  )
}

function AppNavigationComponent(){
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
