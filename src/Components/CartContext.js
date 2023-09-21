import React,{Component,createContext, useState } from "react";

export const  CartContext= createContext();

class CartProvider extends Component{
    constructor(props){
        super(props);

        let existingCart = localStorage.getItem('mycart') != undefined ? JSON.parse(localStorage.getItem('mycart')) : [];
        let cardAmount=existingCart.length;




        this.state={ 
            item: existingCart,
            size:cardAmount,
            increment: (value) => {
                let itemList= this.state.item;
                itemList.push(value);

                this.setState( { item: itemList });
                this.setState({size:this.state.item.length});
                this.state.saveToLocalCache();

            },
            saveToLocalCache :() =>{

                localStorage.setItem('mycart',JSON.stringify(this.state.item))
            }
        }
    }
    
    render(){
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment }} >
            {this.props.children}
        </CartContext.Provider>

        );
    }
}

export default CartProvider;