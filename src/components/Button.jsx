import React from 'react';
import './Button.css';
import { isNumber } from 'util';

const isFunctionalBtn = val => {
    return isNaN(val);
}

const Button = props => (
    <div className={`button ${isFunctionalBtn(props.children) ? "functional" : "standard"}`}>
        {props.children}
    </div>
)


export default Button;