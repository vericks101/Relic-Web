import React from '../../../node_modules/react';
import Jumbotron from '../../../node_modules/react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .jumbotron {
        text-align: center;
        margin-bottom: 0px;
        padding-bottom: 150px;
        padding-top: 20px;
        background-color: #191919;
        color: white;
        font-family: "VCR_OSD_MONO_1.001"
    }

    .bottomNavLogo {
        float: left;
    }

    .footerDivider {
    border-top: 1px solid white;
    }

    .socialMediaLogo {
        margin-top: 22px;
        margin-left: 5px;
    }

    .logos {
        float: left;
    }
`;

const JumbotronFooter = () => {
    return(
        <Styles>
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h2>
                            <img
                                alt=""
                                src={require("../../assets/ekodexlogo.png")}
                                width="60"
                                height="60"
                                className="navLogo"
                            />
                            EKODEX
                        </h2>
                        
                        <hr className="footerDivider"/>
                        <div className="logos">
                        <a href="/">
                            <img
                                alt=""
                                src={require("../../assets/ekodexlogo.png")}
                                width="150"
                                height="150"
                                className="bottomNavLogo"
                            />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img
                                alt=""
                                src={require("../../assets/twitterlogo.png")}
                                width="30"
                                height="30"
                                className="socialMediaLogo"
                            />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img
                                alt=""
                                src={require("../../assets/facebooklogo.png")}
                                width="30"
                                height="30"
                                className="socialMediaLogo"
                            />
                        </a>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        </Styles>
    );
}

export default JumbotronFooter;