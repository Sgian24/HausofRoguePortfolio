import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Container, Row, Col, Table, Modal, Carousel } from "react-bootstrap";
import Line from "..//Assets/Asset 8.png";
import arbHeader from "..//Assets/arb-header.jpg";
import plaqueMockup from "..//Assets/metal-plaque-3d-mockup.jpg";
import styleGuide from "..//Assets/style-guide.jpg";
import userPersona from "..//Assets/user-persona.jpg";
import flatOne from "..//Assets/arb-flat-images/1.jpg";
import flatTwo from "..//Assets/arb-flat-images/2.jpg";
import flatThree from "..//Assets/arb-flat-images/3.jpg";
import flatFour from "..//Assets/arb-flat-images/4.jpg";
import flatFive from "..//Assets/arb-flat-images/04.jpg";
import flatSix from "..//Assets/arb-flat-images/05.jpg";
import flatSeven from "..//Assets/arb-flat-images/6.jpg";
import flatEight from "..//Assets/arb-flat-images/7.jpg";
import flatNine from "..//Assets/arb-flat-images/8.jpg";
import flatTen from "..//Assets/arb-flat-images/9.jpg";
import flatEleven from "..//Assets/arb-flat-images/10.jpg";
import monolithMockup from "..//Assets/arb-mockup/monolith-directory-mockup.jpg";
import signMockupOne from "..//Assets/arb-mockup/geese-sign.jpg";
import signMockupTwo from "..//Assets/arb-mockup/poison-ivy-sign-mockup.jpg";
import plaqueMockupCloseup from "..//Assets/arb-mockup/metal-plaque-mockup_edited.jpg";
import identificationSignMockup from "..//Assets/arb-mockup/major-identification-sign.jpg";
import birdSign from "..//Assets/arb-mockup/bird-garden-sign.jpg";
import volunteer from "..//Assets/arb-mockup/student-volunteer.jpg";
import walkSign from "..//Assets/arb-mockup/wetland-walk.jpg";
import interpSign from "..//Assets/arb-mockup/interp-sign.jpg";
import parkRanger from "..//Assets/arb-mockup/park-ranger.png";
import Footer from "..//Components/Footer";

