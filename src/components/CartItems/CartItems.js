import { Button, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import CartSingleItem from '../CartSingleItem/CartSingleItem';

class CartItems extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {cartSubTotal, cartTax, cartTotal, clearCart, deliveryFee} = value;
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
                                        value.cart.map(item => <CartSingleItem key={item.id} item={item}  value={value} />)
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
                                            <strong>Total</strong>
                                        </Typography>
                                        <Typography variant="body1" color="secondary">
                                            $ {cartSubTotal} <br />
                                            $ {cartTax} <br />
                                            $ {deliveryFee} <br />
                            <strong >$ {cartTotal}</strong>
                                        </Typography>
                                    </div>
                                    <Button variant="contained" color="secondary" className="mt-3"  fullWidth
                                    onClick = {()=> clearCart()}
                                    disabled={value.cart.length ? false : true}
                                    >Clear Cart</Button>
                                  <Link to="complete-order">
                                  <Button variant="contained" color="secondary" className="my-3" 
                                    disabled={value.cart.length ? false : true}
                                    fullWidth>Place Order</Button>
                                    </Link> 
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