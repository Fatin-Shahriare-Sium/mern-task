import React from 'react'
import './login.css'
import useChangeTitle from  './useChangeTitle'
import login from '../assets/login.svg'
import Small from './small'
import useLogin from './useLogin.jsx'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Alert from './alert'
import { Link } from 'react-router-dom'
const Login = () => {
    useChangeTitle('Login')
    let {handleLogin,showPassword,open,error}=useLogin()
    function showAlert(){
        if(error.pass){
           return <Alert text={error.pass} color='danger'/>
        }else if(error.msg){
            return <Alert text={error.msg} color={error.color}/>
        }
    }
    return (
        <div className='container-fluid login'>
            <div className="row">
                <div className="col-md-6 bg-dark login-img">
                    <img  src={login} alt=""/>
                </div>
                
                <div className="col-md-6 login-form">
                    <p className='headx'>Login</p>
                    {showAlert()}
                <form onSubmit={(event)=>handleLogin(event)} className='mx-auto'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input placeholder='Your email' type="email" className={error.email?'form-control is-invalid':'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <Small text={error.email}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <div className='eye'>
                            <input placeholder='password' type="password" className='form-control'  id="password" />
                            <FontAwesomeIcon onClick={(event)=>showPassword(event)} icon={open?faEye:faEyeSlash}/>
                        </div>
                        
                       
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <p style={{letterSpacing:'0px'}}>Have not an account,<Link to='/signup'>Signup</Link></p>
                </form>
                
                </div>
            </div>
        </div>
    )
}

export default Login;
