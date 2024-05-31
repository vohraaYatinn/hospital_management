import React from 'react';
import { designStarsReviews } from '../utils/commonFunctions';
import { Rate , Select} from 'antd';

const ReviewsStarSearch = ({ filters, setFilters }) => {
    const handleSearch = (value) => {
        setFilters((prev) => ({ ...prev, starSearch: value }))
    };
    return (
    <div className="mb-0 position-relative" >

        
        <Select
          style={{minWidth:"10rem", minHeight:"2.2rem"}}
        defaultValue={false}
        value={filters?.starSearch}
      onChange={handleSearch}
      options={[
        {
          value: "",
          label:"Select Rating From Below",
        },
        {
          value: '1',
          label: <div>
             {designStarsReviews(1)}
          </div>,
        },
        {
            value: '2',
            label: <div>
             {designStarsReviews(2)}
            </div>,
          },
          {
            value: '3',
            label: <div>
             {designStarsReviews(3)}
            </div>,
          },
          {
            value: '4',
            label: <div>
             {designStarsReviews(4)}
            </div>,
          },
          {
            value: '5',
            label: <div>
             {designStarsReviews(5)}
            </div>,
          },
      ]}
    />
            
        </div>


    );
}

export default ReviewsStarSearch;
