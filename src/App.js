import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SilentHill from "./Pages/SilentHill";
import ALF from "./Pages/ALF";
import Cthulu from "./Pages/Cthulu";
import Resthaven from "./Pages/Resthaven";
import About from "./Pages/About";
import Arb from "./Pages/Arb";

const App = () => {

  return (
    <>
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/about" element={<About />}/>
       <Route path="/silenthill" element={<SilentHill />} />
       <Route path="/animalliberationfront" element={<ALF />}/>
       <Route path="/callofcthulu" element={<Cthulu />}/>
       <Route path="/Resthaven" element={<Resthaven />}/>
       <Route path="/humberarboretum" element={<Arb />}/>
      </Routes>
    </>
  )
}

export default App;
