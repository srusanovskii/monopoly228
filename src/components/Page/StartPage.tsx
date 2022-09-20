import React from 'react';
import style from './StartPage.module.scss'
import axios from "axios";
import Cart from "../Cart";



export interface ICart{
    id:string,
    imgUrl:string,
    title:string,
    text:string,
}



const StartPage :React.FC= () => {
    const [cart,setCart]= React.useState<ICart[]>()
    React.useEffect(()=>{
        const fetchData = async ()=>{
        const res = await axios.get('https://62c5602fa361f72512824193.mockapi.io/cart')
            setCart(res.data)
        }
        fetchData()


    },[])







    return (
        <div className={style.wrapper}>
            <div className={style.header}>
            <h1>Приглашаем в Монополию.</h1>
            <p>Это отличное место, чтобы поиграть с друзьями в легендарную настольную игру.</p>
            <button>Начать игру</button>

            </div>
            <img src="//m1.dogecdn.wtf/website/index/screenshot.png" alt="Cart"/>
            <div className={style.main}>
                <h2>Почему вам понравится играть у нас?</h2>
                <div className={style.grid}>
                    {cart && cart.map((cart)=>(
                        <Cart key={cart.id} {...cart}/>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default StartPage;