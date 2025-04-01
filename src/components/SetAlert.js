import React from 'react';
import '../css/SetAlert.css';

function SetAlert({ onClose }) {
    return (
        <div className="overlay">
            <div className="content">
                <h2>Set an Alert:</h2>
                <div className="alert-opts">
                    <label>
                        <input type="number" placeholder="Enter price" />
                    </label>
                    <label>
                        Price Goes Below:
                        <input type="number" placeholder="Enter price" />
                    </label>
                </div>
                <div className="alert-btn">
                    <button className="close-btn" onClick={() => document.querySelector('.overlay').style.display = 'none'}>Close</button>
                </div>
            </div>

        </div>
    );
}

export default SetAlert;