import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from '../../node_modules/styled-components';

const Styles = styled.div`
    .container {
        max-width: 100%;
        background-color: #252525;
    }
`;

export const Layout = (props) => (
    <Styles>
        <Container>
        { props.children }
        </Container>
    </Styles>
)