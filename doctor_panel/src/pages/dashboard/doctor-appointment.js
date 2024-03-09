import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AddApointment from "../../components/dashboard/addAppointment";
import Crud from "../../components/dashboard/crud";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import client1 from '../../assets/images/client/01.jpg'

import { appointmentData } from "../../data/data";
import addComments from "../../components/dashboard/addComments";
import useAxios from "../../network/useAxios";
import { fetchDoctorAppointments } from "../../urls/urls";
import { useRouter } from "../../hooks/use-router";
import moment from "moment";

export default function DoctorAppointment(){
    const [appointmentsResponse, appointmentsError, appointmentsLoading, appointmentsFetch] = useAxios();
    const router = useRouter();
    const [appointmentData, setAppointmentData] = useState([])
    const [filterValues, setFilterValues] = useState({});

    useEffect(() => {
      const currentDate = new Date().toISOString().split('T')[0];
      const currentHour = new Date().getHours();

      // Determine the slot based on the current time
      let calculatedSlot = '';
  
      if (currentHour >= 6 && currentHour < 12) {
        calculatedSlot = 'morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        calculatedSlot = 'afternoon';
      } else {
        calculatedSlot = 'evening';
      }
      setFilterValues({
        "date": currentDate,
        "slot": calculatedSlot
      });
    }, []);
    useEffect(()=>{
        if(filterValues){
            appointmentsFetch(fetchDoctorAppointments(filterValues))

        }
    },[filterValues])
    useEffect(()=>{
        if(appointmentsResponse?.result == "success"){
            setAppointmentData(appointmentsResponse?.data)
        }
    },[appointmentsResponse])
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-4">
                                <h5 className="mb-0">Appointment</h5>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                                <div style={{justifyContent:"space-between"}}>
                                    <form>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-12 col-md-6" style={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>
                                                <div className="mb-0 position-relative">
                                                    <select className="form-select form-control"  style={{width:"10rem"}}
                                                    value={filterValues?.slot}
                                                                    onChange={(e)=>{
                                                                        setFilterValues((prev)=>({...prev, 'slot': e.target.value}))
                                                                    }}
                                                    >
                                                        <option value="morning">Morning</option>
                                                        <option value="afternoon">Afternoon</option>
                                                        <option value="evening">Evening</option>
                                                    </select>
                                                </div>
                                                <div className="mb-0 position-relative">
                                                <input
                                                style={{width:"10rem"}}
                type="date"
                className="form-control"
                id="datetimeField"
                name="datetimeField"
                defaultValue={filterValues?.date}
                onChange={(e)=>{
                    setFilterValues((prev)=>({...prev, 'date': e.target.value}))
                }}


            />
                                                </div>
                                                                                           <AddApointment/>

                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th>
                                                <th className="border-bottom p-3" style={{minWidth:'100px'}}>Name</th>
                                                <th className="border-bottom p-3">Age</th>
                                                <th className="border-bottom p-3">Gender</th>
                                                {/* <th className="border-bottom p-3">Department</th> */}
                                                <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>
                                                <th className="border-bottom p-3">Time Slot</th>
                                                {/* <th className="border-bottom p-3" style={{minWidth:'220px'}}>Doctor</th> */}
                                                <th className="border-bottom p-3">Fees</th>
                                                <th className="border-bottom p-3">Status</th>
                                                {/* <th className="border-bottom p-3" style={{minWidth:'150px'}}></th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appointmentData.map((item, index) =>{
                                                return(
                                                    <tr key={index}>
                                                        <th className="p-3">{item.id}</th>
                                                        <td className="p-3">
                                                            <Link to={`/patient-profile/${item?.patient?.id}/${item?.id}`} className="text-dark">
                                                                <div className="d-flex align-items-center">
                                                                    <img src={client1} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                    <span className="ms-2">{item?.patient?.full_name}</span>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td className="p-3">{item?.patient?.date_of_birth}</td>
                                                        <td className="p-3">{item?.patient?.gender =="M"?"Male":"Female"}</td>
                                                        {/* <td className="p-3">{item.department}</td> */}
                                                        <td className="p-3">{moment(item?.date_appointment).format('YYYY-MM-DD')}</td>
                                                        <td className="p-3">{item?.slot}</td>
                                                        {/* <td className="p-3">
                                                            <Link to="#" className="text-dark">
                                                                <div className="d-flex align-items-center">
                                                                    <img src={item.drImage} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                                    <span className="ms-2">{item.drName}</span>
                                                                </div>
                                                            </Link>
                                                        </td> */}
                                                        <td className="p-3">{"500"}</td>
                                                        <td className="p-3">{item?.status}</td>

                                                {/* {item.status === 'Pending' ? (
    <div style={{display:"flex", gap:"0.3rem", alignItems:"center", justifyContent:"start"}}>
    <div className="dot" style={{ backgroundColor: "red" , width:"1rem", height:"1rem", borderRadius: "50%" }}></div><p style={{marginBottom:"0rem"}}>{item.status}</p>
  </div>
) : (

    <div style={{display:"flex", gap:"0.3rem", alignItems:"center",  justifyContent:"start"}}>
  <div className="dot" style={{ backgroundColor: "green" , width:"1rem", height:"1rem", borderRadius: "50%"}}></div><p style={{marginBottom:"0rem"}}>{item.status}</p>
  </div>
)} */}
                                                            
                                                        {/* <Crud/> */}
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
                                    <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                        <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                                    </ul>
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