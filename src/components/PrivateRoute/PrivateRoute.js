import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ProductConsumer } from '../../context';

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <ProductConsumer>
            {
                value => {
                    const { userEmail} = value;
                    return (
<Route
      {...rest}
      render={({ location }) =>
      userEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
                    )
                }
            }
      
        </ProductConsumer>
  
    );
};

export default PrivateRoute;