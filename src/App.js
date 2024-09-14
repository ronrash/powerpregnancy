import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PregnancyTips from './pages/PregnancyTips';
import Diet from './pages/Diet';
import MedicalConditions from './pages/MedicalConditions';
import Journal from './pages/Journal';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="layout">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pregnancy-tips" element={<PregnancyTips />} />
                        <Route path="/diet" element={<Diet />} />
                        <Route path="/medical-conditions" element={<MedicalConditions />} />
                        <Route path="/journal" element={<Journal />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <p>© 2024 Your Website. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}
export default App;
