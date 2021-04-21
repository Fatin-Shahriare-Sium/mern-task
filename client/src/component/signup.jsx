import React, { useState } from 'react'
import './signup.css'
import signup from '../assets/signup.svg'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const Signup = () => {
    let[open,setOpen]=useState(false)
    let[open2,setOpen2]=useState(false)
    let handleSubmit=(e)=>{
        e.preventDefault()
        let username=e.target[0].value
        let email=e.target[1].value
        let password=e.target[2].value
        let Conpassword=e.target[3].value
        if(password===Conpassword){
            //axios
        }else{
            //Password Does not match
        }
        console.log(e);
    }
    let showPassword=(e)=>{
        e.preventDefault()
        let pass=document.getElementById('password')
      if(open){
          setOpen(false)
          console.log(pass);
          pass.type='password'
      }else{
        setOpen(true)
        pass.type='text'
      }
      
    }
    let showPassword2=(e)=>{
        e.preventDefault()
          let conpass=document.getElementById('Conpassword')
      if(open2){
        setOpen2(false)
        console.log(e);
        conpass.type='password'
    }else{
        
    setOpen2(true)
    conpass.type='text'
    }
    }
    return (
        <div className='container-fluid signup'>
            <div className="row">
                <div className="col-md-6  signup-form">
                    <p >Create Your Account</p>
                    
                    <form onSubmit={(event)=>handleSubmit(event)}>
                        <div className="mb-4 ">
                            <label for="exampleInputEmail1" className="form-label">Your Name</label>
                            <input placeholder='Your Name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-4 ">
                            <label for="exampleInputEmail1" className="form-label">Your Email</label>
                            <input placeholder='Your Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
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
                            <input  placeholder='Confrim Password'  type="password" className="form-control" id="Conpassword" aria-describedby="emailHelp"/>
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
