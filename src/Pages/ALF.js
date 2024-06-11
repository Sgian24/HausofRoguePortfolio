import { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from "..//Assets/Asset 8.png";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import stamp from "..//Assets/mock up stamp_edited.jpg";
import logo from "..//Assets/fullColor_redSpray_edited.png";
import logoWhole from "..//Assets/logo-full.jpg";
import logoSketch from "..//Assets/Roa_Billie-Sketches-02.jpg";
import logoSketchTwo from "..//Assets/Roa_Billie-LogoDesign-03.jpg";
import guideline from "..//Assets/wprch.jpg";
import alfInvitation from "..//Assets/Identity-Invitation-Stationery-Free-psd-Mockup.jpg";
import moodBoard from "..//Assets/Roa_Billie-Moodboard1.jpg";
import alfMockup from "..//Assets/ALF-stationary.webp";
import alfSite from "..//Assets/alf-website.webp";
import siteMockup from "..//Assets/Web Screen PSD Mockup.jpg";
import Footer from "../Components/Footer";

const ALF = () => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState("");
    const [scale, setScale] = useState(200);

    const imgRef = useRef(null)

    const handleShow = (item) => {
        setShow(true)
        setImage(item);
    }
    const handleClose = () => setShow(false);
    
    useEffect(() => {
        const oldScrollY = window.scrollY;
        const handleScroll = () => {
            if (oldScrollY < window.scrollY && scale >= 100) {
              setScale(() => scale -5)
            } else if (oldScrollY > window.scrollY && scale <= 200){
                setScale(() => scale + 5)
            }
        }
        const observer = new IntersectionObserver(i => {
            if (i[0].isIntersecting) {
                window.addEventListener("scroll", handleScroll)
                return () => window.removeEventListener("scroll", handleScroll);
            }
        });
        if (imgRef.current) observer.observe(imgRef.current)
        return () => { 
            if (imgRef.current) observer.unobserve(imgRef.current)
        }
    },[imgRef, scale])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[])
    
    return (
        <>
        <NavBar />
        <Container className="margin-container mt-4" fluid>
            <Row>
            <Col>
                <h1 className="text-center header-title">Animal Liberation Front</h1>
                <p className="mb-5">As an animal lover and a dog-mom, this project has some heartstrings into 
                it. The objective of this assignment was to take a real or existing charity organization and 
                completely rebrand it. New logo, design systems, everything. I chose the real life company of 
                Animal Liberation Front as my first Branding Identity&nbsp;Project. </p>
            </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">   
                    <img className="mb-4 border" src={Line} width="90%" height="20%" />
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
                            <td>Branding Identity, Logo Design & Illustration, Web Design</td>
                            <td>Animal Liberation Front [hypothetical]</td>
                            <td>2022</td>
                        </tr>
                    </tbody>
                 </Table>   
                </Col>
            </Row>
            <Row className="mb-4">
               <Col> 
                <img src={stamp} width="100%" alt="Stamp mockup with ALF logo." />
               </Col>
            </Row>
            <Row className="mb-4">
               <Col>
                <p>
                    Animal Liberation Front (ALF). If you know them, you may hate them. They're quite a controversial 
                    figure in the world of animal welfare due to their radical actions of burning down animal testing 
                    facilities, destroying property and enforcing veganism--regardless if you're a steward of the&nbsp;Earth.   
                </p>
                </Col>
                <Col>
                <p>
                    Me, I chose them simply because I just found their site to be ugly and outdated, however 
                    their militant-anarchist vibe suited me and I saw the potential. I rebranded them under the 
                    pretense that they're choosing to go into a more diplomatic, "commercial charity" route while 
                    still staying true to their original gritty&nbsp;style. 
                </p>
               </Col>
            </Row>
            </Container>
            <Container className="alf-logo-container gx-0 mb-5" fluid>
                <Row className="logo-row gx-0">
                    <Col sm={0} md={6} lg={6} xl={6} className="alf-logo-container-col border d-flex justify-content-end h-100">
                        <img src={logo} alt="ALF logo." />
                    </Col>
                    <Col xx={12} sm={12} md={6} lg={6} xl={6} className="logo-text-col h-100 d-flex justify-content-center align-items-center mb-5">
                        <div className="logo-text-container w-75">
                            <h1 className="mb-sm-3 mb-lg-5 sub-heading text-center">The Logo</h1>
                            <p> I started doodling and writing down footnotes, as a graphic designer does. Symbol, 
                            icon, word mark--the choices were endless. I ended up drawing a beagle dog and something&nbsp;clicked.</p>
                            <p>Their most famous rescues consisted of rescuing 82 beagles from an animal testing 
                            facility, plus you'll often see the breed in their pictures. The reason beagles 
                            are the breeds often used for testing is sad: they have a docile temperament and
                             therefore, they're "easier to manage". Moreover, dogs are man's best friend, and 
                             I decided that the canine will be the face to represent the protection of all&nbsp;animals.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} className="alf-logo-whole-container h-auto d-none d-flex justify-content-end">
                        <img className="object-fit-contain" src={logoWhole} height="100%" width="100%"/>
                    </Col>
                </Row>
            </Container>
            <Modal size="lg" dialogClassName="modal-90w" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body" >
                        <img className="modal-img" src={image === 1? logoSketch: logoSketchTwo} height="100%" width="100%" alt="ALF logo drafts." />
                    </Modal.Body>
            </Modal>
            <Container className="alf-thumbnail-container mb-3 mb-sm-0 mb-lg-5" fluid>
                     <Row>
                        <Col><img className="alf-thumbnail" onClick={() => handleShow(1)} src={logoSketch} width="100%" alt="ALF logo drafts."  /></Col>
                        <Col><img className="alf-thumbnail" onClick={() => handleShow(2)} src={logoSketchTwo} width="100%" alt="ALF logo drafts." /></Col>
                    </Row>
            </Container>
            <Container className="zoom-container overflow-hidden mb-3 mb-xl-5" fluid>
                 <Row className="h-100">
                    <Col className="d-flex justify-content-center align-items-center h-100 w-100"  >
                        <img className="guidelines-img" src={guideline} ref={imgRef} style={{transform:`scale(${scale.toString() + "%"})`}} width="100%" alt="" />
                        <h1 className="guidelines-heading">Guidelines</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="guidelines-body-container mb-5" >
                <Row className="">
                    <Col className="d-flex flex-column justify-content-between">
                        <p className="mood-board-text mt-sm-5 mt-md-3 mt-lg-0">I constructed a moodboard that was faithful to the industrial x anarchy look of ALF, 
                            because this is something that no other animal rights organization has branded. So 
                            think dusty, photo-scan textures, spray paint and ripped paper&nbsp;textures.</p>
                        <img className="mood-board object-fit-contain" src={moodBoard}  width="100%" alt="ALF moodboard." />
                    </Col>
                    <Col className="d-flex flex-column justify-content-between">
                        <div className="alf-invitation-container mb-3 mb-sm-3 mb-md-3 mb-lg-0 ">
                            <img className="alf-invitation mb-3 object-fit-contain" src={alfInvitation} width="100%" alt="ALF invitation mockup." />
                        </div>
                        <p className="" > However, 
                            as the project progressed I opted for a more optimistic design, to show diplomacy. 
                            Instead I used the industrial-heavy style on the assets such as the brush strokes 
                            on the dog, and the spray texture of the circle enclosing it. The 
                            industrial-anarchist elements were instead used as statement pieces--just to
                             maintain ALF's roots and convictive&nbsp;tone.</p>
                       
                            <img className="border alf-mockup object-fit-contain" src={alfMockup}  width="98.6%"  alt="ALF pen, journal and business card mockup." />
                      
                    </Col>
                </Row>
            </Container>
            <Container className="mb-5" fluid>
                <Row>
                    <Col className="alf-site w-100" style={{backgroundImage:`url(${alfSite})`}}>
                    </Col>
                </Row>
            </Container>
            <Container className="site-mockup-container mb-5 mb-sm-4 mb-md-4 mb-lg-4" >
                <Row className="mb-3">
                    <Col md={4} className="d-flex justify-content-center align-items-center">
                        <Link className="alf-site-link" to="https://billierogue.github.io/AnimalLiberationFront/">Desktop Web Design</Link>
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center align-items-center">
                        <div className="site-mockup-text" >
                            <p>Designing the site was the final set of the project. You can Google their real site 
                            at your own risk but it’s very outdated-looking which is what these other animal 
                            rights organizations have against&nbsp;them. </p>
                            <p> In order to come up with the design, I took into consideration ALF's three biggest 
                            competitors: Four Paws, Direct Action Everywhere and The Humane League .They all 
                            had something that Animal Liberation Front was missing such as: rescuing a bigger 
                            range of animals such as lions, monkeys, aquatic animals and other wild animals. 
                            Travelling with bigger press exposure, which lead to legislative victories. And a 
                            logo (which I do not recall ALF having) with a sleek website&nbsp;design.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="d-block">
                     <img className="site-mockup-img d-block m-auto" src={siteMockup} width="100%" alt="ALF web design pages and mockup." />
                    </Col>
                </Row>
                <Row className="mb-3 mb-sm-4 mb-md-4 mb-lg-4">
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                      <div style={{width: "90%"}}>
                        <p>Though my branding project cannot provide them with the ability to travel around the
                             world like UNICEF, have signed legislations and rescue more wild animals--I knew I 
                             could just give them the ability to "seem" like they do and look on par with their 
                             competitive&nbsp;charities.</p>
                        <p>Designed by me, with the aid of my boyfriend, Sunny Gian, who developed the web 
                            prototype. Click the "Desktop-Web Design" heading to view the prototype or click 
                            the link: <Link to="https://billierogue.github.io/AnimalLiberationFront">https://billierogue.github.io/<br/>AnimalLiberationFront/</Link></p>
                        <p>All in all, I love my work on this organization and had considered commissioning it to the
                           real Animal Liberation Front to turn this project to reality. Though there are just a 
                           plethora of things into consideration, like the organization's radicalism and my 
                           association with that. But my mind has not been made up, so hopefully in the future--it's 
                           never too&nbsp;late!</p>
                      </div>
                    </Col>
                </Row>
                <Row >
                <Col className="d-flex justify-content-center position-relative">
                    <Link to="/" className="more-projects">More Projects</Link>
                    <div className="link-line"></div>
                </Col>
            </Row>
            </Container>
           <Footer />
        </>
    )
}

export default ALF;