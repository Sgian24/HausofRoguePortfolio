import { useState } from "react";
import { Container, Row, Col, Table, Modal } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Line from "..//Assets/Asset 8.png";
import header from "..//Assets/project-header.jpg";
import moodBoard from "..//Assets/moodboard.jpg";
import bottleGif from "..//Assets/MM/bottle.mp4";
import aiGif from "..//Assets/MM/ai-ladies-gif.mp4";
import sprayPackage from "..//Assets/MM/spray-package.jpg";
import thermalSpray from "..//Assets/MM/thermal-spry-staged.jpg";
import bioPackage from "..//Assets/MM/biolum-package.jpg";
import bioBottle from "..//Assets/MM/biolum-staged.jpg";
import sunscreenPackage from "..//Assets/MM/sunscrn-package.jpg";
import sunscreenStaged from "..//Assets/MM/sunscreen-staged-ender.jpg";
import cleanserPackage from "..//Assets/MM/cleanser-package.jpg";
import cleanserStaged from "..//Assets/MM/cleanser-staged-render.jpg";
import baumePackage from "..//Assets/MM/baume-package.jpg";
import baumeStaged from "..//Assets/MM/baume-staged.jpg";
import baumeAd from "..//Assets/MM/baume-ad.jpg";
import bioAd from "..//Assets/MM/bioluminessence-ad.jpg";
import instaPostOne from "..//Assets/MM/spray-insta-mockup.jpg";
import instaPostTwo from "..//Assets/MM/essential-3-post.jpg";
import Footer from "../Components/Footer";

