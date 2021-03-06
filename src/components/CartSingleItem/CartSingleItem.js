import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class CartSingleItem extends Component {
    render() {
        const { name, id, price, photo, count } = this.props.item;
        const {increment, decrement, removeItem} = this.props.value;
        return (
                <div className="row align-items-center my-3 bg-light rounded py-2 rounded-pill">
                    <div className="col-3">
                        <img src={photo} alt="In cart food" className="img-fluid " />
                    </div>
                    <div className="col-3">
                       <Typography variant="body2">
                        {name}
                       </Typography>
                       <Typography variant="h6" color="secondary">
                        $ {price}
                       </Typography>
                    </div>
                    <div className="col-1">
                        <div className="d-flex justify-content-center align-items-center">
                            <Button color="secondary"
                            onClick={()=> removeItem(id)}
                            ><FontAwesomeIcon icon ={faTrash}></FontAwesomeIcon></Button>
                        </div>
                    </div>
                    <div className="col-5">
                    <div className=" d-flex  align-items-center justify-content-between border rounded-pill py-2 px-1">
                     <Button color="secondary" 
                     onClick={()=> decrement(id)}
                     ><FontAwesomeIcon icon={faMinus} /></Button>   
                        <h5 className="mb-0 mx-1">{count}</h5>
                        <Button color="secondary"
                         onClick={()=> increment(id)}
                        ><FontAwesomeIcon icon={faPlus} /></Button>   
                   </div>
                    </div>
                </div>
        );
    }
}

export default CartSingleItem;