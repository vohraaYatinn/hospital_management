import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import client1 from '../../assets/images/client/01.jpg'

import { patientsData2 } from "../../data/data";
import { useRouter } from "../../hooks/navigator";
import useAxios from "../../network/useAxios";
import { fetchAllDoctorPatients } from "../../urls/urls";
import { calculateAge } from "../../utils/commonFunctions";

export default function PatientList(){
    let [show, setShow] = useState('')
    const router = useRouter();
    const [patientListData, setPatietsList] = useState([])
    const [patientListResponse, patientListError, patientListLoading, patientListFetch] = useAxios();

    useEffect(()=>{
        patientListFetch(fetchAllDoctorPatients())
    },[])
    useEffect(()=>{
        if(patientListResponse?.result == "success"){
            setPatietsList(patientListResponse?.data)
        }
        },[patientListResponse])

    useEffect(()=>{
        const modalClose =()=>{
            setShow(false)
        }
        document.addEventListener("mousedown", modalClose);
        return ()=>{
            document.removeEventListener("mousedown", modalClose);
        }
    },[])

    let handleShow =(id)=>{
        setShow(id)
    }
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <h5 className="mb-0">Patients List</h5>
                        <div className="row">
                            {patientListData.map((item, index) =>{
                                return(
                                    <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2 " key={index}>
                                        <div className="card border-0 shadow rounded p-4 doctor-patient-app" 
                                        onClick={()=> router.push(`/patient-profile/${item?.id}`)}
                                        >
                                            <div className="d-flex justify-content-between">
                                                <img src={client1} className="avatar avatar-md-md rounded-pill shadow" alt=""/>
                                                

                                               </div>
                                           

                                            <div className="card-body p-0 pt-3">
                                                <Link to="#" className="text-dark h6">{item?.full_name}</Link>
                                                <p className="text-muted">{item.id}</p>
                                                
                                                <ul className="mb-0 list-unstyled mt-2">
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Gender:</span>{item?.gender}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Age:</span>{calculateAge(item?.date_of_birth)}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Blood Group:</span>{item.blood_group}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">District:</span>{item.district}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row text-center">
                            <div className="col-12 mt-4 pt-2">
                                <ul className="pagination justify-content-center mb-0 list-unstyled">
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
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}