import { useEffect, useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Footer from "..//Components/Footer";
import {Link} from "react-router-dom";
import Line from "..//Assets/Asset 8.png";
import cthuluBookMockup from "..//Assets/CoC_Book-Mockup.jpg";
import cthuluMMoodBoard from "..//Assets/Cthulu Moodboard.jpg";
import gravePoster from "..//Assets/71W0COYDONL._AC_UF1000,1000_QL80_.jpg";
import chPoster from "..//Assets/MCDCAHO_EC016.jpg";
import sketchOne from "..//Assets/Picsart_23-02-16_20-14-24-980.jpg";
import sketchTwo from "..//Assets/Picsart_23-02-16_20-18-38-394.jpg";
import sketchThree from "..//Assets/sketch call of Cthulhu.jpg";
import posterOnWall from "..//Assets/Poster on Building Wall Mockup_edited.jpg";
import billboard from "..//Assets/CoC_Billboard-Mockup.jpg";
import paperBackBooks from "..//Assets/Paperback-Book-Mockup-Vol6.jpg";
import sketchFour from "..//Assets/Picsart_23-02-16_20-16-02-752.jpg";
import bookMockupUp from "..//Assets/Free_Book_Mockup_3.jpg";
import bookMockupDown from "..//Assets/Free_Book_Mockup_8.jpg";
import bookMockup from "..//Assets/cthulu.webp";
import book from "..//Assets/book png.png";
import iPhoneMockup from "..//Assets/iPhone11-PSD-Mockup.jpg";
import wallMockup from "..//Assets/Billboard on Wall Mockup.jpg";
import exteriorMockup from "..//Assets/Exterior_scene_4_free_updated.jpg";
import iPhoneJacketMockup from "..//Assets/IphoneX-JacketMockup.jpg";
import digestMockup from "..//Assets/Digest-mockup-vol1-Free -800x526px.jpg";

const Cthulu = () => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState("");

    const imgRef = useRef(null);

    const handleShow = (item) => {
        setShow(true)
        setImage(item);
    }
    const handleClose = () => setShow(false);

    useEffect(() => {
        const observer = new IntersectionObserver(i => {
            if (i[0].isIntersecting) {
                imgRef.current.style.left = "-25%";
            }
        });
        if (imgRef.current) observer.observe(imgRef.current)
        return () => { 
            if (imgRef.current) observer.unobserve(imgRef.current)
        }
    },[])

    return (
        <>
        <NavBar />
        <Container className="cthulu-body-container mt-4" fluid>
            <Row>
                <Col>
                    <h1 className="text-center header-title">Call of Cthulu</h1>
                    <p className="mb-5"> Though I've never read the book, I'm aware of the premise and its popularity 
                    especially in the gothic horror community--and gaming community. This recent assignment, inspired 
                    by one of the amazing works of H.P. Lovecraft, provided me with a much-needed new challenge which 
                    was mixing my hand drawings into digital work and designing a novel. For this project we had to
                    create a movie poster for a novel of our choosing, a book specimen and a promotional package; all
                    for the hypothetical, upcoming Call of Cthulu film and publication.</p>
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
                            <td>Brand Campaign, Promotional Campaign, Print, Illustration</td>
                            <td>[Fictional movie company]</td>
                            <td>2023</td>
                        </tr>
                    </tbody>
                </Table>   
                </Col>
            </Row>
            <Row className="mb-5">
               <Col> 
                <img src={cthuluBookMockup} width="100%" alt="" />
               </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <p>I'd like to start off with the moodboard first because it is in a style called Grindhouse. 
                        Grindhouse style refers to a specific cinematic aesthetic that emerged in the 1960s and 
                        1970s, characterized by low-budget filmmaking techniques, exploitation of sensational and 
                        often taboo subject matter, and a focus on delivering visceral and intense experiences to 
                        audiences. However, the grindhouse aesthetic is usually associated with gore, horror and 
                        slashers--hence the "visceral" experience.</p>
                </Col>
                <Col lg={8}>
                    <img src={cthuluMMoodBoard} width="100%" alt="" />
                    <img src={gravePoster} className="grave-poster position-absolute" width="10%" alt="" />
                    <img src={chPoster} className="ch-poster position-absolute" width="7%" alt="" />
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row className="mb-4">
                <Col className="carousel-container d-flex p-5 justify-content-center" >
                    <Carousel className="carousel" data-bs-theme="dark">
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={sketchOne} width="100%"  alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={sketchTwo} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="sketches object-fit-contain" src={sketchThree} width="100%" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
            <Container className="mb-5">
                <Row>
                    <Col xs={12} lg={6}>
                        <img src={posterOnWall} width="100%" alt="" />
                    </Col>
                    <Col className="d-flex align-items-center">
                    <div>
                        <h2 className="sub-heading text-center">The Movie Poster</h2>
                        <p>My goal was to recreate my adaption of the Cthulhu franchise onto the grindhouse face. 
                            I also intentionally misspelled Cthulhu to Cthulu for artistic purposes: easier 
                            pronunciation for mainstream audiences, and a way to differentiate itself from other 
                            adaptions of the novel.</p>
                        <p>Before, I'd usually draw something and then retrace in on Illustrator. However, I 
                            was on a tight deadline and I felt I already worked so hard on this drawing. With 
                            the advice of a fairy godfather a.k.a my professor, Dwight Alexander, he had told 
                            me to go with what medium was "faster'. I didn't know the answer but I instinctually 
                            chose my drawing. I've been doing art with my hands way before doing it on the laptop, 
                            so why not.</p>
                            </div>
                    </Col>
                </Row>
            </Container>
            <Container className="billboard mb-5 d-flex align-items-center w-100" style={{backgroundImage:`url(${billboard})`}} fluid>
                <Row>
                    <Col>
                        <p className="billboard-text text-white">To keep it from washing out, I reworked the drawing over and over on Photoshop to 
                            give it its definition and to also color under the linework.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="book-header-container d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${paperBackBooks})`}} fluid>
                <Row>
                    <Col>
                    <h2 className="sub-heading text-white">The Book Specimen</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="book-sketch-container d-flex justify-content-center mb-5" fluid>
                <Row className="book-sketch-row">
                    <Col className="book-sketch-col d-flex align-items-center">
                       <img className="object-fit-cover" src={sketchFour} width="52%" alt="" />
                       <p className="book-sketch-paragraph position-absolute"><mark>I could've easily pasted my movie poster onto the book, but I wanted to add variety 
                        and experiment with this new mixed media skill of playing with my hand-drawn assets with 
                        effect manipulation on Photoshop. Instead I decided to go with one of the alternate early 
                        drafts of Call of Ctulhu and used it towards the book. This gives the book its own identity 
                        apart from the film.</mark></p>
                    </Col>
                </Row>
            </Container>
            <Modal size="lg" className="modal-container" show={show} onHide={handleClose}>
                    <Modal.Header className="modal-header" closeButton></Modal.Header>
                    <Modal.Body className="modal-body" >
                        <img src={image === "book-mockup-up"? bookMockupUp: 
                                  image === "book-mockup-down"? bookMockupDown: 
                                  image === "book-mockup"? bookMockup:
                                  image === "wall-mockup"? wallMockup:
                                  image === "exterior-mockup"? exteriorMockup:
                                  image === "iPhone-jacket-mockup"? iPhoneJacketMockup: digestMockup} height="100%" width="100%" alt="" />
                    </Modal.Body>
            </Modal>
            <Container className="typography-container overflow-hidden">
                <Row>
                    <Col>
                        <img className="book-mockup mb-2" onClick={() => handleShow("book-mockup-up")} src={bookMockupUp} width="100%" alt="" />
                        <img className="book-mockup mb-2" onClick={() => handleShow("book-mockup-down")} src={bookMockupDown} width="100%" alt="" />
                        <img className="book-mockup" src={bookMockup} onClick={() => handleShow("book-mockup")} width="100%" alt="" />
                    </Col>
                    <Col>
                    <h2 className="sub-heading text-center mb-5">The Typography Aspect</h2>
                    <p className="mb-5"> The main font system used for the body text was Adobe Caslon Pro (directly based on William 
                        Caslon’s eponymous serif font family). I chose this serif font for the body copy because it 
                        provided a old-time-y feel which went with the tone of the book: it’s horror, from the early
                         20th century and is popular in gothic fiction. Overall, the Caslon font has somewhat of a 
                         vintage, typewriter feel to it. Caslon is used for journals and books which is perfect 
                         because the point-of-view of Call of Cthulhu is narrated through the point-of-view of s
                         omeone going through their late-uncle’s journals. </p>
                    <h5 className="text-end mb-4">Justification and Composition</h5>
                    <p>I was already wary of widows, orphans and rivers in text formatting so fixing those didn’t 
                        take up too much of my time. If you have a grasp of InDesign, working paragraph styles then 
                        formatting the text (via justification, hyphenation and ‘GREP” style”) shouldn’t take long 
                        (when in doubt, YouTube). One thing I noticed in books is the body copy is justified with the 
                        last line aligned to the left. I did just that and then fixed the rivers and H&J violations 
                        using the paragraph style tools. I also used drop caps for every chapter. If anything, 
                        the thing remotely challenging was trying to not make it ‘redundant’ which is a given 
                        because it’s a layout for a book--it’s just prose. The thing is, the book does not have 
                        a lot of dialogue—which usually would be the paragraph break. At the same time I didn’t 
                        want every page to look the same: eye fatigue and pain in the ass as a reader and you 
                        accidentally lose your page or your bookmark flies away. So what I did instead was skim 
                        through all the pages one-by-one and indented, italicized and bolded where it felt appropriate 
                        based on the context of the story. For example, page 1, Chapter 1: I italicized the word “live”. 
                        I wanted the word to be thin to symbolize the slim chances of the character surviving—-show the reader 
                        the stakes.</p>
                        <img className="book position-relative"ref={imgRef} src={book} width="100%" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="promotional-package-container pt-5" fluid>
                <Row className="promotional-package-bg-row">
                    <Col className="promotional-package-bg-col" style={{backgroundImage:`url(${iPhoneMockup})`}}>
                    </Col>
                </Row>
                <Row className="promotional-package-text-row bg-white">
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                        <h2 className="sub-heading mb-5">The Promotional <br /> Package</h2>
                        <div className="short-line"></div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <p className="w-75">The 'Promotional Package' chapter was quite familiar to me. I sort of had previous 
                            experience in my music releases because you got to hype up your audience with 
                            various visuals leading up to the drop date. It's essentially disassembling and 
                            rearranging the puzzles pieces to create something new.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="cthulu-mockup-container overflow-x-hidden px-0" fluid>
                <Row className="cthulu-mockup-row mb-3">
                    <Col>
                       <img className="cthulu-mockup" onClick={() => handleShow("wall-mockup")} src={wallMockup} height="75%" width="100%" alt="" /> 
                    </Col>
                    <Col>
                        <img className="cthulu-mockup" onClick={() => handleShow("exterior-mockup")} src={exteriorMockup} height="75%" width="100%" alt="" />
                    </Col>
                </Row>
                <Row className="cthulu-mockup-row">
                    <Col>
                       <img className="cthulu-mockup" onClick={() => handleShow("iPhone-jacket-mockup")} src={iPhoneJacketMockup} height="75%" width="100%" alt="" /> 
                    </Col>
                    <Col>
                        <img className="cthulu-mockup" onClick={() => handleShow("digest-mockup")} src={digestMockup} height="75%" width="100%" alt="" />
                    </Col>
                </Row>
                <Row className="cthulu-mockup-text-row">
                    <Col className="d-flex align-items-center justify-content-center">
                        <p className="w-75 ">As I begin closing off this project, I feel like I’ve already made my Lovecraftian 
                         cinematic universe. Digitizing my handmade art onto Photoshop without retracing anything
                         and it still came out beautifully and full-of-life--in a retro style that has never been
                         done before, for any Lovecraft works. My favourite in particular was the book design 
                         because it allowed me to harness some much needed ‘expertise’ on typography and utilizing 
                         InDesign.</p>
                    </Col>
                </Row>
                <Row >
                <Col className="d-flex justify-content-center ">
                    <Link to="/" className="more-projects">More Projects</Link>
                    <div className="link-line"></div>
                </Col>
            </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Cthulu;