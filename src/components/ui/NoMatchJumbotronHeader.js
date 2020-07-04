import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 300px;
        background-color: #1b1b1b;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }
`;

// Jumbotron UI component for NoMatch page component.
const NoMatchJumbotronHeader = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid>
                <h1>Page Not Found</h1>
                <p>You thought you found a secret but upon further investigation, found that it was just an empty page...</p>
            </Jumbotron>
            </div>
        </Styles>
    );
}

export default NoMatchJumbotronHeader;