import React from 'react';
import style from './StartPage.module.scss'
import Cart from "../Cart";
import Footer from "../Footer/Footer";
import {post} from "../../Cart";
import {Link} from "react-router-dom";

export interface ICart {
	id: string,
	imgUrl: string,
	title: string,
	text: string,
}


const StartPage: React.FC = () => {
	const [cart, setCart] = React.useState<ICart[]>(post)



	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<h1>Приглашаем в Монополию.</h1>
				<p>Это отличное место, чтобы поиграть с друзьями в легендарную настольную игру.</p>
				<Link to='/main'>
				<button>Начать игру</button>
				</Link>

			</div>
			<img src="//m1.dogecdn.wtf/website/index/screenshot.png" alt="Cart"/>
			<div className={style.main}>
				<h2>Почему вам понравится играть у нас?</h2>
				<div className={style.grid}>
					{cart && cart.map((cart) => (
						<Cart key={cart.id} {...cart}/>
					))}


				</div>

			</div>
			<Link to='/main'>
			<button>Начать игру</button>
			</Link>
			<Footer/>
		</div>
	);
};

export default StartPage;