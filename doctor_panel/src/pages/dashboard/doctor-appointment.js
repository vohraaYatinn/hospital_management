import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import useAxios from "../../network/useAxios";
import { changeQueueStatus, fetchDoctorAppointments } from "../../urls/urls";
import { useRouter } from "../../hooks/use-router";
import { PaginationCountList, calculateAge, handlePagination, useIsMobile } from "../../utils/commonFunctions";
import DateSearchComponent from "../../common-components/DateSearch";
import StatusSearch from "../../common-components/StatusSearch";
import PatientName from "../../common-components/PatientName";
import Modal from "react-bootstrap/Modal";
import PrescriptionHistory from "../patient/prescriptionHistory";
import { test_url_images } from "../../config/environment";
import convertToPDF from "../../utils/convertToPdf";
import { Alert } from "antd";

export default function DoctorAppointment(){
    const isMobile = useIsMobile();

    const [appointmentsResponse, appointmentsError, appointmentsLoading, appointmentsFetch] = useAxios();
    const [changeQueueResponse, changeQueueError, changeQueueLoading, changeQueueFetch] = useAxios();
    const router = useRouter();
    const { date, status } = useParams();
    const [message, setMessage] = useState({
        message: "",
        showMessage: "",
        type: "",
      });
    let [show, setShow] = useState(false);
    const [htmlDataS, setHTMLData] = useState('Not Available');
    const [selectedData, setSelectedData] = useState('');

    const [appointmentData, setAppointmentData] = useState([])
    const [filterValues, setFilterValues] = useState({});
    const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
    const changeStatusToQueue = (appointmentId) =>{
        if(appointmentId){
            changeQueueFetch(changeQueueStatus({
                appointmentId:appointmentId
            }))
        }
        
    }
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    useEffect(() => {
        setFilterValues((prevFilters) => ({
          ...prevFilters,
          date: date?date:getTodayDate(),
        }));
        if(status && status != "all"){
            setFilterValues((prevFilters) => ({
                ...prevFilters,
                status:status
              }));
        }
    
      }, [date, status]); 
    const searchStatusConstants = [
        {
            value: "completed",
            name: "Completed"
        },
        {
            value: "pending",
            name: "Pending"
        },
        {
            value: "cancel",
            name: "Cancelled"
        },
        {
            value: "queue",
            name: "Queued"
        },
    ]
    const searchSlotConstants = [
        {
            value: "morning",
            name: "Morning"
        },
        {
            value: "afternoon",
            name: "Afternoon"
        },
        {
            value: "evening",
            name: "Evening"
        }
    ]


    useEffect(()=>{
        if(filterValues){
            appointmentsFetch(fetchDoctorAppointments(filterValues))

        }
    },[filterValues])
    useEffect(()=>{
        if(changeQueueResponse?.result == "success"){
            setMessage({
                message: changeQueueResponse?.message,
                showMessage: true,
                type: "success",
              });
              appointmentsFetch(fetchDoctorAppointments(filterValues))
        }
    },[changeQueueResponse])
    useEffect(()=>{
        if(appointmentsResponse?.result == "success"){
            setAppointmentData(appointmentsResponse?.data)
            handlePagination(1, setPaginationNumber)
        }
    },[appointmentsResponse])


    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row " style={{
                    marginBottom:"5rem"
                }}>
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-4">
                                <h5 className="mb-0">Appointment</h5>
                            </div>
                            {message?.showMessage && (
                      <Alert
                        style={{ marginTop: "1rem", marginBottom: "1rem" }}
                        message={message?.message}
                        type={message?.type}
                        closable
                        onClose={() => {
                          setMessage({
                            message: "",
                            showMessage: false,
                          });
                        }}
                      />
                    )}
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
                            <div className="row" style={{marginTop:isMobile?"0.3rem" :"2rem"}}>
                            <div className="col-md-3 col-lg-3 col-sm-12 mb-2">
                                                <PatientName filters={filterValues} setFilters={setFilterValues}/>
                                                </div>
                            <div className="col-md-3 col-lg-3 col-sm-12  mb-2">
                                                <StatusSearch filters={filterValues} setFilters={setFilterValues} statusSearch={searchStatusConstants} name={"status"}/>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-sm-12  mb-2">
                                                <StatusSearch filters={filterValues} setFilters={setFilterValues} statusSearch={searchSlotConstants} name={"slot"}/>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-sm-12  mb-2">
                                                <DateSearchComponent filters={filterValues} setFilters={setFilterValues} label={false}/>
                                                </div>
                                                <div className="row mt-3">
                                                <div className="col-md-3 col-lg-3 col-sm-4 mb-2">
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
                            </div>
                            <div className="col-12 mt-4">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3" style={{minWidth:'50px'}}>Slot Token</th>
                                                <th className="border-bottom p-3">UJUR ID</th>
                                                <th className="border-bottom p-3" style={{minWidth:'100px'}}>Name</th>
                                                <th className="border-bottom p-3">Age</th>
                                                <th className="border-bottom p-3">Gender</th>
                                                <th className="border-bottom p-3" >Block</th>
                                                {/* <th className="border-bottom p-3">Block</th> */}
                                                <th className="border-bottom p-3">Status</th>
                                                <th className="border-bottom p-3">Action</th>
                                                <th className="border-bottom p-3 text-center">Report</th>
                                                <th className="border-bottom p-3">Lab Report</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appointmentData.slice(paginationNumber.from, paginationNumber.to).map((item, index) =>{
                                                return(
                                                    <tr key={index}>
                                                        <th className="p-3">{item.appointment_slot}</th>
                                                        <td className="p-3">{item?.patient?.ujur_id}</td>

                                                        <td className="p-3" >
                                                            <Link to={(item?.status == "pending" || item?.status == "queue") && `/patient-profile/${item?.patient?.id}/${item?.id}`} className="text-dark">
                                                                <div className="d-flex align-items-center">
                                                                    {!(item?.status == "pending" || item?.status == "queue") ?
                                                                    
                                                                    <span className="ms-2" style={{color:"black"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</span>

                                                            :
                                                            <span className="ms-2" style={{color:"blue"}}>{item?.patient?.full_name && item?.patient?.full_name.charAt(0).toUpperCase() + item?.patient?.full_name.slice(1)}</span>

                                                            }
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td className="p-3">{calculateAge(item?.patient?.date_of_birth)}</td>
                                                        <td className="p-3">{item?.patient?.gender =="M"?"Male":"Female"}</td>
                                                        <td className="p-3">{item?.patient?.block}</td>
                                                        <td className={
                                                            item?.status == "cancel" ? "p-3 color-red" : (item?.status == "pending" || item?.status == "queue")? "p-3 color-yellow" : item?.status == "completed" ? "p-3 color-green" :""
                                                        }
                                                        >{item?.status}</td>
                                                        <td className={
                                                            "p-3"
                                                        }
                                                        >
                                                            {item?.status == "pending" &&
                                                            <button style={{
                                                            background: "yellow", color:"black", padding:"0.3rem", width:"4rem", borderRadius:"100px"
                                                           
                                                    }}  onClick={(()=>{
                                                                changeStatusToQueue(item?.id)
                                                            })} >Queue</button>}
                                                            
                                                            
                                                            </td>
                                                        <td className="p-3" style={
                                                            item?.prescription &&
                                                            {
                                                            display:"flex",
                                                            flexDirection:"column",
                                                            alignItems:"center",
                                                            justifyContent:"center"
                                                        }
                                                    
                                                    }>{item?.prescription && <button style={{
                                                                background: "rgb(56, 108, 240)", color:"white", padding:"0.3rem", width:"4rem", borderRadius:"100px"
                                                        }}
                                                        onClick={()=>{
                                                            if(item?.prescription_method == "digital"){
                                                                setShow(true)
                                                                setHTMLData(item.pdf_content)
                                                                setSelectedData(item)
                                                            }
                                                            else{
                                                                window.open(test_url_images + item.prescription, '_blank');
                                                            }
                                                          
                                                        }}
                                                        >View</button>}
                                                       {(item?.prescription_method == "manual" && item?.prescription )&&<p style={{
                                                        margin:"0rem",
                                                        fontSize:"0.8rem",
                                                        textAlign:"center",
                                                        color:"#ff9700"
                                                       }}>( Manual )</p>}
                                                        </td>
                            <td className="p-3">
                            {
                                  item.lab_report &&  <button
                                  style={{marginRight:"1rem",  borderRadius:"100px",color:"black" ,background: "rgb(56, 108, 240)", color:"white", padding:"0.3rem",width:"4rem", border:"2px solid black"}}
                                  className="btn btn-icon "
                                  onClick={() => {
                                
                                    window.open(test_url_images + item.lab_report, '_blank');
                                  }}
                                >View
                                </button>
                                }
                               
                            </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            size="lg"
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title className="h5">
                              Patient History Prescription
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <PrescriptionHistory htmlContent={htmlDataS} />
                              <button
     className="btn btn-primary"
     style={{marginRight:"1rem" , marginTop:"2rem"}}
     onClick={()=>{
        window.open(test_url_images + selectedData.prescription, '_blank');
     }}
     >Download</button>
                            </Modal.Body>
                          </Modal>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12 mt-4">
                                <div className="d-md-flex align-items-center text-center justify-content-between">
                                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                        { PaginationCountList(handlePagination, paginationNumber , appointmentData, setPaginationNumber) }
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter />
        <ScrollTop/>
        </>
    )
}