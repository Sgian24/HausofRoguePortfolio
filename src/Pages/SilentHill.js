import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Line from "..//Assets/Asset 8.png";
import silentHill from "..//Assets/TourismSiteMockup.jpg";
import Carousel from "react-bootstrap/Carousel";
import silentHillPoster from "..//Assets/Poly_art_assignment_Poster_Design_Two.jpg";
import silentHillPostCard from "..//Assets/Poly_art_assignment_Postcard_Design.jpg";
import iMac from "..//Assets/iMac Mockup.png";
import silentHillBrochure from "../Assets/SilentHilltouristbrochuremockup.jpg";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import postCardMockupOne from "..//Assets/ruined-postcard-mockup.jpg";
import postCardMockupTwo from "..//Assets/postcard-mockup-copy.jpg";
import heroWebpage from "..//Assets/1-Home-Hero.png";
import tourismWebpage from "..//Assets/2-Tourism.png";
import lodgingWebpage from "..//Assets/3-Lodging.png";
import galleryWebpage from "..//Assets/4-Gallery.png";
import adWebpage from "..//Assets/5-Ad.png";
import footerWebpage from "..//Assets/6-Footer.png";
import flyer from "..//Assets/DL_Flyer_cropped.jpg";
import iphoneMockup from "..//Assets/iPhone-in-HandsCROP.jpg";
import brochureBackCover from "..//Assets/Back-Cover.png";
import brochureFrontCover from "..//Assets/Front-Cover.png";
import brochureOne from "..//Assets/Inside1-flap.png";
import brochureTwo from "..//Assets/Inside2-Lodging.png";
import brochureThree from "..//Assets/Inside3-Tourism.png";

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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[])
    
    return (
        <>
        
        <NavBar />
        <Container className="margin-container mt-4 " fluid>
            <Row>
            <Col className="d-flex flex-column align-items-center">
                <h1 className="header-title">Visit: Silent Hill</h1>
                <p className="silent-hill-paragraph mb-5">The Silent Hill game series known for the 'creepy fog effect' and grotesque monsters. 
                   It is so much more than that it's a haunting and captivating journey into the depths of
                   psychological horror and existential dread. With each installment, it weaves an intricate
                   tapestry of fear and introspection, inviting players to confront their (character's) 
                   darkest fears and innermost demons in a nightmarish realm like no other. The objective was 
                   to pick a city/town to use as a subject for a promotional print campaign. With the Silent Hill being among 
                   my most cherished video games ever, I went with it. You'll see some game references and Easter
                   eggs planted&nbsp;around.</p>
            </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">   
                    <img className="mb-4" src={Line} width="90%" height="20%" alt="Line." />
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="d-flex justify-content-center">
                 <div className="cthulu-table-heading me-4">
                    <h6><u>Service</u></h6>
                    <p className="table-text">Digital Art, Web Design, Print, Marketing Campaign</p>
                </div>
                <div>
                    <h6><u>Year</u></h6>
                    <p className="table-text">2022</p>
                </div>     
                </Col>
            </Row>
            <Row className="mb-4">
               <Col> 
                <img className="silent-hill-web-two" src={silentHill} width="100%" alt="Preview of Silent Hill web design pages." />
               </Col>
            </Row>
            <Row className="mb-4">
               <Col>
                <p>              
                    The first step of the Silent Hill Project with a low-poly art poster. This was quite the 
                    challenge because it was during my first year of using Illustrator.  
                </p>
                </Col>
                <Col>
                <p>
                    One version of the poster includes a distressed, washed-out look that pays more homage to 
                    the real tone of the games. The other version is what I consider the raw, clean&nbsp;draft.
                </p>
               </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row className="mb-4">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel h-100">
                        <Carousel.Item className="bg-transparent" >
                            <img className="d-block m-auto" src={silentHillPoster}  width="94.5%"  alt="Low-poly Silent Hill poster." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image position-relative" src={silentHillPostCard} width="106.5%"  
                            alt="Distressed and washed-out version of the low-poly Silent Hill poster." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="object-fit-cover" src={postCardMockupOne} height="100%" width="127.5%"  
                            alt="Distressed and washed-out version of the low-poly Silent Hill poster." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="position-relative object-fit-cover" src={postCardMockupTwo} height="100%" width="100%"  
                            alt="Distressed and washed-out version of the low-poly Silent Hill poster." />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
            <Container className="margin-container position-relative" fluid>
            <Row className="">
                <Col className="order-2 order-sm-1">
                    <img src={iMac} width="100%" alt="iMac mockup with Silent Hill webpage design." />
                </Col>
                <Col xs={12} sm={6} md={6} className="mb-0 mb-sm-5 order-1 order-sm-2">
                    <h1 className="mb-4 web-design-sub sub-heading">Web Design</h1>
                    <p>
                    As my brand for Silent Hill began to develop, I did so on the basis of a peaceful, quiet, 
                    serene resort town. A description that would intrigue introverted travellers looking for a 
                    quiet getaway with a lakeside. I wanted it to completely hide the fact that the town is a 
                    portal to a hellish alternate reality. After all it was a tourist marketing&nbsp;campaign.</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel" data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={heroWebpage} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={tourismWebpage} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={lodgingWebpage} width="100%"  alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={galleryWebpage} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={adWebpage} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={footerWebpage} width="100%"  alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center mb-4">
                    <img src={iphoneMockup} width="70%" alt="Iphone Mockup." />
                </Col>
            </Row>
            </Container>
            <Container className="gx-0 brochure-container mb-4" fluid>
            <Row className="brochure-row gx-0">
                <Col xs={12} sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center px-5 mb-4 mb-lg-0 mb-xl-0 mb-xs-4 mb-sm-4">
                    <div>
                        <h1 className="brochure-sub sub-heading text-center mb-5">Brochure Print</h1>
                        <p>Finally, the last instalment of the marketing campaign would be the handout brochures. 
                        Most of the work was already done through my XD file and I'm simply just applying that 
                        design on my InDesign file. I've fallen in love with the warm beige-brown colour 
                        palette; it just radiates cozy, cottage and coffee.</p>
                    </div>
                </Col>
                <Col md={6} lg={6} xl={6} className="brochure-image-scroll">
                    <img className="object-fit-cover h-100 w-100" src={flyer} alt="Silent Hill brochure." style={{objectPosition:`${position}% 50%`}} />
                </Col>
            </Row>
        </Container>
        <Container className="position-relative" >
        <Row className="mb-4">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel" data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={brochureFrontCover} width="100%" alt="Brochure mockup." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={brochureBackCover} width="100%" alt="Brochure mockup." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={brochureOne} width="100%"  alt="Brochure mockup." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={brochureTwo} width="100%" alt="Brochure mockup." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={brochureThree} width="100%" alt="Brochure mockup." />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col className="brochure" style={{backgroundImage:`url(${silentHillBrochure})`}}>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <p className="silent-hill-paragraph mb-5">
                    And that's all she wrote for Visit: Silent Hill. This project also showcased my versatility as an artist because
                     Visit: Silent Hill has this very snug, warm colour palette with fancy elegant header fonts. 
                     Something that's a little different from my usual gritty&nbsp;taste. </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mb-5">
                    <Link to="/" className="more-projects">More Projects</Link>
                    <div className="link-line"></div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default SilentHill;