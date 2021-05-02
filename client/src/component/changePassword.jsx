import React from 'react'
import './changePassword.css'
import ReactDOM from 'react-dom'
import useChangePassword from './useChangePassword'
const ChangePassword = () => {
    let {handleChangePassword,setError,error}=useChangePassword()
    function showAlert(){
        if(error.msg){
            setTimeout(()=>{
                setError('')
            },1000)
            return ReactDOM.createPortal(<div className={`alertx ${error.color}`}>
            <p>{error.msg}</p>
        </div>,document.getElementById('alert'))
        }
    }
    return (
        <div className='change-password'>
            {showAlert()}
            <form onSubmit={(event)=>handleChangePassword(event)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Old Password</label>
                    <input type="password" id='user' class="form-control"  aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">New Paasword</label>
                    <input type="password" id='status' placeholder='New Password' class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm New Password</label>
                    <input type="password" id='address' placeholder='confirm New Password' class="form-control"/>
                </div>
                <button type='submit' className='changepass-btn'>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword;
