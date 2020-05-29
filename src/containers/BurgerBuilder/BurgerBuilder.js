import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_COSTS = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1,
    bacon: 0.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },

        totalPrice: 4,
    }

    addIngredientHandler = (label) => {
        const oldCount = this.state.ingredients[label];
        const newCount = oldCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[label] = newCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_COSTS[label];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

    }

    removeIngredientHandler = (label) => {
        const oldCount = this.state.ingredients[label];

        if (oldCount <= 0) {
            return;
        }

        const newCount = oldCount - 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[label] = newCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_COSTS[label];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });


    }

    render() {
        return (
            <Aux>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div>
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                    /></div>
            </Aux>
        );
    }
}

export default BurgerBuilder;