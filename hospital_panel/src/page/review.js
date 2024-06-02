import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import useAxios from "../network/useAxios";
import { fetchAllHospital, fetchAllHospitalReviews, fetchAllReviews, fetchselfHospitalReviews } from "../urls/urls";
import { test_url_images } from "../config/environment";
import { PaginationCountList, changeDateFormat, designStarsReviews, handlePagination } from "../utils/commonFunctions";
import PatientName from "../common-components/PatientName";
import DoctorSearch from "../common-components/DoctorsSearch";
import DepartmentSearch from "../common-components/DepartmentSearch";
import { Radio } from "antd";
import ReviewsStarSearch from "../common-components/SearchStars";
import DateSearchComponent from "../common-components/DateSearch";

export default function Review(){
    const [filters, setFilters] = useState({
        starSearch:""
    })
    const [value4, setValue4] = useState('doctors');

    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
      };
      
    const optionsWithDisabled = [
        {
          label: 'Doctors',
          value: 'doctors',
        },
        {
          label: 'Hospitals',
          value: 'hospitals',
        }
      ];
    const [reviewsData, setReviewsData] = useState([])
	const [
		adminReviewsResponse,
		adminReviewsError,
		adminReviewsLoading,
		adminReviewsFetch,
	  ] = useAxios();
      const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
	  useEffect(() => {
        if(value4=="doctors"){
            adminReviewsFetch(fetchAllHospitalReviews(filters));

        }
        else{
            adminReviewsFetch(fetchselfHospitalReviews(filters));

        }
	  }, [filters, value4]);
	  useEffect(() => {
		if (adminReviewsResponse?.result == "success" && adminReviewsResponse?.data) {
            setReviewsData(adminReviewsResponse?.data);
		}
	  }, [adminReviewsResponse]);
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Reviews</h5>

                        {/* <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">UJUR</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Review</li>
                            </ul>
                        </nav> */}
                    </div>

                    <div className="row">
                    <div className="row" style={{ marginTop: "1rem" }}>
                          
                                
                    {value4 == "doctors" && <div className="col-sm-6 col-lg-3">
                                        <DepartmentSearch filters={filters} setFilters={setFilters} />

                                    </div>}
                                    <div className="col-sm-6 col-lg-3">
                            <DateSearchComponent filters={filters} setFilters={setFilters} />
</div>
                                    
                                {value4 == "doctors" &&    <div className="col-sm-6 col-lg-3">
                                    <DoctorSearch filters={filters} setFilters={setFilters} />
                                </div>}
                                <div className="col-sm-6 col-lg-3">
                                    <ReviewsStarSearch filters={filters} setFilters={setFilters} />
                                </div>
                               
                                <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
        style={{marginTop:"1rem"}}
      />
                                    </div>
                                    <div className="row" style={{ marginTop: "1rem" }}>

                                    <div className="col-sm-6 col-lg-3">
                                       <button
                                      
                                        className="form-control btn-check-reset"
                                        onClick={()=>{
                                            setFilters({
                                                department:"",
                                                hospitalSearch:"",
                                                doctorName:"",
                                                starSearch:"",
                                                patientName:"",
                                                date:""
                                            })
                                        }}
                                        style={{backgroundColor:"red", textAlign:"center"}}
                                       >Reset</button>

                                    </div>
                                
                                </div>
                        <div className="col-12 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center">
                                            <thead>
                                                <tr>
                                                <th className="border-bottom p-3" style={{minWidth:'50px'}}>Sno.</th>
                                                <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>

                                                {value4 == "doctors" && <th className="border-bottom p-3" style={{minWidth:'200px'}}> {value4 == "doctors" ? "Doctor Name" : "Hospital Name"}</th>}
                                                    <th className="border-bottom p-3" style={{minWidth:'150px'}}>Stars</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'350px'}}>Comments</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reviewsData.slice(paginationNumber.from, paginationNumber.to).map((item, index) =>{
                                                    return(
                                                        <tr key={index}>
                                                                                                                        <td className="p-3">{index+1}</td>
                                                                                                                        <td className="p-3">{changeDateFormat(item.created_at)}</td>

                                                                                                                        {value4 == "doctors" &&
                                                            <td className="p-3">
                                                            <Link to="#" className="text-dark">
                                                                    <div className="d-flex align-items-center">
                                                                    {value4 == "doctors" && <img src={test_url_images + item.doctor?.profile_picture} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>}
                                                                        <span className="ms-2">{value4 == "doctors" ?item?.doctor?.full_name: item?.hospital?.name}</span>
                                                                    </div>
                                                                </Link>
                                                            </td> }
                                                          

                                                            <td className="p-3">
                                                                <ul className="list-unstyled mb-0">
                                                                    {item?.reviews_star && designStarsReviews(item?.reviews_star)}
                                                                </ul>
                                                            </td>
                                                            <td className="p-3 text-muted">{item.comment}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
    
                            <div className="row text-center">
                                
                                <div className="col-12 mt-4">
                                    <div className="d-md-flex align-items-center text-center justify-content-between">
                                        <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                        { PaginationCountList(handlePagination, paginationNumber , reviewsData, setPaginationNumber) }

                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}