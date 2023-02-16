/* eslint-disable */ 
import React from 'react'
import { Link } from 'react-router-dom'
import brandIcon from '../assets/images/coffeebrand.svg'
import profile from '../assets/images/profile.jpg'

export default function Header(props) {

    if(props.isLogin) 
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>                    
                    <ul className="navbar-nav ml-auto right-bar">                                            
                        <li className="nav-item">
                            <Link className="nav-link btn btn-warning" to="loginpage">Login</Link>
                        </li>                    
                    </ul>                
                </nav>            
            </div>
        </header>
    )

    if(props.isLoginPage) 
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>                    
                    <ul className="navbar-nav ml-auto right-bar">                    
                        <li className="nav-item">
                            <Link className="nav-link login" to="loginpage">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-warning" to="registerpage">Sign Up</Link>
                        </li>                    
                    </ul>                
                </nav>            
            </div>
        </header>
    )

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>                        
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Product</Link>
                            </li>                
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Your Cart</Link>
                            </li>                
                            <li className="nav-item">
                                <Link to="/" className="nav-link">History</Link>
                            </li>                
                        </ul>                    
                    </div>                
                    <ul className="navbar-nav mr-auto right-bar">
                            <li className="nav-item">
                                <Link className="nav-link login" to="loginpage">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-warning" to="registerpage">Sign Up</Link>
                            </li>
                    </ul>                
                </nav>            
            </div>
        </header>
    )
}
