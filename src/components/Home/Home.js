import { Container } from '@material-ui/core';
import React from 'react';
import Banner from '../Banner/Banner';
import FoodList from './FoodList/FoodList';
import Footer from './Footer/Footer';
import HomeCards from './HomeCards/HomeCards';


const Home = () => {
    return (
        <>
          <Banner/>
          <Container>
          <FoodList/>
          </Container>
          <HomeCards/>
          <Footer/>
        </>
    );
};

export default Home;