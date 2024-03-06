import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Hor from "..//Assets/HOR.webp";

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="sm" >
            <Container>
                <Navbar.Brand>
                    <img src={Hor} width="200" alt="" />    
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="" id="responsive-navbar-nav">
                 <div className="nav-container d-flex justify-content-end w-100">   
                 <Nav>
                  <Nav.Link>About</Nav.Link> 
                  <Nav.Link>Work</Nav.Link>
                  <Nav.Link>Contact</Nav.Link>     
                 </Nav>
                 </div>
                </Navbar.Collapse>   
            </Container>    
        </Navbar>
        </>
    )
}

export default NavBar;