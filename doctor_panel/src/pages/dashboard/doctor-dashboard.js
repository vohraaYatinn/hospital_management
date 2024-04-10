import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Chart from "../../components/dashboard/chart";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import { FiCalendar, FiArrowRight, RiCalendar2Line } from '../../assets/icons/vander'
import { useRouter } from "../../hooks/use-router";
import useAxios from "../../network/useAxios";
import { fetchDoctorDashboard, fetchDoctorPatientsDashboard } from "../../urls/urls";
import moment from 'moment';
import { Radio } from 'antd';

import DateSearchComponent from "../../common-components/DateSearch";
import { test_url_images } from "../../config/environment";
import { calculateAge } from "../../utils/commonFunctions";


export default function DoctorDashBoard() {
    const [filters, setFilters] = useState({
        date:""
    })
    const [dashboardData, setDashboardData] = useState([])
    const [dashboardDataPatients, setDashboardDataPatients] = useState([])
    const [dashboardDataResponse, dashboardDataError, dashboardDataLoading, dashboardDataFetch] = useAxios();
    const [dashboardDataPatientResponse, dashboardDataPatientError, dashboardDataPatientLoading, dashboardDataPatientFetch] = useAxios();
    const dateRef = useRef(null);


    useEffect(() => {
        if(filters?.date){
            dashboardDataFetch(fetchDoctorDashboard())
            dashboardDataPatientFetch(fetchDoctorPatientsDashboard(filters))
        }

    }, [filters])
    useEffect(() => {
        // Function to get today's date in the format YYYY-MM-DD
        const getTodayDate = () => {
          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const day = String(today.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        };
    
        // Set the default value of the date filter to today's date
        setFilters((prevFilters) => ({
          ...prevFilters,
          date: getTodayDate()
        }));
      }, []); 
    useEffect(() => {
        if (dashboardDataResponse?.result == "success") {
            setDashboardData(dashboardDataResponse?.data)
        }
    }, [dashboardDataResponse])
    useEffect(() => {
        if (dashboardDataPatientResponse?.result == "success") {
            setDashboardDataPatients(dashboardDataPatientResponse?.data)
        }

    }, [dashboardDataPatientResponse])
    const router = useRouter();

    const [radio, setRadio] = useState('Week');

    const optionsRadio = [
        {
          label: 'Week',
          value: 'Week',
        },
        {
          label: 'Month',
          value: 'Month',
        },
        {
          label: 'Year',
          value: 'Year',
        },
      ];
      const onChangeRadio = ({ target: { value } }) => {
        setRadio(value);
      };

    return (
        <>
            <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid" />
            <section className="bg-dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
                        <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                            <h5 className="mb-0">Dashboard</h5>
                            <Chart data={dashboardData} />

                            <div className="row mt-4">
                            <div className="col-9" >
                            </div>

                            <div className="col-3" >
                            <Radio.Group options={optionsRadio} onChange={onChangeRadio} value={radio} optionType="button" />
                                </div>
                                </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 mt-1 mt-sm-0 " >
                                    <label style={{marginTop:'1.3rem'}}>Appointment Dates</label>
                                    <DateSearchComponent filters={filters} setFilters={setFilters} ref={dateRef}
                                    onClick={()=>{
                                        dateRef.current.click()
                                    }}
                                    />

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"
                                        style={{
                                            background: "#386cf0",
                                            color: "white"
                                        }}
                                        >
                                            <h6 className="mb-0 text-dashboard-change">Total Appointment</h6>
                                            <h6 className="mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.total_appointments_count} Patients</h6>
                                        </div>
                                        

                                        <ul className="list-unstyled mb-0 p-4 pt-0">
                                            {dashboardDataPatients?.total_appointments && dashboardDataPatients?.total_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0" key={index}>
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row">
                                                            <div className="col-3">
                                                                <img src={test_url_images + item?.patient?.profile_picture} 
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"1.2rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.5rem", color:"black"}}>
                                                                <div className="col-7" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.ujur_id}
                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.7rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"
                                                                                style={{
                                                                                    background: "#f1b560",
                                                                                    color: "white"
                                                                                }}
                                        >
                                            <h6 className="mb-0 text-dashboard-change">Pending Appointment</h6>
                                            <h6 className=" mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.pending_appointments_count} Patients</h6>
                                        </div>
       
                                        <ul className="list-unstyled mb-0 p-4 pt-0">
                                            {dashboardDataPatients?.pending_appointments && dashboardDataPatients?.pending_appointments.map((item, index) => {
                                                return (
                                                    <li className="mt-4 ms-0" key={index} onClick={()=>{
                                                        router.push(`/patient-profile/${item?.patient?.id}/${item?.id}`)
                                                    }}>
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row">
                                                            <div className="col-3">
                                                                <img src={test_url_images + item?.patient?.profile_picture} 
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"1.2rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.5rem", color:"black"}}>
                                                                <div className="col-7" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.ujur_id}
                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.7rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"     style={{
                                                                                    background: "#f0735a",
                                                                                    color: "white"
                                                                                }}>
                                            <h6 className="mb-0 text-dashboard-change">Canceled Appointment</h6>
                                            <h6 className="mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.canceled_appointments_count} Patients</h6>
                                        </div>
      
                                        <ul className="list-unstyled mb-0 p-4 pt-0">
                                            {dashboardDataPatients?.canceled_appointments && dashboardDataPatients?.canceled_appointments.map((item, index) => {
                                                return (
                                                    <li className="pt-4 ms-0" key={index}>
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row">
                                                            <div className="col-3">
                                                                <img src={test_url_images + item?.patient?.profile_picture} 
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"1.2rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.5rem", color:"black"}}>
                                                                <div className="col-7" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.ujur_id}
                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.7rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-6 mt-4">
                                    <div className="card border-0 shadow rounded">
                                        <div className="d-flex justify-content-between p-4 border-bottom"  style={{
                                                                                    background: "#53c797",
                                                                                    color: "white"
                                                                                }}>
                                            <h6 className="mb-0 text-dashboard-change">Completed Appointment</h6>
                                            <h6 className=" mb-0" style={{opacity:"80%"}}>{dashboardDataPatients?.completed_appointments_count} Patients</h6>
                                        </div>

                                        <ul className="list-unstyled mb-0 p-4 pt-0">
                                            {dashboardDataPatients?.completed_appointments && dashboardDataPatients?.completed_appointments.map((item, index) => {
                                                return (
                                                    <li className="mt-4 ms-0" key={index}>
                                                        <Link to="#">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="row">
                                                            <div className="col-3">
                                                                <img src={test_url_images + item?.patient?.profile_picture} 
                                                                style={{
                                                                    width:"3rem",
                                                                    height:"3rem",
                                                                    border:"1px solid transparent",
                                                                    borderRadius:"100px"
                                                                }}
                                                                />
                                                            </div>
                                                            <div className="col-9">
                                                                <div className="row " style={{marginLeft:"0.5rem", color:"black", fontSize:"1.2rem"}}>
                                                                <p style={{textAlign:"start", marginBottom:"0rem"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</p>
                                                                </div>
                                                                <div className="row" style={{marginLeft:"0.5rem", color:"black"}}>
                                                                <div className="col-7" style={{fontSize:"0.6rem"}}>
                                                                {item?.patient?.ujur_id}
                                                                </div>
                                                                <div className="col-4" style={{fontSize:"0.7rem"}}>
                                                                {calculateAge(item?.patient?.date_of_birth)}

                                                                </div>
                                                            
                                                                </div>
                                                            </div>
                                                            </div>

                                                            </div>
                                                            {/* <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-inline-flex">
                                                                    <div className="ms-3">
                                                                        <h6 className="text-dark mb-0 d-block">{item?.patient?.full_name}</h6>
                                                                    </div>
                                                                </div>
                                                                <FiArrowRight className="h5 text-dark" />
                                                            </div> */}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <AdminFooter />
            <ScrollTop />
        </>
    )
}