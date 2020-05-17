import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    .headerJumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding: 10rem 2rem;
        background-color: #1d1d1d;
        color: white;
        font-family: "VCR_OSD_MONO_1.001";
        padding-top: 250px !important;
        padding-bottom: 250px !important;
    }

    .underDevelopmentSection {
        padding-top: 25px;
    }
`;

export const Client = () => (
    <div>
        <Styles>
            <div>
                <Jumbotron fluid className="headerJumbotron">
                    <h1><b>EKODEX</b> Client</h1>
                    <p>
                        A single Platform for all <b>EKODEX</b> Games. Effortlessly install, stay updated automatically, synchronize 
                        <p>progress, and play without needing to open the browser.</p>
                        <p></p>
                        <div className="underDevelopmentSection">
                        <h5><b>CLIENT IS UNDER DEVELOPMENT</b></h5>
                        </div>
                    </p>
                </Jumbotron>
            </div>
        </Styles>
    </div>
)
