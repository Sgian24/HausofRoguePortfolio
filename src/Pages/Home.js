import NavBar from "..//Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lip from "..//Assets/red-lip.webp";
import SilentHill from "..//Assets/silenthill.webp";
import cd from "..//Assets/cd-services.webp";
import ALF from "..//Assets/ALF-stationary.webp";

const Home = () => {
    return (
        <div className="">
        <style>
        {`
      
        .glitch,
        .glitch-img {
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
        }
        
        .glitch {
          height: calc(100vh - 200px);
          margin: 0 auto;
          overflow: hidden;
          position: relative;
          width: 60vw;
        }
        
        .glitch-img {
          background-blend-mode: none;
          background-color: transparent;
          height: calc(100% + 5px * 2);
          left: 0;
          pointer-events: none;
          position: absolute;
          top: 0;
          transform: translate3d(0, 0, 0);
          width: calc(100% + 10px * 2);
          
          .glitch:hover &:nth-child(n+2) {
            animation-duration: 2s;
            animation-delay: 0;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-fill-mode: forwards;
          }
          
          .glitch:hover &:nth-child(2) {
            animation-name: glitch-anim-1;
          }
          
          .glitch:hover &:nth-child(3) {
            animation-name: glitch-anim-2;
          }
          
          .glitch:hover &:nth-child(4) {
            animation-name: glitch-anim-3;
          }
          
          .glitch:hover &:nth-child(5) {
            animation-name: glitch-anim-4;
            background-blend-mode: overlay;
            background-color: #af4949;
          }
        }
        
        .c-glitch__img:nth-child(n+2) {
          opacity: 0;
        }
        
        @keyframes glitch-anim-1 {
          0%, 100% { 
            opacity: 1;
            transform: translate3d(40px, 0, 0) scale3d(-1, -1, 1);
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
          }
          
          30% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
          }
          
          40% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
          }
          
          50% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
          }
          
          55% {
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
          }
          
          60% {
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
          }
        
          65% {
        
            clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
          }
        
          70% {
        
            clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
          }
        
          80% {
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
          }
        
          85% {
            clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
          }
        
          95% {
            clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
          }
        }
        
        @keyframes glitch-anim-2 {
          0%, 100% { 
            opacity: 1;
            transform: translate3d(-10px, 0, 0);
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
          }
          
          10% {
            clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
          }
          
          15% {
            clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
          }
          
          17% {
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
          }
          
          19% {
            clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
          }
          
          33% {
            clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
          }
          
          35% {
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
          }
          
          40% {
            clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
          }
          
          45% {
            clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
          }
          
          49% {
            clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
          }
          
          50% {
            clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
          }
          
          55% {
            clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
          }
          
          60% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
          }
          
          70% {
            clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
          }
          
          80% {
            clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
          }
          
          90% {
            clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
          }
        }
        
        @keyframes glitch-anim-3 {
          0%, 100% {
            opacity: 1;
            transform: translate3d(0, -5px, 0) scale3d(-1, -1, 1);
            clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
          }
          
          5% {
            clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
          }
          
          11% {
            clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
          }
          
          20% {
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
          }
          
          25% {
            clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
          }
          
          35% {
            clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
          }
          
          42% {
            clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
          }
          
          48% {
            clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
          }
          
          50% {
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
          }
          
          56% {
            clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
          }
          
          61% {
            clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
          }
          
          68% {
            clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
          }
          
          72% {
            clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
          }
          
          77% {
            clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
          }
          
          81% {
            clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
          }
          
          86% {
            clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
          }
          
          90% {
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
          }
          
          92% {
            clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
          }
          
          94% {
            clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
          }
        }
        
        @keyframes glitch-anim-4 {
          0%, 5% { 
            opacity: 0.2; 
            transform: translate3d(10px, 5px, 0);
          }
        
          5.5%, 100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
        }
        `}


        </style>
        <NavBar />
        <Container style={{marginTop:"10vh"}}>
            <Row className="mb-5">
              <Col>
               <h1 className="fw-light" style={{fontSize:"4rem", marginBottom:"5vh"}}>Hey I'm <strong>Billie</strong>, designer with an <strong>attitude</strong> <img src={lip} width="70" alt="" /></h1>
               <p>Fuelled by vision and verve, I'm here to serve. I'm known for channeling my love for raw 
                aesthetics and unconventional beauty into every project. I tend to infuse the soul of '90s 
                alternative culture and urban decay into visuals, creating designs that capture the essence of 
                rebellion, authenticity, and nostalgia.</p>
              </Col>
              <Col style={{marginLeft:"6vw"}}><img src={cd} width="500rem" alt="" /></Col>
            </Row>
            <Row className="gap-4" style={{height:"70vh"}} >
              <Col className="h-100 rounded glitch" style={{width:"48%", backgroundImage:`url(${SilentHill})`, backgroundSize:"cover", backgroundPosition:"center"}} sm={6} md={6} lg={6}>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              <div className="h-100 glitch-img" style={{backgroundImage:`url(${SilentHill})`}}></div>
              </Col>
              <Col className="h-100 rounded" style={{width:"48%", backgroundImage:`url(${ALF})`,backgroundSize:"cover", backgroundPosition:"center"}} sm={6} md={6} lg={6}></Col>
            </Row>
            <Row>
              s
            </Row>
        </Container>
        </div>
    )
}

export default Home;