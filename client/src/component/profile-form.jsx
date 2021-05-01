import React,{useEffect} from 'react'
import './profile-form.css'
import useProfile from './useProfile'
const ProfileForm = () => {
    let {handleProfile,profile,msg}=useProfile()
   
    return (
        <>
        <p style={{fontSize:'2rem',textDecoration:'underline'}}>{profile.text}</p>
            <form className='profile-form' onSubmit={(event)=>handleProfile(event,profile.user.profile[0]._id)}>
                
                {console.log('in profile-form')}
                <div className="profile-form__wrapper">
                    <div className="profile-form__info">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input type="text" id='user' class="form-control"  aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Status</label>
                                <input type="text" id='status' placeholder='e.g:student,job,freelancher' class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Address</label>
                                <input type="text" id='address' placeholder='Your Address' class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Bio</label>
                                <textarea id='bio' class="form-control" placeholder='Your Bio'/>
                            </div>
                            
                    </div>
                    <div className="profile-form__img">
                        <div className="profile-form__imgconatiner">
                            <img id='pic' src="https://www.scaleo.io/blog/wp-content/uploads/2020/09/Task-Spotting_App.jpg" alt=""/>
                            
                            <button>Edit<input className='file-btn'  type="file"/></button>
                            
                        </div>
                    </div>
           
                    </div>
            
            
            <button type='submit'>{profile.text}</button>
        </form>
        </>
    )
}

export default ProfileForm;
