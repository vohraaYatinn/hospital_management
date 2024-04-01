import React from 'react';

const DateSearchComponent = ({ filters, setFilters }) => {
    const handleSearch = (e) => {
        setFilters((prev)=>({...prev, date:e.target.value}))
    };
    return (
        <div className="mb-0 position-relative">
        <div>
            <input
            className="form-control"
                type="date"
                placeholder="Select Date"
                value={filters?.date}
                onChange={handleSearch}
            />
        </div>
        </div>
    );
}

export default DateSearchComponent;
