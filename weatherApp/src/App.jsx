import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Map from './pages/Map';
import About from './pages/About';
import Layout from './Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="./pages/Weather" element={<Weather />} />
          <Route path="./pages/Map" element={<Map />} />
          <Route path="./pages/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}