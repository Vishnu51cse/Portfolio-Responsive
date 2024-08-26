import React from 'react';
import './About.css'; // Import your custom CSS if needed
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about-container my-5">
            <h2 className="text-center">About Me</h2>
            <Row>
                <Col xs={12}>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <strong>Bachelor in Engineering (B.E.) in Computer Science And Engineering</strong> (2021 - 2025)
                            <br />
                            Kongu Engineering College, Perundurai. CGPA: 7.35
                        </li>
                        <li>
                            <strong>Higher Secondary Education</strong> (2021)
                            <br />
                            KVS English Medium School, Virudhunagar. Percentage: 92.2
                        </li>
                        <li>
                            <strong>Secondary Education</strong> (2019)
                            <br />
                            KVS English Medium School, Virudhunagar. Percentage: 86.6
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <h3>Skills and Interests</h3>
                    <ul>
                        <li>Soft Skills: Adaptability, Time Management, Team Work</li>
                        <li>Technical Skills: Python, SQL, Java,Html,Css,JavaScript,React Js,Node Js,Express Js,Mongo Db</li>
                        <li>Frameworks: React Js,Boostrap</li>
                        <li>Tools: Postman API,Git,GitHub,MySQL Workbench</li>
                        <li>Areas of Interest: Data Structures, Web Development</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
