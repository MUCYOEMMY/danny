import React from 'react'
import  {Link} from 'react-router-dom';
import '../css/login.css'

const Login = () => {
  return (
    <div className='body'>
        <div className='container1'>
            <h1>Welcome Back!</h1>
            <p>“You've been through a lot and we're<br />
                 just glad you're back with us.”</p>
                <Link to="/regiter"><input type="submit" value="SIGN UP"/></Link> 
        </div>
        <div className='container2'>
            <h1>Login Here</h1>
            <input type="text" placeholder='Email'/><br />
            <input type="password" placeholder='Password'/>
            <input type="submit" value="SIGN IN"/>
            </div>  
    </div>

  )
}

export default Login