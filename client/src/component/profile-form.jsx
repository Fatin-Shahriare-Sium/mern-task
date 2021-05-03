import React,{useEffect} from 'react'
import './profile-form.css'
import useProfile from './useProfile'
import ReactDOM from 'react-dom'
const ProfileForm = () => {
    let {handleProfile,profile,msg,blob,setBlob,setMsg}=useProfile()
    function handleImgFile(e){
        let url=URL.createObjectURL(e.target.files[0])
        setBlob(url)
        console.log('on change');
    }
    function showAlert(){
        if(!msg){
            <p>Loading...</p>
        }else{
            setTimeout(()=>{
                setMsg('')
            },1000)
            return ReactDOM.createPortal(<div className='alertx success'>
            <p>{msg}</p>
        </div>
           ,document.getElementById('alert') )
        }
    }
    return (
        <>
        <p className='profile-form__header' style={{fontSize:'2rem',textDecoration:'underline'}}>{profile.text}</p>
            <form className='profile-form' onSubmit={(event)=>handleProfile(event,profile.user.profile[0]._id)}>
                {showAlert()}
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
                            <img id='pic' src={blob} alt=""/>
                            
                            <button type='button'>Edit<input onChange={(event)=>handleImgFile(event)} className='file-btn'  type="file"/></button>
                            
                        </div>
                    </div>
           
                    </div>
            
            
            <button  type='submit'>{profile.text}</button>
        </form>
        </>
    )
}

export default ProfileForm;
