import React, { Component } from 'react';
import { ProductConsumer } from '../../context';

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        console.log(value);
                        return (
                        <h1>{value}</h1>,
                        <h1>My cart</h1>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Cart;