import React,{useState} from "react";
import { Link } from "react-router-dom";
import client1 from "../assets/images/client/01.jpg";
import Wrapper from "../components/wrapper";
import { departmentData } from "../data/data";
import {MdOutlineCheckCircleOutline, LiaTimesCircleSolid} from '../assets/icons/vander';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { addDepartmentAdmin, addDepartmentHospital, fetchDepartmentAll, fetchSoftwareDepartmentHospital } from "../urls/urls";
import useAxios from "../network/useAxios";
import { Alert } from 'antd';


export default function Departments(){
    let [show, setShow] = useState(false);
    let [showDetail, setShowDetail] = useState(false);
    let [acceptsDepartments, setAcceptsDepartments] = useState(false);
    const [departmentsSoftware, setSoftwaresData] = useState([])
    const [formValues, setFormValues] = useState({
        departmentId:"new"
    })
    let [cancle, setCancle] = useState(false);
    const [departmentsValues, setDepartmentValues] = useState([]);
    const [
        departmentsResponse,
        departmentsError,
        departmentsLoading,
        departmentsFetch,
      ] = useAxios();
    const [
        getSoftwareDepartmentsResponse,
        getSoftwareDepartmentssError,
        getSoftwareDepartmentssLoading,
        getSoftwareDepartmentssFetch,
      ] = useAxios();
    const [
        addDepartmentsResponse,
        addDepartmentssError,
        addDepartmentssLoading,
        addDepartmentssFetch,
      ] = useAxios();
    const fetchDepartmentFunc = () => {
        departmentsFetch(fetchDepartmentAll())
    }
    const fetchSoftwaresDepartmentFunc = () => {
        getSoftwareDepartmentssFetch(fetchSoftwareDepartmentHospital())
    }
    const addDepartmentSoftware = () => {
        addDepartmentssFetch(addDepartmentAdmin())
    }
    useEffect(()=>{
        fetchDepartmentFunc()
        fetchSoftwaresDepartmentFunc()
    },[])
    useEffect(()=>{
        if(departmentsResponse?.result == "success" && departmentsResponse?.data){
            setDepartmentValues(departmentsResponse?.data)
        }
    },[departmentsResponse])
    useEffect(()=>{
        if(getSoftwareDepartmentsResponse?.result == "success" && getSoftwareDepartmentsResponse?.data){
            setSoftwaresData(getSoftwareDepartmentsResponse?.data)
        }
    },[getSoftwareDepartmentsResponse])
    const[message, setMessage] = useState({
        message:"",
        showMessage:""
      })
    useEffect(()=>{
        if(addDepartmentsResponse?.result == "success"){
            setMessage({
                message:addDepartmentsResponse?.message,
                showMessage:true
              })
            setShow(!show)
        }
    },[addDepartmentsResponse])


    return(
        <>
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="row">
                        <div className="col-xl-9 col-lg-6 col-md-4">
                            <h5 className="mb-0">Departments</h5>
                            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Departments</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                            <div className="justify-content-md-end">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-sm-12 col-md-5">
                                           
                                        </div>
                                        
                                        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                        
                                            <div className="d-grid">
                                                <Link to="#" className="btn btn-primary" onClick={() =>setShow(!show)}>Add New</Link>
                                            </div>
                                            <Modal show={show} onHide={() =>setShow(!show)} size="lg" centered>
                                                <Modal.Header closeButton>
                                                <Modal.Title className='h5'>Add A New Department</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal-body p-3 pt-4">
                                                            <div className="row">
                                                         
                                                                <div className="col-lg-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Add New Department <span className="text-danger">*</span></label>
                                                                        <input name="department" id="comments" rows="4" className="form-control" placeholder="New Department Name :" disabled={formValues?.departmentId != "new"}
                                                                                                                                                onChange={(e)=>{
                                                                                                                                                    setFormValues((prev)=>({...prev, departmentName:e.target.value}))
                                                                                                                                                }}
                                                                        ></input>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :" disabled={formValues?.departmentId != "new"}
                                                                          onChange={(e)=>{
                                                                            setFormValues((prev)=>({...prev, departmentComments:e.target.value}))
                                                                        }}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className="d-grid">
                                                                        <button type="submit" onClick={addDepartmentSoftware} className="btn btn-primary">Add An Department</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                    {message?.showMessage &&  <Alert 
       style={{marginTop:"1rem"}}
       message={message?.message} type="success" 
                closable
                onClose={()=>{
                  setMessage({
                    message:"",
                    showMessage:false
                  })
                }}
          />}
                        <div className="col-12 mt-4">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>Name</th>
                                            <th className="border-bottom p-3">Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {departmentsValues.map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                                <td className="p-3">{item.id}</td> {/* ID */}
                                                <td className="p-3">
                                                    <Link to="#" className="text-dark">
                                                        <div className="d-flex align-items-center">
                                                            {/* Assuming you want to show some avatar/name related to the department or client, adjust as needed */}
                                                            <span className="ms-2">{item.name}</span> {/* Department Name */}
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="p-3">{item.description}</td> {/* Department Description */}
                                                {/* Removed other <td>'s as they are not defined in your <th>'s */}
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
            <Modal show={showDetail} onHide={() =>setShowDetail(!showDetail)} animation={false} centered>
                <Modal.Header closeButton>
                <Modal.Title className='h5'>Departments Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body p-3 pt-4">
                        <div className="d-flex align-items-center">
                            <img src={client1} className="avatar avatar-small rounded-pill" alt=""/>
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
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={acceptsDepartments} onHide={() =>setAcceptsDepartments(!acceptsDepartments)} animation={false} centered>
                <Modal.Body>
                    <div className="modal-body py-5">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                                <span className="mb-0"><MdOutlineCheckCircleOutline  className="h1"/></span>
                            </div>
                            <div className="mt-4">
                                <h4>Accept Deparments</h4>
                                <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-soft-success">Accept</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={cancle} onHide={() =>setCancle(!cancle)} animation={false} centered>
                <Modal.Body>
                    <div className="modal-body py-5">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                                <span className="mb-0"><LiaTimesCircleSolid className='h1'/></span>
                            </div>
                            <div className="mt-4">
                                <h4>Cancel Deparments</h4>
                                <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-soft-danger">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Wrapper>
        </>
    )
}