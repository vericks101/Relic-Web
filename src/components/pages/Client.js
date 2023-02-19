import React from 'react';
import { Container, Jumbotron, Card, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: require('../../assets/Relic-client.png'),
    thumbnail: require('../../assets/Relic-client.png')
  },
]

const Styles = styled.div`
    .nav {
      background-color: #272727;
    }

    .nav-tabs .nav-item.nav-link.active {
      color: black !important;
    }

    @media screen and (min-width: 900px) {
        .OverviewJumbotron {
        background-color: #1d1d1d;
        margin: 0;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: .38fr .7fr 1fr;
      }

      .box1 {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      .box2 {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      .box3 {
        grid-column: 2/3;
        grid-row: 1/4;
      }
    }
    
    @media screen and (max-width: 900px) {
      .OverviewJumbotron {
        background-color: #1d1d1d;
        margin: 0;
        padding: 10px;
        display: grid;
        grid-template-rows: 1fr 2fr;
      }
    }

    .card {
      margin: 5px;
    }

    .btn {
      margin: 0;
    }

    .periodSeperator {
      color: white;
      margin-bottom: 10px;
    }

    .windowsLogo {
      margin-bottom: 4.3px;
    }
`;

// Page component to represent client page. Contains content regarding the platform desktop client.
export const Client = () => (
    <Styles>
        <Container>
              <Jumbotron fluid className="OverviewJumbotron">
                <Card className="box1">
                  <Card.Body>
                    <Card.Title>Relic Client</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <>
                        <OverlayTrigger
                          key={'windowslogo'}
                          placement={'top'}
                          overlay={
                            <Tooltip id={`tooltip-${'windowslogo'}`}>
                              Windows
                            </Tooltip>
                          }
                        >
                          <Image className="windowsLogo" src={require('../../assets/windowslogosmall.png')} />
                        </OverlayTrigger>{' '}
                        <span className="periodSeperator">.</span>
                        <span>{' '}Version 1.0.1{' '}</span>
                        <span className="periodSeperator">.</span>
                        <span>{' '}Released Sept. 4th 2021{' '}</span>
                      </>
                    </Card.Subtitle>
                    <>
                      <Button variant="outline-light" href="https://github.com/vericks101/Relic-Client/releases/download/v1.0.1/Relic-client-Setup-1.0.1.exe" target="_blank" rel="noopener noreferrer">Download Client</Button>{' '}
                    </>
                  </Card.Body>
                </Card>
                <Card className="box2">
                  <Card.Body>
                    <Card.Text>
                      The Relic Client is a desktop application that can be used
                      download and play games hosted through the Relic Platform.
                      The client supports all features of the platform website so
                      once downloaded, account creation and login can be accessed.
                      Alongside the above, auto update functionality for both the
                      client itself as well as games on the platform will be available.
                      If you'd like to try out the client, click the Download Client
                      button above.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="box3">
                  <Card.Body>
                    <ImageGallery 
                      items={images}
                      showNav={false}
                      autoPlay={false}
                      showPlayButton={false}
                      showBullets={false}
                      slideInterval={10000}
                    />
                  </Card.Body>
                </Card>
              </Jumbotron>
        </Container>
    </Styles>
)
