import {ChangeEvent} from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilteredList from "../../components/FilteredList/FilteredList";
import "./NavBar.scss";

type NavBarProps = {
    searchTerm: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFilterChange: (id:string, checked:boolean)=> void;
  };
  
  const NavBar = ({ searchTerm, onSearchChange, onFilterChange }: NavBarProps) => {

    const filters = [
        {id: "abv", label: "High Alcohol", value: "abv_gt=6"},
        {id: "brewedBefore", label: "Classic Range", value:"brewed_before=12-2010"},
        { id: 'ph', label: 'High Acidity', value: 'false' }
    ]
    return (
      <nav className="navbar">
        <h1 className="navbar__title">PUNK IPA Beers</h1>
        <SearchBox searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <FilteredList filters={filters} onFilterChange={onFilterChange} />
      </nav>
    );
  };
  
  export default NavBar;