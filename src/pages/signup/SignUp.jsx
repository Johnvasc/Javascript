import './SignUp.css'

function SignUp(){
    return(
        <main id="mainSignUp">
            <div id="signUpForm">
                <form action="POST">
                    <input type="text" name="username" placeholder="Nome de usuário"/>
                    <input type="email" name="email" placeholder="Email@mail.com" />
                    <input type="password" name="password" placeholder="Senha"/>
                    <button>Criar Conta!</button>
                </form>
            </div>
        </main>
    )
}
export default SignUp