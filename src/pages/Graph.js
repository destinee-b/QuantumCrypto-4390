import React from 'react';
import btc24h from '../images/btc24h.png';
import '../css/Graph.css';

function Graph() {
  return (
    <div className="graph-container">
      <div className="graph-header">
        <h1 className="graph-title">Bitcoin </h1>
        <span className="graph-price">$97,169.00</span>
      </div>
      <div className="graph-buttons">
        <button>24 hours</button>
        <button>1 week</button>
        <button>1 month</button>
      </div>
      <img src={btc24h} alt="Bitcoin 24h Graph" className="graph-image" />
    </div>
  );
}

export default Graph;
