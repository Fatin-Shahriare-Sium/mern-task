import React from 'react'
import {Link} from 'react-router-dom'
import Analytics from './analytics'
const Home = () => {
    return (
        <div>
            <Link to='/signup'>
            <button>Sign Up</button>
            </Link>
            <Link to='/login'>
            <button>Login</button>
            </Link>
            <Analytics/>
        </div>
    )
}

export default Home;
