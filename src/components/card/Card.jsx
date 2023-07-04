import './Card.css'

function Card(props){
    return(
        <section id='cardSection'>
            <div className='card2' onClick={props.func1}>{props.category1}</div>
            <div className='card1' onClick={props.func2}>{props.category2}</div>
            <div className='card2' onClick={props.func3}>{props.category3}</div>
        </section>
    )
}
export default Card