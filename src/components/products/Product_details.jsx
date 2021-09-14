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
                                        

                                        <Link className=" font-weight-bold" to={"/ProductInfo/" + `${this.props.product.id}`}>
                                            <div className='d-flex p-reative justify-content-center'>
                                                
                                                <p className="roundedd d-inline-block p-absolute"></p>
                                                <p className='shifted p-absolute'>More info <i class="fas fa-long-arrow-alt-right"></i></p>
                                                

                                                
                                            </div>
                                            
                                        </Link>

                                    </div>
 
            </>
        )
    }
}

