function Button(props:any) {
    return (<button type={props.type} onClick={props.onclick} className={props.className}>{props.value}</button>);
}

export default Button;