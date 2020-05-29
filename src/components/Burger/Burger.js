import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let burgerIngredients = Object.keys(props.ingredients)
        .map(burgerIngredientKey => {
            return [...Array(props.ingredients[burgerIngredientKey])].map((_, index) => {
                return (<BurgerIngredient key={burgerIngredientKey + index} type={burgerIngredientKey} />)
            });
        })
        .reduce((array, element)=>{ return array.concat(element)},[]);

    if(burgerIngredients.length === 0){
        burgerIngredients = <p>Please Add ingredients to the burger!</p>
    }

    console.log(burgerIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {burgerIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>

    );
}

export default burger;