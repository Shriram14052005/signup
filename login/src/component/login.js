import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [action,setAction]=useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>

            {action==="Login"?<></>: <div className='input'>
                <input type='text' placeholder='Name'/>
            </div>}
          
            <div className='input'>
                <input type='Email' placeholder='Email'/>
            </div>
            <div className='input'>
                <input type='Password' placeholder='Password'/>
            </div>
        </div>
        {action==="Sing Up"?<></>: <div className='forgot-password'>Lost password? <span>Clic Here!</span></div>}
       
        <div className='submit-container'>
            <div className={action==="Sing Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sing Up")}}>Sing Up</div>

        </div>
      
    </div>
  )
}

export default Login
  