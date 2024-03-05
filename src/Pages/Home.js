import NavBar from "..//Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lip from "..//Assets/red-lip.webp";
import SilentHill from "..//Assets/silenthill.webp";
import cd from "..//Assets/cd-services.webp";

const Home = () => {
    return (
        <>
        <NavBar />
        <Container style={{marginTop:"10vh"}}>
            <Row>
              <Col>
               <h1 className="fw-light" style={{fontSize:"4rem", marginBottom:"10vh"}}>Hey I'm <strong>Billie</strong>, designer with an <strong>attitude</strong> <img src={lip} width="70" alt="" /></h1>
               <p>Fuelled by vision and verve, I'm here to serve. I'm known for channeling my love for raw 
                aesthetics and unconventional beauty into every project. I tend to infuse the soul of '90s 
                alternative culture and urban decay into visuals, creating designs that capture the essence of 
                rebellion, authenticity, and nostalgia.</p>
              </Col>
              <Col style={{marginLeft:"6vw"}}><img src={cd} width="500rem" alt="" /></Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;