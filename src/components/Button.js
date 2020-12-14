import React from 'react';
import './Button.css';

const STYLES=['btn--primary', 'btn--outline'];
const SIZES=['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'red', 'blue', 'green'];


export const Button = ({
    children, type, onClick, buttonStyle, buttonSize, buttonColor
})=>{

    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize: SIZES[0];
    const checkbuttonColor= COLOR.includes(buttonColor)? buttonColor: "no-color";
   
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkbuttonColor}`} 
        onClick={onClick} type={type} > {children}</button>
    )
};
