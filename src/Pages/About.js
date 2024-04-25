import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import attitude from "..//Assets/attitude.webp";
import billie from "..//Assets/billie.jpg";
import billieTwo from "..//Assets/IMG_8596.jpeg";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";

const About = () => {
    return (
        <>
        <NavBar />
        <Container className="body-content-container mb-5">
            <Row className="mb-5">
                <Col>
                    <img className="mb-5" src={billie} width="100%" alt="" />
                    <h2 className="sub-heading mb-4">The Origin Story</h2>
                    <p>Haus of Rogue came to be in the Dark Ages known as the COVID-19 pandemic. During lockdown, 
                        I had more than enough time to myself. I was bouncing back and forth pondering about my 
                        future and what career plan was waiting for me. I also had a song coming out at the time 
                        that had no cover art, nor did I have the money to commission an artist to do one. Low and 
                        behold, Affinity Photo went on sale and the rest is herstory.</p>
                    <p>The word "Haus" is a stylistic choice derived from the German "Bauhaus" and the ballroom 
                        scene subculture. "Rogue" is simply from my stage name, Billie Rogue. </p>
                </Col>
                <Col>
                    <div className="d-flex gap-4 mb-4">
                        <h2 className="sub-heading">Hey, I'm Billie</h2>
                        <img src={attitude} width="15%" height="15%" alt="" />
                    </div>
                    <p>I'm a graphic design student based in Toronto, currently enrolled in Humber's graphic 
                        design program (class of 2024, woohoo!). As an active musician, I'm known for bringing 
                        my rockstar flair into my visuals which result in a 90s-esque, grunge x punk style. With
                         a rebellious spirit but a deep understanding of design principles, I'm on a mission to 
                         create bold, unforgettable experiences that leave an indelible mark on audiences and 
                         brands alike, long after the screen. I'm here to give your design that much-needed edge 
                         and attitude. </p>
                    <p>When I'm not designing, I'm either gaming, being a rockstar or scrapbooking.</p>
                    <div className="billie-div" >
                        <img className="billie-guitar" src={billieTwo} width="100%" height="100%" alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="sub-heading text-center mb-4">Get in Touch</h2>
                    <div className="d-flex justify-content-center gap-5">
                    <div className="text-center">
                        <p>647-909-4094</p>
                        <p>
                            <Link className="email" to="mailto:isabella.mtr@outlook.com">
                                isabella.mtr@outlook.com
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <p>Toronto, ON</p>
                        <p>Canada</p>
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