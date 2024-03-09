import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Chart from "../../components/dashboard/chart";
import ReviewOne from "../../components/review/reviewOne";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import { latestAppointment, upcomingAppointment} from "../../data/data";
import {FiCalendar, FiArrowRight, RiCalendar2Line} from '../../assets/icons/vander'
import { useRouter } from "../../hooks/use-router";
import useAxios from "../../network/useAxios";
import { fetchDoctorDashboard, fetchDoctorPatientsDashboard, fetchDoctorReviewsDashboard } from "../../urls/urls";
import moment from 'moment';


export default function DoctorDashBoard(){
    const [dashboardData, setDashboardData] = useState([])
    const [dashboardDataPatients, setDashboardDataPatients] = useState([])
    const [dashboardDataReviews, setDashboardDataReviews] = useState([])
    const [dashboardDataResponse, dashboardDataError, dashboardDataLoading, dashboardDataFetch] = useAxios();
    const [dashboardDataPatientResponse, dashboardDataPatientError, dashboardDataPatientLoading, dashboardDataPatientFetch] = useAxios();
    const [dashboardDataReviewsResponse, dashboardDataReviewsError, dashboardDataReviewsLoading, dashboardDataReviewsFetch] = useAxios();

    useEffect(()=>{
        dashboardDataFetch(fetchDoctorDashboard())
        dashboardDataPatientFetch(fetchDoctorPatientsDashboard())
        dashboardDataReviewsFetch(fetchDoctorReviewsDashboard())
    },[])
    useEffect(()=>{
        if(dashboardDataResponse?.result == "success"){
            setDashboardData(dashboardDataResponse?.data)
        }
        },[dashboardDataResponse])
    useEffect(()=>{
        if(dashboardDataPatientResponse?.result == "success"){
            setDashboardDataPatients(dashboardDataPatientResponse?.data)
        }
        if(dashboardDataReviewsResponse?.result == "success"){
            setDashboardDataReviews(dashboardDataReviewsResponse?.data)

        }
        },[dashboardDataPatientResponse, dashboardDataReviewsResponse])
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>
                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                        <h5 className="mb-0">Dashboard</h5>
                        <Chart data={dashboardData}/>

                        <div className="row">
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card border-0 shadow rounded">
                                    <div className="d-flex justify-content-between p-4 border-bottom">
                                        <h6 className="mb-0 d-flex align-items-center"><FiCalendar className="text-primary me-2 h5 mb-0"/> Latest Appointment</h6>
                                        <h6 className="text-muted mb-0">55 Patients</h6>
                                    </div>

                                    <ul className="list-unstyled mb-0 p-4 pt-0">
                                        {dashboardDataPatients?.latest_appointments && dashboardDataPatients?.latest_appointments.map((item,index) =>{
                                            return(
                                                <li className="pt-4 ms-0" key={index}>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-inline-flex">
                                                                <img src={item?.image} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                                <div className="ms-3">
                                                                    <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    <small className="text-muted">{moment(item?.date_appointment).format('YYYY-MM-DD')}</small>
                                                                </div>
                                                            </div>
                                                            <FiArrowRight className="h5 text-dark"/>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card border-0 shadow rounded">
                                    <div className="d-flex justify-content-between p-4 border-bottom">
                                        <h6 className="mb-0"><RiCalendar2Line className="text-primary me-1 h5 mb-0"/> Upcoming Appointment</h6>
                                        <h6 className="text-muted mb-0">55 Patients</h6>
                                    </div>

                                    <ul className="list-unstyled mb-0 p-4 pt-0">
                                        {dashboardDataPatients?.upcoming_appointments &&  dashboardDataPatients?.upcoming_appointments.map((item,index)=>{
                                            return(
                                                <li className="mt-4 ms-0" key={index}>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-inline-flex">
                                                                <img src={item?.image} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                                <div className="ms-3">
                                                                    <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    <small className="text-muted">{moment(item?.date_appointment).format('YYYY-MM-DDTHH:mm:ss[Z]')}</small>
                                                                </div>
                                                            </div>
                                                            <FiArrowRight className="h5 text-dark"/>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 mt-4">
                                <div className="card border-0 shadow rounded">
                                    <div className="p-4 border-bottom">
                                        <h6 className="mb-0">Patient's Review</h6>
                                    </div>

                                    <div className="p-4">
                                       <ReviewOne reviews={dashboardDataReviews}/>

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