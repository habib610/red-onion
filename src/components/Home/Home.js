import { Container } from '@material-ui/core';
import React from 'react';
import Banner from '../Banner/Banner';
import FoodList from './FoodList/FoodList';


const Home = () => {
    return (
        <>
          <Banner/>
          <Container>
          <FoodList/>

          </Container>
        </>
    );
};

export default Home;