import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
    return (
        <>
        <Container className="footer-container bg-black d-flex justify-content-center align-items-center" fluid>  
          <footer className="px-0">
            <Row className="mb-3">
             <div className="d-flex gap-5 px-2"> 
              <a className="footer-links" href="">LinkedIn</a>
              <a className="footer-links" href="">Behance</a>
              <a className="footer-links" href="">Dribble</a>
             </div>
            </Row>
            <Row className="px-0">
              <p className="copyright px-2">© 2024 Haus of Rogue</p>
            </Row>
          </footer> 
        </Container> 
        </>
    )
}

export default Footer;