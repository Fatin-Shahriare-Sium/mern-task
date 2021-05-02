import React,{ useContext, useEffect, useState } from "react"
export let AuthContext=React.createContext()

export let useAuthencation=()=>{
   return useContext(AuthContext)
    
}

export function AuthProvider({children}){
    let[auth,setAuth]=useState(false)
    let[user,setUser]=useState({})
    let[loading,setLoading]=useState(true)
   console.log('react context call');
    let cookie=localStorage.getItem('__toketasjy42562627')
    useEffect(()=>{
      return  fetch('/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                haveCookie:cookie?true:false,
                isAuthenticated:cookie,

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log('data in context',data);
            
            if(data.alreadyLogged){
                setAuth(true)
            }else{
                setAuth(false)
            }
            setUser(data.loggedInfo)
            setLoading(false)

        })
    },[auth])
    return(
        <AuthContext.Provider value={{auth,loading,setAuth,user}}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}