import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Line from "..//Assets/Asset 8.png";
import silentHill from "..//Assets/silenthill.webp";
import Carousel from "react-bootstrap/Carousel";
import silentHillPoster from "..//Assets/Poly art assignment_Poster Design.jpg";
import silentHillPostCard from "..//Assets/Poly art assignment_Postcard Design.jpg";
import iMac from "..//Assets/iMac Mockup.png";
import silentHillBrochureEdited from "../Assets/Silent Hill Tourist brochure mockup_edited.png";
import silentHillBrochure from "../Assets/SilentHillBrochure.webp";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";

const SilentHill = () => {
    const [position, setPosition] = useState(10)
    
    useEffect(() => {
        const oldScrollY = window.scrollY;
        const handleScroll = () => {
            if (oldScrollY < window.scrollY && position < 80 ) {
                setPosition(() => position + 0.7)
            } else if (oldScrollY > window.scrollY && position > 10){
                setPosition(() => position - 0.7)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[window.scrollY])
    
    return (
        <>
        <NavBar />
        <Container className="silent-hill-container mt-4 overflow-visible" fluid>
            <Row>
            <Col>
                <h1 className="text-center silent-hill-title">Visit: Silent Hill</h1>
                <p className="mb-5">The Silent Hill game series known for the 'creepy fog effect' and grotesque monsters. 
                   It is so much more than that it's a haunting and captivating journey into the depths of
                   psychological horror and existential dread. With each instalment, it weaves an intricate
                   tapestry of fear and introspection, inviting players to confront their (character's) 
                   darkest fears and innermost demons in a nightmarish realm like no other. The objective of 
                   the assignment itself was to pick a city/town to use as a subject for a promotional print
                   campaign. We were free to pick a fictional place as well, so with the Silent Hill being among 
                   my most cherished video games ever, I went with it. You'll see some game references and Easter
                   eggs planted around.</p>
            </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">   
                    <img className="mb-4 border" src={Line} width="90%" height="20%" alt="" />
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="d-flex justify-content-center">
                 <Table className="table-container" size="sm" borderless>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Client</th> 
                            <th>Year</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Digital Art, Web Design, Print, Marketing Campaign</td>
                            <td>School Project</td>
                            <td>2022</td>
                        </tr>
                    </tbody>
                 </Table>   
                </Col>
            </Row>
            <Row className="mb-4">
               <Col> 
                <img src={silentHill} width="100%" alt="" />
               </Col>
            </Row>
            <Row className="mb-4">
               <Col>
                <p>              
                    The first step of the Silent Hill Project with a low-poly art poster. This was quite the 
                    challenge because it was during my first year of using Illustrator, let alone, I don't often 
                    do low-poly art.  
                </p>
                </Col>
                <Col>
                <p>
                    One version of the poster includes a distressed, washed-out look that pays more homage to 
                    the real tone of the games. The other version is what I consider the raw, clean draft.
                </p>
               </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row className="mb-4">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img className="carousel-image" src={silentHillPoster} width="100%"  alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={silentHillPostCard} width="100%"  alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col className="d-flex justify-content-center mb-4">
                    <img src={silentHill} width="70%" alt="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="iMac" src={iMac} width="50%" alt="" />
                </Col>
                <Col className="mb-5">
                    <h1 className="mb-4 sub-heading">Web Design</h1>
                    <p>
                    For the website design, as you can see, I decided to take things a little more seriously. 
                    As my brand for Silent Hill began to develop, I did so on the basis of a peaceful, quiet, 
                    serene resort town. A description that would intrigue introverted travellers looking for a 
                    quiet getaway with a lakeside. I wanted it to completely hide the fact that the town is a 
                    portal to a hellish alternate reality. After all it was a tourist marketing campaign.</p>
                </Col>
            </Row>
            </Container>
            <Container className="gx-0 brochure-container" fluid>
            <Row className="brochure-row gx-0">
                <Col lg={6} className="d-flex justify-content-center align-items-center px-5 ">
                    <div>
                        <h1 className="sub-heading text-center mb-5">Brochure Print</h1>
                        <p>Finally, the last instalment of the marketing campaign would be the handout brochures. 
                        Most of the work was already done through my XD file and I'm simply just applying that 
                        design on my InDesign file. I've fallen in love with the warm beige-brown colour 
                        palette; it just radiates cozy, cottage and coffee.</p>
                    </div>
                </Col>
                <Col lg={6} className="border">
                    <div className="brochure-image-scroll">
                        <img className="object-fit-cover" src={silentHillBrochureEdited} alt="" style={{objectPosition:`${position}% 50%`, height:"100%", width:"100%"}} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col style={{backgroundImage:`url(${silentHillBrochure})`, objectFit:"cover",width:"100%", height:"120vh", backgroundRepeat:"no-repeat", backgroundAttachment:"fixed"}}>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <p className="w-75 mb-5">
                    And that's all she wrote for Visit: Silent Hill. This was made in the first year of my 
                    graphic design course, and in almost 2 years now, it still holds up among the works I'm 
                    most proud of. This project also showcased my versatility as an artist because
                     Visit: Silent Hill has this very snug, warm colour palette with fancy elegant header fonts. 
                     Something that's a little different from my usual gritty taste. </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mb-5">
                    <Link>More Projects</Link>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default SilentHill;