import React, { Component } from 'react';
import { createContext } from 'react';
import { breakFastFood} from './fakeData/breakfast';
import { detailFood} from './fakeData/breakfast';
const ProductContext = createContext()

class ProductProvider extends Component {
    state = {
        foods: [],
        detailFood: detailFood,
        cart: [],
    }
componentDidMount(){
    this.setFood();
}
setFood = () => {
let tempFood = [];
breakFastFood.forEach(item=>{
    const singleFood = {...item};
    tempFood = [...tempFood, singleFood];
})
    this.setState(()=>{
        return {foods: tempFood}
    })
}

//getItem by Id
getItem = (id) => {
    const food =  this.state.foods.find(item => item.id === id);
    return food;
}

// details
handleDetail = (id) =>{
    console.log("you clicked on image container", id)
   const food = this.getItem(id)
   this.setState(()=>{
       return {detailFood: food}
   })
}

// Add to cart
addToCart = (id) => {
    console.log("Added to cart", id);
    const tempFood = [...this.state.foods];
    const index = tempFood.indexOf(this.getItem(id));
    console.log(index)
    const Food = tempFood[index];
    Food.inCart = true;
    Food.count = 1;
    const price = Food.price;
    Food.total = price

    this.setState(()=>{
        return {
            foods: [...tempFood],
            cart: [...this.state.cart, Food],
            detailFood: {...Food}
        }
    })
}


    render() {
        return (
            <ProductContext.Provider value={
             {   
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
            }
            }>
                { this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };