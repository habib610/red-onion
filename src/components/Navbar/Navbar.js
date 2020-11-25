import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Badge, Box, Container, makeStyles } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
const useStyles = makeStyles(theme => ({
   
root: {
    paddingTop: "10px",
  },
  logo: {
    height: "10vh",
    paddingBottom: "10px",
    [theme.breakpoints.down('xs')]: {
        height: '7vh'
      },
  },
       
}));

const Navbar = () => {

    const classes  = useStyles();
    return (
            <Box>
            <AppBar position="static" color="transparent" className={classes.root}>
          <ProductConsumer>
            {(value) => {
              const { userName } = value;
              return (
                <Container>
                  <Toolbar>
                    <Typography style={{ flexGrow: 1 }}>
                      <Link to="/">
                        <img
                          className={classes.logo}
                          src="https://iili.io/2To1HJ.png"
                          alt="Logo"
                        />
                      </Link>
                    </Typography>
                    {
                      <Link to="/cart">
                        <Button color="secondary">
                          <Badge
                            badgeContent={value.cart.length}
                            color="secondary"
                          >
                            <ShoppingBasketIcon />
                          </Badge>
                        </Button>
                      </Link>
                    }
                    {userName ? (
                      <Typography variant="body1" color="secondary">
                        {userName}
                      </Typography>
                    ) : (
                      <Link to="/login">
                        <Button color="secondary">Login</Button>
                      </Link>
                    )}
                  </Toolbar>
                </Container>
              );
            }}
          </ProductConsumer>
        </AppBar>
            </Box>

    );
  }



export default Navbar;
