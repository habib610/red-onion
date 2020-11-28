import React from 'react';

const NotFound = (props) => {
    console.log(props)
    return (
        <div>
             <div className="container">
            <div style={{height: '88vh'}}  className="row justify-content-center  text-center align-items-center">
                <div className="col-md-6">
                <h1 style={{fontWeight: 800, fontSize: '50px'}} className="text-danger">404</h1>
                <h4 style={{fontWeight: 800, fontSize: '30px'}} className="text-dark">Sorry, Page Not Found</h4>
    <h5>The Requested URL <span className="text-danger">{props.location.pathname}</span> not found</h5>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NotFound;