import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container my-5 p-3 p-md-5">
            <img src="profilepic.jpg" alt="Your Name" className="profile-image" />
            <div className="profile-text">
                <h2>Vishnu Prasad S</h2>
                <p>
                    A motivated and enthusiastic fresher with a strong foundation in software development, particularly in Java, JavaScript, and the MERN stack. Passionate about solving problems and learning new technologies. Proficient in building web applications and developing efficient code. Seeking a challenging role as a software developer to contribute to innovative projects and grow professionally.
                </p>
            </div>
        </div>
    );
};

export default Home;
