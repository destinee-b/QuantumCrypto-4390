import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import graph from './images/graph.png';
import why from './images/why.png';
import TaxGuide from './pages/TaxGuide';
import Graph from './pages/Graph';
import Community from './pages/Community'; // New import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <img src={graph} alt="Graph" style={{ height: 'auto', maxHeight: '300px', width: 'auto' }} />
                <img src={why} alt="Why" style={{ maxWidth: '45%', height: 'auto' }} />
              </>
            } />
            <Route path="/tax-guide" element={<TaxGuide />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/community" element={<Community />} /> {/* New route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
