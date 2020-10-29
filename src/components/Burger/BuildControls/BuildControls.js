import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import classes from './BuildControls.module.css';

export default function BuildControls(props) {

    const controls = [
        {label: 'salad', type: 'salad'},
        {label: 'bacon', type: 'bacon'},
        {label: 'cheese', type: 'cheese'},
        {label: 'meat', type: 'meat'},
    ]

    return (
        <div className={classes.BuildControls}>
            <p className={classes.price}>Current Price: <strong> {props.burgerPrice}</strong> </p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label}
                                     disabled = {props.disabledInfo[ctrl.type]}
                                     moreClicked={ () => props.ingredientAdded(ctrl.type)}
                                     lessClicked = { () => props.ingredientRemoved(ctrl.type)}
                                     // type={ctrl.label}
                />
            })}
            <button onClick={props.modalHandler} disabled={!props.purchaseAble} className={classes.OrderButton}>ORDER NOW</button>

        </div>
    );
}
