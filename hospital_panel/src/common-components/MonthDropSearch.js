import React from 'react';
import { useSelector } from 'react-redux';
import { GetAllDepartments } from '../redux/reducers/functionalities.reducer';

const MonthDropSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, month: e.target.value }))
    };
    const allDepartments = useSelector(GetAllDepartments);

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.month}
            >
                <option value={""}>Search By Month</option>
                <option value={"1"}>January</option>
<option value={"2"}>February</option>
<option value={"3"}>March</option>
<option value={"4"}>April</option>
<option value={"5"}>May</option>
<option value={"6"}>June</option>
<option value={"7"}>July</option>
<option value={"8"}>August</option>
<option value={"9"}>September</option>
<option value={"10"}>October</option>
<option value={"11"}>November</option>
<option value={"12"}>December</option>
               
            </select>
        </div>

    );
}

export default MonthDropSearch;
