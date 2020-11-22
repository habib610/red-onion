import { Button, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import CartSingleItem from '../CartSingleItem/CartSingleItem';

class CartItems extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        console.log(value.cart);

                        return (
                            <Grid item container>
                                {
                                    value.cart.length === 0 ? (
                                        <Grid item md={12}> 
                                        <h1>You Have No Items</h1>
                                        </Grid>
                                    ):
                                    (
                                    <div>
                                    <Typography variant="body1">
                                    From <span><strong>Gulsan Plaza Restaurant GPR</strong></span> <br />
                                    Arriving in 20 - 30 min <br />
                                    107 Rd No 8
                                </Typography> 
                                <Grid item md={12}>
                                    {
                                        value.cart.map(item => <CartSingleItem key={item.id} item={item} />)
                                    }
                                </Grid>
                                </div>
                                    )
                                }
                                

                                <div className="ml-auto">
                                    <div className="d-flex ">
                                        <Typography variant="body1" className="mr-5">
                                            Subtotal <br />
                                            Tax <br />
                                            Delivery Fee <br />
                                            Tax <br />
                                            <strong>Total</strong>
                                        </Typography>
                                        <Typography variant="body1">
                                            00 <br />
                                            00 <br />
                                            00 <br />
                                            00 <br />
                                            <strong>00</strong>
                                        </Typography>
                                    </div>
                                    <Button variant="contained" color="secondary" className="my-3" disabled fullWidth>Place Order</Button>
                                </div>
                            </Grid>
                        )
                    }
                }
            </ProductConsumer>

        );
    }
}

export default CartItems;