import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { ProductConsumer } from '../../../context';

class FoodDetails extends Component {
    render() {
        return (
            <div className="container my-5">
           <ProductConsumer>
               {
                   value => {
                       const { name, id, shortDescription, price, photo, details, inCart } = value.detailFood; 
                   return (
                       <div className="row">
                           <div className="col-md-6">
                   <h1>{name}</h1>
                   <p className=" my-4">{details}</p>
                   <div className="prices-cart d-flex ">
                   <div className="price mx-4">
                       <Typography color="secondary" variant="h5">
                       ${price}
                       </Typography>
                   </div>
                   <div className="cart-btns d-flex align-items-center">
                        <button className="btn btn-info">-</button> 
                        <p className="mx-3">0</p>
                        <button className="btn btn-success">+</button>
                   </div>

                   </div>
                   <div>
                   <Button variant="contained" color="secondary" 
                   disabled={inCart ? true : false}
                   onClick={()=>{
                       value.addToCart(id)
                   }}
                   >{inCart ? "Added": "Add"}</Button>
                   </div>
                           </div>
                           <div className="col-md-6">
                                <img src={photo} className="img-fluid" alt=""/>
                           </div>
                       </div>
                   )
                   }
               }
           </ProductConsumer>
           </div>
        );
    }
}

export default FoodDetails;