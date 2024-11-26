import React from 'react';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import Cards from './pages/Cards';
import About from './pages/About';

function App() {
 return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Cards></Cards>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </BrowserRouter>
 )
}

export default App;
