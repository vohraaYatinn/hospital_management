import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper";
import {
  FiEye,
  MdOutlineCheckCircleOutline,
  AiOutlineCloseCircle,
  LiaTimesCircleSolid,
  AiOutlineFileExcel,
  LiaSignOutAltSolid,
  LiaSortNumericDownSolid,
} from "../assets/icons/vander";
import Modal from "react-bootstrap/Modal";
import { CancelAppointmentHospital, HospitalAppointmentAction, ageGenderGraphsFetch, fetchAppointmentsHospital } from "../urls/urls";
import useAxios from "../network/useAxios";
import { PaginationCountList, calculateAge, capitalizeFirstChar, checkAppointmentStatus, checkPaymentStatus, getTodayDate, handlePagination, useIsMobile } from "../utils/commonFunctions";
import { test_url_images } from "../config/environment";
import moment from "moment";
import PatientName from "../common-components/PatientName";
import DoctorSearch from "../common-components/DoctorsSearch";
import DateSearchComponent from "../common-components/DateSearch";
import AppointmentSlots from "../common-components/SlotsSearch";
import StatusSearch from "../common-components/StatusSearch";
import { Alert } from "antd";
import InvoiceUjur from "./InvoiceUjur";
import PaymentStatusSearch from "../common-components/PaymentStatus";
import PaymentModeSearch from "../common-components/PaymentMode";
import { Spin } from 'antd';
import { Skeleton } from 'antd';


