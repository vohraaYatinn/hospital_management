import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from '../../assets/images/client/01.jpg'
import doctor from '../../assets/images/doctors/01.jpg'
import Wrapper from "../../components/wrapper";
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { deleteHospitalAdminByUjur, editAdminPassword, fetchHospitalAdminData } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import moment from "moment";
import DepartmentSearch from "../../common-components/DepartmentSearch";
import HospitalNameSearch from "../../common-components/HospitalName";
import StatusSearch from "../../common-components/StatusSearch";
import AppointmentSlots from "../../common-components/SlotsSearch";
import DateSearchComponent from "../../common-components/DateSearch";
import DoctorSearch from "../../common-components/DoctorsSearch";
import PatientName from "../../common-components/PatientName";
import { PaginationCountList, handlePagination } from "../../utils/commonFunctions";
import {
    LiaTimesCircleSolid,
    AiOutlineCloseCircle,
    AiOutlineCodepen,
    AiOutlineCodepenCircle,
    LiaUserCircle
  } from "../../assets/icons/vander";
  import { Alert } from "antd";

export default function HospitalAdmins(){
    let [viewProfile, setViewProfile] = useState(false)
    let [editProfile, setEditProfile] = useState(false)
    let [selectedAdmin, setSelectedAdmin] = useState()
    const [password, setPassword] = useState("");
    const [selectedAppointment, setSelectedAppointment]= useState()

    const [filters, setFilters] = useState({
    })
    const [HospitalData, setHospitalData] = useState([]);
    const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
    const [message, setMessage] = useState({
        message: "",
        showMessage: false,
        type: "error",
      });
    let [cancle, setCancle] = useState(false);
    const deleteGivenAdmin = () => {
        actionAdminListFetch(editAdminPassword({adminId:selectedAdmin, password:password}))
    }
    const [
      hospitalAdminListResponse,
      hospitalAdminListError,
      hospitalAdminListLoading,
      hospitalAdminListFetch,
    ] = useAxios();
    const [
        actionAdminListResponse,
        actionAdminListError,
        actionAdminListLoading,
        actionAdminListFetch,
      ] = useAxios();
    useEffect(()=>{
        if(actionAdminListResponse?.result == "success"){
            setMessage({
                message: actionAdminListResponse?.message,
                showMessage: true,
                type: "success",
              });
            setCancle(!cancle)
            hospitalAdminListFetch(fetchHospitalAdminData(filters))
        }
    },[actionAdminListResponse])
    useEffect(()=>{
        hospitalAdminListFetch(fetchHospitalAdminData(filters))
    },[filters])
    useEffect(()=>{
        if(hospitalAdminListResponse?.result == "success"){
            setHospitalData(hospitalAdminListResponse?.data)
        }
    },[hospitalAdminListResponse])
    return(
        <Wrapper>
                                <Modal
          show={cancle}
          onHide={() => setCancle(!cancle)}
          animation={false}
          centered
        >
          <Modal.Body>
            <div className="modal-body py-5">
              <div className="text-center">
                <div
                  className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                  style={{ height: "95px", width: "95px" }}
                >
                  <span className="mb-0">
                    <LiaUserCircle className="h1" />
                  </span>
                </div>
                <div className="mt-4">
                  <h4>Change Password</h4>
                 <input className="form-control" onChange={(e)=>{
                    setPassword(e.target.value)
                 }}/>
                  <div className="mt-4">
                    <Link onClick={()=>{
                        
                      deleteGivenAdmin()
                    }} className="btn btn-soft-danger">
                      Submit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Hospital Admin List</h5>

                        {/* <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Hospital Admins</li>
                            </ul>
                        </nav> */}
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
                    <div className="row"> 
                    <div className="row" style={{ marginTop: "1rem" }}>
                    <div className="col-sm-6 col-lg-3">
                                        <HospitalNameSearch filters={filters} setFilters={setFilters} />

                                    </div>
                                    <div className="col-sm-6 col-lg-3 ">
                                       <button
                                        className="form-control btn-check-reset"
                                        onClick={()=>{
                                            setFilters({
                                                hospitalSearch:"",
                                            })
                                        }}
                                        style={{backgroundColor:"red"}}
                                       >Reset</button>

                                    </div>

                            </div>
                        <div className="col-12 mt-4">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>UJUR ID</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>Hospital Name</th>
                                            <th className="border-bottom p-3">Email</th>
                                            <th className="border-bottom p-3">Date</th>
                                            <th className="border-bottom p-3">Change Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {HospitalData.slice(paginationNumber.from, paginationNumber.to).map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                              <td className="p-3">{item.ujur_id}</td>
                                              <td className="p-3">{item.hospital.name}</td>


                                                    <td className="p-3">{item.username}</td>
                                                    <td className="p-3">{moment(item.created_at).format('YYYY-MM-DD')}</td>
                                                    <td className="p-3">{
                                                           <Link
                                                           to="#"
                                                           className="btn btn-icon btn-pills btn-soft-danger"
                                                           onClick={() => {
                                                            setSelectedAdmin(item.id)
                                                             setCancle(!cancle)
                                                           }}
                                                         >
                                                           <AiOutlineCodepenCircle />
                                                         </Link>
                                                    }</td>
                                                    
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Modal show={viewProfile} onHide={()=>setViewProfile(false)} centered>
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Profile</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex align-items-center">
                                <img src={client} className="avatar avatar-small rounded-pill" alt=""/>
                                <h5 className="mb-0 ms-3">Howard Tanner</h5>
                            </div>
                            <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                                <li>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex ms-0">
                                            <h6>Age:</h6>
                                            <p className="text-muted ms-2">25 year old</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6>Gender:</h6>
                                            <p className="text-muted ms-2">Male</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6 className="mb-0">Department:</h6>
                                            <p className="text-muted ms-2 mb-0">Cardiology</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex ms-0">
                                            <h6>Date:</h6>
                                            <p className="text-muted ms-2">20th Dec 2020</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6>Time:</h6>
                                            <p className="text-muted ms-2">11:00 AM</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6 className="mb-0">Doctor:</h6>
                                            <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Modal.Body>
                    </Modal>
                    <Modal show={editProfile} onHide={()=>setEditProfile(false)} centered size="lg">
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Profile Settings</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4">
                                <img src={doctor} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                            </div>

                            <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                <h6 className="">Upload your picture</h6>
                                <p className="text-muted mb-0">For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
                            </div>

                            <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                <Link to="#" className="btn btn-primary">Upload</Link>
                                <Link to="#" className="btn btn-soft-primary ms-2">Remove</Link>
                            </div>
                        </div>
                    
                        <form className="mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input name="name" id="name2" type="text" className="form-control" placeholder="Last Name :"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                    </div> 
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Phone no.</label>
                                        <input name="number" id="number" type="text" className="form-control" placeholder="Phone no. :"/>
                                    </div>                                                                               
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Your Bio Here</label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Bio :"></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save changes"/>
                                </div>
                            </div>
                        </form>
                        </Modal.Body>
                    </Modal>
                    <div className="row text-center">
                        <div className="col-12 mt-4">
                            <div className="d-md-flex align-items-center text-center justify-content-between">
                            <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">

                            { PaginationCountList(handlePagination, paginationNumber , HospitalData, setPaginationNumber) }
                             </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}