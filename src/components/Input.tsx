
function Input(props:any) {
    return (
        <input className={props.className} value={props.value} onChange={props.change} type={props} placeholder={props.placeholder}></input>
    );
}

export default Input;