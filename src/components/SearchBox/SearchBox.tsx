import {ChangeEvent} from "react";


type SearchBoxProps = {
    searchTerm: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({searchTerm, onSearchChange} : SearchBoxProps) => {
    return (
        <input className="searchbox"
            type="text"
            placeholder="Search Name..."
            value={searchTerm}
            onChange={onSearchChange}
        />
    )
}
export default SearchBox;
