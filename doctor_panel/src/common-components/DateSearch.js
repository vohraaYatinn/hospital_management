import React, { useEffect, useRef } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';


const DateSearchComponent = ({ filters, setFilters }) => {

    const dateFormat = 'YYYY-MM-DD';

    const onChange = (date, dateString) => {
        setFilters((prev)=>({...prev, date:dateString}))
        console.log(date, dateString);
      };
      useEffect(()=>{
        console.log(filters?.date)
      },[filters])
    return (
        <div className="mb-0 position-relative" >
        <div>
        <DatePicker className="form-control" value={filters?.date && dayjs(filters?.date, dateFormat)} onChange={onChange} />

            {/* <input
            className="form-control"
                type="date"
                placeholder="Select Date"
                value={filters?.date}
                onChange={handleSearch}
                onFocus={() => showPicker()}
                /> */}
        </div>
        </div>
    );
}

export default DateSearchComponent;
