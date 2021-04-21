
import { useEffect } from 'react'

let useChangeTitle=(text)=>{
    useEffect(()=>{
    document.title=text
    })
}

export default useChangeTitle;