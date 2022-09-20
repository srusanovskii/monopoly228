import React from 'react';
import style from './Header.module.scss'
import icon from '../../assets/icon.jpg'

const Header :React.FC= () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
            <div className={style.logo}>
            <img height={50} src={icon} alt="logo"/>
                <p>Monopoly One</p>
            </div>
            <ul>
                <li>Поиск игр</li>
                <li>M1TV </li>
                <li>Маркет</li>
            </ul>
                <button>Войти</button>


            </div>
        </div>
    );
};

export default Header;