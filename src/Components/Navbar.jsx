
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function NavScrollExample() {
  return (
    <div className="navcss">
      <Navbar expand="lg">
        <Container fluid>
        <Link to="/" className='navbrandcss'><Navbar.Brand>Name<Badge bg="info">beta</Badge></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link><Link className='linkitems' to="/">News</Link></Nav.Link>
              <Nav.Link><Link className='linkitems' to="/about">About</Link></Nav.Link>
              <Nav.Link><Link className='linkitems' to="/contact">Contact</Link></Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;