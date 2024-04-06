import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import client1 from '../../assets/images/client/01.jpg'
import { PaginationCountList, handlePagination } from "../../utils/commonFunctions";

import { patientsData2 } from "../../data/data";
import { useRouter } from "../../hooks/navigator";
import useAxios from "../../network/useAxios";
import { fetchAllDoctorPatients } from "../../urls/urls";
import { calculateAge } from "../../utils/commonFunctions";
import PatientName from "../../common-components/PatientName";

export default function PatientList(){
    let [show, setShow] = useState('')
    const [filters, setFilters] = useState({})
    const router = useRouter();
    const [patientListData, setPatietsList] = useState([])
    const [patientListResponse, patientListError, patientListLoading, patientListFetch] = useAxios();

    useEffect(()=>{
        patientListFetch(fetchAllDoctorPatients(filters))
    },[filters])
    useEffect(()=>{
        if(patientListResponse?.result == "success"){
            setPatietsList(patientListResponse?.data)
            handlePagination(1, setPaginationNumber)

        }
        },[patientListResponse])
        const [paginationNumber, setPaginationNumber] = useState({
            from:0,
            to:10,
            currentTab:1
        })
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
                        <h5 className="mb-2">Patients List</h5>
                        <div className="row">
                            <div className="row">
                                <div className="col-3">
                                <PatientName filters={filters} setFilters={setFilters}/>
                                </div>
                                <div className="col-sm-6 col-lg-3">
   <button
    className="form-control btn-check-reset"
    onClick={()=>{
        setFilters({
            patientName:""
        })
    }}
    style={{backgroundColor:"red"}}
   >Reset</button>

</div>
                            </div>
                            {patientListData.slice(paginationNumber.from, paginationNumber.to).map((item, index) =>{
                                return(
                                    <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2 " key={index}>
                                        <div className="card border-0 shadow rounded p-4 doctor-patient-app" 
                                        onClick={()=> router.push(`/patient-profile-show/${item?.id}`)}
                                        >
                                            <div className="d-flex justify-content-between">
                                                <img src={client1} className="avatar avatar-md-md rounded-pill shadow" alt=""/>
                                                

                                               </div>
                                           

                                            <div className="card-body p-0 pt-3">
                                                <Link to="#" className="text-dark h6">{item?.full_name}</Link>
                                                
                                                <ul className="mb-0 list-unstyled mt-2">
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Gender:</span>{item?.gender}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Age:</span>{calculateAge(item?.date_of_birth)}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">District:</span>{item.district}</li>
                                                    <li className="mt-1 ms-0"><span className="text-muted me-2">Block:</span>{item.block}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row text-center">
                            <div className="col-12 mt-4 pt-2">
                            <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">

                            { PaginationCountList(handlePagination, paginationNumber , patientListData, setPaginationNumber) }
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