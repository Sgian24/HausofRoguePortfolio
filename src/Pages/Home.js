import NavBar from "..//Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lip from "..//Assets/naughtyamerica.png";
import SilentHill from "..//Assets/Tablet-Mockup-cropped.jpg";
import cd from "..//Assets/Services-CD-1.png";
import { useEffect } from "react";
import ALF from "..//Assets/ALF-stationary.webp";
import cthulu from "..//Assets/Free_Book_Mockup_1.jpg";
import Resthaven from "..//Assets/Resthaven-updated-shrink.jpg";
import { Link} from "react-router-dom";
import Footer from "../Components/Footer";
import teaserOne from "..//Assets/teaser-1.jpg";
import teaserTwo from "..//Assets/humber-arb-thumbnail.jpg";
import mm from "..//Assets/MM/MM-thumbnail.jpg";
import zineThumbnail from "..//Assets/Zine/THUMBNAIL-loop.mp4";

const Home = () => {

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior:'instant'
      });
    },[])

    return (
        <div>
        <NavBar />
        <Container className="body-content-container mb-4" fluid>
            <Row className="mb-5 ">
              <Col lg={6} xl={6} className="mb-sm-4 mb-xxl-0">
               <h1 className="hero-title fw-light" >Hey I'm <span className="Billie">Billie</span>, designer with an <strong className="attitude">attitude</strong> <img className="attitude-lips" src={lip} width="90" alt="Lips." /></h1>
               <p className="hero-description">Fuelled by vision and verve, I'm here to serve. Combining my passion
               for music with my design skills, I'm recognized for infusing my visuals with a rockstar vibe. Balancing
               a rebellious nature with a strong grip of design fundamentals, I craft daring and memorable designs that make a 
               lasting&nbsp;ATTITUDE.</p>
              </Col>
              <Col lg={4} xl={4} className="cd-container"><img className="cd p-0 m-0 " src={cd} width="140%" alt="Haus of Rogue's services." /></Col>
            </Row>
            <Row className="mb-3 project-row">
              <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Marianas Mirror section." style={{ backgroundImage:`url(${teaserOne})`,}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${mm})`}}> </div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${mm})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${mm})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${mm})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${mm})`, zIndex:2}}></div>
                <Link to="/MarianasMirror">
                <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                  <div>
                    <h1 className="overlay-text">Marianas Mirror</h1>
                  </div>
                </div> 
                </Link>
              </Col>
              <Col className="h-100 rounded glitch border bg-black" role="img" aria-label="Thumbnail of Zine section." sm={6} md={6} lg={6}>
              <Link to="https://www.behance.net/gallery/203137321/Zine-but-not-Heard-an-Editorial-Project" target="_blank">
                <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                  <div>
                    <h1 className="overlay-text">New Project Coming Soon</h1>
                    <h2 className="overlay-text-behance">Click to View Behance Case Study</h2>
                  </div>
                </div> 
                </Link>
                <video height="100%" width="100%"autoPlay loop muted>
                    <source src={zineThumbnail} type="video/mp4" />
                </video>
              </Col>
            </Row>
            <Row className="mb-3 project-row">
            <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Arboretum section." style={{backgroundImage:`url(${teaserTwo})`}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${teaserTwo})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${teaserTwo})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${teaserTwo})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${teaserTwo})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${teaserTwo})`}}></div>
                <Link to="/humberarboretum" >
                <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                    <h1 className="overlay-text">Humber Arboretum: Signage System</h1>
                </div>   
                </Link>  
              </Col>
            <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Call of Cthulu section." style={{ backgroundImage:`url(${cthulu})`,}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
                <div></div>
                <div></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${cthulu})`}}></div>
                <Link to="/callofcthulu">
                  <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                    <h1 className="overlay-text">Call of Cthulu Campaign</h1>
                  </div>
                </Link>
              </Col>
            </Row>
            <Row className="project-row mb-3">
            <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Animal Liberation Front section." style={{backgroundImage:`url(${ALF})`}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
                <div></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${ALF})`}}></div>
                <Link to="/animalliberationfront">
                  <div className="d-flex justify-content-center align-items-center overlay h-100 text-center">
                    <h1 className="overlay-text">Animal Liberation Front: Rebrand</h1>
                  </div>
              </Link>
              </Col>
              <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Silent Hill section." style={{ backgroundImage:`url(${SilentHill})`,}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}> </div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`,zIndex:2}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`, zIndex:2}}></div>
                <Link to="/silenthill">
                  <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                    <h1 className="overlay-text">Visit: Silent Hill</h1>
                  </div>
                </Link> 
              </Col>
            </Row>
            <Row className="project-row mb-3">
            <Col className="h-100 rounded glitch" role="img" aria-label="Thumbnail of Resthaven section." style={{backgroundImage:`url(${Resthaven})`}} sm={6} md={6} lg={6}>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="h-100 glitch-img" style={{backgroundImage:`url(${Resthaven})`}}></div>
                <Link to="/resthaven">
                  <div className="d-flex justify-content-center align-items-center overlay h-100 ">
                    <h1 className="overlay-text">Resthaven: Album</h1>
                  </div>
                </Link>
              </Col>
            </Row>
        </Container>
         <Footer /> 
      </div>
    )
}

export default Home;