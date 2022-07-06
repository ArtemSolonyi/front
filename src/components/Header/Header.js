import './Header.css'
import Tab from "../Tab/Tab";
import Selector from "../Selector/Selector";
import { useState} from "react";


function Header() {
    const [selector, setSelector] = useState(false)
    const onHoverHandler = () => {
        setSelector(true)
    }
    const onOutHandler = () => {
        setSelector(false)
    }
    return (<div className={"block-header"}>
        <Tab value={"Профиль"}></Tab>
        <Tab onHover={onHoverHandler} width={'200px'} value={"Категории фильмов"}></Tab>
        <Tab value={"Выйти"}></Tab>
        {selector && <Selector onMouseLeave={onOutHandler}></Selector>}
    </div>);
}

export default Header;

