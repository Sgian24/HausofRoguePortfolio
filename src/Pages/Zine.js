import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Container, Row, Col, Table, Carousel, Modal,  } from "react-bootstrap";
import Footer from "../Components/Footer";
import Line from "..//Assets/Asset 8.png";
import headerVideo from "..//Assets/Zine/project-header-video.mp4";
import ZMag from "..//Assets/Zine/ZH_Magazine.jpg";
import ZMag2 from "..//Assets/Zine/ZH_Magazine2.jpg";
import ZMag3 from "..//Assets/Zine/ZH_Magazine3.jpg";
import ZMag4 from "..//Assets/Zine/ZH_Magazine4.jpg";
import ZMag5 from "..//Assets/Zine/ZH_Magazine5.jpg";
import ZMag6 from "..//Assets/Zine/ZH_Magazine6.jpg";
import ZMag7 from "..//Assets/Zine/ZH_Magazine7.jpg";
import ZMag8 from "..//Assets/Zine/ZH_Magazine8.jpg";
import ZMag9 from "..//Assets/Zine/ZH_Magazine9.jpg";
import coffeeHeaderVideo from "..//Assets/Zine/BWF-header.mp4";
import art1 from "..//Assets/Zine/Artboard1.jpg";
import art2 from "..//Assets/Zine/Artboard2.jpg";
import art3 from "..//Assets/Zine/Artboard3.jpg";
import art4 from "..//Assets/Zine/Artboard4.jpg";
import art5 from "..//Assets/Zine/Artboard5.jpg";
import art6 from "..//Assets/Zine/Artboard6.jpg";
import art7 from "..//Assets/Zine/Artboard7.jpg";
import art8 from "..//Assets/Zine/Artboard8.jpg";
import art9 from "..//Assets/Zine/Artboard9.jpg";
import art10 from "..//Assets/Zine/Artboard10.jpg";
import art11 from "..//Assets/Zine/Artboard11.jpg";
import processOne from "..//Assets/Zine/process1.jpg";
import processTwo from "..//Assets/Zine/process2.jpg";
import boxTrolleyMockup from "..//Assets/Zine/BoxTrolleyMockup.jpg";
import coffeeBagMockup from "..//Assets/Zine/FoilCoffeeBagMockup.jpg";
import teeMockup from "..//Assets/Zine/FrontT-ShirtMockup.jpg";
import matchesMockup from "..//Assets/Zine/MatchesBoxMockup.jpg";
import fenceMockup from "..//Assets/Zine/STSF_09.jpg";



