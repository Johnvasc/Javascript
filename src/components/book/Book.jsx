import './Book.css'



function Book(props){
    function blendAll(id){
        id--
        let divs = document.getElementsByClassName('book')
        for(let i=0; i<divs.length; i++){
            if(i!=id) divs[i].style.opacity = 0.25

        }

    }
    function disBlendAll(){
        let divs = document.getElementsByClassName('book')
        for(let i=0; i<divs.length; i++){
            divs[i].style.opacity = 1
        }
    }

    return(
        <section id='bookSection'>
            <div className="book" onMouseOver={()=>blendAll(props.id1)} onMouseLeave={disBlendAll}>
                <img src={props.img1} alt="imagem 1" />
                <h3>{props.title1}</h3>
            </div>
            <div className="book" onMouseOver={()=>blendAll(props.id2)} onMouseLeave={disBlendAll}>
                <img src={props.img2} alt="imagem 2" />
                <h3>{props.title2}</h3>
            </div>
            <div className="book" onMouseOver={()=>blendAll(props.id3)} onMouseLeave={disBlendAll}>
                <img src={props.img3} alt="imagem 3" />
                <h3>{props.title3}</h3>
            </div>
        </section>
    )
}
export default Book 