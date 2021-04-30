import { useEffect, useState } from "react";


let useProfile=()=>{
    let[profile,setProfile]=useState({})
    let cookie=localStorage.getItem('__toketasjy42562627')
    useEffect(()=>{
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
        })
    },[])
    let handleProfile=(e)=>{
        e.preventDefault()
        console.log(e);
        let username=e.target[0].value
        let status=e.target[1].value
        let address=e.target[2].value
        let bio=e.target[3].value
        let pic=e.target[5].value
    }
    return {handleProfile,profile}
}

export default useProfile;