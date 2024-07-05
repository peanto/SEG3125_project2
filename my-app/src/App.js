import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Donate from './Donate';
import Contact from './Contact';
import About from './AboutOruj';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Footer } from './footer';


function App() {
  return (

    <Router basename="/SEG3125_project2">
      <div className="App">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>


  );

}
export default App;