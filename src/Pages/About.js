import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import attitude from "..//Assets/attitude.webp";
import billie from "..//Assets/BillieRogue.jpg";
import billieTwo from "..//Assets/IMG_8596.jpeg";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";

const About = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[])
    
    return (
        <>
        <NavBar />
        <Container className="body-content-container mb-5 h-100" fluid>
            <Row className="mb-5 overflow-hidden">
                <Col className="origin-col order-2 order-sm-2 order-md-1">
                    <img className="mb-5 d-none d-sm-none d-md-block object-fit-cover" src={billie} width="100%" alt="Billie Rogue posing." />
                    <h2 className="sub-heading mb-4 text-center text-sm-center text-md-start">The Origin Story</h2>
                    <p>Haus of Rogue came to be in the Dark Ages known as the COVID-19 pandemic. During lockdown, 
                        I had more than enough time to myself. I was bouncing back and forth pondering about my 
                        future and what career plan was waiting for me. I also had a song coming out at the time 
                        that had no cover art, nor did I have the money to commission an artist to do one. Low and 
                        behold, Affinity Photo went on sale and the rest is&nbsp;herstory.</p>
                    <p>The word "Haus" is a stylistic choice derived from the German "Bauhaus" and the ballroom 
                        scene subculture. "Rogue" is simply from my stage name, Billie&nbsp;Rogue. </p>
                    <img className="billie-guitar d-block d-sm-block d-md-none" src={billieTwo} width="100%" height="100%" alt="Billie Rogue performing at a gig." />
                </Col>
                <Col sm={12} md={6} className="about-col order-1 order-sm-1 order-md-2 " >
                    <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-start gap-4 mb-4">
                        <h2 className="sub-heading">Hey, I'm Billie</h2>
                        <img className="lips " src={attitude} width="15%" height="15%" alt="Lips." />
                    </div>
                    <p>I’m a <strong>Toronto-based graphic designer</strong> and <strong>music producer</strong> specializing in 
                        <strong> illustration, editorial design</strong>, and <strong>audio production.</strong> I help brands, artists, and
                       creatives alike capture attention and leave an impression. Whether you need <strong>eyecatching album artwork or posters</strong>, 
                       impactful <strong>brand visuals</strong>, or bold <strong>editorial layouts</strong>, I’m here to help your work make that impact.</p>
                    <p>And with a prior background in audio production, I approach a record like I do with 
                       design—balancing technical skill and creative vision. Notable works include Canadian metal 
                       band, Resthaven’s, two albums, <a className="fst-italic text-decoration-none" target="_blank" href="https://open.spotify.com/album/0PqhasIqVmd3L6FmONRU9T">Resthaven (2023)</a> and 
                       <a className="text-decoration-none fst-italic" target="_blank" href="https://open.spotify.com/album/43ApMPmLYIuimoyygUGQx0"> Lunarwave (2025)</a>.</p>  
                    <div className="bandcamp-div mb-2 ">
                    <iframe style={{border: 0, width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2686133725/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
                        <a href="https://resthaven.bandcamp.com/album/lunarwave">Lunarwave by Resthaven</a>
                    </iframe>
                    </div>
                    <img className="billie-guitar d-none d-sm-none d-md-block" src={billieTwo} width="100%" height="180%" alt="Billie Rogue performing at a gig." />
                    <img className="mb-5 d-block d-sm-block d-md-none" src={billie} width="100%" alt="Billie Rogue posing." />  
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="sub-heading text-center mb-4">Get in Touch</h2>
                    <div className="d-flex justify-content-center gap-5">
                    <div className="text-center">
                        <p>
                            <Link className="email" to="mailto:isabella.mtr@outlook.com">
                                isabella.mtr@outlook.com
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <p>Toronto, ON</p>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default About;