import React from 'react';

const StatusSearch = ({ filters, setFilters, statusSearch}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, status: e.target.value }))
    };
    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.status}
            >
                <option value={""}>Search By Status</option>
                {statusSearch.map((item)=>{
                    return(
                        <option value={item.value}>{item.name}</option>

                    )
                })}
            </select>
        </div>

    );
}

export default StatusSearch;
