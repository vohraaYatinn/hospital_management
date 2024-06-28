import React from 'react';

const PaymentModeSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, paymentMode: e.target.value }))
    };
    const allHospitals = ["Offline", "Online"]

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.paymentMode}
            >
                <option value={""}>Search By Payment Mode</option>
                {allHospitals.map((item)=>{
                    return(
                        <option value={item}>{item}</option>

                    )
                })}
            </select>
        </div>

    );
}

export default PaymentModeSearch;
