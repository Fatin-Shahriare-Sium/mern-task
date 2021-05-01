import React, { useState } from 'react'
import ChangePassword from './changePassword'
import DasboardNav from './dasboard-nav'
import ProfileForm from './profile-form'
import './profile.css'
const Profile = () => {
    let[active,setActive]=useState('profile')
    return (
        <div className='profile'>
            <div className='profile-nav'>
            <button onClick={()=>setActive('profile')} className={active==='profile'?'profile-nav__profile-btn btn-active':'profile-nav__profile-btn'}>Profile</button>
            <button onClick={()=>setActive('pass')} className={active==='pass'?'profile-nav__password-btn btn-active':'profile-nav__password-btn'}>Change Password</button>
            </div>
           <div className="profile-main">
               {
                   active==='profile'?<ProfileForm/>:<ChangePassword/>
               }
           </div>
        </div>
    )
}

export default Profile;
