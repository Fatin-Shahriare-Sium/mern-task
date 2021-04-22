import React, { useState } from 'react'
import './signup.css'
import signup from '../assets/signup.svg'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useChangeTitle from './useChangeTitle'
import Alert from './alert'
import useForm from './useForm'
import Small from './small'

const Signup = () => {
    function showAlert(){
        if(error.password){
            return <Alert text={error.password} color={error.color}/>
        }else if(error.msg){
            return <Alert text={error.msg} color={error.color}/>
        }
    }
    useChangeTitle('Sign Up')
    let {handleSubmit,showPassword,showPassword2,open,open2,error}=useForm()
    return (
        <div className='container-fluid signup'>
            <div className="row">
                <div className="col-md-6  signup-form">
                    <p className='head' >Create Your Account</p>
                    {showAlert()}
                    <form onSubmit={(event)=>handleSubmit(event)}>
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Your Name</label>
                            <input placeholder='Your Name' type="text" className={error.username?'form-control is-invalid':'form-control'}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            {error.username?<Small text={error.username}/>:''}
                        </div>
                        <div className="mb-4 ">
                            <label for="exampleInputEmail1" className="form-label">Your Email</label>
                            <input placeholder='Your Email' type="email" className={error.email?'form-control is-invalid':'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <Small text={error.email}/>
                        </div>
                        <div className="mb-4 ">
                            <label for="exampleInputEmail1" className="form-label">Password</label>
                            <div className="eye">
                            <input   placeholder='Password' type="password" className="form-control" id="password" aria-describedby="emailHelp"/>
                            <FontAwesomeIcon onClick={(event)=>showPassword(event)} icon={open?faEye:faEyeSlash}/>
                            </div>
                        
                            
                        </div>
                        <div className="mb-4  ">
                            <label for="exampleInputEmail1" className="form-label">Confrim Password</label>
                            <div className='eye'>
                            <input  placeholder='Confrim Password'  type="password" className="form-control " id="Conpassword" aria-describedby="emailHelp"/>
                           <FontAwesomeIcon onClick={(event)=>showPassword2(event)} icon={open2?faEye:faEyeSlash}/>
                            </div>
                            
                        </div>
                        <button className='btn btn-outline-success' type='submit'>Create Account</button>
                    </form>
                </div>
                <div className="col-md-6 signup-img">
                    <div>
                    <img  src={signup} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
