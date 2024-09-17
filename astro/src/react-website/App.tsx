import { Route, Routes } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
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
