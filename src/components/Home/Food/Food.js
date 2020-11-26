import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link} from "react-router-dom";
import { ProductConsumer } from '../../../context';
class Food extends Component {
    render() {
        const { name, id, shortDescription, price, photo, inCart } = this.props.item;
        const notify = (name) => toast.dark(`${name} Added`);
        return (
            <div className="col-10 mx-auto  col-md-6 col-lg-4 mb-5">
                <ProductConsumer>
                    {
                        value => {
                            return (
                                <div className="card">
                                      <div>
        <ToastContainer
        autoClose={2000}
        />
      </div>
                                    <div className="card-img-top" >
                                        <div className="img-container d-flex justify-content-center py-2" onClick={()=> value.handleDetail(id)}>
                                        <Link to='/details'>
                                                <img src={photo} className="card-img-top" alt={name} />
                                        </Link>
                                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                value.addToCart(id);
                                notify(name)
                            }}>
                                {inCart ? <p className="text-capitalize mb-0"  >Added</p> : <FontAwesomeIcon icon={faCartPlus} />}
                            </button>
                                            </div>
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