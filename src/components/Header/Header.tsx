import React from 'react';
import style from './Header.module.scss'
import icon from '../../assets/icon.jpg'
import {Link} from "react-router-dom";

const Header :React.FC= () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
           <Link style={{textDecoration:'none'}} to='/'>
            <div className={style.logo}>
            <img height={50} src={icon} alt="logo"/>
                <p>Monopoly One</p>
            </div>
            </Link>
                <Link style={{textDecoration:'none'}} to='/main'>
            <ul>
                <li>Поиск игр</li>
                <li>M1TV </li>
                <li>Маркет</li>
            </ul>
                </Link>
                <button>Войти</button>


            </div>

        </div>
    );
};

export default Header;