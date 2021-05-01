import React from 'react'
import './changePassword.css'
const ChangePassword = () => {
    return (
        <div className='change-password'>
            <form>
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
                <button className='changepass-btn'>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword;
