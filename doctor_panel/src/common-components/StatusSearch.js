import React from 'react';

const StatusSearch = ({ filters, setFilters, statusSearch, name}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, [name]: e.target.value }))
    };
    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters?.[name]}
            >
                <option value={""}>Search By {name}</option>
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
