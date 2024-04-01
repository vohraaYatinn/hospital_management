import React from 'react';

const DoctorSearch = ({ filters, setFilters }) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, doctorName: e.target.value }))
    };
    return (
    <div className="mb-0 position-relative">

        <div>
            <input
                className="form-control"
                type="text"
                placeholder="Search by Doctor name"
                value={filters?.doctorName}
                onChange={handleSearch}
            />
        </div>
    </div>

    );
}

export default DoctorSearch;
