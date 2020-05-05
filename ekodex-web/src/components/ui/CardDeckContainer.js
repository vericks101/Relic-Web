import React from '../../../node_modules/react';
import Card from '../../../node_modules/react-bootstrap/Card';
import Button from '../../../node_modules/react-bootstrap/Button';
import CardDeck from '../../../node_modules/react-bootstrap/CardDeck';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .CardContainer {
        padding: 10px;
    }
`;

const CardDeckContainer = () => {
    return(
        <Styles>
            <div className = 'CardContainer'>
                <CardDeck>
                    <Card className="text-center">
                    <Card.Img variant="top" src={require('../../assets/test.jpg')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                        <Button variant="outline-light">Learn more</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                    <Card className="text-center">
                    <Card.Img variant="top" src={require('../../assets/test.jpg')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                        <Button variant="outline-light">Learn more</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                    <Card className="text-center">
                    <Card.Img variant="top" src={require('../../assets/test.jpg')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                        <Button variant="outline-light">Learn more</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                    <Card className="text-center">
                    <Card.Img variant="top" src={require('../../assets/test.jpg')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                        </Card.Text>
                        <Button variant="outline-light">Learn more</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </Styles>
    );
}

export default CardDeckContainer;