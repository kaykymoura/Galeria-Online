import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Galeria from '../pages/galeria/Galeria';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<Galeria />} />
            
            </Routes>
        </Router>
    );
};

export default Rotas;
