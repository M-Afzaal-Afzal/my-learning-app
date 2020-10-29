import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import classes from './Modal.module.css'

function Modal(props) {
    return (
        <Auxiliary>
            <Modal show={props.showModal}/>
            <div className={classes.Modal} style={{
                transform: props.showModal ? 'translateY(0)' : "translateY(-100vh)",
                opacity: props.showModal ? 1 : 0
            }}>
                {props.children}
            </div>
        </Auxiliary>
    );
}

export default Modal;
