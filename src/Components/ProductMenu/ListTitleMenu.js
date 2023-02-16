import React from 'react'
import { Link } from 'react-router-dom'

export default function ListTitleMenu() {
    return (
        <>
            <div className="listTitleMenu">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Drink</Link>                                
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Snack</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Favourite</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>            
        </>
    )
}
