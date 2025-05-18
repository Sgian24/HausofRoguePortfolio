import NavBar from "../Components/NavBar";
import { Container, Row, Col, Table, Modal } from "react-bootstrap";
import Line from "..//Assets/Asset 8.png";

const Zine = () => {
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
                <img className="mb-4" src={Line} width="90%" height="20%" alt="" />
            </Col>
        </Row>
        <Row className="mb-3">
            <Col className="d-flex justify-content-center">
                <Table className="resthaven-table-container" size="sm" borderless>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Tools</th> 
                            <th>Year</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Illustration, Art Ditrection <br/> Editorial, Typography, Branding</td>
                            <td>Illustrator, InDesign, ChatGPT</td>
                            <td>2024</td>
                        </tr>
                    </tbody>
                </Table>   
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default Zine;