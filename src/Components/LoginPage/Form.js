import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'
import { login, clearErrors } from 'actions/userAction'
import Metadata from 'widgets/Metadata'
import { useAlert } from 'react-alert'


const Form = () => {
    let navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);    

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/productmenu')
        }
        if(error) {
            alert.error(error)
            dispatch(clearErrors());
        }

    },[dispatch, alert, isAuthenticated, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <>
            <Metadata title={'Login your account'}/>
            <div className="row justify-content-center">
                <p className="mt-5">Login</p>                                
            </div>
            <br/>
            <form onSubmit={submitHandler}>
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                            type="username" 
                            className="form-control" 
                            placeholder="Enter your Username/Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                
                <div className="buttonLogin col-lg-8 mx-auto">
                    <button 
                        type="submit" 
                        className="btn btn-lg btn-block"
                        disabled={loading ? true : false}
                        >Login
                    </button>
                </div>
                <br/>
            </form>
            <div className="buttonGoogle col-lg-8 mx-auto">
                <button className="btn btn-primary btn-lg btn-block">
                <img src={googleLogo} alt="googleLogo" className="mr-2" style={{ "width":"26px", "height":"26px" }}/>
                Login With Google
                </button>
            </div>   
        </>
    )   
}
export default Form;