import BeerCard from "../BeerCard/BeerCard";
import {Beer} from "../../types/types"
import "./Main.scss";


export type MainProps = {
    beers: Beer[]
    onBeerClick: (beer: Beer) => void;
};
    
const Main = ({ beers, onBeerClick }: MainProps) => {
    return (
        <div className="card-container">
        {beers.map((beer: Beer) => (
            <BeerCard
            key={beer.id} beer={beer} onClick={() => onBeerClick(beer)}
            />
        ))}
        </div>
    );
};
      
export default Main;