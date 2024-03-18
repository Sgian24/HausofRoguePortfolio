import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SilentHill from "./Pages/SilentHill";
import ALF from "./Pages/ALF";
import Cthulu from "./Pages/Cthulu";
import Resthaven from "./Pages/Resthaven";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/silenthill" element={<SilentHill />} />
      <Route path="/animalliberationfront" element={<ALF />} />
      <Route path="/callofcthulu" element={<Cthulu />} />
      <Route path="resthaven" element={<Resthaven />}/> 
    </Routes>
    </>
  );
}

export default App;
