import React from 'react';
import {ICart} from './Page/StartPage'
import style from './Cart.module.scss'

const Cart :React.FC<ICart>= ({imgUrl,id,text,title}) => {
    return (
        <div className={style.cart}>
            <img height={115 } src={imgUrl} alt=""/>
            <h4>{title}</h4>
            <p>{text}</p>

        </div>
    );
};

export default Cart;