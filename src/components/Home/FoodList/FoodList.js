import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { ProductConsumer } from '../../../context';
import Food from '../Food/Food';
import Tabs from '../../TabItem/TabItem';

class FoodList extends Component {
    render() {
        return (
            <Container>
                <Tabs/>
                <div className="row">
                <ProductConsumer>
                    {
                        value =>{
                            return value.foods.map(item=>{
                               return <Food item={item} key={item.id}></Food>
                            })
                        }
                    }
                </ProductConsumer>
                </div>
            </Container>
        );
    }
}

export default FoodList;