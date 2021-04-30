import React from 'react'
import './profile-form.css'
const ProfileForm = () => {
    return (
            <form>
                <div className="profile-form__wrapper">
                    <div className="profile-form__info">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input type="text" id='user' class="form-control"  aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Email</label>
                                <input type="email" id='email' class="form-control"/>
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
                            <img src="https://www.scaleo.io/blog/wp-content/uploads/2020/09/Task-Spotting_App.jpg" alt=""/>
                            <button>Edit</button>
                        </div>
                    </div>
           
                    </div>
            
            
            <button>Create Profile</button>
        </form>
        
    )
}

export default ProfileForm;
