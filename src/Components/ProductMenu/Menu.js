import React, { Component } from 'react';
import veggieTomato from '../../assets/images/veggietomato.jpg';

import hazelnutLatter from '../../assets/images/hazelnut.jpg';
import summerFried from '../../assets/images/summerrice.jpg';
import creammyLatter from '../../assets/images/creamyicelatte.jpg';
export default class Menu extends Component {
    render() {
        return (
            <>                
                <section className="menuProduct mt-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="container mt-3 d-flex flex-wrap mt-5">
                                <div className="col-lg-3 ">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={veggieTomato} alt="veggieTomato" />
                                        <p className="card-title align-center mt-2">Veggie Tomato Mix </p>
                                        <div className="card-body">
                                            <p className="product-price">IDR 34.000</p>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center" >
                                        <img className="mx-auto" src={hazelnutLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Hazelnut Latte</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={summerFried} alt="veggieTomato"/>
                                        <p className="card-title align-center">Summer fried rice</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={creammyLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Creamy Latter</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={creammyLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Creamy Latter</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={creammyLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Creamy Latter</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={creammyLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Creamy Latter</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card text-center">
                                        <img className="mx-auto" src={creammyLatter} alt="veggieTomato" />
                                        <p className="card-title align-center">Creamy Latter</p>
                                        <div className="card-body">                                            
                                            <p className="product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
