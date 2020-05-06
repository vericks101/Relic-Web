import React from 'react';
import UnboundJumbotronHeader from '../ui/UnboundJumbotronHeader'
import { Container, Tab, Tabs, Jumbotron, Card, Button } from 'react-bootstrap';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .nav {
      background-color: #272727;
    }

    .nav-tabs .nav-item.nav-link.active {
      color: black !important;
    }

    .jumbotron {
      background-color: #1d1d1d;
      margin: 0;
    }

    .card {
      margin: 15px auto;
    }

    .btn {
      margin: 0;
    }
`;

export const Unbound = () => (
    <Styles>
        <UnboundJumbotronHeader/>
        <Container>
            <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
            <Tab eventKey="overview" title="Overview">
              <Jumbotron fluid>
                <Card style={{ width: '50rem' }}>
                  <Card.Body>
                    <Card.Title>Unbound</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Button variant="outline-light">Download Now</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '50rem' }}>
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
                  </Card.Body>
                </Card>
              </Jumbotron>
            </Tab>
            <Tab eventKey="something" title="Something">
              <Jumbotron fluid>

              </Jumbotron>
            </Tab>
            <Tab eventKey="something else" title="Something Else">
              <Jumbotron fluid>

              </Jumbotron>
            </Tab>
          </Tabs>
        </Container>
    </Styles>
)
