import { useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Hor from "..//Assets/HOR.webp";

const NavBar = () => {

    const linkRefWork = useRef(null);
    const linkRefAbout = useRef(null);

    useEffect(() => {
        if (window.location.hash === "#/about") {
            linkRefAbout.current.classList.add("active")
        } else if (window.location.hash === "" || window.location.hash === "#/") {
            linkRefWork.current.classList.add("active")
        }
    },[])

    return (
        <>
        <Navbar collapseOnSelect expand="sm" >
            <Container className="nav-container" fluid>
                <Navbar.Brand>
                    <img src={Hor} width="200" alt="" />    
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="" id="responsive-navbar-nav">
                 <div className="navlink-container d-flex justify-content-end w-100">   
                 <Nav className="gap-2">
                  <Nav.Link ref={linkRefWork} className="nav-link" href="/">Work</Nav.Link> 
                  <Nav.Link ref={linkRefAbout} className="nav-link" href="/#/about">About / Contact</Nav.Link> 
                 </Nav>
                 </div>
                </Navbar.Collapse>   
            </Container>    
        </Navbar>
        </>
    )
}

export default NavBar;