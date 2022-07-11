import './Header.css'
import Tab from "./Tab/Tab";
import Selector from "../Selector/Selector";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutCreater} from "../../users/users.reducer";


function Header() {
    const [selector, setSelector] = useState(false)
    const userReducer = useSelector((state) => state.usersReducer)
    const isAuth = userReducer.isAuth
    const isAdmin = userReducer.user.role==='admin'
    const dispatch = useDispatch()
    const onHoverHandler = () => {
        setSelector(true)
    }
    const onOutHandler = () => {
        setSelector(false)
    }
    const onClickLogoutHandler = () => {
        dispatch(logoutCreater(userReducer.user.id))
    }
    return (<div className={"block-header"}>
        <Tab value={"Профиль"}></Tab>
        <Tab onHover={onHoverHandler} width={'200px'} value={"Категории фильмов"}></Tab>
        {isAdmin && <Tab linkTo={'/admin'} value={"Админка"}></Tab>}
        {isAuth ? <Tab onClickLogout={onClickLogoutHandler} value={"Выйти"}> </Tab> :
            <Tab linkTo={'/login'} value={"Войти"}></Tab>}
        {selector && <Selector onMouseLeave={onOutHandler}></Selector>}
    </div>);
}

export default Header;

