import {Beer} from "../../types/types";
import "./BeerCard.scss";


type BeerCardProps = {
    beer: Beer;
    onClick: () => void;
}

const BeerCard = ({beer, onClick}: BeerCardProps) => {
    return (
        <div className="card" onClick={onClick}>
            <img className="card__img" src={beer.image_url} alt={beer.name} />
            <h3 className="card__title">{beer.name}, {beer.abv}%</h3>
            <p className="card__info">{beer.tagline}</p>
            <p className="card__info"> First brewed:{beer.first_brewed} </p>
            <p className="card__info"> pH:{beer.ph}</p>
              
        </div>
          );
        };
export default BeerCard; 