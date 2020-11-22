import { Box, Container } from '@material-ui/core';
import React from 'react';
import "./Banner.css"

const Banner = () => {

    return (
        <div className="banner">
            <Container>
                <h1>Best Food waiting for your Belly</h1>
                <Box>
                <input placeholder="Search for Food" className="searchBox" type="text"/>
                <button className="foodSearchBtn" variant="contained" color="secondary"> Search</button>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;