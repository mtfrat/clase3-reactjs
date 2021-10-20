import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar style={{backgroundColor:'blue'}}>
            <Container>
                <Nav style={{display:'flex',justifyContent:'space-around',fontSize:'30px'}}>
                    <Nav.Link href="#" style={{color:'white',textDecoration:'none'}}>Inicio</Nav.Link>
                    <Nav.Link href="#" style={{color:'white',textDecoration:'none'}}>Autos</Nav.Link>
                    <Nav.Link href="#" style={{color:'white',textDecoration:'none'}}>Nosotros</Nav.Link>
                    <Nav.Link href="#" style={{color:'white',textDecoration:'none'}}>Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
