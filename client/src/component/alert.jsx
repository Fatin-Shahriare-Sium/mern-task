import React from 'react'
import './alert.css'
const Alert = ({text,color}) => {
    return (
        
              <div className={`alert alert-${color} fade show`} role="alert">
                  <p>{text}</p>
                  
              </div>
        
    )
}

export default Alert;