const Arb = () => {

    const [show, setShow] = useState(false)
    const [showMockup, setShowMockup] = useState(false)
    const [index, setIndex] = useState(0)
    const [indexMockup, setIndexMockup] = useState(0)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[])

    const handleShow = (i) => {
        setShow(true)
        setIndex(i)
    }

     const handleShowMockup = (i) => {
        setShowMockup(true)
        setIndexMockup(i)
    }

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const handleSelectMockup = (selectedIndex) => {
        setIndexMockup(selectedIndex)
    }

    const handleClose = () => setShow(false)

    const handleCloseMockup = () => setShowMockup(false)


    return (
        <>
        <NavBar />
            <Container className="cthulu-body-container mt-4 mb-sm-5 mb-md-5" fluid>
                <Row>
                    <Col className="d-flex flex-column align-items-center">
                        <h1 className="header-title">Humber Arb: Signage System</h1>
                        <p className="mb-5 arb-paragraph">The Humber Arboretum (also called "The Arb" ) is a 250-acre botanical garden located 
                            between Humber College and the Humber river. The park was beautiful, however the
                             wayfinding experience was a little flawed, and therefore the objective was to 
                             identify issues and provide an improved wayfinding experience for Humber students, 
                             campers and its park visitors with updated, durable signs and a refined directory. 
                             This project also included some elements of rebranding as I took pieces from the 
                             existing style guide and rearranged them for an enhanced and modern look. </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">   
                        <img className="mb-4" src={Line} width="90%" height="20%" alt="line" />
                    </Col>
                </Row>
                <Row className="mb-4">
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
                                    <td>Environmental UX Design, <br /> Signage Design </td>
                                    <td>Humber Arboretum</td>
                                    <td>2024</td>
                                </tr>
                            </tbody>
                        </Table>   
                    </Col>
                </Row>
            </Container>
            <Container className="mb-5">
                <Row>
                    <Col md={12} lg={8} xl={7} className="mb-5 mb-lg-0">
                        <img src={arbHeader} width="100%" alt="Humber Arboretum header." />
                    </Col>
                    <Col className="d-flex align-items-center">
                        <p className="fst-italic arb-header-text">“The idea for the Humber Arboretum began in 1972, when horticultural students 
                            from Humber College saw undeveloped land beside the campus as an opportunity 
                            to practice their skills. It officially opened in September 1977 as a joint 
                            venture between Humber College, Toronto and Region Conservation, the City of 
                            Metropolitan Toronto, and the City of Etobicoke.”</p>
                    </Col>
                </Row>
            </Container>
            <Container className="arb-container d-flex flex-column justify-content-center pt-5 pb-5 h-auto" style={{backgroundImage:`url(${plaqueMockup})`}} fluid>
                <Row className="mb-4">
                    <Col className="d-flex justify-content-center">
                        <h2 className="observations-text text-white text-center"><mark className="arb-mark">Upon visiting Trail 1 to 7, here were some 
                        of the observations that weakened the visitor experience.</mark></h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <ul className="w-75">
                            <li className="mb-4 text-white"><mark className="arb-mark-list">Some of the signs have deteriorated from weather conditions, dirt or rust which 
                                can ruin readability; signs require new coating to ensure durability</mark></li>
                            <li className="mb-4 text-white"><mark className="arb-mark-list">Certain signs are overlooked due to choice of color 
                            (in relation to its environment) or placement (distance, height, etc)</mark></li>
                            <li className="mb-4 text-white"><mark className="arb-mark-list">Nailed interpretive signs on the trees were engulfed in growing bark over time.</mark></li>
                            <li className="mb-4 text-white"><mark className="arb-mark-list">The color of the signs were not consistent nor a color from the brand's palette</mark></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="w-75">
                            <li className="mb-4 text-white"><mark className="arb-mark-list">Not many signages or warnings for areas with prohibited activity  
                            (i.e, no fires allowed, or a warning for poison ivy area)</mark></li>
                            <li className="mb-4 text-white"><mark className="arb-mark-list">The Arb’s branding is just not really showcased throughout the park. Their existing brand color palette 
                                has potential to make their signs stand out of their environment since there are a few fun “unnatural” 
                                colors. Like their teal shade, as shown in the Style Guide below</mark></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-5">
                <Row className="mb-3">
                    <Col className="h-auto">
                        <img src={styleGuide} className="w-100 object-fit-contain" alt="Style guide for Humber arboretum." />
                    </Col>
                </Row>
                <Row>
                    <Col className="h-auto">
                        <img src={userPersona} className="w-100 object-fit-contain" alt="User persona." />
                    </Col>
                </Row>
            </Container>
            <Modal size="lg" dialogClassName="modal-larger" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body d-flex justify-content-center">
                        <Carousel className="arb-carousel" activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" fade>
                            <Carousel.Item>
                                <img src={flatOne} width="100%" alt="Park entryway sign." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatTwo} width="100%" alt="Visitors centre and information kiosk." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatThree} width="100%" alt="Visitors centre and information kiosk (enlarged)." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatFour} width="100%" alt="Directional sign." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatFive} width="100%" alt="Identification sign." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatSix} width="100%" alt="Smaller directional sign." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatSeven} width="100%" alt="Hiking trail map." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatNine} width="100%" alt="Regulatory signs (in scale)." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatEight} width="100%" alt="Regulatory signs." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatTen} width="100%" alt="Interpretive sign." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={flatEleven} width="100%" alt="Smaller interpretive sign." />
                            </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
            </Modal>
            <Container className="mb-5" fluid>
                <Row>
                    <Col className="d-flex flex-column align-items-center">
                        <h1 className="signage-gallery-heading">Signage Family Gallery</h1>
                        <p>(Click to view each slide)</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatOne} onClick={() => handleShow(0)} width="100%" alt="Park entryway sign." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatTwo} onClick={() => handleShow(1)} width="100%" alt="Visitors centre and information kiosk." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatThree} onClick={() => handleShow(2)} width="100%" alt="Visitors centre and information kiosk (enlarged)." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatFour} onClick={() => handleShow(3)} width="100%" alt="Directional sign." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatFive} onClick={() => handleShow(4)} width="100%" alt="Identification sign." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatSix} onClick={() => handleShow(5)} width="100%" alt="Smaller directional sign." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatSeven} onClick={() => handleShow(6)} width="100%" alt="Hiking trail map." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatNine} onClick={() => handleShow(7)} width="100%" alt="Regulatory signs (in scale)." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatEight} onClick={() => handleShow(8)} width="100%" alt="Regulatory signs." /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatTen} onClick={() => handleShow(9)} width="100%" alt="Interpretive sign" /></Col>
                    <Col md={6} lg={4}><img className="arb-thumbnail" src={flatEleven} onClick={() => handleShow(10)} width="100%" alt="Smaller interpretive sign." /></Col>
                </Row>
            </Container>
            <Modal size="lg" dialogClassName="modal-larger" className="modal-container" show={showMockup} onHide={handleCloseMockup}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body d-flex justify-content-center">
                        <Carousel className="carousel" activeIndex={indexMockup} onSelect={handleSelectMockup} data-bs-theme="dark" fade>
                            <Carousel.Item>
                                <img className="carousel-mockup object-fit-contain" src={monolithMockup} width="100%" alt="Monolith mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={signMockupOne} width="100%" alt="Warning sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={signMockupTwo} width="100%" alt="Caution sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={plaqueMockupCloseup} width="100%" alt="Plaque mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={identificationSignMockup} width="100%" alt="Identification sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={birdSign} width="100%" alt="Bird Garden sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={walkSign} width="100%" alt="Walk trail sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={interpSign} width="100%" alt="Interpretive sign mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={volunteer} width="100%" alt="Volunteer with badge mockup." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel-mockup  object-fit-contain" src={parkRanger} width="100%" alt="Park ranger with uniform mockup." />
                            </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
            </Modal>
            <Container className="mb-5">
                <Row className="mb-4">
                    <Col className="d-flex justify-content-center">
                        <p className="w-75">Taking the existing branding style guide (exception of new chosen fonts), I've leaned into the 
                            teal color as I felt it was a good contrast to the natural background: it wasn't too bright on 
                            the eye on sunny days but enough contrast to stand out amongst the natural shades of greenery. 
                            My process in designing the signs were to make it fun and cohesive for a wide audience of all 
                            ages. Meanwhile, I also considered the signage hardware, scale, mounting and lighting type when creating 
                            each sign.</p>
                    </Col>
                </Row>
                <Row className="arb-row-container-one gx-3 mb-3 ">
                    <Col className="h-100" lg={7}>
                        <Row className="arb-mockup-row overflow-hidden">
                            <Col className="h-100" >
                               <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(0)} src={monolithMockup} height="100%" width="100%" alt="Monolith." />
                            </Col>
                        </Row>
                        <Row className="arb-mockup-row-two pt-3 overflow-hidden gx-3">
                            <Col md={12} lg={6}>
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(1)} style={{objectPosition:"50% -25px"}} src={signMockupOne} height="100%" width="100%" alt="Warning sign mockup." />
                            </Col>
                            <Col>
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(2)} style={{objectPosition:"50% -40px"}} src={signMockupTwo} height="100%"  width="100%" alt="Caution sign mockup." />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="h-100">
                        <Row className="arb-mockup-row-two">
                            <Col >
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(3)} src={plaqueMockupCloseup} height="100%" width="100%" alt="Plaque mockup." />
                            </Col>
                        </Row>
                        <Row className="arb-mockup-row-three pt-3">
                            <Col className="overflow-hidden ">
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(4)} style={{objectPosition:"10%"}} src={identificationSignMockup} height="100%" width="100%" alt="Identification sign mockup." />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="arb-row-container-two gx-3">
                    <Col className="h-100" lg={8}>
                        <Row className="arb-mockup-row-four pb-3">
                            <Col >
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(5)} src={birdSign} height="100%" width="100%" alt="Bird Garden sign mockup." />
                            </Col>
                        </Row>
                        <Row className="arb-mockup-row-five gx-3">
                            <Col md={12} lg={6}>
                                <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(6)} src={walkSign} height="100%" width="100%" alt="Walk trail sign mockup." />
                            </Col>
                            <Col className="mt-md-3 mt-lg-0">
                                 <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(7)} src={interpSign} height="100%" width="100%" alt="Interpretive sign mockup." />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row className="h-50">
                            <Col className="pb-3 mt-md-3 mt-lg-0">
                                 <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(8)} src={volunteer} height="100%" width="100%" alt="Volunteer with badge mockup." />
                            </Col>
                        </Row>
                        <Row className="h-50">
                            <Col className="">
                                 <img className="arb-mockup-thumbnail object-fit-cover" onClick={() => handleShowMockup(9)} height="100%" width="100%" src={parkRanger}  alt="Park ranger with uniform mockup." />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Arb;