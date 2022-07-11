import '../ModalCommon.css'

function Modal(props) {
    const {insideComponent,active,setActive} = props
    return (
        <div onClick={()=> setActive(false) } className={active? 'modal-background active':"modal-background"}>
          <div onClick={e=>e.stopPropagation()}>{insideComponent}</div>
        </div>
    )
}

export default Modal;

