import React from 'react'
import './css/Login.css';

function Login() {
  return (
    <div className='loginrapper'>
        <div className='logoimg'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImVn-QF6n87yHJa3JnwtaxOKwd4nJm-z17Q&usqp=CAU'/>
            </div>
            <button className='gamil_login' onClick={()=>('/')}>Login with Gmail</button>

        
      
    </div>
  )
}



export default Login;
