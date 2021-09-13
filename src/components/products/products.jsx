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
                                        "grid-row": `span ${value.height}`                                    }}>
                                    <p>{value.name}</p>
                                     {value.images.map((value2,index)=>{
                                         return(
                                            <img src={value2.img } style={{
                                                "backgroundColor":`${value2.background_color}`
                                            }}/>
                                         )
                                          
                                     })}
                                        

                                        <Link className="more_info font-weight-bold" to={"/ProductInfo/" + `${value.id}`}><span className="bg-white d-inline-block rounded-circle p-2 py-3 ">More</span> Info <i class="fas fa-long-arrow-alt-right"></i></Link>

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


