import React from 'react';
import { useSelector } from 'react-redux';
import { GetAllHospitals } from '../redux/reducers/functionalities.reducer';

const HospitalNameSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, hospitalSearch: e.target.value }))
    };

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.hospitalSearch}
            >
                <option value={""}>Search By Hospital</option>
                {[].map((item)=>{
                    return(
                        <option value={item.id}>{item.name}</option>

                    )
                })}
            </select>
        </div>

    );
}

export default HospitalNameSearch;
