import React from '../../../node_modules/react';
import Jumbotron from '../../../node_modules/react-bootstrap/Jumbotron';
import Button from '../../../node_modules/react-bootstrap/Button';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
    }
`;

const JumbotronFooter = () => {
    return(
        <Styles>
            <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
            </div>
        </Styles>
    );
}

export default JumbotronFooter;