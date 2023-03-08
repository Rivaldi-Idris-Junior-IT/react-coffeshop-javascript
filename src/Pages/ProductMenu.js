import React, { Component } from 'react'

import Menu from 'Components/ProductMenu/Menu'
import Header from 'Components/Header'
// import ListTitleMenu from 'Components/ProductMenu/ListTitleMenu'
import Footer from 'Components/Footer'



export default class ProductMenu extends Component {
    render() {
        return (
            <>
                <Header isLogin/>                
                <Menu/>          
                <Footer/>      
            </>
        )
    }
}
