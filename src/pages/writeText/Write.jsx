import { useEffect } from 'react';
import './Write.css'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/button/Button'

function Write(){
    useEffect(() => {
        storyText();
      }, []);

    function storyText(){
        console.log('teste')
        const textarea = document.getElementById('bookContent')
        textarea.addEventListener('input', () => {
        const value = textarea.value;
        const newValue = value.replace('---', '— ');
        textarea.value = newValue;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        });
    }
    async function TaylorSwift(){
        let inputs = document.getElementsByTagName('input')
        let textarea = document.getElementsByTagName('textarea')
        const data = {title: `${inputs[0].value}`, texto: `${textarea[0].value}`}
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        const res = await fetch('/saveText', options)
        if(res.status===201) window.location.href = '/'
    }

    return(
        <main >
            <Navbar></Navbar>
            <header id='storyHeader'>
                <input type="text" id='bookTitle' placeholder='Título da obra'/>
                <input type="file" name="cover" id="coverUpload" placeholder='capa'/>
            </header>
            
            <hr />
            <div id="storyArea">
                <textarea cols={50} id='bookContent'></textarea>
            </div>
            <Button name='Publicar História!' func={TaylorSwift}></Button>
        
        </main>
    )
}
export default Write