const MM = () => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState("");

    const handleShow = (item) => {
        setShow(true)
        setImage(item);
    }

    const handleClose = () => setShow(false);

    return (
        <>
        <NavBar />
        <Container className="cthulu-body-container mt-4 mb-sm-5 mb-md-5" fluid>
        <Row>
            <Col className="d-flex flex-column align-items-center">
                <h1 className="header-title">Marianas Mirror: a Deep Dive into Dermo-Cosmetics</h1>
                <p className="mb-5 mm-description">Marianas Mirror is an international North American dermo-cosmetic skincare 
                brand with a unique focus on incorporating aquatic ingredients towards sensitive, atopic skin, as well 
                an aim to protect and reduce impact on marine life. The company's USP is their hydrothermal mineral 
                complex water which--unlike thermal sprays using natural spring water--uses minerals from <a href="https://en.wikipedia.org/wiki/Hydrothermal_vent" target="_blank">
                deep sea hydrothermal vents</a>. This year, Marianas Mirror is debuting their line with a release of a 
                moisturizing essence serum, hydrothermal spray, SPF fluid, a refreshing gel cleanser and a face-body balm.</p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">   
                <img className="mb-4" src={Line} width="90%" height="20%" alt="" />
            </Col>
        </Row>
        <Row className="mb-3">
            <Col className="d-flex justify-content-center">
                <Table className="resthaven-table-container" size="sm" borderless>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Client</th> 
                            <th>Year</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Visual Identity, Branding, Illustration, 3D Texturing</td>
                            <td>Marianas Mirror</td>
                            <td>2024</td>
                        </tr>
                    </tbody>
                </Table>   
            </Col>
        </Row>
    </Container>
    <Container className="px-0" fluid>
        <Row className="mb-4">
            <Col>
                <img src={header} width="100%" alt="" />
            </Col>
        </Row>
        <Row className="mb-4 mx-5">
            <Col md={7} xxl={6}>
                <img src={moodBoard} width="100%" alt="" />
            </Col>
            <Col className="d-flex align-items-center " md={5} xxl={6}>
                <div className="d-flex flex-column align-items-center p-5">
                   <h2 className="sub-heading text-center">Vision</h2>
                   <p className="text-center">The inspiration behind this brand comes from my experience as a sales associate
                     in the cosmetics department where I was exposed to reputable dermo-cosmetic brands such as La Roche Posay, Avene, Vichy 
                     and Bioderma. I was initially inspired by aquariums and my love for the ocean, the mix of the two is
                      what created Marianas Mirror.</p> 
                </div>
            </Col>
        </Row>
        <Row className="mb-4 mx-5">
            <Col className="d-flex align-items-center" md={5} xxl={6}>
                <div className="d-flex flex-column align-items-center p-5">
                   <h2 className="sub-heading text-center">Development</h2>
                   <p className=" text-center">I was determined to create my own bottles and packaging
                    using the 3D software on Illustrator because I wanted to give Adobe Substance 3D 
                    Stager a try for some time to add textures and custom lighting.</p> 
                </div>
            </Col>
            <Col md={7} xxl={6}>
            <video width="100%" autoPlay loop muted>
                <source src={bottleGif} type="video/mp4" />
            </video>
            </Col>
        </Row>
        <Row className="mb-4 h-75 mx-5">
            <Col md={7} xxl={6} className="d-flex flex-column align-items-center">
            <video width="100%"autoPlay loop muted>
                <source src={aiGif} type="video/mp4" />
            </video>
            <p className="ai-prompt w-75 text-center fst-italic">
                Prompt: "ethereal headshot of [ethnic] woman with perfect skin under deep waters; 
                rays of light hitting"</p>
            </Col>
            <Col className="d-flex align-items-center" md={5} xxl={6}>
                <div className="d-flex flex-column align-items-center p-5">
                   <h2 className="sub-heading text-center">Utilizing AI</h2>
                   <p >I wanted to optimize what I felt accurately represents the 
                   brand I had in mind that stock photos couldn't offer me. When staging the product renders on 
                   Substance Stager I also utilized its generative AI software for the backgrounds.</p>
                   <p>Because I was first inspired by an aquarium, the feeling that comes to mind is dark 
                    and glowy. There's a mysterious aura. That's what makes aquariums calming--especially 
                    when visiting the jellyfish exhibit. I was set on deeper blues and teals, extracted 
                    from the AI generated images from these women.</p> 
                </div>
            </Col>
        </Row>
        <Row className="mb-4 mx-5">
            <Col md={7}>
                <img className="object-fit-cover" src={thermalSpray} height="100%" width="100%" alt="" />
            </Col>
            <Col md={5}>
                <img src={sprayPackage} width="100%" alt="" />
            </Col>
        </Row>
        <Row className="mb-4 mx-5">
            <Col md={6}>
                <img className="object-fit-cover" src={bioBottle} height="100%" width="100%" alt="" />
            </Col>
            <Col md={6}>
                <img src={bioPackage} width="100%" alt="" />
            </Col>
        </Row>
        <Row className="mb-4 mx-5">
            <Col md={4}>
                <img src={sunscreenPackage}  width="100%" alt="" />
            </Col>
            <Col md={8}>
                <img className="object-fit-cover" src={sunscreenStaged} height="100%" width="100%" alt="" />
            </Col>
        </Row>
        <Row className="mb-4">
            <Col md={6}>
                <img src={cleanserStaged}  width="100%" alt="" />
            </Col>
            <Col md={6}>
                <img className="object-fit-cover" src={cleanserPackage} height="100%" width="100%" alt="" />
            </Col>
        </Row>
        <Row className="baume-row mb-4 overflow-hidden">
            <Col className="h-100" md={6}>
                <img className="object-fit-cover" src={baumePackage} height="100%"  width="100%" alt="" />
            </Col>
            <Col className="h-100" md={6}>
                <img className="object-fit-cover" src={baumeStaged} height="100%" width="100%" alt="" />
            </Col>  
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <p className="text-center w-50">I took more reference from La Roche and Avene's simple packaging since Marianas Mirror 
                    also has a medicinal focus versus a luxurious one like La Mer. As someone who suffers 
                    from eczema and has sensitive skin, I tend to be a lot more concerned with what the 
                    product has to offer with its ingredients and information instead of pretty 
                    packaging.</p>
            </Col>
        </Row>
        <Modal size="lg" dialogClassName="modal-larger" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body">
                        <img src={image === "bio-ad"? bioAd: baumeAd} className="object-fit-md-cover object-fit-lg-cover" height="100%" width="100%"/>
                    </Modal.Body>
            </Modal>
        <Row className="ad-row gx-2">
            <Col md={7} className="h-100">
                <img className="mm-ad object-fit-cover" src={bioAd} onClick={() => handleShow("bio-ad") } height="100%" width="100%" alt="" />
            </Col>
            <Col md={5} className="h-100">
                <img className="mm-ad object-fit-cover" src={baumeAd} onClick={() => handleShow("baume-ad")} height="100%" width="100%" alt="" />
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <img src={instaPostOne}  width="100%" alt="" />
            </Col>
            <Col md={6}>
                <img className="object-fit-cover" src={instaPostTwo} height="100%" width="100%" alt="" />
            </Col>
        </Row>
        <Footer />
    </Container>
    </>
    )
}

export default MM;