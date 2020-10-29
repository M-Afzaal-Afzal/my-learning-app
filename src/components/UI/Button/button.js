import React from 'react';
import classes from './button.module.css';

function button(props) {
    return (
        <button onClick={props.clicked} className={[classes.Button, classes[props.type]].join(' ')}>
            {props.children}
        </button>);
}

export default button;
