import { useState, useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Line from "..//Assets/Asset 8.png";
import resthaven from "..//Assets/resthaven.jpg";
import bwResthaven from "..//Assets/IMG_3121.jpg";
import resthavenOne from "..//Assets/resthaven2.webp";
import brayden from "..//Assets/IMG_3015.jpg";
import {Link, ScrollRestoration} from "react-router-dom";
import Footer from "..//Components/Footer";
import testing from "..//Assets/Paperback-Book-Mockup-Vol6.jpg";

const Resthaven = () => {

    const [position, setPosition] = useState(10)
    const imgRef = useRef(null);

    useEffect(() => {
        const oldScrollY = window.scrollY;
        const handleScroll = () => {
            if (oldScrollY < window.scrollY && position <= 140) {
              setPosition(() => position + 2 )
            } else if (oldScrollY > window.scrollY && position >= 10 ){
              setPosition(() => position - 2 )
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
    },[imgRef, position])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior:'instant'
        });
    },[])

    return (
        <>
        <NavBar />
        <Container className="resthaven-body-container mt-4" fluid>
            <Row>
                <Col>
                    <h1 className="text-center header-title">Resthaven</h1>
                    <p className="mb-5"> Since its no surprise that I'm a musician and live a (responsible) 
                    rock 'n' roll life, for those who may not know, I play bass and backup vocals for a metal 
                    band called Resthaven. We describe ourselves as "thrashgaze" (thrash metal and shoegaze 
                    hybrid). This summer, it was an honour to have been called to produce and master an entire 
                    album--something I haven't done even for myself yet. I'm so excited to have you delve into 
                    the music side to Haus of&nbsp;Rogue.</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">   
                    <img className="mb-4 border" src={Line} width="90%" height="20%" alt="" />
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
                            <td>Music Production: Audio Mixing & Mastering</td>
                            <td>Resthaven (Braydan Parsons O'Reilly)</td>
                            <td>2023</td>
                        </tr>
                    </tbody>
                </Table>   
                </Col>
            </Row>
        </Container>
        <Container className="resthaven-bg-container" fluid>
            <Row className="h-100 bg-danger">
                <Col className="h-100 resthaven-bg-row" style={{backgroundImage:`url(${resthaven})`}}>
                </Col>
            </Row>
        </Container>
        <Container className="resthaven-history-container mt-5 mb-5" >
            <Row className="mb-5">
                <Col className="d-flex justify-content-center align-items-center" lg={4}>
                    <div>
                        <h2 className="sub-heading">Our History</h2>
                        <p>I had actually been producing for Resthaven back in late 2019--at that time, I had 
                            just begun learning audio production and would make little polished demos for my 
                            friends. Braydan, the client, and I have been best friends since high school, and 
                            to this day, are still rockstar besties breaking into the music scene. Anyways, 
                            2019. At the time Resthaven was a solo-project of Braydan's and I was mixing his 
                            demos for him. As time went by, my audio skills got better and better. Braydan's 
                            songwriting got better and better. We were in sync. After Prologue's release in 2022, 
                            Resthaven's momentum to release an album had began...though it technically had been 
                            brewing for 4&nbsp;years.</p>
                    </div>
                </Col>
                <Col className="bw-resthaven-col d-flex justify-content-center align-items-center align-items-lg-start align-items-xl-center" lg={8}>
                    <img src={bwResthaven} width="100%" alt="Resthaven performing at a gig." />
                </Col>
            </Row>
            <Row className="album-preview-row mb-5">
                <Col className="h-100 d-flex flex-column align-items-center ">
                    <div className="bandcamp-div w-50">
                        <h2 className="text-end sub-heading mb-4">Album Preview</h2>
                        <iframe className="iframe w-100" src="https://bandcamp.com/EmbeddedPlayer/album=1129382717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless>
                            <a href="https://resthaven.bandcamp.com/album/resthaven">Resthaven by Resthaven</a>
                        </iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                 <h2 className="sub-heading">The Process</h2>
                 <p>Braydan recorded his own instruments in his own studio setup, which made things a lot easier 
                    for me, however he would be recording vocals at my home studio--literally Haus of Rogue. 
                    The process took 2 days. After we finished, we celebrated with pizza and watched Puss In&nbsp;Boots.</p>
                <p>Shortly afterwards, I recorded my backup vocals and finished mixing and mastering the album 
                    around early to&nbsp;mid-May. </p>
                </Col>
            </Row>
            <Row >
                <Col>
                    <iframe width="100%" height="400vh" src="https://www.youtube.com/embed/8GRPV1GlyaI?si=E7FiwbFrTo4yI0MD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                    </Col>
            </Row>
        </Container>
        <Container ref={imgRef} fluid>
            <Row className="split-row-container">
                <Col lg={6} className="split-row-col overflow-hidden" role="img" aria-label="Resthaven posing." style={{backgroundImage:`url(${resthavenOne})`}}>
                </Col>
                <Col lg={6}  className="split-row-col-full overflow-hidden" role="img" aria-label="Resthaven posing." style={{backgroundImage:`url(${resthavenOne})`, backgroundPosition:`130% ${position}%`}}>
                </Col>
            </Row>
        </Container>
        <Container className="parallax-container d-flex flex-column justify-content-center" style={{backgroundImage:`url(${brayden})`}} fluid>
            <Row className="mb-5">
                <Col className="d-flex justify-content-center  align-items-center text-center">
                    <div className="">
                        <h2 className="sub-heading-resthaven mb-4">Since the album's release, <br />Resthaven has become a full-unit.</h2>
                        <p className="paragraph-resthaven ">We've gone from a one-man band to a four-membered friend group who loves to take the 
                        Toronto local scene by storm, with many more production projects coming&nbsp;up.</p>
                        </div>
                </Col>
            </Row>
            <Container>
            <Row className="">
                <Col className="d-flex justify-content-center position-relative"> 
                    <Link to="/" className="text-white more-projects bg-black" >More Projects</Link>
                    <div className="bg-white link-line resthaven-link-line" ></div>
                </Col>
            </Row>
            </Container>
        </Container>
        <Footer />
        </>
    )
}

export default Resthaven;