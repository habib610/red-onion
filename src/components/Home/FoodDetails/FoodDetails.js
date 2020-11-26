import { faCartPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../../context';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class FoodDetails extends Component {

    render() {
        return (
            <div className="container my-5">
           <ProductConsumer>
               {
                   value => {
                       const { name, id, price, photo, details, inCart } = value.detailFood; 
                       const notify = (name) => toast.dark(`${name} Added`);
                   return (
                       <div className="row align-items-center">
                        <div className="col-md-6">
                   <h1>{name}</h1>
                   <p className=" my-4">{details}</p>
                   <div className="prices-cart d-flex align-items-center mb-4">
                   <div className="price mr-4">
                       <Typography color="secondary" variant="h4">
                       ${price}
                       </Typography>
                   </div>
                   </div>
                   <div>
                   <div>
        <ToastContainer
        autoClose={2000}
        position="top-left"
        />
      </div>
                   <Button variant="contained" color="secondary" 
                   disabled={inCart ? true : false}
                   onClick={
                    ()=>{
                       value.addToCart(id);
                       notify(name)
                   }
                }
                   ><FontAwesomeIcon icon={faCartPlus} className="mr-2"/> {inCart ? "Added": "Add"}</Button>
                   <Link to="/"><Button variant="contained" color="primary" className="ml-2">Add More</Button></Link>
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