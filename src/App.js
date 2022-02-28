import "react-tippy/dist/tippy.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
