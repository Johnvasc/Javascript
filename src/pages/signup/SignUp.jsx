import './SignUp.css'
import Button from '../../components/button/Button'

function SignUp(){
    async function Signup(){
        let inputs = document.getElementsByTagName('input')
        const data = {username: `${inputs[0].value}`, email: `${inputs[1].value}`, password: `${inputs[2].value}`}
        console.log(data)
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        const res = await fetch('/newAccount', options)
        if(res.status===201) window.location.href = '/accountSucess'
    }
    return(
        <main id="mainSignUp">
            <div id="signUpForm">
                <form action="localhost:8080/newAccount" method='POST'>
                    <input type="text" name="username" placeholder="Nome de usuário"/>
                    <input type="email" name="email" placeholder="Email@mail.com" />
                    <input type="password" name="password" placeholder="Senha"/>
                    <Button name='Criar conta!' func={Signup}></Button>
                </form>
            </div>
        </main>
    )
}
export default SignUp