import React, { Component } from 'react'
import './style.css';
import axios from 'axios'
import Product_details from './Product_details';





export default class products extends Component {
    state = {
  
        products: [],
        isReady: false

    }


    getData = async () => {
        let data = await axios.get(`https://mini-ecommerce.silicon-arena.com/api/products`)
        await this.setState({ products: data.data, isReady: true })
    }

    componentDidMount = async () => {
        await this.getData();
    }

    render() {
        return (
            <>

                {this.state.isReady ?
                    <div className="products_container">
                        <p className="pt-5 text-weight-light"> <span className="text-secondary">Best</span> Seller</p>

                        <div className="grid-container" >
                            {this.state.products.map((value, index) => {
                             
                                return (
                                  <Product_details product={value} key={index}/>
                                )

                            })}

                        </div>
                    </div>
                    : null}
            </>
        )
    }
}


