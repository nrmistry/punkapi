import "./FilteredList.scss";

type Filter = {
    id: string;
    label: string;
    value: string;
  };
  
  type FilterListProps = {
    filters: Filter[];
    onFilterChange: (id: string, checked: boolean) => void;
  };
  
  const FilterList = ({ filters, onFilterChange }: FilterListProps) => (
    <div className="filter-list">
      {filters.map((filter) => (
        <div key={filter.id}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onFilterChange(filter.id, e.target.checked)}
            />
            {filter.label}
          </label>
        </div>
      ))}
    </div>
  );
  
  export default FilterList;