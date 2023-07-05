import './PlusButton.css'

function PlusButton(props){
    function red(){
        window.location.replace("/write");
    }
    return(
        <button className='circleButton' onClick={red}>
            +
        </button>
    )
}
export default PlusButton