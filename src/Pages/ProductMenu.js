import React, { Component } from 'react'

import Menu from 'Components/ProductMenu/Menu'
import Header from 'Components/Header'
import Footer from 'Components/Footer'



export default class ProductMenu extends Component {
    render() {
        return (
            <>
                <Header isAlreadyLogin/>                
                <Menu/>          
                <Footer/>      
            </>
        )
    }
}
