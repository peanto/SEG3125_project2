import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";


import logo from './assets/oruj_logo.jpeg';
import langIcon from './assets/afghan_flag.png';

import Home from './Home';
import AboutOruj from './AboutOruj';
import WhatWeDo from './WhatWeDo';
import TakeAction from './TakeAction';
import Contact from './Contact';
import Donate from './Donate';

function Header() {
    return (
        <header className="App-header">

            <Container className="Header-top">
                <a className="logo" href="Home.js">
                    <img src={logo} className="App-logo" alt="logo" />


                </a>
                
                <div class="d-flex">


                   

                    <div className='help-buttons'>
                    <Nav.Link className="switch-lang" href="#home">درى پښتو
                        <img className="switch-lang-icon" src={langIcon} alt="Change language" />
                    </Nav.Link>
                        <Button href="Contact.js" variant="primary">Contact Us</Button>
                        <Button href="Donate.js" variant="primary">Donate</Button>
                    </div>
                </div>


            </Container>
            <Router>
                <Navbar className="bg-body-tertiary">

                    <Container styles="background-color: #007bff; ">


                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">


                                <Nav.Link className="nav-item" href="Home.js">Home</Nav.Link>

                                <Nav.Link className="nav-item" href="AboutOruj.js">About Oruj</Nav.Link>

                                <Nav.Link className="nav-item" href="WhatWeDo.js">What We Do</Nav.Link>

                                <Nav.Link className="nav-item" href="TakeAction.js">Take Action</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>


                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/Home.js" element={<Home />} />
                    <Route path="/AboutOruj.js" element={<AboutOruj />} />
                    <Route path="/WhatWeDo.js" element={<WhatWeDo />} />
                    <Route path="/TakeAction.js" element={<TakeAction />} />
                    <Route path="/Contact.js" element={<Contact />} />
                    <Route path="/Donate.js" element={<Donate />} />
                </Routes>

            </Router>


        </header>
    );
}



export default Header;
