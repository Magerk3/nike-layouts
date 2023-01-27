

export const ShopCard = ({card}) => {

    return (
        <div className="card">
            <img src={card.img} alt=""></img>
            <h1 className="nameCard">{card.name}</h1>
            <p className="colorCard">{card.color}</p>
            <p className="priceCard">${card.price}</p>
            <button className="addToCartCard">ADD TO CART</button>
        </div> 
    )
}