import { Box,  Container, Grid } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React from 'react';
import "./Banner.css"


const Banner = () => {
 
    return (
        <div className="banner">
            <Container>
                <h1>Best Food waiting for your Belly</h1>
                <Grid justify="center" container>
                    <Grid item md={6}>
                    <SearchBar
                    placeholder="Search For Food"
    // value={}
    // onChange={(newValue) => this.setState({ value: newValue })}
    // onRequestSearch={() => doSomethingWith(this.state.value)}
  />
                    </Grid>
                </Grid>
                <Box>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;