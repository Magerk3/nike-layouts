import React from "react";

export class ShopItem extends React.Component {

    render(){
        return(
            <div className="line">
                <img src={this.props.item.img} alt=""></img>
                <h1 className="nameLine">{this.props.item.name}</h1>
                <p className="colorLine">{this.props.item.color}</p>
                <p className="priceLine">${this.props.item.price}</p>
                <button className="addToCartLine">ADD TO CART</button>
            </div>
        )
    }
}