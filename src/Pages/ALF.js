import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from "..//Assets/Asset 8.png";
import Table from "react-bootstrap/Table";
import stamp from "..//Assets/mock up stamp_edited.jpg";
import logo from "..//Assets/fullColor_redSpray_edited.png";
import logoSketch from "..//Assets/Roa_Billie-Sketches-02.jpg";
import logoSketchTwo from "..//Assets/Roa_Billie-LogoDesign-03.jpg";

const ALF = () => {

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
        <Container className="margin-container mt-4" fluid>
            <Row>
            <Col>
                <h1 className="text-center header-title">Animal Liberation Front</h1>
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
                <img src={stamp} width="100%" alt="" />
               </Col>
            </Row>
            <Row className="mb-4">
               <Col>
                <p>
                    Animal Liberation Front (ALF). If you know them, you may hate them. They're quite a controversial 
                    figure in the world of animal welfare due to their radical actions of burning down animal testing 
                    facilities, destroying property and enforcing veganism--regardless if you're a steward of the Earth.   
                </p>
                </Col>
                <Col>
                <p>
                    Me, I chose them simply because I just found their site to be ugly and outdated, however 
                    their militant-anarchist vibe suited me and I saw the potential. I rebranded them under the 
                    pretense that they're choosing to go into a more diplomatic, "commercial charity" route while 
                    still staying true to their original gritty style. 
                </p>
               </Col>
            </Row>
            </Container>
            <Container className="gx-0 mb-5" fluid>
                <Row className="logo-row gx-0">
                    <Col className="d-flex justify-content-end h-100">
                        <img src={logo} alt="" />
                    </Col>
                    <Col className="logo-text-col h-100 d-flex justify-content-center align-items-center mb-5">
                        <div className="w-75">
                            <h1 className="mb-5 sub-heading text-center">The Logo</h1>
                            <p> I started doodling and writing down footnotes, as a graphic designer does. Symbol, 
                            icon, word mark--the choices were endless. I ended up drawing a beagle dog and something 
                            clicked.</p>
                            <p>Their most famous rescues consisted of rescuing 82 beagles from an animal testing 
                            facility, plus you'll often see the breed in their pictures. The reason beagles 
                            are the breeds often used for testing is sad: they have a docile temperament and
                             therefore, they're "easier to manage". Moreover, dogs are man's best friend, and 
                             I decided that the canine will be the face to represent the protection of all 
                             animals.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal size="lg" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body" >
                        <img src={image === 1? logoSketch: logoSketchTwo} height="100%" width="100%" alt="" />
                    </Modal.Body>
            </Modal>
            <Container className= "alf-thumbnail-container mb-5">
                     <Row>
                        <Col><img onClick={() => handleShow(1)} src={logoSketch} width="100%" alt=""  /></Col>
                        <Col><img onClick={() => handleShow(2)} src={logoSketchTwo} width="100%" alt="" /></Col>
                    </Row>
            </Container>
        </>
    )
}

export default ALF;