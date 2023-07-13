import './SignIn.css'
import Button from '../../components/button/Button'

function SignIn(){
    async function Signin(){
        let inputs = document.getElementsByTagName('input')
        const data = {username: `${inputs[0].value}`, password: `${inputs[1].value}`}
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        try{
            const response = await fetch('http://localhost:8080/login', options)
            const data = await response.json();
            console.log(data.msg)
            const token = response.token
            localStorage.setItem('token', token);
            localStorage.setItem('usarname', inputs[0].value)
            if(response.status===200) window.location.href = '/'
        }catch(error){
            console.error('Erro:', error);
        }

    }    
    return(
        <main id='mainSignIn'>
            <div id='signInForm'>
                <input type="text" name='username' placeholder='username'/>
                <input type="password" name='password' placeholder='senha'/>
                <Button name = 'logar' func = {Signin}></Button>
                <a href="/signup" className='link'>Não tem uma conta? Crie uma agora!</a>
            </div>
        </main>
    )
}
export default SignIn