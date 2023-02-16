import React from 'react'
import coldbrew from '../../assets/images/coldbrew.png';
import BreadCrumb from './BreadCrumb';

const DescriptionProduct = () => {
  return (
    <div className="detailProduct">
        <div className="row col-12">
            <div className="imageItem col-lg-6 mt-3">
                <div className="container">
                    <BreadCrumb/>
                    <div className="imageDetail text-center">
                        <img src={coldbrew} alt="imageProduct" className="image"/>
                        <p className='nameProduct mt-3'>COLD BREW</p>
                        <p className='priceProduct'>IDR <span>30.000</span></p>
                    </div>
                    <div className="detailButton text-center">
                        <button className='btn addtoCart col-4'>
                            Add To Cart
                        </button>
                        
                    </div>    
                </div>
            </div>
            <div className="description col-lg-6 mt-5">
                <div className="container pt-5 pb-5">
                    <div className="descProduct h-80 pl-4 pr-4">
                        <p>Delivery only on <span>Monday to friday</span>at 1 - 7 pm</p>
                        <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                    </div>
                </div>
                <div className="deliveryMethod text-center mt-5">
                    <p>Chose Delivery Methods</p>
                    <div class="row justify-content-center">
                        <button className="btn btn-active ml-1 mr-1">Dine In</button>
                        <button className="btn ml-1 mr-1">Door Delivery</button>
                        <button className="btn ml-1 mr-1">Pick Up</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkoutProduct">
            <div class="row">
                <div class="container ml-auto col-6">
                    <div class="row justify-content-between pl-5 pr-5">
                        <img src={coldbrew} alt="imageProduct" className="image mt-3 "/>
                        <p className="mt-5 ml-5">COLD BREW</p>                        
                        <button className="btn btn-sm plusButton mt-5 mb-5">+</button>
                        <input type="text" className="form-control col-1 mt-5 mb-5" placeholder="2" />
                        <button className="btn btn-sm btn-circle minusButton mt-5 mb-5">-</button>
                    </div>                                        
                </div>
                <button className="btn btn-warning mr-auto pr-2 pl-2">CHECKOUT</button>
            </div>                        
        </div>        
    </div>
  )
}

export default DescriptionProduct