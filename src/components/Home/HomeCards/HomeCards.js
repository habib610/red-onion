import { Box, Button, Container, Grid,  makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
const useStyles = makeStyles((theme) => ({
    root:{
        // minWidth: 150
    },
    media: {
        height: 200,
        paddingTop: '70.25%', // 16:9

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    foodIcon:{
    background: "red",
     borderRadius: '50px',
    padding: '5px',
    color: "#fff",
    fontSize: "36px"
    }
}));
const HomeCards = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item sm={12} md={4}>
                        <Typography variant="h4" >
                            Why Choose Us
                        </Typography>
                        <Typography variant="p" >
                            Barton waited twenty always repair in within we do. an delighted offending curiosity my is dash woods at. Boy prosperous increasing surrounded.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid  container spacing={6} style={{ marginTop: '20px' }} >
                    <Grid item sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image="https://iili.io/2A67B1.md.png"
                            />
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <DirectionsBusIcon className={classes.foodIcon} />
                                </IconButton>
                                <Box>
                                    <Typography variant="body" gutterBottom color="textPrimary" component="h2">
                                        Home Delivery
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                    <Button color="secondary">
                                        Show More
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} md={4} >
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image="https://iili.io/2A6VhN.md.png"
                            />
                  
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <NotificationsActiveIcon className={classes.foodIcon} />
                                </IconButton>
                                <Box>
                                    <Typography variant="body" gutterBottom color="textPrimary" component="h2">
                                        A Good Auto Responder
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                    <Button color="secondary">
                                        Show More
                                </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} md={4} >
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image="https://iili.io/2A6YEF.png"
                            />
                  
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <LocalShippingIcon className={classes.foodIcon} />
                                </IconButton>
                                <Box>
                                    <Typography variant="body" gutterBottom color="textPrimary" component="h2">
                                    Fast Delivery
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                    <Button color="secondary">
                                        Show More
                                </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                   
                </Grid>
            </Container>
        </div>
    );
};

export default HomeCards;