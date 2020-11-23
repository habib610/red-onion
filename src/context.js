import React, { Component } from 'react';
import { createContext } from 'react';
import { breakfast} from './fakeData/breakfast';
import { detailFood} from './fakeData/breakfast';
import { dinner } from './fakeData/dinner';
import { lunch } from './fakeData/lunch';
const ProductContext = createContext()

class ProductProvider extends Component {
    state = {
        foods: [],
        detailFood: detailFood,
        cart: [],

        cartSubTotal: 0,
        cartTax: 0,
        deliveryFee: 0,
        cartTotal: 0,
    }
componentDidMount(){
    this.setFood(breakfast);
}


setFood = (breakfast) => {
let tempFood = [];
breakfast.forEach(item=>{
    const singleFood = {...item};
    tempFood = [...tempFood, singleFood];
})
    this.setState(()=>{
        return {foods: tempFood}
    })
}

// setting three default function here
breakfastItems = () =>{
    this.setFood(breakfast)
}
lunchItems = () =>{
    this.setFood(lunch)
}
dinnerItems = () =>{
    this.setFood(dinner)
}

// ending three default function here 















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
    const tempFood = [...this.state.foods];
    const index = tempFood.indexOf(this.getItem(id));
    const Food = tempFood[index];
    Food.inCart = true;
    Food.count = 1;
    const price = Food.price;
    Food.total = price

    this.setState(
        ()=>{
        return {
            foods: [...tempFood],
            cart: [...this.state.cart, Food],
            detailFood: {...Food}
        }
    }
    ,()=> this.addTotal()
    )
}


// cart component functionality
increment = (id) => {
    const tempCart = [...this.state.cart];
    const selectedFood = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];

    food.count = food.count + 1;
    food.total = food.count * food.price

    this.setState(()=>{
        return {cart: [...tempCart]}
    },
    ()=>{
        this.addTotal();
    })
}

decrement = (id) => {
    const tempCart = [...this.state.cart];
    const selectedFood = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];

    food.count = food.count - 1;
    food.total = food.count * food.price
    
    if(food.count === 0){
        this.removeItem(id);
    }
    else{
        this.setState(()=>{
            return {cart: [...tempCart]}
        },
        ()=>{
            this.addTotal();
        })
    }
}

removeItem = (id) => {
    let tempFood = [...this.state.foods];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    let index = tempFood.indexOf(this.getItem(id));
    let removeFood = tempFood[index];
    removeFood.inCart = false;
    removeFood.count = 0;
    removeFood.total = 0;

    this.setState(()=>{
        return {
            cart: [...tempCart],
            foods: [...tempFood]
        }
    },  ()=>{
        this.addTotal();
    }
    )

 };


clearCart = () => {
    this.setState(()=>{
        return {cart: []}
    },
    ()=>{
    this.addTotal();
    this.setFood(breakfast);
    }
    )
    
}

addTotal = () => {
    let subTotal = 0;
    let tempDeliveryFee = 0;
    this.state.cart.map(item => (subTotal += item.total));
    if (subTotal !== 0) {
        tempDeliveryFee = 9.9;
    }
    if (subTotal !== 0 && subTotal > 100) {
        tempDeliveryFee = 0
    }

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax + tempDeliveryFee;
    const total = parseFloat(tempTotal.toFixed(2))
    
    this.setState(()=>{
        return {
            cartSubTotal: parseFloat(subTotal.toFixed(2)),
            cartTax: tax,
            cartTotal: total,
            deliveryFee: tempDeliveryFee
        }
    })
        
}


    render() {
        return (
            <ProductContext.Provider value={
             {   
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,

            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,

            breakfastItems: this.breakfastItems,
            lunchItems: this.lunchItems,
            dinnerItems: this.dinnerItems,
            }
            }>
                { this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };