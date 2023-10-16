import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
function Navbarhome() {
    return (
        <div className="navcss">
            <Navbar expand="lg">
                <Container fluid>
                    <Link to="/" className='navbrandcss'><Navbar.Brand>GanaNaad</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link><Link className='linkitems' to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className='linkitems' to="/news">News</Link></Nav.Link>
                            <Nav.Link><Link className='linkitems' to="/arcives">Arcives</Link></Nav.Link>
                            <Nav.Link><Link className='linkitems' to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link className='linkitems' to="/contact">Contact</Link></Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                    <Container fluid>



                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Container>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarhome;