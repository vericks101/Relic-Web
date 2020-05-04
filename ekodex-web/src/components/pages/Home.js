import React from '../../../node_modules/react';
import CardDeckContainer from '../ui/CardDeckContainer';
import CarouselSlideContainer from '../ui/CarouselSlideContainer';
import styled from '../../../node_modules/styled-components';
import JumbotronFooter from '../ui/JumbotronFooter'

const Styles = styled.div`
    .GameListing {
        text-align: center;
    }

    .NewsListing {
        padding-top: 100px;
        text-align: center;
    }
`;

export const Home = () => (
    <Styles>
        <div>
            {/* <div className = 'GameListing'>
                <h1>EXPLORE GAMES</h1>
            </div> */}
            <CardDeckContainer/>
            {/* <div className = 'NewsListing'>
                <h1>LATEST NEWS</h1>
            </div> */}
            {/* <CardDeckContainer/> */}
        </div>
    </Styles>
)
