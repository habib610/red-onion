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
        color: "white"
    }
}));

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Container >
                <Grid container gutterBottom className={classes.footer}>
                    <Grid item sm={6} md={6}>
                        <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt="" />
                    </Grid>
                    <Grid item sm={6} md={3} direction="column">
                        <Typography variant="body2"  >
                            <Box>
                                <Link href="#"  className={classes.link}> About Online Blog</Link>
                            </Box>
                            <Box>
                                <Link href="#"  className={classes.link} >  Read Our Blog</Link>
                            </Box>
                            <Box>
                                <Link href="#"  className={classes.link}> Signup to deliver</Link>
                            </Box>
                            <Box>
                                <Link href="#"  className={classes.link}>Add Restaurant</Link>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item sm={6} md={3}>
                        <Typography variant="body2" >
                            <Box>
                                <Link href="#" color="inherit"  className={classes.link}> Read FAQ's</Link>
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" className={classes.link}>Get Help</Link>
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" className={classes.link}> View All Cities</Link>
                            </Box>
                            <Box>
                                <Link href="#" color="inherit" className={classes.link}>Restaurant near me</Link>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item container style={{ marginTop: "20px", padding: "10px", color: "white" }} sm={12} md={7} >
                        <Grid sm={12} md={5}>
                            <Typography variant="p">
                                Copyright Habib, All Right Reserved
                             </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={5} container style={{ marginTop: "20px", padding: "10px", color: "white" }}>
                        <Grid sm={6} md={5}>
                            <Typography variant="p">
                                Terms and condition
                            </Typography>
                        </Grid>
                        <Grid sm={6} md={4}>
                            <Typography variant="p">
                                Privacy and policy
                            </Typography>
                        </Grid>
                        <Grid sm={6} md={3}>
                            <Typography variant="p">
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