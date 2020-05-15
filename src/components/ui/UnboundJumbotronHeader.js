import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 0px;
        background-color: #191919;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }

    .jumbotron .img-fluid {
        min-width: 100%;
    }
`;

const UnboundJumbotronHeader = () => {
    return(
        <Styles>
            <div>
            <Jumbotron fluid>
            <Image src={require('../../assets/unbound-banner.jpg')} fluid />
            </Jumbotron>
            </div>
        </Styles>
    );
}

export default UnboundJumbotronHeader;