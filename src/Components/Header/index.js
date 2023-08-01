import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.svg'
import './index.css';
import Btn from '../Btn';
import closeIcon from '../../images/icon-close.svg'
import { useRef, useEffect } from 'react';

function Header() {
  const navbarTogglerRef = useRef();
  const closeIconRef = useRef();
  const barsIconRef = useRef();
  useEffect(() => {
    navbarTogglerRef.current.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("collapsed")) {
        barsIconRef.current.style.display = "none";
        closeIconRef.current.classList.remove("d-none");
        closeIconRef.current.style.display = "block";
      } else {
        barsIconRef.current.style.display = "block";
        closeIconRef.current.style.display = "none";
      }
    })
  })
  return (
    <Navbar className='header position-relative py-0' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ref={navbarTogglerRef} className='d-flex justify-content-center align-items-center'>
          <span className='navbar-toggler-icon d-lg-none' ref={barsIconRef}></span>
          <img src={closeIcon} alt='close icon' className='d-none d-lg-none close-item' ref={closeIconRef} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='pe-3 py-4' href="#home">Home</Nav.Link>
            <Nav.Link className='pe-3 py-4' href="#about">About</Nav.Link>
            <Nav.Link className='pe-3 py-4' href="#contact">Contact</Nav.Link>
            <Nav.Link className='pe-3 py-4' href="#blog">Blog</Nav.Link>
            <Nav.Link className='pe-3 py-4' href="#careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Btn sty="d-none" />
      </Container>
    </Navbar>
  );
}

export default Header;