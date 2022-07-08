import './Header.css'
import Tab from "../Tab/Tab";
import Selector from "../Selector/Selector";
import { useState} from "react";
import {useSelector} from "react-redux";
import {usersReducer} from "../../users/users.reducer";


function Header() {
    const [selector, setSelector] = useState(false)
    const isAuth = useSelector((state)=>state.usersReducer.isAuth)

    const onHoverHandler = () => {
        setSelector(true)
    }
    const onOutHandler = () => {
        setSelector(false)
    }
    return (<div className={"block-header"}>
        <Tab value={"Профиль"}></Tab>
        <Tab onHover={onHoverHandler} width={'200px'} value={"Категории фильмов"}></Tab>
        { isAuth?  <Tab linkTo={'/logout'} value={"Выйти"}> </Tab>:<Tab linkTo={'/login'} value={"Войти"}></Tab>}
        {selector && <Selector onMouseLeave={onOutHandler}></Selector>}
    </div>);
}

export default Header;

