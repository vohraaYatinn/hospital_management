import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Crud from "../../components/dashboard/crud";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import client1 from '../../assets/images/client/01.jpg'
import addComments from "../../components/dashboard/addComments";
import useAxios from "../../network/useAxios";
import { doctorApplyFunction, doctorLeaveFunction } from "../../urls/urls";
import { useRouter } from "../../hooks/use-router";
import moment from "moment";
import AddLeave from "../../components/dashboard/addLeave";
import { PaginationCountList, handlePagination } from "../../utils/commonFunctions";
import { Alert } from 'antd';


export default function DoctorLeave(){
    const [fetchLeaveResponse, fetchLeaveError, fetchLeaveLoading, fetchLeaveFetch] = useAxios();
    const [doctorLeaveResponse, doctorLeaveError, doctorLeaveLoading, doctorLeaveFetch] = useAxios();
    const router = useRouter();
    const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
    const[message, setMessage] = useState({
        message:"",
        showMessage:"",
        type:"error"
      })
    const [leaveData, setLeaveData] = useState([])
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        if(fetchLeaveResponse?.result == "success"){
            setLeaveData(fetchLeaveResponse?.data)
            handlePagination(1, setPaginationNumber)
        }
    },[fetchLeaveResponse])
    
    useEffect(()=>{
        if(doctorLeaveResponse?.result == "success"){
            setMessage({
                message:doctorLeaveResponse?.message,
                showMessage:true,
                type:"success"
              })
            fetchLeaves()
        }
        if(doctorLeaveResponse?.result == "failure"){
            setMessage({
                message:doctorLeaveResponse?.message,
                showMessage:true,
                type:"error"
              })
        }
    },[doctorLeaveResponse])
    const fetchLeaves = () =>{
        fetchLeaveFetch(doctorLeaveFunction())
    }
    const submitLeave = () =>{
        doctorLeaveFetch(doctorApplyFunction(formData))
    }
    useEffect(()=>{
        fetchLeaves()
    },[])

    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    {message?.showMessage &&  <Alert 
       style={{marginTop:"1rem", marginBottom:"1rem"}}
       message={message?.message} type={message?.type}
                closable
                
                onClose={()=>{
                  setMessage({
                    message:"",
                    showMessage:false
                  })
                }}
          />}
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-4">
                                <h5 className="mb-0">Leave</h5>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                                
                                <div style={{justifyContent:"space-between"}}>
                                    <form>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-12 col-md-6" style={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>
                                   
                                                                                           <AddLeave setFormData={setFormData} doctorLeaveResponse={doctorLeaveResponse} submitLeave={submitLeave}/>

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
                                                <th className="border-bottom p-3">From Date</th>
                                                <th className="border-bottom p-3">To Date</th>
                                                <th className="border-bottom p-3" style={{minWidth:'100px'}}>Comments</th>
                                                <th className="border-bottom p-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {leaveData.map((item, index) =>{
                                                return(
                                                    <tr key={index}>
                                                        <td className="p-3">
                                                        {moment(item?.from_date).format('YYYY-MM-DD')} </td>
                                                        <td className="p-3">
                                                        {moment(item?.to_date).format('YYYY-MM-DD')} </td>                                                        
                                                        <td className="p-3">{item?.comment}</td>
                                                        <td className="p-3">{item?.status}</td>

        
                                                            
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
                                    { PaginationCountList(handlePagination, paginationNumber , leaveData, setPaginationNumber) }

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