const Zine = () => {

    const [show, setShow] = useState(false)
    const [image, setImage] = useState("")

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[]) 

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
                <h1 className="MM-title">Part 1: Zine But Not Heard</h1>
                <p className="mb-5 mm-description">This editorial project is a double feature of my own original zine called "Zine but 
                not Heard" (ZH), and a special edition release of that same zine ala coffee table book and its merch 
                package. So sit down, put on your brown noise machine, and grab a snack as I bring you along this 
                branding, editorial and art direction extravaganza.</p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">   
                <img className="mb-4" src={Line} width="90%" height="20%" alt="Line" />
            </Col>
        </Row>
        <Row className="mb-3">
            <Col className="d-flex justify-content-center">
                <Table className="resthaven-table-container" size="sm" borderless>
                    <thead>
                        <tr className="text-center ">
                            <th>Service</th>
                            <th>Tools</th> 
                            <th className="pe-5">Year</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">Illustration, Art Ditrection <br/> Editorial, Typography, Branding</td>
                            <td className="text-center">Illustrator, InDesign, ChatGPT</td>
                            <td className="">2024</td>
                        </tr>
                    </tbody>
                </Table>   
            </Col>
        </Row>
        </Container>
        <Container fluid>
        <Modal size="lg" dialogClassName="modal-larger" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body">
                        <img src={image === "zmag"? ZMag: 
                                  image === "zmag2"? ZMag2: 
                                  image === "zmag3"? ZMag3:
                                  image === "zmag4"? ZMag4:
                                  image === "zmag5"? ZMag5:
                                  image === "zmag6"? ZMag6: 
                                  image === "zmag7"? ZMag7:
                                  image === "zmag8"? ZMag8: 
                                  image === "zmag9"? ZMag9:
                                  image === "art1"? art1:
                                  image === "art2"? art2:
                                  image === "art3"? art3:
                                  image === "art4"? art4:
                                  image === "art5"? art5:
                                  image === "art6"? art6:
                                  image === "art7"? art7:
                                  image === "art8"? art8:
                                  image === "art9"? art9:
                                  image === "art10"? art10:
                                  image === "art11"? art11:
                                  image === "boxtrolley"? boxTrolleyMockup:
                                  image === "coffeebag"? coffeeBagMockup: 
                                  image === "teemockup"? teeMockup:
                                  image === "matchesmockup"? matchesMockup: fenceMockup } className="object-fit-md-cover object-fit-lg-cover" height="100%" width="100%" alt="Pages from the zine."/>
                    </Modal.Body>
            </Modal>
            <Row className="mb-5">
                <Col>
                <video height="100%" width="100%" autoPlay loop muted controls>
                    <source src={headerVideo} type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row className="bg-black pt-5 ps-5 pb-5">
                <Col className="d-flex flex-column align-items-center">
                 <p className="w-75 text-white">
                    Zine but not Heard is fanzine centred around rock/metal music and Toronto youth 
                    subculture. Its unique selling point is its more diverse topics which most music 
                    publications lack in the heavier genres like rock and metal. This first issue of ZH 
                    features articles that cover fashion, coffee recipes, a B-movie review and a local 
                    upcoming band as its main feature. Future issues are featuring many other topics like 
                    lifestyle, mental health, work-life, budget-friendly restaurants, events, etc. 
                 </p>
                 <p className="w-75 text-white ">
                    <strong>Category:</strong> • Music (metal, hardcore punk, hard rock) and Culture <br/>
                    <strong>Publication frequency:</strong> • Semi-annually // every 6 months <br/>
                    <strong>Cost:</strong> • $10 // $100 for retail establishments or stockists (few copies may be free for small local vendors) <br/>
                    <strong>Who it’s For:</strong> • 17 - 35 years old. The scene has a polarizing mix of teenagers to millenials. 
                    High school graduates, college students, or (young) adults working jobs. The purpose of the 
                    zine is to inspire readers through art, find activities to do in the city (via shows), 
                    support artists, and encourage them to be creative in a seemingly mundane life.
                 </p>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel" data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag")}  src={ZMag} width="100%"  alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches  object-fit-contain" onClick={() => handleShow("zmag2")} src={ZMag2} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag3")} src={ZMag3} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag4")} src={ZMag4} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag5")} src={ZMag5} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag6")} src={ZMag6} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag7")} src={ZMag7} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag8")} src={ZMag8} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("zmag9")} src={ZMag9} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row className="pt-5 pb-4 ps-5">
                <Col className="d-flex flex-column align-items-center">
                 <p className="w-75 ">
                 ChatGPT was used to generate the texts for both books, I find that using real words in 
                 context is much better than dummy text. The band spread about Resthaven, which was written
                 by my colleague and friend, Braydan Parsons O'Reilly. 
                 </p>
                 </Col>
            </Row>
            </Container>
            <Container className="cthulu-body-container mt-4 mb-sm-5 mb-md-5" fluid>
        <Row>
            <Col className="d-flex flex-column align-items-center">
                <h1 className="MM-title">Part 2: Spin-off Coffee Table Book</h1>
                <p className=" mm-description">The special edition coffee table book, Before We're Famous 
                , was an opportunity for me to expand on ZH Magazine, a brand direction that parallels to the 
                similar trajectory of Thrasher Magazine. They started off as a skateboard zine in the '80s 
                that branched into video production, online blogging and merchandising. ​</p>
                <p className="mb-5 mm-description">I thought the coffee table book was a good opportunity 
                to funnel and organize the many, chaotic ideas I initially had for ZH because I had no 
                idea if I wanted the zine to be a heavy read, light read, or strictly visual. Before We're 
                Famous was a good vessel to put all the visual and artistic pieces I had 
                gathered.​</p>
            </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                <video height="100%" width="100%" autoPlay loop muted >
                    <source src={coffeeHeaderVideo} type="video/mp4" />
                </video>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel" data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art1")}  src={art1} width="100%"  alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches  object-fit-contain" onClick={() => handleShow("art2")} src={art2} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art3")} src={art3} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art4")} src={art4} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art5")} src={art5} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art6")} src={art6} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art7")} src={art7} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art8")} src={art8} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art9")} src={art9} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art10")} src={art10} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="zine-sketches object-fit-contain" onClick={() => handleShow("art11")} src={art11} width="100%" alt="Call of Cthulu concept sketches." />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
             <Row>
            <Col className="d-flex flex-column align-items-center">
                <p className=" mm-description">I used my own artwork and photography from live shows in 
                this project and avoided stock photos. It felt more personal that way since this is related
                 to my real life; I want the moments being showcased to feel organic. ​</p>
            </Col>
            </Row>
        </Container>
        <Container className="mb-5">
            <Row className="mb-4">
                <Col>
                    <img className="mb-4" src={processOne} width="100%" alt="Process and draft of zine pages." />
                     <img src={processTwo} width="100%" alt="Process and draft of zine pages and merch package." />
                </Col>
            </Row>
            <Row>
                <Col>
                     <h1 className="MM-title">Merch Package</h1>
                </Col>
            </Row>
            <Row className="zine-row-container gx-3">
                    <Col className="h-100" lg={8}>
                        <Row className="arb-mockup-row-four pb-3" style={{height:"60%"}}>
                            <Col>
                                <img className="trolley-mockup-thumbnail object-fit-cover" src={boxTrolleyMockup} height="80%" width="100%" onClick={() => handleShow("boxtrolley")} alt="Box packaging mockup." />
                            </Col>
                        </Row>
                        <Row className="arb-mockup-row-five gx-3 overflow-hidden" style={{height:"40%"}}>
                            <Col md={12} lg={6}>
                                <img className="arb-mockup-thumbnail object-fit-cover" src={coffeeBagMockup} height="100%" width="100%" onClick={() => handleShow("coffeebag")}  alt="Bag of coffee beans mockup." />
                            </Col>
                            <Col className="mt-md-3 mt-lg-0">
                                 <img className="arb-mockup-thumbnail object-fit-cover" src={teeMockup} height="100%" width="100%" onClick={() => handleShow("teemockup")} alt="T-shirt mockup." />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row className="h-50">
                            <Col className="pb-3 mt-md-3 mt-lg-0">
                                 <img className="arb-mockup-thumbnail object-fit-cover" src={matchesMockup} height="100%" width="100%" onClick={() => handleShow("matchesmockup")} alt="Box of matches mockup." />
                            </Col>
                        </Row>
                        <Row className="h-50">
                            <Col className="mt-sm-4 mt-lg-0">
                                 <img className="arb-mockup-thumbnail object-fit-cover" height="100%" width="100%" src={fenceMockup} onClick={() => handleShow("fencemockup")} alt="Sticker on a pole mockup." />
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Zine;