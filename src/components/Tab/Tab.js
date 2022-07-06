import './Tab.css'

function Tab(props) {
    return (<div style={{color: props.color, width: props.width}} onMouseOver={props.onHover} onMouseOut={props.onOut}  className={"tab"} >
        <b>{props.value}</b></div>)
}

export default Tab;

