import React from 'react';

interface IButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({text, onClick}: IButtonProps) => {
    return (
        <button onClick={onClick} type="button" className="btn btn-dark ml-1">{text}</button>
    );
};

export default Button;