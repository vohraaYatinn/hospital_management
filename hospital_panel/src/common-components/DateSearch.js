import { DatePicker } from 'antd';
import React, { useRef } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const DateSearchComponent = ({ filters, setFilters }) => {
    const handleSearch = (e, stringTime) => {
        setFilters((prev)=>({...prev, date:stringTime}))
    };
    const inputRef = useRef(null);
    const dateFormat = 'YYYY/MM/DD';

    const handleDivClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div className="mb-0 position-relative" onClick={handleDivClick}>
        <div  onClick={handleDivClick}>
        <DatePicker
                    className="form-control"
                    placeholder="Select Date"
                    value={filters?.date ? dayjs(filters?.date, dateFormat) : ""}
                    onChange={handleSearch}
 />

     
        </div>
        </div>
    );
}

export default DateSearchComponent;
