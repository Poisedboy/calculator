import React from "react";
import { operators, specialOperators } from "../../utils/keys";
import './button.css';

const Button = ({handleKeys, buttonKey}) => {
    let handleClick = () => handleKeys(buttonKey)
    
    let classNames = [
        'btn',
        operators.includes(buttonKey) ? 'btn-orange' : '',
        specialOperators.includes(buttonKey) ? 'btn-grey' : '',
        buttonKey === '0' ? 'btn-zero': ''    
    ];

    return (
        <button
            name={buttonKey}
            className={classNames.join(' ').trim()}
            onClick={handleClick}
        >
            {buttonKey}
        </button>
    )
};

export default Button;