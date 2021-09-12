import React, { Component } from 'react'
import Carousel from './Carousel.js'
import Products from "./products/products.jsx"
export default class Home extends Component {
  

    render() {
        return (
            <>
                <Carousel />
                <Products />
            </>
        )
    }
}