export default function Appointment() {
  const isMobile = useIsMobile()

  let [show, setShow] = useState(false);
  let [showDetail, setShowDetail] = useState(false);
  let [acceptsAppointment, setAcceptsAppointment] = useState(false);
  const [appointmentData, setAppointmentsData] = useState([]);
  const [selectedAppointment, setSelectedAppointment]= useState()
  let [cancle, setCancle] = useState(false);
  const [filters, setFilters] = useState({
    sort:true,
    date: getTodayDate()
  });
  const [invoiceShow, setInvoiceShow] = useState(false)



  const [paginationNumber, setPaginationNumber] = useState({
    from:0,
    to:10,
    currentTab:1
})
const [formActionApi, setFormActionApi] = useState({})
const hospitalActionFunc = () => {
  hospitalAppointmentsActionFetch(HospitalAppointmentAction(formActionApi));
}
  useEffect(()=>{
    if(formActionApi?.action){
      hospitalActionFunc()
    }
  },[formActionApi])

  const [
    hospitalAppointmentsActionResponse,
    hospitalAppointmentsActionError,
    hospitalAppointmentsActionLoading,
    hospitalAppointmentsActionFetch,
  ] = useAxios();
  const [
    appointmentsResponse,
    appointmentsError,
    appointmentsLoading,
    appointmentsFetch,
  ] = useAxios();
  const [
    appointmentsCancelResponse,
    appointmentsCancelError,
    appointmentsCancelLoading,
    appointmentsCancelFetch,
  ] = useAxios();
  const searchStatusConstants = [
    {
      value: "completed",
      name: "Completed",
    },
    {
      value: "pending",
      name: "Pending",
    },
    {
      value: "past",
      name: "Past",
    },
    {
      value: "cancel",
      name: "Cancelled",
    },
    {
      value: "queue",
      name: "Queued",
    },
  ];

  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
    type: "error",
  });
  const fetchAppointmentsData = () => {
    appointmentsFetch(fetchAppointmentsHospital(filters));
  };
  const cancelGivenAppointment = () => {
    appointmentsCancelFetch(CancelAppointmentHospital({appointmentId:selectedAppointment}));
  };
  useEffect(() => {
    fetchAppointmentsData();
  }, [filters]);
  useEffect(() => {
    if(hospitalAppointmentsActionResponse?.result == "success"){
      setShowDetail(false)
      fetchAppointmentsData();
    }
  }, [hospitalAppointmentsActionResponse]);
  useEffect(() => {
    if (
      appointmentsResponse?.result == "success" &&
      appointmentsResponse?.data
    ) {
      setAppointmentsData(appointmentsResponse?.data);
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
  useEffect(() => {
    if(appointmentsCancelError){
      setMessage({
        message: appointmentsCancelError?.response?.data?.message,
        showMessage: true,
        type: "error",
      });
    }
    
  }, [appointmentsCancelError]);
  // useEffect(() => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     date: getTodayDate(),
  //   }));
  // }, []); 
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="layout-specing">
            <div className="row">
              <div className="col-xl-9 col-lg-6 col-md-4">
                <h5 className="mb-0">Appointment</h5>
                {/* <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                  <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                    <li className="breadcrumb-item">
                      <Link>UJUR</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Appointment
                    </li>
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
              <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                <div className="justify-content-md-end">
                  <form>
                    <div className="row justify-content-between align-items-center">
                      <div className="col-sm-12 col-md-5"></div>

                      <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                        {/* <div className="d-grid">
                                                <Link to="#" className="btn btn-primary" onClick={() =>setShow(!show)}>Appointment</Link>
                                            </div> */}
                        <Modal
                          show={show}
                          onHide={() => setShow(!show)}
                          size="lg"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title className="h5">
                              Book an Appointment
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="modal-body p-3 pt-4">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Patient Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Patient Name :"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Departments
                                      </label>
                                      <select className="form-select form-control">
                                        <option defaultValue="EY">
                                          Eye Care
                                        </option>
                                        <option defaultValue="GY">
                                          Gynecologist
                                        </option>
                                        <option defaultValue="PS">
                                          Psychotherapist
                                        </option>
                                        <option defaultValue="OR">
                                          Orthopedic
                                        </option>
                                        <option defaultValue="DE">
                                          Dentist
                                        </option>
                                        <option defaultValue="GA">
                                          Gastrologist
                                        </option>
                                        <option defaultValue="UR">
                                          Urologist
                                        </option>
                                        <option defaultValue="NE">
                                          Neurologist
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Doctor
                                      </label>
                                      <select className="form-select form-control">
                                        <option defaultValue="CA">
                                          Dr. Calvin Carlo
                                        </option>
                                        <option defaultValue="CR">
                                          Dr. Cristino Murphy
                                        </option>
                                        <option defaultValue="AL">
                                          Dr. Alia Reddy
                                        </option>
                                        <option defaultValue="TO">
                                          Dr. Toni Kovar
                                        </option>
                                        <option defaultValue="JE">
                                          Dr. Jessica McFarlane
                                        </option>
                                        <option defaultValue="EL">
                                          Dr. Elsie Sherman
                                        </option>
                                        <option defaultValue="BE">
                                          Dr. Bertha Magers
                                        </option>
                                        <option defaultValue="LO">
                                          Dr. Louis Batey
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Your Email{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Your email :"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Your Phone{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        name="phone"
                                        id="phone"
                                        type="tel"
                                        className="form-control"
                                        placeholder="Your Phone :"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        {" "}
                                        Date :{" "}
                                      </label>
                                      <input
                                        name="date"
                                        type="date"
                                        className="form-control start"
                                        placeholder="Select date :"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="input-time"
                                      >
                                        Time :{" "}
                                      </label>
                                      <input
                                        name="time"
                                        type="text"
                                        className="form-control timepicker"
                                        id="input-time"
                                        placeholder="03:30 PM"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Comments{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <textarea
                                        name="comments"
                                        id="comments"
                                        rows="4"
                                        className="form-control"
                                        placeholder="Your Message :"
                                      ></textarea>
                                    </div>
                                  </div>

                                  <div className="col-lg-12">
                                    <div className="d-grid">
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        Book An Appointment
                                      </button>
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

            <div className="row">
              <div className="row" style={{ marginTop: "1rem" }}>
                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                  <PatientName filters={filters} setFilters={setFilters} />
                </div>
                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                  <DoctorSearch filters={filters} setFilters={setFilters} />
                </div>
                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                  <DateSearchComponent
                    filters={filters}
                    setFilters={setFilters}
                  />
                </div>
                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                  <AppointmentSlots filters={filters} setFilters={setFilters} />
                </div>
              </div>
              <div className="row" style={{ marginTop: "1rem" }}>
                <div className="col-sm-6 col-lg-3" style={{
                  marginBottom:isMobile && "1rem"
                }}>
                  <StatusSearch
                    filters={filters}
                    setFilters={setFilters}
                    statusSearch={searchStatusConstants}
                  />
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
                {/* <div className="col-sm-6 col-lg-3">
                  <DepartmentSearch filters={filters} setFilters={setFilters} />
                </div> */}
                <div className="col-sm-6 col-lg-3">
                  <button
                    className="form-control btn-check-reset"
                    onClick={() => {
                      setFilters({
                        department: "",
                        hospitalSearch: "",
                        status: "",
                        slots: "",
                        date: "",
                        doctorName: "",
                        patientName: "",
                        paymentStatus:"",
                        paymentMode:"",
                        sort:true,


                      });
                    }}
                    style={{
                      backgroundColor: "red",
                      width: "100px",
                      textAlign: "center",
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="table-responsive bg-white shadow rounded">
                  <table className="table mb-0 table-center">
                    <thead>
                      <tr>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "50px", textWrap:"nowrap" }}
                        >
                         Token no.  <LiaSortNumericDownSolid  
                         onClick={()=>{
                          setFilters((prev)=>({...prev, sort:!filters?.sort }))
                         }}
                         className="me-2 d-inline-block mb-0 icon upside-down-icon" />
                        </th>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "50px" }}
                        >
                          UJUR ID
                        </th>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "180px" }}
                        >
                          Name
                        </th>
                        <th className="border-bottom p-3">Status</th>
                        <th className="border-bottom p-3 text-nowrap ">Payment Status</th>
                        <th className="border-bottom p-3 text-nowrap ">Payment Mode</th>
                        <th className="border-bottom p-3 text-nowrap ">Payment Action</th>
                        <th className="border-bottom p-3">Slot</th>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "200px" }}
                        >
                          Doctor
                        </th>
                        <th className="border-bottom p-3">Phone</th>
                        <th className="border-bottom p-3">Age</th>
                        <th className="border-bottom p-3">Gender</th>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "150px" }}
                        >
                          Date
                        </th>
                        

                        <th className="border-bottom p-3">Invoice</th>
                        <th
                          className="border-bottom p-3"
                          style={{ minWidth: "150px" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentsLoading ?
                      <>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>
                            <td>       <Skeleton active/>                            </td>

                           

                      
                      </>
                      :appointmentData.slice(paginationNumber.from, paginationNumber.to).map((item, index) => {
                        return (
                          <tr key={index}>
                            <th className="p-3">{item?.appointment_slot}</th>
                            <th className="p-3">{item.patient.ujur_id}</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <span className="ms-2">
                                    {item.patient.full_name}
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">{checkAppointmentStatus(item.status)}</td>
                            <td className="p-3">{checkPaymentStatus(item.payment_status)}</td>
                            <td className="p-3">{item.payment_mode}</td>

                            <td className="p-3">
                              <button className="btn btn-primary" 
                              disabled={item.status == "cancel" || (item.payment_status == "Paid")}
                              onClick={()=>{
                                setFormActionApi({
                                  selectedAppointment:item.id
                                })
                                setShowDetail(!showDetail)
                              }}
                              >Action</button>
                            </td>
                            <td className="p-3">{item.slot}</td>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src={
                                      test_url_images +
                                      item.doctor.profile_picture
                                    }
                                    className="avatar avatar-md-sm rounded-circle border shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">
                                    {item.doctor.full_name}
                                  </span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3" style={{
                              textWrap:"nowrap"
                            }}>{item.patient.user.phone}</td>

                            <td className="p-3">
                              {calculateAge(item.patient.date_of_birth)}
                            </td>
                            <td className="p-3">{item.patient.gender}</td>
                            <td className="p-3">
                              {moment(item.date_appointment).format(
                                "YYYY-MM-DD"
                              )}
                            </td>
                 

                           
                            <td className="p-3"><button 
                                                        onClick={()=>{
                                                          setSelectedAppointment(item)
                                                          setInvoiceShow(true)
                                                        }}
                                                        className="btn btn-primary" style={{
                                                            color:"white"
                                                        }}>Invoice</button></td>
                            <td className="p-3">
                            {
                                  item.lab_report &&  <Link
                                  to="#"
                                  style={{marginRight:"1rem"}}
                                  className="btn btn-icon btn-pills btn-soft-primary "
                                  onClick={() => {
                                    window.open(test_url_images + item.lab_report, '_blank');
                                  }}
                                ><AiOutlineFileExcel />
                                </Link>
                                }
                               
                            </td>
                            
                            {/* <td className="text-end p-3">
                            {item.status == "pending" &&
                              
                              <Link
                                to="#"
                                className="btn btn-icon btn-pills btn-soft-danger"
                                onClick={() => {
                                  setSelectedAppointment(item.id)
                                  setCancle(!cancle)
                                }}
                              >
                                <AiOutlineCloseCircle />
                              </Link>}
                            </td> */}
                          </tr>
                        );
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
        <Modal
          show={showDetail}
          onHide={() => setShowDetail(!showDetail)}
          animation={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="h5">Payment Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body p-3" style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}>
          
              <ul className="list-unstyled mb-0 d-md-flex justify-content-between">
                <li>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex ms-0">
                    <p className="text-muted ms-2"><button className="btn btn-primary" 
                    style={{
                      minWidth:"15rem"
                    }}
                    onClick={()=>{
                      setFormActionApi((prev)=>({...prev, action:"Paid"}))

                    }}
                    >PAID</button></p>

                    </li>

                   

                    <li className="d-flex ms-0">
                    <p className="text-muted ms-2"><button className="btn btn-danger"
                    onClick={()=>{
                      setFormActionApi((prev)=>({...prev, action:"cancel"}))

                    }}
                    style={{
                      minWidth:"15rem"
                    }}>CANCEL APPOINTMENT</button></p>

                    </li>

                  </ul>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </Modal.Body>
        </Modal>
        <InvoiceUjur show={invoiceShow} setShow={setInvoiceShow} appointmentDetails={selectedAppointment}/>

        <Modal
          show={acceptsAppointment}
          onHide={() => setAcceptsAppointment(!acceptsAppointment)}
          animation={false}
          centered
        >
          <Modal.Body>
            <div className="modal-body py-5">
              <div className="text-center">
                <div
                  className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto"
                  style={{ height: "95px", width: "95px" }}
                >
                  <span className="mb-0">
                    <MdOutlineCheckCircleOutline className="h1" />
                  </span>
                </div>
                <div className="mt-4">
                  <h4>Accept Appointment</h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Great doctor if you need your family member to get immediate
                    assistance, emergency treatment.
                  </p>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-soft-success">
                      Accept
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
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
                    <LiaTimesCircleSolid className="h1" />
                  </span>
                </div>
                <div className="mt-4">
                  <h4>Cancel Appointment</h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Are you sure , you want to cancel the given appointment 
                  </p>
                  <div className="mt-4">
                    <Link onClick={()=>{
                      cancelGivenAppointment()
                    }} className="btn btn-soft-danger">
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Wrapper>
    </>
  );
}
