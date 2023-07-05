import "./navbar.css"
let avatar = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'

function navbar(props){
    function redirec(){
        window.location.href = "/profile";
    }
    return(
        <nav>
            <input type="search" name="searchBar" id="searchBar"/>
            {props.image ? <img src={props.image} alt="userImage" id="userImage" onClick={redirec}/> : <img src={avatar} alt="imagem padrão de perfil" onClick={redirec}/>}
            <a href="/" className="navText">logout</a>        
        </nav>
    )
}
export default navbar