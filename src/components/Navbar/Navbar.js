import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Badge, Container } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
const styles = theme => ({
    root: {

    },
    logo: {
        height: 50,
        paddingBottom: '10px'
    }
});


class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="transparent">
                    <Container >
                        <Toolbar>
                            <Typography style={{ flexGrow: 1 }}>
                                <Link to="/"><img className={classes.logo} src="https://iili.io/2To1HJ.png" alt="Logo" /></Link>
                            </Typography>
                            <ProductConsumer>
                                {
                                    value => {
                                        return (
                                            <Link to="/cart">
                                                <Button color="secondary">
                                                <Badge badgeContent={value.cart.length} color="secondary">
                                                <ShoppingBasketIcon />
                                            </Badge>
                                                </Button>
                                                
                                            </Link>
                                        )
                                    }
                                }
                            </ProductConsumer>

                            <Link to="/login"><Button color="secondary">Login</Button></Link>
                            <Button color="secondary" variant="contained">Signup</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);