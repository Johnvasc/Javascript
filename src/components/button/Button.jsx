import './Button.css'
function Button(props){
    return(
        <button id='templateButton' onClick={props.func}>{props.name}</button>
    )
}
export default Button