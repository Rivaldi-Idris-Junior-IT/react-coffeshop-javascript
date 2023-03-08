import React, {Fragment, useEffect, useState }  from 'react';

import { numberWithCommas } from 'utils/utils';
import Metadata from 'widgets/Metadata';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'actions/productActions';


const Menu = () => {

    const dispatch = useDispatch();

    // filter category 

    const [category, setCategory] = useState("");

    const [allCategory ] = useState("");

    const categories = [
        "Food",
        "Drink",
        "Snack",
        "Favourite"
    ]

    // Redux
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts(category));
    }, [dispatch, category])

    return (
        <Fragment>                
            <Metadata title={"Bread and Coffe Menu"} />
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
                                <Link to="/#" className="nav-link" >Snack</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/#" className="nav-link" >Favourite</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>            
            <section className="menuProduct mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="container">                        
                            <div className="container mt-3 d-flex flex-wrap mt-5">
                            {products && products.map((product) => (
                            <div key={product.uuid} className="col-lg-3">
                                <div className="card text-center">
                                    <img className="mx-auto" src={product.url} alt="veggieTomato" />
                                    <p className="card-title align-center mt-2">{product.name}</p>
                                    <div className="card-body">
                                        <p className="product-price">
                                            Rp. {numberWithCommas(product.price)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>                        
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Menu;