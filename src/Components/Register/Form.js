import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

import Metadata from 'widgets/Metadata'
import { register, clearErrors } from '../../actions/userAction'
import swal from 'sweetalert'

// import googleLogo from '../../assets/images/googleLogo.png'


const Form = () => {
    
    const [ user, setUser ] = useState({
        username: '',        
        email: '',
        phone: '',
        password: '',
        confPassword: ''        
    })

    const { username, email, phone, password, confPassword } = user;    
    
    const alert = useAlert();
    const dispatch = useDispatch();    

    const { isRegistered, error } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(isRegistered) {
            navigate('/loginpage')
            swal("Account Registered","success")
        }
        if(error) {
            alert.error(error)
            dispatch(clearErrors());
        }

    },[dispatch, alert, isRegistered, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.set('username', username);        
        formData.set('email', email);
        formData.set('phone', phone);
        formData.set('password', password);
        formData.set('confPassword', confPassword);        

        dispatch(register(formData))
    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }    

    return (
        <>
            <Metadata title={'Register Here'}/>

            <div className="row justify-content-center">
                <p className="mt-3">Register</p>                                
            </div>            
            <form onSubmit={submitHandler} encType='multipart/form-data'>    
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="username_field">Username</label>
                        <input 
                            type="text"
                            id="username_field"
                            className="form-control" 
                            placeholder="Enter your Email Address"
                            name='username'
                            value={username}
                            onChange={onChange}
                        />
                </div>
            
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="email_field">Email address</label>
                        <input 
                            type="text" 
                            id="email_field"
                            className="form-control" 
                            placeholder="Enter your Email Address"
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                </div>

                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="phone_field">Phone Number</label>
                        <input 
                            type="number" 
                            id="phone_field"
                            className="form-control" 
                            placeholder="Enter Phone Number"
                            name='phone'
                            value={phone}
                            onChange={onChange}
                        />
                </div>
                
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="password_field">Password</label>
                        <input 
                            type="password" 
                            id="password_field"
                            className="form-control" 
                            placeholder="Enter Password"
                            name='password'
                            value={password}
                            onChange={onChange}
                        />
                </div>

                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="confirm_field">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm_field"
                            className="form-control" 
                            placeholder="Enter Password"
                            name='confPassword'
                            value={confPassword}
                            onChange={onChange}
                        />
                </div>                                        
                
                <div className="buttonLogin col-lg-8 mx-auto">

                    <button 
                        id="register_button" 
                        type="submit" 
                        className="btn btn-lg btn-block"
                        onClick = {()=>navigate("/loginpage")}
                        >
                            Sign Up
                    </button>
                </div>
            </form>                                    
            <br/>            
            <div className="buttonLogin2 col-lg-8 mx-auto">
                <p className="already" >Already Have Account ?</p>
                <Link to="/loginpage">
                    <button                         
                        className="btn btn-lg btn-block"                        
                        >Login Here
                    </button>
                </Link>
            </div>
        </>
    )   
}
export default Form;