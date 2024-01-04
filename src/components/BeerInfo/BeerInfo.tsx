import {Beer} from "../../types/types";
import "./BeerInfo.scss";

type BeerInfoProps = {
    beer: Beer;
    onClose: () => void;
}

const BeerInfo = ({beer, onClose}: BeerInfoProps) => {
    return (
        <div className="beerinfo">
            <h2 className="beerinfo__title">{beer.name}</h2>
            
            <p className="beerinfo__description">{beer.description}</p>
            
            <p className="beerinfo__description--title">Goes great with...</p>
                {beer.food_pairing.map((food, index) => (
                    <p key={index} className="beerinfo__description">{food}</p>
                ))}

            <button className="beerinfo__button" onClick={onClose}>Close</button>
        </div>
            
    )
}
export default BeerInfo; 