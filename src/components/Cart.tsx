import React from 'react';
import {ICart} from './Page/StartPage'

const Cart :React.FC<ICart>= ({imgUrl,id,text,title}) => {
    return (
        <div>
            <img height={40 } src={imgUrl} alt=""/>
            <h4>{title}</h4>
            <p>{text}</p>

        </div>
    );
};

export default Cart;