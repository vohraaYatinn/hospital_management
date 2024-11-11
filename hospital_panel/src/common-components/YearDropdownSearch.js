import React from 'react';
import { useSelector } from 'react-redux';
import { GetAllDepartments } from '../redux/reducers/functionalities.reducer';

const YearDropdownSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, year: e.target.value }))
    };
    const allDepartments = useSelector(GetAllDepartments);

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.year}
            >
                <option value={""}>Search By Year</option>
                <option value={"2024"}>2024</option>
                <option value={"2025"}>2025</option>
               
            </select>
        </div>

    );
}

export default YearDropdownSearch;
