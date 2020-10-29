import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css'

export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((val, i) => {
            return <BurgerIngredients type={igKey} key={igKey + i}/>
        })
    });

    if (props.ingredients.cheese === 0 && props.ingredients.meat === 0 && props.ingredients.salad === 0 && props.ingredients.bacon === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}
