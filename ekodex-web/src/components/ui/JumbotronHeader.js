import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 10rem 2rem;
        background-color: #191919;
        color: #d1d1d1
    }
`;

const JumbotronHeader = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid>
                <h1>Hello, world!</h1>
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