import React from 'react';

const PatientName = ({ filters, setFilters }) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, patientName: e.target.value }))
    };
    return (
    <div className="mb-0 position-relative">

        <div>
            <input
                className="form-control"
                type="text"
                placeholder="Search by patient name"
                value={filters?.patientName}
                onChange={handleSearch}
            />
        </div>
    </div>

    );
}

export default PatientName;
