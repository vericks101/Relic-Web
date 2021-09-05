import React from 'react';
import UnboundJumbotronHeader from '../ui/UnboundJumbotronHeader'
import { Container, Tab, Tabs, Jumbotron, Card, Button, Badge, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: require('../../assets/unbound1.png'),
    thumbnail: require('../../assets/unbound1.png')
  },
  {
    original: require('../../assets/unbound2.png'),
    thumbnail: require('../../assets/unbound2.png')
  },
  {
    original: require('../../assets/unbound3.png'),
    thumbnail: require('../../assets/unbound3.png')
  },
  {
    original: require('../../assets/unbound4.png'),
    thumbnail: require('../../assets/unbound4.png')
  },
  {
    original: require('../../assets/unbound5.png'),
    thumbnail: require('../../assets/unbound5.png')
  },
  {
    original: require('../../assets/unbound6.png'),
    thumbnail: require('../../assets/unbound6.png')
  },
  {
    original: require('../../assets/unbound7.png'),
    thumbnail: require('../../assets/unbound7.png')
  },
  {
    original: require('../../assets/unbound8.png'),
    thumbnail: require('../../assets/unbound8.png')
  },
  {
    original: require('../../assets/unbound9.png'),
    thumbnail: require('../../assets/unbound9.png')
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

const AchievementsStyles = styled.div`
  @media screen and (min-width: 900px) {
    .jumbotron {
      text-align: center;
      margin-bottom: 0px;
      padding: 300px;
      background-color: #1b1b1b;
      color: white;
      font-family: "VCR_OSD_MONO_1.001"
    }
  }

  @media screen and (max-width: 900px) {
    .jumbotron {
      text-align: center;
      margin-bottom: 0px;
      /* padding: 300px; */
      background-color: #1b1b1b;
      color: white;
      font-family: "VCR_OSD_MONO_1.001"
    }
  }
`;

// Page component to represent Unbound game page. Contains content regarding the Unbound title.
export const Unbound = () => (
    <Styles>
        <UnboundJumbotronHeader/>
        <Container>
            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
            <Tab eventKey="overview" title="Overview">
              <Jumbotron fluid className="OverviewJumbotron">
                <Card className="box1">
                  <Card.Body>
                    <Card.Title>Unbound</Card.Title>
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
                        <span>{' '}Version 1.0.0{' '}</span>
                        <span className="periodSeperator">.</span>
                        <span>{' '}Released Dec. 26th 2017{' '}</span>
                      </>
                    </Card.Subtitle>
                    <>
                      <Button variant="outline-light" href="/client">Download via Client</Button>{' '}
                    </>
                  </Card.Body>
                </Card>
                <Card className="box2">
                  <Card.Body>
                    <Card.Text>
                      The very solar system is at your fingertips as you fight for
                      the survival of the human race, for fortune, and for glory.
                      Delve deep into the unique planets throughout the solar
                      system and fight various races of aliens and other menacing
                      foes. Blending the elements of classic action RPG games with
                      the freedom of randomly generated sandbox-style creativity,
                      Unbound is a unique gaming experience where both the journey
                      and the destination are as unique as the player experience.
                    </Card.Text>
                    <div>
                      <Badge variant="dark">2D</Badge>{' '}
                      <Badge variant="dark">RPG</Badge>{' '}
                      <Badge variant="dark">Sandbox</Badge>{' '}
                      <Badge variant="dark">Single Player</Badge>{' '}
                    </div>
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
            </Tab>
            <Tab eventKey="achievements" title="Achievements">
              <AchievementsStyles>
                <div>
                  <Jumbotron fluid>
                      <h1>Achievements Not Supported</h1>
                      <p>This game does not currently support achievements...</p>
                  </Jumbotron>
                </div>
              </AchievementsStyles>
            </Tab>
          </Tabs>
        </Container>
    </Styles>
)
