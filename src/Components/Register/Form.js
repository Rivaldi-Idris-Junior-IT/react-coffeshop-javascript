import React from 'react'
import { Link } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'


export default function Form() {
    return (
        <>
            <div className="row justify-content-center">
                <p className="mt-3">Register</p>                                
            </div>
            <br/>
            <div className="form-group col-lg-8 mx-auto">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="username" class="form-control" placeholder="Enter your Email Address"/>
            </div>
            
            <div className="form-group col-lg-8 mx-auto">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group col-lg-8 mx-auto">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input type="phone" class="form-control" placeholder="Enter Phone Number"/>
            </div>
            
            <div className="buttonLogin col-lg-8 mx-auto">
                <button type="button col-lg-8" class="btn btn-lg btn-block">Sign Up</button>                            
            </div>
            <br/>
            <div className="buttonGoogle col-lg-8 mx-auto">
                <button type="button col-lg-8" class="btn btn-primary btn-lg btn-block">
                <img src={googleLogo} alt="googleLogo" className="mr-2" style={{ "width":"26px", "height":"26px" }}/>
                Sign Up With Google
                </button>
            </div>   
            <br/>            
            <div className="buttonLogin2 col-lg-8 mx-auto">
                <p className="already" >Already Have Account ?</p>
                <Link to="loginpage">
                    <button type="button col-lg-8" class="btn btn-lg btn-block">Login Here</button>
                </Link>
            </div>
        </>
    )   
}
