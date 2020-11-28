import {
  Container,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { ProductConsumer } from "../../context";
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
  state ={
    userDelivery: {}
  }
 handleFocus = (e)=>{
    const allDetails = {...this.state.userDelivery}
    allDetails[e.target.name] = e.target.value;
    this.setState(()=>{
      return{
        userDelivery: allDetails
      }
    })
  }
  
  render() {
    const { classes } = this.props;
    // console.log(this.state.userDelivery)
    return (
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography variant="h6">Edit Delivery Details</Typography>
            <ProductConsumer>
              {
                value => {
                 const handleSubmit = (e) => {
                   value.handleDeliveryDetails(this.state.userDelivery);
                   e.target.reset();
                  e.preventDefault()
                 }
                 
                  return (
                  <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Deliver to door"
              onBlur={this.handleFocus}
              name = "door"
              required
            > </TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Road No. 12"
              onBlur={this.handleFocus}
              name="road"
              required
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              onBlur={this.handleFocus}
              name="flat"
              placeholder="Flat site or floor"
              required
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Business Name"
              onBlur={this.handleFocus}
              name="business"
              required
            ></TextField>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              placeholder="Add Delivery Instructor"
              required
              name="instructor"
              onBlur={this.handleFocus}
            ></TextField>
            <button type="submit"  className="MuiButtonBase-root MuiButton-root MuiButton-contained mt-3 MuiButton-containedSecondary MuiButton-fullWidth">Save And Continue</button>
            </form>
                  )
                }
              }
            </ProductConsumer>
           
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
