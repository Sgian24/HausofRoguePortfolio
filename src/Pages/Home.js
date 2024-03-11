import NavBar from "..//Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lip from "..//Assets/red-lip.webp";
import SilentHill from "..//Assets/silenthill.webp";
import cd from "..//Assets/cd-services.webp";
import ALF from "..//Assets/ALF-stationary.webp";
import cthulu from "..//Assets/cthulu.webp";
import Resthaven from "..//Assets/resthaven.webp";

const Home = () => {
    return (
        <div className="">
        <NavBar />
        <Container className="body-content-container">
            <Row className="mb-5">
              <Col>
               <h1 className="hero-title fw-light" >Hey I'm <span className="Billie">Billie</span>, designer with an <strong className="attitude">attitude</strong> <img src={lip} width="70" alt="" /></h1>
               <p className="hero-description">Fuelled by vision and verve, I'm here to serve. I'm known for channeling my love for raw 
                aesthetics and unconventional beauty into every project. I tend to infuse the soul of '90s 
                alternative culture and urban decay into visuals, creating designs that capture the essence of 
                rebellion, authenticity, and nostalgia.</p>
              </Col>
              <Col className="cd-container mt-3"><img src={cd} width="500rem" alt="" /></Col>
            </Row>
            <Row className="mb-3 gap-4 project-row">
              <Col className="h-100 rounded glitch" style={{ backgroundImage:`url(${SilentHill})`,}} sm={6} md={6} lg={3}>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              </Col>
              <Col className="h-100 rounded glitch" style={{backgroundImage:`url(${ALF})`}} sm={6} md={6} lg={3}>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
              </Col>
            </Row>
            <Row className="gap-4 project-row">
              <Col className="h-100 rounded glitch" style={{ backgroundImage:`url(${cthulu})`,}} sm={6} md={6} lg={6}>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
              </Col>
              <Col className="h-100 rounded glitch" style={{backgroundImage:`url(${Resthaven})`}} sm={6} md={6} lg={6}>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
              </Col>
            </Row>
            <Row>
              s
            </Row>
        </Container>
        </div>
    )
}

export default Home;