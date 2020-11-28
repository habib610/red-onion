import { Box, Button, Container, Grid, makeStyles,  Typography } from '@material-ui/core';
import React from 'react';
import { ProductConsumer } from '../../context';


const useStyles = makeStyles({
    root: {
        marginTop: '14vh',
        '& .MuiFormControl-root': {
            marginBottom: '10px',
            background: '#f5f5f5',
        },
        '& .MuiOutlinedInput-input': {
            padding: '15px 14px'
        },
        marginBottom: '100px'
    },
    details: {
        background: '#d6d6d65b',
        padding: '20px '
    },
    map: {
        width: "100%",
        height: '60vh'
    },
    round: {
        width: "10px",
        height: '10px',
        borderRadius: '50px',
        background: 'red'
    },
    addressContainer: {
        background: 'white',
        margin: '20px 0px',
        borderRadius: '10px',
        padding: '10px'
    },
    raider: {
        background: 'white',
        padding: '10px',
        margin: '20px 0px'
    }

});



const CompleteOrder = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799165531!2d-74.25987598784583!3d40.69767006330174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1603445201075!5m2!1sen!2sbd";

    const classes = useStyles();
    return (
        <Container className={classes.root} >
           <ProductConsumer>
               {
            value =>{
                return (
                    <Grid container justify="center">
                    <Grid item sm={false} md={2}>
                    </Grid>
                    <Grid item sm={12} md={5} >
                        <Box>
                            <iframe key={4} title={map} className={classes.map} src={map} ></iframe>
                        </Box>
                    </Grid>
                    <Grid item sm={false} md={1}>
                    </Grid>
                    <Grid item container sm={12} md={3} className={classes.details} >
                        <Grid item md={12} >
                            <img width="100" height="100" src="https://iili.io/2A6zkx.png" alt="" />
                            <Box className={classes.addressContainer}>
                                <Grid item container justify="center" alignItems="center">
                                    <Grid item md={1} >
                                        <div className={classes.round}></div>
                                    </Grid>
                                    <Grid item md={10}>
                                        <Typography component="h3" variant="body1" >Your Location</Typography>
                                        <Typography component="p" variant="body2" color="textSecondary" >Flat {value.deliveryDetails.flat}, Road No. {value.deliveryDetails.road} </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container justify="center" alignItems="center">
                                    <Grid  item md={1} >
                                        <div className={classes.round}></div>
                                    </Grid>
                                    <Grid  item md={10} style={{ marginTop: '30px' }}>
                                        <Typography component="h3" variant="body1" >Shop Address</Typography>
                                        <Typography component="p" variant="body2" color="textSecondary">Gulsan Plaza, Road no, 34</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Typography component="h2" variant="h4">
                                    9:30 PM
                                </Typography>
                                <Typography component="h2" variant="body2" color="textSecondary">
                                    Estimated Delivery Time
                                </Typography>
                            </Box>
                            <Box className={classes.raider}>
                                <Grid container alignItems="center">
                                    <Grid item md={3}>
                                        <img src="https://iili.io/2A6x7j.png" width="60" alt="" />
                                    </Grid>
                                    <Grid item md={1}></Grid>
                                    <Grid item md={8}>
                                        <Typography component="h4" variant="h5">
                                            Habib
                                </Typography>
                                        <Typography component="h2" variant="body2" color="textSecondary">
                                            Your Raider
                                </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Button variant="contained" color="secondary" fullWidth>Contact</Button>
                        </Grid>
                    </Grid>
                    <Grid item sm={false} md={1}>
                    </Grid>
                </Grid>
                )
            }
               }
           </ProductConsumer>
        </Container>
    );
};

export default CompleteOrder;