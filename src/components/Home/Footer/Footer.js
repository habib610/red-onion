import { Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        '& .makeStyles-footer-19':{
            margin: '0px !important',
            padding: '50px 0px'
        }
    },
    logo: {
        height: "50px"
    },
    footer: {
        margin: "20px 0",
        padding: " 20px  0px",
        color: "white"
    },
    link:{
        color: "white",
        display: 'block'
    }
}));

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Container >
                <Grid container  className={classes.footer}>
                    <Grid item sm={6} md={6}>
                        <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt="" />
                    </Grid>
                    <Grid item sm={6} md={3} >
                        <Typography variant="body1" >
                            
                                <Link to="/"  className={classes.link}>  About Online Blog</Link>
                            
                           
                                <Link to="/"  className={classes.link} >  Read Our Blog</Link>
                          
                         
                                <Link to="/"  className={classes.link}> Signup to deliver</Link>
                            
                        
                                <Link to="/"  className={classes.link}>Add Restaurant</Link>

                        </Typography>
                    </Grid>
                    <Grid item sm={6} md={3}>
                        <Typography variant="body2" >
                         
                                <Link to="/" color="inherit"  className={classes.link}> Read FAQ's</Link>
                                <Link to="/" color="inherit" className={classes.link}>Get Help</Link>
                                <Link to="/" color="inherit" className={classes.link}> View All Cities</Link>
                                <Link to="/" color="inherit" className={classes.link}>Restaurant near me</Link>
                        </Typography>
                    </Grid>
                    <Grid item container style={{ marginTop: "20px", padding: "10px", color: "white" }} sm={12} md={7} >
                        <Grid item sm={12} md={5}>
                            <Typography variant="body1">
                                Copyright Habib, All Right Reserved
                             </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={5} container style={{ marginTop: "20px", padding: "10px", color: "white" }}>
                        <Grid item sm={6} md={5}>
                            <Typography variant="body1">
                                Terms and condition
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography variant="body1">
                                Privacy and policy
                            </Typography>
                        </Grid>
                        <Grid item sm={6} md={3}>
                            <Typography variant="body1">
                                Pricing
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;