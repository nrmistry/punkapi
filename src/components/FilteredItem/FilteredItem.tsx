import {ChangeEvent} from 'react';
import "./FilteredItem.scss";

type FilterItemProps = {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

const FilterItem = ({ label, value, onChange }: FilterItemProps) => (
  <div className="filtered-items">
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default FilterItem;