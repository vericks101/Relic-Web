import React from 'react';
import UnboundJumbotronHeader from '../ui/UnboundJumbotronHeader'
import { Container, Tab, Tabs, Jumbotron, Card, Button, Badge, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: require('../../assets/unbound1.png'),
    thumbnail: require('../../assets/unbound1.png'),
    description: 'Explore various planets throughout the solar system and visit the social station space to interact with your fellow comrades.',
  },
  {
    original: require('../../assets/unbound2.png'),
    thumbnail: require('../../assets/unbound2.png'),
    description: 'Within the social station space, interact with NPC\'s and see what they have to offer. Also, see item details to manage what they are offering to what you have.',
  },
  {
    original: require('../../assets/unbound3.png'),
    thumbnail: require('../../assets/unbound3.png'),
    description: 'Explore and manage your characters armor, weapons, and stats in order to customize and maximize out your gameplay experience.',
  },
  {
    original: require('../../assets/unbound4.png'),
    thumbnail: require('../../assets/unbound4.png'),
    description: 'Explore various planets and see what you can find. Different planets have different enemies, environments, and riches to obtain.',
  },
  {
    original: require('../../assets/unbound5.png'),
    thumbnail: require('../../assets/unbound5.png'),
    description: 'Within the crafting bench, explore and discover the many different recipes that can lead to riches and loot you didn\'t know existed. Also, use the crafting menu to manage already known recipes to better manage them.',
  },
  {
    original: require('../../assets/unbound6.png'),
    thumbnail: require('../../assets/unbound6.png'),
    description: 'Through the quest management menu, see and manage your current quests. Alongside this, see the details of the quests you currently have to better understand current progress, goals, and rewards.',
  },
  {
    original: require('../../assets/unbound7.png'),
    thumbnail: require('../../assets/unbound7.png'),
    description: 'Through your character skill trees, you will be explore, manage, and progress your characters skills, abilities, and stats to become more powerful.',
  },
  {
    original: require('../../assets/unbound8.png'),
    thumbnail: require('../../assets/unbound8.png'),
    description: 'As you delve deeper into the various planets and environments at your disposal, you\'ll find new structures filled with riches and loot to discover.',
  },
  {
    original: require('../../assets/unbound9.png'),
    thumbnail: require('../../assets/unbound9.png'),
    description: 'When creating a new character, fully explore various customizable options for your character best suited to your style and taste.',
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
                      <Button variant="outline-light">Download via Client</Button>{' '}
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
            {/* <Tab eventKey="something" title="Something">
              <Jumbotron fluid>

              </Jumbotron>
            </Tab>
            <Tab eventKey="something else" title="Something Else">
              <Jumbotron fluid>

              </Jumbotron>
            </Tab> */}
          </Tabs>
        </Container>
    </Styles>
)
