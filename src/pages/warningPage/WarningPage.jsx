import './WarningPage.css'

function WarningPage(props){
    return(
        <main id='warningPage'>
            <p>{props.text} </p>
            <br/>
            <a href="/">Redirecione-me</a>
        </main>
    )

}

export default WarningPage