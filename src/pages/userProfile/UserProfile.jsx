import './UserProfile.css'
import Navbar from '../../components/navbar/Navbar'
import PlusButton from '../../components/plusButton/PlusButton'
import CheckToken from '../../components/CheckToken'
import GetUserImg from '../../components/GetUserImg'
let avatar = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'

function UserProfile(props){

    return(
        <main>
            <PlusButton></PlusButton>
            <Navbar></Navbar>
            <div id="profileUser">
                <div id="profileUserImagSpace">
                    <img src={avatar} alt='Imagem padrão perfil' id="userImageProfile"/>
                    <input type="file" name="userImage" id="" />
                </div>
                <h2>{props.userName}</h2>
            </div>
            <CheckToken/>
        </main>
    )
}
export default UserProfile