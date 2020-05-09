import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components';
import bgimage from '../../assets/grey.jpg'

const Styles = styled.div`
    .headerJumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 10rem 2rem;
        background-color: #272727;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }

    .bodyJumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 10rem 2rem;
        background-color: #272727;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }
`;

export const Client = () => (
    <div>
        <Styles>
            <div>
                <Jumbotron fluid className="headerJumbotron" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                    <h1><b>EKODEX</b> Client</h1>
                    <p>
                        A single Platform for all <b>EKODEX</b> Games. Effortlessly install, stay updated automatically, synchronize 
                        <p>progress, and play without needing to open the browser.</p>
                        <p></p>
                        <Button variant="outline-light" href="/client">Download for Windows</Button>
                    </p>
                </Jumbotron>
                <Jumbotron fluid className="bodyJumbotron">
                </Jumbotron>
            </div>
        </Styles>
    </div>
)
