import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import CartItems from "../CartItems/CartItems";

const styles = (theme) => ({
  root: {
    marginTop: "10vh",
    "& .MuiOutlinedInput-input": {
      padding: "13px 14px",
      background: "rgba(0,0,0,0.02)",
    },
    "& .MuiFormControl-root": {
      marginBottom: "13px",
    },
    "& .MuiTypography-h6": {
      marginBottom: "20px",
    },
  },
  logo: {
    height: 50,
    paddingBottom: "10px",
  },
});

class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography variant="h6">Edit Delivery Details</Typography>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Deliver to door"
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Road No. 12"
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Flat site or floor"
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Business Name"
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Add Delivery Instructor"
            ></TextField>
            <Button color="secondary" variant="contained" fullWidth disabled>
              Save & Continue
            </Button>
          </Grid>

          <Grid item md={2}></Grid>
          <Grid item container md={5}>
            <CartItems />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Cart);
