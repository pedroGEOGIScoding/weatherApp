import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Map from './pages/Map';
import About from './pages/About';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}