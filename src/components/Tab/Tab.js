import './Tab.css'
import {Navigate} from "react-router";
import {Link} from "react-router-dom";

function Tab(props) {
    return (
        <div
            style={{color: props.color, width: props.width}}
            onMouseOver={props.onHover}
            onMouseOut={props.onOut}
            className={"tab"}>
            <b>
                {props.linkTo? <Link key={props.id} to={`${props.linkTo}`}>{props.value}</Link>:props.value}</b></div>)
}

export default Tab;

