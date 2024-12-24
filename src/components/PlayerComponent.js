import React from 'react';
import myVideo from '../assets/myVideo.mp4';
import '../components/PlayerComponent.css';

const CombinedComponent = () => {
    return (
        <div className="video-background-container">
            <video className="video-background" autoPlay loop muted controls>
                <source src={myVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h4>HELLO STUDENTS</h4>
                <h1>WELCOME TO EDUCATION</h1>
                <p>
                Education is the cornerstone of progress and innovation. 
                
                </p>
                <button className='but-prmy' type="submit">JOIN US NOW!</button>
            </div>
        </div>
    );
};

export default CombinedComponent;
