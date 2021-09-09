import React, { Component } from 'react'
import './style.css';
import {Link, link} from "react-router-dom"


export default class products extends Component {
    state={
        products:{
            name:"item1",
            style:{  
                   "background-color": "rgb(203, 217, 219)",
                   "grid-column": "span 1 ",
                   "grid-row": "span 1 "
                    },

        },
        products2:{
            name:"item1",
            style:{  
                   "background-color": "rgb(245, 192, 227)",
                   "grid-column": "span 2 ",
                   "grid-row": "span 1 "
                    },

        },
    
    
    }
    render() {

        const sty=this.state.products2.style['grid-column']
        return (
            <>
                <div className="products_container">
                    <p> address</p>

                    <div className="grid-container" style={this.state.style}>
                   
                    <div className={"item" + (this.state.products.style['grid-column']== "span 2 "? 'name_info' : '')}style={this.state.products.style}>
                        <p>name</p>
                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture-Download-PNG.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                    </div>


{/* delete */}

                    <div class="item2" style={this.state.products.style}> <p>name</p>
                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>

                        </div>
                   

                        <div class="item2" style={this.state.products.style}> <p>name</p>
                        <img src={"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-1200x1203.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                   
                        <div className={(this.state.products2.style['grid-column']== "span 2 "? 'name_info' : '')} style={this.state.products2.style}>
                         <p>name</p>
                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture-PNG-File.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                   

                        <div class="item2" style={this.state.products.style}> <p>name</p>
                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                   

                       

                        <div class="item2" style={this.state.products.style}> <p>name</p>
                        <img src={"https://www.pngall.com/wp-content/uploads/2016/06/Furniture-Download-PNG.png"}></img>
                        <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                   

                        <div className={(this.state.products2.style['grid-column']== "span 2 "? 'name_info' : '')}style={this.state.products2.style}> <p>name</p>
                        <img src={"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-1200x1203.png"}>
                            </img>
                            <Link className="more_info" to="/ProductInfo">More Info <i class="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                   

                     


                </div>

                </div>
               
            </>
        )
    }
}
