import React, { useState } from 'react';
import '../css/Community.css';
import pfpex from '../images/pfpex.png';
import btcmedia from '../images/btcmedia.webp';

function Community() {
  const [activeTab, setActiveTab] = useState('For You');

  return (
      <section className="feed">
        <h2>Feed</h2>
        <div className="post-thoughts">
          <img src={pfpex} alt="Profile" className="profile-picture" />
          <textarea placeholder="Post your thoughts here..."></textarea>
        </div>
        <button className="post-button">Post</button>
        <div className="tabs">
          <span
            className={`tab ${activeTab === 'For You' ? 'active' : ''}`}
            onClick={() => setActiveTab('For You')}
          >
            For You
          </span>
          <span
            className={`tab ${activeTab === 'Following' ? 'active' : ''}`}
            onClick={() => setActiveTab('Following')}
          >
            Following
          </span>
          <span
            className={`tab ${activeTab === 'Media' ? 'active' : ''}`}
            onClick={() => setActiveTab('Media')}
          >
            Media
          </span>
        </div>
        <div className="posts">
          {activeTab === 'For You' && (
            <div className="post">
              <div className="post-header">
                <img src={pfpex} alt="Profile" className="profile-picture" />
                <div className="post-info">
                  <p className="username">John Doe</p>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
              <p>Bitcoin is going up even more!</p>
            </div>
          )}
          {activeTab === 'Following' && (
            <div className="post">
              <div className="post-header">
                <img src={pfpex} alt="Profile" className="profile-picture" />
                <div className="post-info">
                  <p className="username">Jane Smith</p>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
              <p>Ethereum is making waves in the market!</p>
            </div>
          )}
          {activeTab === 'Media' && (
            <div className="post">
              <div className="post-header">
                <img src={pfpex} alt="Profile" className="profile-picture" />
                <div className="post-info">
                  <p className="username">Crypto Guru</p>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
              <p>Check out BTC!</p>
              <img src={btcmedia} alt="BTC Media" className="post-media" />
            </div>
          )}
        </div>
      </section>
  );
}

export default Community;
