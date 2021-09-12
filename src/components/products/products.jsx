import React, { Component } from 'react'
import './style.css';
import { Link, link } from "react-router-dom"
import axios from 'axios'





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
                        <p> address</p>

                        <div className="grid-container" >
                            {this.state.products.map((value, index) => {
                             
                                return (
                                    <div key={index} className="item" style={{
                                        "grid-column": `span ${value.width}`,
                                        "grid-row": `span ${value.height}`,
                                        "background":"blue"
                                    }}>
                                        <p>{value.name}</p>
                                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture-Download-PNG.png"}></img>
                                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                                    </div>

                                )

                            })}

                        </div>
                    </div>
                    : null}
            </>
        )
    }
}


