import './UserProfile.css'
import Navbar from '../../components/navbar/Navbar'
import PlusButton from '../../components/plusButton/PlusButton'
let avatar = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'

function UserProfile(props){

    return(
        <main>
            <PlusButton></PlusButton>
            <Navbar></Navbar>
            <div id="profileUser">
                <div id="profileUserImagSpace">
                    {props.image ? <img src={props.image} alt="userImage" id="userImageProfile"/> : <img src={avatar} alt='Imagem padrão perfil' id="userImageProfile"/>}
                    <input type="file" name="userImage" id="" />
                </div>
                <h2>{props.userName}</h2>
            </div>
        </main>
    )
}
export default UserProfile