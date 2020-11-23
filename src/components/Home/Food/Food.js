import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { ProductConsumer } from '../../../context';
class Food extends Component {
    render() {
        const { name, id, shortDescription, price, photo } = this.props.item;
        return (
            <div className="col-10 mx-auto  col-md-6 col-lg-4 mb-5">
                <ProductConsumer>
                    {
                        value => {
                            return (
                                <div className="card">
                                    <div className="card-img-top" >
                                        <Link to='/details'>
                                        <div className="img-container d-flex justify-content-center py-2" onClick={()=> value.handleDetail(id)}>
                                                <img src={photo} className="img-fluid w-75" alt={name} />
                                            </div>
                                        </Link>
                                        <h5 className="card-title text-center">{name}</h5>
                                        <p className="text-center">{shortDescription}</p>
                                        <div className="card-footer bg-transparent border-0">
                                           <Typography variant="h4" color="secondary">
                                           $<span>{price}</span>
                                           </Typography>
                                        
                                        </div>
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

export default Food;