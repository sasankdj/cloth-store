import React from 'react'
import '../pages/css/loginsignup.css'
const Login_signup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account ? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to use terms  and conditions</p>

        </div>
        </div>
    </div>
  )
}

export default Login_signup