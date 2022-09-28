import Header from "./components/Header/Header";
import style from './App.scss'
import StartPage from "./components/Page/StartPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/Page/MainPage";

function App() {
  return (


 <div className={style.App}>
     <Header/>
     <Routes>
         <Route path='/' element={<StartPage/>}  />
         <Route path='/main' element={<MainPage/>}  />

     </Routes>

 </div>
  );
}

export default App;
