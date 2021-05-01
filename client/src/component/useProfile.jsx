import { useEffect, useState } from "react";


let useProfile=()=>{
    let[profile,setProfile]=useState({})
    let[msg,setMsg]=useState({})
    let cookie=localStorage.getItem('__toketasjy42562627')

    function sendCreateProfileRequest(username,status,address,bio,pic){
        fetch('/profile/create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                haveCookie:cookie?true:false,
                isAuthenticated:cookie,
                username,
                status,
                address,
                bio,
                pic
            })
        }).then(res=>res.json())
        .then(data=>{
            setMsg(data.msg)
        })
    }

    function sendUpdateProfileRequest(username,status,address,bio,pic,profileId){
        fetch(`/profile/update/${profileId}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                haveCookie:cookie?true:false,
                isAuthenticated:cookie,
                username,
                status,
                address,
                bio,
                pic
            })
        }).then(res=>res.json())
        .then(data=>{
           setMsg(data.msg)
           
        })
    }

    useEffect(()=>{
        let user=document.getElementById('user')
        let status=document.getElementById('status')
        let addressx=document.getElementById('address')
        let bio=document.getElementById('bio')
        let pic=document.getElementById('pic')
        console.log('useefect call after send profile req');
        fetch('/profile/check',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                haveCookie:cookie?true:false,
                isAuthenticated:cookie
            })
        }).then(res=>res.json())
        .then(data=>{
            setProfile(data)
            let userx=data.user
            user.value=userx.username
            addressx.value=userx.profile.length!==0?userx.profile[0].address:''
            bio.value=userx.profile.length!==0?userx.profile[0].bio:''
            status.value=userx.profile.length!==0?userx.profile[0].status:''
            pic.src=userx.profilePic
            setMsg('')
          console.log('data get first useefeect',data);
        })
    },[setMsg,msg])
    let handleProfile=async (e,profileId)=>{
        e.preventDefault()
        console.log(e);
        let username=e.target[0].value
        let status=e.target[1].value
        let address=e.target[2].value
        let bio=e.target[3].value
        let picx=e.target[5].files[0]?e.target[5].files[0]:profile.user.profilePic
       
        const data = new FormData();
        data.append('file',picx)
        data.append('upload_preset', 'taskman');
        fetch('https://api.Cloudinary.com/v1_1/sium/image/upload',{
            method:'POST',
            body:data
        }).then(res=>res.json())
        .then(data=>{
            console.log('data in cloudniary',data);
          if(profile.user.profile.length===0){
            data.url && sendCreateProfileRequest(username,status,address,bio,data.url)
          }else{
            data.url && sendUpdateProfileRequest(username,status,address,bio,data.url,profileId)
          }
            
            
        })
     
    }
    return {handleProfile,profile,msg}
}

export default useProfile;
