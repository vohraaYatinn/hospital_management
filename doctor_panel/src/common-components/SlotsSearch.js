import React from 'react';

const AppointmentSlots = ({ filters, setFilters }) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, slots: e.target.value }))
    };
    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.slots}
            >
                <option value={""}>Search By Slots</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
        </div>

    );
}

export default AppointmentSlots;
