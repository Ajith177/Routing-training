import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Google_product from './Google_product';

function App() {
  return (
    <Router>
      <div className="complete">
      <Navbar />
        <Routes>
          <Route path='Home' element={<Home />}>
            <Route path='Google_product' element={<Google_product />} />
          </Route>

          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
