import React from "react";

export class ShopCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.card.img} alt=""></img>
                <h1 className="nameCard">{this.props.card.name}</h1>
                <p className="colorCard">{this.props.card.color}</p>
                <p className="priceCard">${this.props.card.price}</p>
                <button className="addToCartCard">ADD TO CART</button>
            </div>
        );
    }
}
