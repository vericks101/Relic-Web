import React from '../../../node_modules/react';
import Jumbotron from '../../../node_modules/react-bootstrap/Jumbotron';
import Button from '../../../node_modules/react-bootstrap/Button';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 5rem 2rem;
        background-color: #191919;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }
`;

const JumbotronFooter = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid>
                <h1>This is a Footer!</h1>
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

export default JumbotronFooter;