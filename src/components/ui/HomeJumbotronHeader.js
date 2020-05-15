import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import bgimage from '../../assets/test2.png'

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 10rem 2rem;
        background-color: #191919;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }
`;

const HomeJumbotronHeader = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                <h1>Download the Client!</h1>
                <p>
                    A single Platform for all <b>EKODEX</b> Games. Effortlessly install, stay updated automatically, and play 
                    without needing to open the browser.
                <p></p>
                    <Button variant="outline-light" href="/client">Download Now</Button>
                </p>
                </Jumbotron>
            </div>
        </Styles>
    );
}

export default HomeJumbotronHeader;