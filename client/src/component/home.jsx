import React from 'react'
import {Link} from 'react-router-dom'
import hero from '../assets/hero.png'
import './home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className="home-nav">
                <div className="home-nav__title">
                    <p>Task Manager</p>
                </div>
                <div className="home-nav__link">
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                </div>
            </div>
            <div className="home-hero container-fluid">
                <div className="row">
                    <div className="col-md-6 home-hero__title">
                        <p>Manage your work smartly<br/> and stay organized with <br/> <span style={{color:'#1bdd70'}}>Task Manager .</span></p>
                    </div>
                    <div className="col-md-6 home-hero__img">
                        <img src={hero} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
