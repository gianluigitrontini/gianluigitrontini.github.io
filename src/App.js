import './App.css';
import 'react-tippy/dist/tippy.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Project from './pages/Project';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects/:id' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
