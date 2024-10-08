import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client1 from "../assets/images/client/01.jpg"

import Wrapper from "../components/wrapper";

import { FiEye, MdOutlineCheckCircleOutline, AiOutlineCloseCircle, LiaTimesCircleSolid, LiaRupeeSignSolid } from '../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';
import { fetchRevenueAllHospital } from "../urls/urls";
import useAxios from "../network/useAxios";
import { PaginationCountList, calculateAge, checkAppointmentStatus, checkPaymentStatus, getTodayDate, handlePagination, useIsMobile } from "../utils/commonFunctions";
import { test_url_images } from "../config/environment";
import moment from "moment";
import DoctorSearch from "../common-components/DoctorsSearch";
import { Alert } from "antd";
import InvoiceUjur from "./InvoiceUjur";
import {
    LiaFunnelDollarSolid,
    LiaMoneyBillAlt,
    LiaUndoAltSolid
  } from "../assets/icons/vander";
import DateRange from "../common-components/DateRange";
import PaymentStatusSearch from "../common-components/PaymentStatus.js";
import PaymentModeSearch from "../common-components/PaymentMode.js";

export default function RevenueTab() {
    const isMobile = useIsMobile()
    let [show, setShow] = useState(false);
    let [showDetail, setShowDetail] = useState(false);
    let [acceptsAppointment, setAcceptsAppointment] = useState(false);
    const [appointmentData, setAppointmentsData] = useState([]);
    const [selectedAppointment, setSelectedAppointment]= useState()

    const [filters, setFilters] = useState({
    })
    const [paginationNumber, setPaginationNumber] = useState({
        from:0,
        to:10,
        currentTab:1
    })
    const [invoiceShow, setInvoiceShow] = useState(false)
    const [selectedData, setSelectedData] = useState(false)
    const [
        appointmentsCancelResponse,
        appointmentsCancelError,
        appointmentsCancelLoading,
        appointmentsCancelFetch,
      ] = useAxios();
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
            name: "Queued",
          },

    ]

    const [panels, setPanels] = useState({
        hospital_revenue:"",
        booking_fees:"",
        refunds:"",
    })
    let [cancle, setCancle] = useState(false);
    const [
        appointmentsResponse,
        appointmentsError,
        appointmentsLoading,
        appointmentsFetch,
    ] = useAxios();
    const [message, setMessage] = useState({
        message: "",
        showMessage: "",
        type: "success",
      });
    const fetchAppointmentsData = () => {
        appointmentsFetch(fetchRevenueAllHospital(filters))
    }
    useEffect(() => {
        fetchAppointmentsData()
    }, [filters])
    useEffect(() => {
        if (appointmentsResponse?.result === "success" && appointmentsResponse?.data) {
            const { booking_sum, booking_doctor_fees, refunds_amount } = appointmentsResponse.data.reduce(
                (acc, object) => {
                   
                    if(object.payment_status === "Refund"){
                        const bookingAmount = parseFloat(object?.revenues[0]?.booking_amount || 0);
                        const doctorFees = parseFloat(object?.revenues[0]?.doctor_fees || 0);
                        acc.refunds_amount += (bookingAmount + doctorFees);
                    }
                    else{
                        const bookingAmount = parseFloat(object?.revenues[0]?.booking_amount || 0);
                        const doctorFees = parseFloat(object?.revenues[0]?.doctor_fees || 0);
                        acc.booking_sum += bookingAmount;
                        acc.booking_doctor_fees += doctorFees;
                    }
                    return acc;
                },
                { booking_sum: 0, booking_doctor_fees: 0, refunds_amount:0 }
            );
            console.log(booking_sum?.toFixed(2))
            console.log(booking_doctor_fees?.toFixed(2))
            console.log(refunds_amount?.toFixed(2))
            setPanels({
                booking_fees: booking_sum?.toFixed(2),
                hospital_revenue: booking_doctor_fees?.toFixed(2),
                refunds: refunds_amount?.toFixed(2)
            });
            setAppointmentsData(appointmentsResponse.data);
        }
    }, [appointmentsResponse]);
    useEffect(() => {
        if (
          appointmentsCancelResponse?.result == "success"
        ) {
          fetchAppointmentsData()
    
          setMessage({
            message: appointmentsCancelResponse?.message,
            showMessage: true,
            type: "success",
          });
    
          setCancle(!cancle)
        }
      }, [appointmentsCancelResponse]);
    return (
        <>
            <Wrapper>
                <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="row">
                            <div className="col-xl-9 col-lg-6 col-md-4">
                                <h5 className="mb-0">Revenue Tab</h5>
                                {/* <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                    <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                        <li className="breadcrumb-item">UJUR </li>
                                        <li className="breadcrumb-item active" aria-current="page">Appointment</li>
                                    </ul>
                                </nav> */}
                            </div>
                  
                            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                                
                                <div className="justify-content-md-end">
                                    <form>
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-12 col-md-5">

                                            </div>

                                            <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                                               
                                                <Modal show={show} onHide={() => setShow(!show)} size="lg" centered>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title className='h5'>Book an Appointment</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="modal-body p-3 pt-4">
                                                            <form>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                                            <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Departments</label>
                                                                            <select className="form-select form-control">
                                                                                <option defaultValue="EY">Eye Care</option>
                                                                                <option defaultValue="GY">Gynecologist</option>
                                                                                <option defaultValue="PS">Psychotherapist</option>
                                                                                <option defaultValue="OR">Orthopedic</option>
                                                                                <option defaultValue="DE">Dentist</option>
                                                                                <option defaultValue="GA">Gastrologist</option>
                                                                                <option defaultValue="UR">Urologist</option>
                                                                                <option defaultValue="NE">Neurologist</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Doctor</label>
                                                                            <select className="form-select form-control">
                                                                                <option defaultValue="CA">Dr. Calvin Carlo</option>
                                                                                <option defaultValue="CR">Dr. Cristino Murphy</option>
                                                                                <option defaultValue="AL">Dr. Alia Reddy</option>
                                                                                <option defaultValue="TO">Dr. Toni Kovar</option>
                                                                                <option defaultValue="JE">Dr. Jessica McFarlane</option>
                                                                                <option defaultValue="EL">Dr. Elsie Sherman</option>
                                                                                <option defaultValue="BE">Dr. Bertha Magers</option>
                                                                                <option defaultValue="LO">Dr. Louis Batey</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                                            <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label"> Date : </label>
                                                                            <input name="date" type="date" className="form-control start" placeholder="Select date :" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label" htmlFor="input-time">Time : </label>
                                                                            <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-12">
                                                                        <div className="d-grid">
                                                                            <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                                    <DateRange filters={filters} setFilters={setFilters} />
                                </div>
                                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                                    <PaymentStatusSearch filters={filters} setFilters={setFilters} />
                                </div>
                                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                                    <PaymentModeSearch filters={filters} setFilters={setFilters} />
                                </div>
                                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                                    <DoctorSearch filters={filters} setFilters={setFilters} />
                                </div>
                                    
                                    <div className="col-sm-6 col-lg-3 mt-3">
                                       <button
                                        className="form-control btn-check-reset"
                                        onClick={()=>{
                                            setFilters({
                                                department:"",
                                                hospitalSearch:"",
                                                status:"",
                                                slots:"",
                                                date:"",
                                                doctorName:"",
                                                patientName:"",
                                                paymentStatus:"",
                                                datetimeSearch:"",
                                                startDate:"",
                                                endDate:"",
                                                paymentMode:""
                                            })
                                        }}
                                        style={{backgroundColor:"red", textAlign:"center"}}
                                       >Reset</button>

                                    </div>

                            </div>
                            
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <LiaRupeeSignSolid className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">Rs {panels?.hospital_revenue}</h5>
                      <p className="text-muted mb-0">Hospital Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                <LiaMoneyBillAlt className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">Rs {panels?.booking_fees}</h5>

                      <p className="text-muted mb-0">Booking Fees</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                <LiaUndoAltSolid className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">Rs {panels?.refunds}</h5>

                      <p className="text-muted mb-0">Refunded</p>
                    </div>
                  </div>
                </div>
              </div>
           


            </div>
                            <div className="col-12 mt-4">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom p-3" >S.No</th>
                                                <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Name</th>
                                                <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Phone Number</th>
                                                <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Date</th>
                                                <th className="border-bottom p-3">Time</th>
                                                <th className="border-bottom p-3" style={{ minWidth: '200px' }}>Doctor</th>
                                                <th className="border-bottom p-3">Status</th>
                                                <th className="border-bottom p-3">Payment Status</th>
                                                <th className="border-bottom p-3">Payment Mode</th>
                                                <th className="border-bottom p-3">Hospital Fee</th>
                                                <th className="border-bottom p-3">Booking Fee</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appointmentData.slice(paginationNumber.from, paginationNumber.to).map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="p-3">{paginationNumber.from+index+1}</td>

                                                        <td className="p-3">
                                                            <Link to="#" className="text-dark">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="ms-2">{item.patient.full_name}</span>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td className="p-3"
                                                        style={{
                                                            textWrap:"nowrap"
                                                          }}
                                                       >{item.patient.user.phone}</td>

                                                        <td className="p-3">{moment(item.date_appointment).format('YYYY-MM-DD')}</td>
                                                        <td className="p-3">{item.slot}</td>
                                                        <td className="p-3">
                                                            <Link to="#" className="text-dark">
                                                                <div className="d-flex align-items-center">
                                                                    <img src={test_url_images + item.doctor.profile_picture} className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{objectFit:"cover"}}/>
                                                                    <span className="ms-2">{item.doctor.full_name}</span>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td className="p-3">{checkAppointmentStatus(item.status)}</td>
                                                        <td className="p-3">{checkPaymentStatus(item.payment_status)}</td>
                                                        <td className="p-3">{item.payment_mode}</td>
                                                        <td className="p-3">Rs {item?.revenues[0]?.doctor_fees}</td>
                                                        <td className="p-3">Rs {item?.revenues[0]?.booking_amount}</td>
                                                      
                                                       
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
                                    { PaginationCountList(handlePagination, paginationNumber , appointmentData, setPaginationNumber) }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={showDetail} onHide={() => setShowDetail(!showDetail)} animation={false} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className='h5'>Appointment Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body p-3 pt-4">
                            <div className="d-flex align-items-center">
                                <img src={client1} className="avatar avatar-small rounded-pill" alt="" />
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
                <Modal show={acceptsAppointment} onHide={() => setAcceptsAppointment(!acceptsAppointment)} animation={false} centered>
                    <Modal.Body>
                        <div className="modal-body py-5">
                            <div className="text-center">
                                <div className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto" style={{ height: '95px', width: '95px' }}>
                                    <span className="mb-0"><MdOutlineCheckCircleOutline className="h1" /></span>
                                </div>
                                <div className="mt-4">
                                    <h4>Accept Appointment</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-soft-success">Accept</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <InvoiceUjur show={invoiceShow} setShow={setInvoiceShow}/>

               
            </Wrapper>
        </>
    )
}