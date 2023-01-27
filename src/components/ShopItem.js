
export const ShopItem = ({item}) => {

    return (
        <div className="line">
            <img src={item.img} alt=''></img>
            <h1 className="nameLine">{item.name}</h1>
            <p className="colorLine">{item.color}</p>
            <p className="priceLine">${item.price}</p>
            <button className="addToCartLine">ADD TO CART</button>
        </div>
    )
}