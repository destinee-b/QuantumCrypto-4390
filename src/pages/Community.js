import React, { useState } from 'react';
import '../css/Community.css';
import pfpex from '../images/pfpex.png';
import btcmedia from '../images/btcmedia.webp';

function Community() {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <div className="community-container">
      <aside className="sidebar">
        <h2>Community</h2>
        <ul>
          <li>Feed</li>
          <li>Topics</li>
          <li>Lives</li>
          <li>Articles</li>
          <li>Notifications</li>
          <li>My Page</li>
          <li>More</li>
        </ul>
      </aside>
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
      <aside className="right-panel">
        <div className="live-streams">
          <h3>Live Streams</h3>
          <ul>
            <li>Weekly Crypto Forecast</li>
          </ul>
        </div>
        <div className="trends">
          <h3>Trends</h3>
          <ul>
            <li>#Airdrop</li>
            <li>#CZ</li>
            <li>#Macro Insights</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Community;
