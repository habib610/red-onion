import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodDetails from './components/Home/FoodDetails/FoodDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';
function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/cart">
          <Cart></Cart>
        </PrivateRoute>
        <Route path="/details" component={FoodDetails}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/complete-order">
          <CompleteOrder/>
        </PrivateRoute>
        <Route  component={NotFound}></Route>
        <NotFound />
      </Switch>
    </React.Fragment>
  );
}

export default App;
