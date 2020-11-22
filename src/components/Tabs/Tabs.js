import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';

class Tabs extends Component {
    render() {
        return (
            <Container style={{margin: '10px 0'}}>
                <Grid container spacing={2} justify="center">
                    <Grid item sm={12} md={12}>
                        <Box textAlign="center">
                        <Button variant="contained" color="secondary">Breakfast</Button>
                        <Button variant="contained" style={{margin: '0 5px'}} color="secondary">Lunch</Button>
                        <Button variant="contained" color="secondary">Dinner</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Tabs;