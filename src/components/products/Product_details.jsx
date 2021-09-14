import React, { Component } from 'react'
import { Link } from "react-router-dom"
import classnames from 'classnames/dedupe';



export default class Product_details extends Component {
  state={
      img:this.props.product.images[0]
  }

    render() {
        console.log(this.state)
        return (
            <>

                 <div className={ classnames('item' ,`${this.props.product.width}`==2?"name_info":"") } 
                        style={{
                                 "grid-column": `span ${this.props.product.width}`,
                                        "grid-row": `span ${this.props.product.height}` ,
                                        "background-color":`${this.state.img?.background_color}`
                                                                       }}>
                                    <p>{this.props.product.name}</p>
                                     {this.props.product.images.map((value2,index)=>{
                                         return(
                                            <img key={index} src={value2.img } style={{
                                            }}/>
                                         )
                                          
                                     })}
                                        

                                        <Link className="more_info font-weight-bold" to={"/ProductInfo/" + `${this.props.product.id}`}><span className="bg-span d-inline-block rounded-circle p-2 py-3 ">More</span> Info <i class="fas fa-long-arrow-alt-right"></i></Link>

                                    </div>
 
            </>
        )
    }
}
