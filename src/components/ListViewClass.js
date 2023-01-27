import React from "react";
import { ShopItem } from "./ShopItemClass";

export class ListView extends React.Component {
    render() {
        return (
            <div className="list-container">
                {this.props.items.map((item) => (
                    <ShopItem item={item} />
                ))}
            </div>
        );
    }
}
