import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import client1 from '../../assets/images/client/01.jpg'

import { patientsData } from "../../data/data";
import useAxios from "../../network/useAxios";
import { fetchMyDoctorReviews } from "../../urls/urls";
import { PaginationCountList, calculateAge, designStarsReviews, getTodayDate, handlePagination } from "../../utils/commonFunctions";
import PatientName from "../../common-components/PatientName";
import DateSearchComponent from "../../common-components/DateSearch";
import { Link } from "react-router-dom";
import { Tooltip } from 'antd';


export default function PatientReview(){
    let [show, setShow] = useState('')
    const [patientReviews, setpatientReviews] = useState([])
    const [reviewCounts, setReviewCounts] = useState({})
    const [reviewAverageCounts, setReviewAverageCounts] = useState(0)
    const [filterValues, setFilterValues] = useState({});

    const [patientReviewsResponse, patientReviewsError, patientReviewsLoading, patientReviewsFetch] = useAxios();
    const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
    useEffect(()=>{
        patientReviewsFetch(fetchMyDoctorReviews(filterValues))
    },[filterValues])
    useEffect(()=>{
        if(patientReviewsResponse?.result == "success"){
            setpatientReviews(patientReviewsResponse?.data?.reviews_objs)
            setReviewCounts(patientReviewsResponse?.data?.star_counts)
            setReviewAverageCounts(patientReviewsResponse?.data?.average_rating)
            console.log(patientReviewsResponse?.data?.star_counts['5']/patientReviewsResponse?.data?.reviews_objs.length *100)
        }
        },[patientReviewsResponse])
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12 d-none d-lg-block"/>

                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <h5 className="mb-0">Patients Review</h5>
                        <div className="row">


                            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-4">
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                                <div style={{justifyContent:"space-between"}}>
                                    <form>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-12 col-md-6" style={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>


                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="row" style={{marginTop:"2rem"}}>
                            <div className="col-4">
                                                <PatientName filters={filterValues} setFilters={setFilterValues}/>
                                                </div>
                                                <div className="col-3">
                                       <button
                                        className="form-control btn-check-reset"
                                        onClick={()=>{
                                            setFilterValues({
                                                status:"",
                                                slot:"",
                                                date:getTodayDate(),
                                                patientName:""
                                            })
                                        }}
                                        style={{backgroundColor:"red"}}
                                       >Reset</button>

                                    
                                    </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3">Id</th>
                                                <th className="border-bottom p-3" style={{minWidth:'100px'}}>Name</th>
                                                <th className="border-bottom p-3">Review</th>
                                                <th className="border-bottom p-3">Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patientReviews.slice(paginationNumber.from, paginationNumber.to).map((item, index) =>{
                                                return(  
                                                    <tr key={index}>
                                                        <td className="p-3">{item?.patient?.ujur_id}</td>
                                                        <td className="p-3">{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</td>
                                                        <td className="p-3">{item?.comment && item?.comment.length > 40 ? <><Tooltip placement="topRight" title={item?.comment} >{item?.comment.slice(0,40)} <span style={{color:"blue", cursor:"pointer", fontSize:"0.7rem"}}>....Read More</span> </Tooltip></>: item?.comment }</td>
                                                        <td className="p-3">{designStarsReviews(item?.reviews_star)}</td>


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
                                        { PaginationCountList(handlePagination, paginationNumber , patientReviews, setPaginationNumber) }
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5 col-md-5 col-12 mt-4 pt-2">
                                <div className="card p-4 border-0 shadow rounded">
                                    <div>
                                        <span className="text-primary h1 mb-0"><span className="fw-bold">{reviewAverageCounts}</span></span>
                                        <span className="h6 align-self-end ms-2">Avg. Ratings..</span>
                                    </div>

                                    <div className="mt-4">
                                        <div className="progress-box">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Very satisfied</h6>
                                                <div className="progress-value d-block text-muted h6">5 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width: ((reviewCounts['5']/patientReviews.length) *100)+"%"}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Satisfied</h6>
                                                <div className="progress-value d-block text-muted h6">4 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width: ((reviewCounts['4']/patientReviews.length) *100)+"%"}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Neutral</h6>
                                                <div className="progress-value d-block text-muted h6">3 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width: ((reviewCounts['3']/patientReviews.length) *100)+"%"}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Dissatisfied</h6>
                                                <div className="progress-value d-block text-muted h6">2 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width: ((reviewCounts['2']/patientReviews.length) *100)+"%"}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Very Dissatisfied</h6>
                                                <div className="progress-value d-block text-muted h6">1 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width: ((reviewCounts['1']/patientReviews.length) *100)+"%"}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}