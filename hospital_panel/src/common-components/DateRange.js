import React from 'react';
import { DatePicker } from 'antd';

const DateRange = ({ filters, setFilters }) => {
    const { RangePicker } = DatePicker;

    const handleSearch = (dates, dateStrings) => {
        setFilters((prev) => ({ ...prev,datetimeSearch:dates, startDate: dateStrings[0] , endDate: dateStrings[1] }))
    };
    return (
    <div className="mb-0 position-relative">

        <div>
            <RangePicker 
                type="text"
                placeholder="Search by patient name"
                value={filters?.datetimeSearch}
                onChange={handleSearch}
            />
        </div>
    </div>

    );
}

export default DateRange;
