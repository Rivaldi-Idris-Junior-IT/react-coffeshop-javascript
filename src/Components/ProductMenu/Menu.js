import React, { useState, useEffect } from 'react';

import axios from 'axios'
import { numberWithCommas } from 'utils/utils';
import Loader from 'layout/loading';
import jwt_decode from "jwt-decode";

// import veggieTomato from '../../assets/images/veggietomato.jpg';
// import hazelnutLatter from '../../assets/images/hazelnut.jpg';
// import summerFried from '../../assets/images/summerrice.jpg';
// import creammyLatter from '../../assets/images/creamyicelatte.jpg';

const Menu = () => {    

    const [token, setToken] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState('');
    const [expire, setExpire] = useState('');    

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);            
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    // filter category 

    const [category, setCategory] = useState("");

    const [allCategory ] = useState("");

    const categories = [
        "Food",
        "Drink",
        "Snack",
        "Favourite"
    ]

    const getProduct = async(allCategory, category) => {
        try {
            const response = await axios.get('http://localhost:5000/products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (category) {
                const response = await axios.get(`http://localhost:5000/products?category=${category}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                return response;
            }

            if (allCategory) {
                const response = await axios.get('http://localhost:5000/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                return response;
            }
            
            setProducts(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }    

    useEffect(() => {
        getProduct(category);
        // eslint-disable-next-line
    }, [category]);


        return (
            <>  
            <div className="listTitleMenu">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li style={{ cursor: "pointer", listStyleType: "none",}} onClick={() => setCategory(allCategory)} className="nav-item">
                                <p className="nav-link">All</p>
                            </li>
                            {categories.map((category) => (
                                <li style={{ cursor: "pointer", listStyleType: "none",}} key={category} onClick={() => setCategory(category)} className="nav-item">
                                    <p className="nav-link">{category}</p>
                                </li>
                            ))}                            
                            {/* <li className="nav-item">
                                <p to="/#" className="nav-link" >Snack</p>
                            </li>
                            <li className="nav-item">
                                <p to="/#" className="nav-link" >Favourite</p>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>                                                                          
                <section className="menuProduct mt-4">                                    
                    <div className="row justify-content-center">
                            <div className="col-lg-12">                                
                                <div className="container mt-3 d-flex flex-wrap mt-5">                                    
                                    {products.map((product) => (
                                        <div key={product.uuid} className="col-lg-3">
                                            <div className="card text-center">
                                                <img className="mx-auto" src={product.url} alt="veggieTomato"/>
                                                <p className="card-title align-center mt-2">{product.name}</p>
                                                <div className="card-body">
                                                    <p className="product-price">Rp. {numberWithCommas(product.price)}</p>
                                                </div>
                                            </div>
                                    </div>                     
                                    ))}
                                </div>
                            </div>
                        </div>
                </section>
                
            </>
        )
    }
export default Menu;