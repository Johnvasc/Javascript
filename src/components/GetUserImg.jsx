import React, { useEffect } from 'react'

function GetUserImg(){
    useEffect(()=>{
        async function getImage(){
            const token = localStorage.getItem('token')
            const data = {username: localStorage.getItem('username')}
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                
                body: JSON.stringify(data)
            }
            try{
                const res = await fetch('https//:localhost:8080/getImg')
                const data = await res.json()
                if(data.imgLink){
                    let image = document.getElementById('userImageProfile')
                    image.setAttribute('src', `${data.imgLink}`)
                }            
            }catch(err){
                console.log(err)
            }
    
        }
    }, [])
    return null
}
export default GetUserImg