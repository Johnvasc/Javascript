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
        const res = await fetch('/login', options)
        if(res.status===201) window.location.href = '/'
    }    
    return(
        <main id='mainSignIn'>
            <div id='signInForm'>
                <input type="text" name='username' placeholder='username'/>
                <input type="password" name='password' placeholder='senha'/>
                <Button name = 'logar' func = {Signin}></Button>
            </div>
        </main>
    )
}
export default SignIn