import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.svg'
import './index.css';
import Btn from '../Btn';

function Header() {
  return (
    <Navbar className='header my-2' expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='pe-3' href="#home">Home</Nav.Link>
            <Nav.Link className='pe-3' href="#about">About</Nav.Link>
            <Nav.Link className='pe-3' href="#contact">Contact</Nav.Link>
            <Nav.Link className='pe-3' href="#blog">Blog</Nav.Link>
            <Nav.Link className='pe-3' href="#careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <Btn />
      </Container>
    </Navbar>
  );
}

export default Header;