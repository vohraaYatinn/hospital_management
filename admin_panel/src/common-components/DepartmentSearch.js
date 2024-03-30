import React from 'react';
import { useSelector } from 'react-redux';
import { GetAllDepartments } from '../redux/reducers/functionalities.reducer';

const DepartmentSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, department: e.target.value }))
    };
    const allDepartments = useSelector(GetAllDepartments);

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.department}
            >
                <option value={""}>Search By Department</option>
                {allDepartments.map((item)=>{
                    return(
                        <option value={item.id}>{item.name}</option>

                    )
                })}
            </select>
        </div>

    );
}

export default DepartmentSearch;
