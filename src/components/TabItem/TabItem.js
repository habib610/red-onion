import {  Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react';
import { ProductConsumer } from '../../context';

class TabItem extends Component {
    state = {
        value: 0
    }
    render() {
        const {value} = this.state;
        // const setSampleState = sampleState => this.setState({ sampleState });
        return (
            <ProductConsumer>

                {
                        contextValue => {
                        const { breakfastItems, lunchItems, dinnerItems } = contextValue;
                        return (
                            <div className="container my-5">
                                <div className="row  justify-content-center">
                                    <div className="col-12 text-center" >
                                       <div >
                                       <Tabs 
                                       value={value}
                                       indicatorColor="secondary"
                                       textColor="secondary"
                                       aria-label="disabled tabs example"
                                            >

                                            <Tab label="Breakfast" 
                                                onClick={
                                                    ()=>{ breakfastItems();
                                                        this.setState(()=>{
                                                            return {value: 0}
                                                        });
                                                    }
                                                }
                                            />
                                            <Tab label="Lunch"
                                             onClick={()=> { 
                                                lunchItems();
                                                this.setState(()=>{
                                                    return {value: 1}
                                                });
                                            }
                                            }
                                            />
                                            <Tab label="Dinner" 
                                             onClick={
                                                 ()=>{
                                                    dinnerItems();
                                                    this.setState(()=>{
                                                        return {value: 2}
                                                    });
                                                 } 
                                                }
                                            />

                                        </Tabs>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>

        );
    }
}

export default TabItem;