import { ShopCard } from './ShopCard'

export const CardsView = ({ cards }) => {

    let column1 = [];
    let column2 = [];
    let column3 = [];
    let columnLength = cards.length / 3;
    for(let i = 0; i < cards.length; i++){
        if(i< columnLength) column1.push(cards[i])
        if(i >= columnLength && i < 2*columnLength) column2.push(cards[i])
        if(i >= 2*columnLength) column3.push(cards[i])
    }

    return (
        <div className="img-row">
            <div className="column">
                {column1.map(card => <ShopCard card={card} />)}
            </div>
            <div className="column">
                {column2.map(card => <ShopCard card={card} />)}
            </div>
            <div className="column">
                {column3.map(card => <ShopCard card={card} />)}
            </div>

        </div>
    );
};
