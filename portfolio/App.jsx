import {BroswerRouter as Router, Routes, Route} from 'react-router-dom';
import Nabar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Nabar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/Projects" element={<Contact />} />
                <Route path="/Contact" element={<Contact />} />
                
            </Routes>
        </Router>
    );
}