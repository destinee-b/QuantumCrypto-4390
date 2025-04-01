import React from 'react';
import '../css/TopNews.css';
import articleOneImage from '../images/articleOne.jpeg'; 
import articleTwoImage from '../images/articleTwo.jpeg'; 
import articleThreeImage from '../images/articleThree.jpeg'; 
import articleFourImage from '../images/articleFour.jpeg'; 
import articleFiveImage from '../images/articleFive.jpeg'; 
import articleSixImage from '../images/articleSix.jpeg'; 

function TopNews() {
    return (
        <section className="top-news">
            <div className = "top-row">
                <h2>Top Articles</h2>
                <button className="like-btn">Liked Articles</button>
            </div>
            {/* First row of article cards */}
            <div className="row">
                <div className="article-card">
                    <h3 className="article-title">Article One</h3>
                    <img src={articleOneImage} alt="Article One Image" />
                    <div className="bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
                <div className="article-card">
                    <h3 className="article-title">Article Two</h3>
                    <img src={articleTwoImage} alt="Article Two Image" />
                    <div className= "bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
                <div className="article-card">
                    <h3 className="article-title">Article Three</h3>
                    <img src={articleThreeImage} alt="Article Three Image" />
                    <div className= "bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
            </div>
            {/* Second row of article cards */}
            <div className="row">
                <div className="article-card">
                    <h3 className="article-title">Article Four</h3>
                    <img src={articleFourImage} alt="Article Four Image" />
                    <div className= "bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
                <div className="article-card">
                    <h3 className="article-title">Article Five</h3>
                    <img src={articleFiveImage} alt="Article Five Image" />
                    <div className= "bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
                <div className="article-card">
                    <h3 className="article-title">Article Six</h3>
                    <img src={articleSixImage} alt="Article Six Image" />
                    <div className= "bottom-row">
                        <button>Visit Article</button>
                        <span className="like-article">
                            ♡
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopNews;