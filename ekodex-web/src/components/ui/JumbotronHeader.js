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

const JumbotronHeader = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                <h1>Download the Client!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="outline-light">Learn more</Button>
                </p>
                </Jumbotron>
            </div>
        </Styles>
    );
}

export default JumbotronHeader;