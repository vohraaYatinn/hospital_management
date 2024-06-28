import React from 'react';
import { useSelector } from 'react-redux';
import { GetAllHospitals } from '../redux/reducers/functionalities.reducer';

const PaymentStatusSearch = ({ filters, setFilters}) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, paymentStatus: e.target.value }))
    };
    const allHospitals = ["Paid", "Not Paid", "Refund"]

    return (
        <div className="mb-0 position-relative">

            <select className="form-select form-control"
                onChange={handleSearch}
                value={filters.paymentStatus}
            >
                <option value={""}>Search By Payment Status</option>
                {allHospitals.map((item)=>{
                    return(
                        <option value={item}>{item}</option>

                    )
                })}
            </select>
        </div>

    );
}

export default PaymentStatusSearch;