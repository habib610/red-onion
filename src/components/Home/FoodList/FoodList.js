import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { ProductConsumer } from '../../../context';
import Food from '../Food/Food';
import TabItem from '../../TabItem/TabItem';

class FoodList extends Component {
    render() {
        return (
            <Container>
                <div className="row justify-content-center my-5">
                <TabItem/>
                </div>
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