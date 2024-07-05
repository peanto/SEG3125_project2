

import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
// import { Footer } from './footer';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Home />
      </div>
      <div className="content">
        <Footer />
      </div>

      
    </div>
  );

}
export default App;