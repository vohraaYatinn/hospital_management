import React from 'react';

const ReviewsStarSearch = ({ filters, setFilters }) => {
    const handleSearch = (e) => {
        setFilters((prev) => ({ ...prev, starSearch: e.target.value }))
    };
    return (
    <div className="mb-0 position-relative">

        <div>
                <select
            className="form-control"
            value={filters?.starSearch}
            onChange={handleSearch}
            >
            <option value="">Search by Review Rating</option>
            {[...Array(5).keys()].map((num) => (
                <option key={num+1} value={num+1}>
                    {num+1}
                </option>
            ))}
        </select>
        </div>
    </div>

    );
}

export default ReviewsStarSearch;
