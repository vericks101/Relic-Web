import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from '../../node_modules/styled-components';

const Styles = styled.div`
    .container {
        padding-left: 0px;
        padding-right: 0px;
        max-width: 1500px;
    }
`;

export const Layout = (props) => (
    <Styles>
    <Container>
        { props.children }
    </Container>
    </Styles>
)