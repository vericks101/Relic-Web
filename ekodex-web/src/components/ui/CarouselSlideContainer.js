import React from '../../../node_modules/react';
import Carousel from '../../../node_modules/react-bootstrap/Carousel'
import Button from '../../../node_modules/react-bootstrap/Button' 
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .carousel {
        padding-top: 5px;
        padding-bottom: 150px;
    }
`;

const CarouselSlideContainer = () => {
    return(
        <Styles>
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../assets/test-banner.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="primary">Go somewhere</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../assets/test-banner.jpg')}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="primary">Go somewhere</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../assets/test-banner.jpg')}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button variant="primary">Go somewhere</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </Styles>
    );
}

export default CarouselSlideContainer;