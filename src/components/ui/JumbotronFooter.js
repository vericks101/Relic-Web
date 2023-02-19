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
        background-color: #111111;
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
        margin-left: 5px;
    }

    .logos {
        float: left;
    }
`;

// Page footer to be utilized in all pages through the website.
const JumbotronFooter = () => {
    return(
        <Styles>
            <div>
                <Jumbotron fluid>
                    <Container>
                        <hr className="footerDivider"/>
                        <div className="logos">
                            <a href="https://twitter.com/RelicOfficial" target="_blank" rel="noopener noreferrer">
                                <img
                                    alt=""
                                    src={require("../../assets/twitterlogo.png")}
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