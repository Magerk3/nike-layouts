import { ShopItem } from "./ShopItem";

export const ListView = ({items}) => {
    return (
        <div className="list-container">
            
                {items.map(item => <ShopItem item={item} />)}
            
        </div>
    );
};
