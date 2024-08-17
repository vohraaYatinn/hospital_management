import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bg1 from "../../assets/images/bg/bg-profile.jpg";
import client1 from "../../assets/images/client/01.jpg";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Modal from "react-bootstrap/Modal";
import ScrollTop from "../../components/scrollTop";
import Prescription from "./prescription";
import DoctorPrescriptionForm from "./prescriptionForm";
import { Button, Drawer, Input, Radio, Space } from "antd";
import DoctorInspectForm from "./doctorInspectForm";
import DoctorExaminationForm from "./doctorExaminationForm";
import DoctorInvestigationForm from "./investigationForm";
import { useRouter } from "../../hooks/use-router";
import { addNewMedicinesByDoctor, fetchDoctorMedicinesDashboard, fetchPatientProfile, uploadDocumentPrescription, fetchDepartmentHospital, changePrescriptionMethod } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { calculateAge, capitalizeFirst } from "../../utils/commonFunctions";
import { FiUser, FiTrash2 } from "react-icons/fi";
import { RiMindMap, RiNodeTree, RiScales2Fill, RiWeiboFill } from "react-icons/ri";
import { GiMedicalDrip, GiTreasureMap } from "react-icons/gi";
import moment from "moment";
import PrescriptionHistory from "./prescriptionHistory";
import BulletTextbox from "../../common-components/BulletTextBox";
import { doctorDetails, updateDoctor, updateMedicines } from "../../redux/reducers/functionalities.reducer";
import { useDispatch, useSelector } from "react-redux";
import { test_url_images } from "../../config/environment";


export default function PatientProfile() {
  const { id, appointment } = useParams()
  let doctorRedux = useSelector(doctorDetails);

  const dispatch = useDispatch();
  const [pdfGenerateDownload, setPdfGenerateDownload] = useState(false)
  const [patientProfileResponse, patientProfileError, patientProfileLoading, patientProfileFetch] = useAxios();
  const [uploadDocumentResponse, uploadDocumentError, uploadDocumentLoading, uploadDocumentFetch] = useAxios();
  const [changePrescriptionMethodResponse, changePrescriptionMethodError, changePrescriptionMethodLoading, changePrescriptionMethodFetch] = useAxios();
  const [addNewResponse, addNewError, addNewLoading, addNewFetch] = useAxios();
  const [medicinesResponse, medicinesError, medicinesLoading, medicinesFetch] = useAxios();
  const [departmentResponse, departmentError, departmentLoading, departmentFetch] = useAxios();

  const router = useRouter();
  const [patientsData, setPatientsData] = useState([])
  const [departmentsName, setDepartmentNames] = useState([])
  const [filterValues, setFilterValues] = useState({});
  const [pdfFile, setPDFFile] = useState(null);
  const [medicationNewName, setMedicationForm] = useState({
    name:"",
    description:""
  })
  const [htmlDataS, setHTMLData] = useState('xcxc');
  useEffect(() => {
    if (id) {
      patientProfileFetch(fetchPatientProfile({
        patientId: id,
      }
      ))
    }
  }, [id])

  const changePrescriptionMethodFunction = (value) => {
    setPrescriptionMethodTemp(value)
    changePrescriptionMethodFetch(changePrescriptionMethod({
      method:value
    }))
  }
  const generatePrescription = (htmlContent, doctorComment) => {
    if (htmlContent && prescriptionMethod=="digital") {
      uploadDocumentFetch(uploadDocumentPrescription({
        htmlContent: htmlContent.innerHTML,
        appointmentDetails: appointment,
        doctorComment: doctorComment,
        pdf:pdfGenerateDownload,
        prescriptionMethod:prescriptionMethod
      })
      )
    }
    else if(prescriptionMethod == "manual"){
      uploadDocumentFetch(uploadDocumentPrescription({
        appointmentDetails: appointment,
        prescriptionMethod:prescriptionMethod
      })
      )
    }
  }
  useEffect(()=>{
    if(addNewResponse?.result == "success"){
      onNewshowNewMedicinesClose()
      medicinesFetch(fetchDoctorMedicinesDashboard())
    }
  },[addNewResponse])
  useEffect(()=>{
    if(departmentResponse?.result == "success"){
      setDepartmentNames(departmentResponse?.data)
    }
  },[departmentResponse])
  useEffect(()=>{
    if(changePrescriptionMethodResponse?.result == "success"){
      dispatch(updateDoctor(changePrescriptionMethodResponse?.data))
      setPrescriptionMethod(prescriptionMethodTemp);

    }
  },[changePrescriptionMethodResponse])
  useEffect(()=>{
    if(medicinesResponse?.result == "success"){
      dispatch(updateMedicines(medicinesResponse?.data))
    }
  },[medicinesResponse])
  const addNewMedicineFunction = () => {
    addNewFetch(addNewMedicinesByDoctor(medicationNewName))
  }
  useEffect(() => {
    if (patientProfileResponse?.result == "success") {
      setPatientsData(patientProfileResponse?.data[0])
      setPrescription((prev) => ({ ...prev, patientName: patientProfileResponse?.data[0]?.full_name }))
    }
  }, [patientProfileResponse])
  useEffect(() => {
    if (uploadDocumentResponse?.result == "success") {
      router.push("/doctor-appointment")
    }
  }, [uploadDocumentResponse])
  const [prescriptionMethod, setPrescriptionMethod] = useState(doctorRedux?.prescription_mode);
  const [prescriptionMethodTemp, setPrescriptionMethodTemp] = useState(doctorRedux?.prescription_mode);
  useEffect(()=>{
    if(doctorRedux?.prescription_mode){
      setPrescriptionMethodTemp(doctorRedux?.prescription_mode)
      setPrescriptionMethod(doctorRedux?.prescription_mode)
    }
  },[doctorRedux])
  const optionsWithDisabled = [
    {
      label: 'Digital Prescription',
      value: 'digital',
    },
    {
      label: 'Manual Prescription',
      value: 'manual',
    }
  ];
  const onChangePrescriptionMethod = ({ target: { value } }) => {
    changePrescriptionMethodFunction(value)
  };
  let [activeIndex, setActiveIndex] = useState(1);
  let [activeSubIndex, setActiveSubIndex] = useState(1);
  let [show, setShow] = useState(false);
  let [showNewPrescription, setShowNewPrescription] = useState(false);
  let [showNewMedicines, setshowNewMedicines] = useState(false);
  const [open, setOpen] = useState(false);
  const [prescription, setPrescription] = useState({
    patientName: "",
    date: "2024-01-20",
    provisionalDiagnosis: "",
    symptoms: [],
    examination: {},
    systemic: {},
    medications: [],
    instructions: [],
    labReports: [],
    investigation: [],
    referTo:[]
  });
  useEffect(()=>{
    console.log(prescription)
  },[prescription])

  useEffect(() => {
    fetchHospitalDepartments()
  }, []);

  const [medication, setMedication] = useState({
    medicineName: "",
    dosage: "",
    timings: "BF",
    comments: "",
    duration: "day",
    labReports: "",
    nextVisit: "",
    referTo:""
  });
  const [labTests, setLabTests] = useState({
    labTests: ""
  })
  const [chiefQuery, setChiefQuery] = useState({
    symptoms: "",
    dosage: "1",
    duration: "day"
  });
  const [fetchDepartmentList, setDepartmentList] = useState([])
  const [examination, setExamination] = useState({
    HR: "",
    Bp: "",
    SpO2: "",
    Rhythm: "",
    Volume: "",
    Temperature: "",
    PulseRate: "",
    RR: "",
  });
  const [systemic, setSystemic] = useState({
    CVS: "",
    Respiratory: "",
    Abdominal: "",
    CNS: "",
  });

  const [provisional, setProvisional] = useState("");
  const [investigation, setInvestigation] = useState("");


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showNewPrescriptionDrawer = () => {
    setShowNewPrescription(true);
  };
  const onNewPrescriptionClose = () => {
    setShowNewPrescription(false);
  };
  const onNewshowNewMedicinesShow = () => {
    setshowNewMedicines(true);
  };
  const onNewshowNewMedicinesClose = () => {
    setshowNewMedicines(false);
  };
  const fetchHospitalDepartments = () => {
    departmentFetch(fetchDepartmentHospital());
  };

  console.log(patientsData)
  return (
    <>
      <Navbar
        navDark={true}
        manuClass="navigation-menu nav-left"
        containerClass="container-modified"
      />

      <section className="bg-hero" style={{
            marginTop: "-3rem"
      }}>
        <div className="container-modified">
        <div className="row mt-lg-5">
        <div className="col-md-6 col-lg-4">
<div className="rounded shadow overflow-hidden sticky-bar">


  <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom" style={{display:"flex", marginTop:"2rem"}}>
    <img
      src={patientsData?.profile_picture ? test_url_images+patientsData?.profile_picture : client1}
      style={{marginLeft:"2rem"}}
      className="rounded-circle shadow-md avatar avatar-md-md"
      alt=""
    />
    <div style={{marginLeft:"2rem"}}>
    <h5 className="mt-3 mb-1">{patientsData?.full_name && capitalizeFirst(patientsData?.full_name)}</h5>
    <p className="text-muted mb-0">Ujur ID: {patientsData?.ujur_id} </p>
    </div>
  </div>




</div>

</div> 
<div className="col-md-6 col-lg-8 shadow" style={{display:"flex", alignItems:"center"}}>
<div className="list-unstyled p-4" style={{display:"flex", justifyContent:"space-around", fontWeight:600, width:"100%"}}>
    <div
      className="d-flex align-items-center mt-3"
      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        

      }}
    >
      <FiUser className="align-text-bottom text-primary h5 mb-0 me-2" style={{
fontSize:"1.4rem"      }}/>
      <h6 className="mb-0">{"Age"}</h6>
      <p className="text-muted mb-0">{calculateAge(patientsData?.date_of_birth)} </p>

    </div>
    <div
      className="d-flex align-items-center mt-3"
      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        

      }}
    >
      <FiUser className="align-text-bottom text-primary h5 mb-0 me-2" style={{
fontSize:"1.4rem"      }}/>
      <h6 className="mb-0">{"Gender"}</h6>
      <p className="text-muted mb-0 ms-2">{patientsData?.gender == "M" ? "Male":"Female"}</p>
    </div>

    <div
      className="d-flex align-items-center mt-3"
      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

      }}
    >
      <RiWeiboFill className="align-text-bottom text-primary h5 mb-0 me-2" 
       style={{
        fontSize:"1.4rem"      }}
      />
      <h6 className="mb-0">{"Height"}</h6>
      <p className="text-muted mb-0 ms-2">{patientsData?.height} CM</p>
    </div>
    <div
      className="d-flex align-items-center mt-3"
      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

      }}
    >
      <RiScales2Fill className="align-text-bottom text-primary h5 mb-0 me-2" 
       style={{
        fontSize:"1.4rem"      }}
      />
      <h6 className="mb-0">{"Weight"}</h6>
      <p className="text-muted mb-0 ms-2">{patientsData?.weight} Kg</p>
    </div>
    <div
      className="d-flex align-items-center mt-3"
      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

      }}
    >
      <GiMedicalDrip className="align-text-bottom text-primary h5 mb-0 me-2" 
       style={{
        fontSize:"1.4rem"      }}
      />
      <h6 className="mb-0">{"Blood Group"}</h6>
      <p className="text-muted mb-0 ms-2">{patientsData?.blood_group}</p>
    </div>
    <div
      className="d-flex align-items-center mt-3"

      style={{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
      }}
    >
            <GiTreasureMap className="align-text-bottom text-primary h5 mb-0 me-2" 
             style={{
              fontSize:"1.4rem"
            }}
            />
      <h6 className="mb-0">{"District"}</h6>

      <p className="text-muted mb-0 ms-2">{patientsData?.district && capitalizeFirst(patientsData?.district)}</p>
    </div>

  </div>
</div>
          </div>
          <div className="row mt-lg-5">
  

  










            <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 shadow overflow-issue">
              {prescriptionMethod == "digital" &&
                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                  <li className="nav-item">
                    <Link
                      className={`${activeIndex === 1 ? "active" : ""
                        } nav-link rounded-0`}
                      to="#"
                      onClick={() => {
                        setActiveSubIndex(1)
                        setActiveIndex(1)

                      }}
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0">Complaints</h5>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`${activeIndex === 3 ? "active" : ""
                        } nav-link rounded-0`}
                      to="#"
                      onClick={() => {
                        setActiveIndex(3)
                        setActiveSubIndex(3)

                      }
                      }
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0">Examination</h5>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${activeIndex === 2 ? "active" : ""
                        } nav-link rounded-0`}
                      to="#"
                      onClick={() => {
                        setActiveSubIndex(5)
                        setActiveIndex(2)
                      }

                      }
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0">Diagnosis</h5>
                      </div>
                    </Link>
                  </li>
                        </ul>}

                <div className="tab-content p-4 "
                style={{
                  minHeight:prescriptionMethod == "manual" && "15rem"
                }}
                >
                  {activeIndex === 1 ? (
                    <div className="tab-pane fade show active">
                      <div className="card border-0 shadow overflow-issue check-card-width">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 1 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(1)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  Chief Query
                                </h6>
                              </div>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 2 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(2)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  History
                                </h6>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* complaints */}
                      {activeSubIndex === 1 &&
                        <div
                          className={`tab-pane fade ${activeSubIndex === 1 ? "show active" : ""
                            }`}
                        >
                          <p className="text-muted mt-4 mb-0">
                            {patientsData?.appointments?.find(appointments => appointments.id == appointment)?.patients_query}
                          </p>
                         { patientsData?.appointments?.find(appointments => appointments.id == appointment)?.patient_documents && <button className="btn btn-primary mt-4" 
                         onClick={()=>{
                          window.open(test_url_images+patientsData?.appointments?.find(appointments => appointments.id == appointment)?.patient_documents, "_blank");
                         }}
                         >View Attached Patient Document</button>} 

{prescriptionMethod == "digital" &&
                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4">
                              <DoctorInspectForm
                                showDrawer={showDrawer}
                                prescription={prescription}
                                setPrescription={setPrescription}
                                medication={chiefQuery}
                                setMedication={setChiefQuery}
                              />
                            </div>

                            <Modal
                              show={showNewPrescription}
                              onHide={() => onNewPrescriptionClose()}
                              size="lg"
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title className="h5">
                                  Patient Prescription
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Prescription patient={patientsData} medication={medication} prescription={prescription} setPDFFile={setPDFFile} generatePrescription={generatePrescription} setPdfGenerateDownload={setPdfGenerateDownload} pdfGenerateDownload={pdfGenerateDownload} />
                              </Modal.Body>
                            </Modal>
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
                              </Modal.Body>
                            </Modal>
                          </div>

}
                        </div>
                      }
                      {activeSubIndex === 2 &&
                        <div
                          className={`tab-pane fade show active`}
                      >          
                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4" style={{
                              minHeight:"15rem"
                            }}>
                              {patientsData?.appointments.map((item, index) => {
                                return (
                                  <div className="row rounded shadow" style={{ margin: "1rem", marginBottom: "2rem" }}>
                                    <div className="col-4" style={{ background: item?.prescription ? "rgb(56,108,240)" : "rgb(162 184 241)", color: "white", height: "4rem", alignItems: "center", display: "flex", justifyContent: "center", cursor: "pointer" }}
                                      disabled={!item.prescription}
                                      onClick={() => {
                                        if(item.prescription){
                                          window.open(test_url_images + item.prescription, '_blank');

                                        }

                                      }}
                                    >
                                      Report
                                    </div>
                                    {item.lab_report ?
                                    <>
                                    <div className="col-4" style={{ display: "flex", flexDirection: "column" }}>
                                      {item.doctor_instruction}
                                      <span className="mb-0 mt-2" style={{ fontWeight: "600" }}>Dr. {item?.doctor?.full_name} - {moment(item?.date_appointment).format('YYYY-MM-DD')}</span>

                                    </div>
                                    <div className="col-4" style={{ background: "green", color: "white", height: "4rem", alignItems: "center", display: "flex", justifyContent: "center", cursor: "pointer" }}
                                      onClick={() => {
                                        window.open(test_url_images + item.lab_report, '_blank');

                                      }}
                                    >
                                      Lab Report
                                    </div>
                                    </>:
 <div className="col-8" style={{ display: "flex", flexDirection: "column" }}>
 {item.doctor_instruction}
 <span className="mb-0 mt-2" style={{ fontWeight: "600" }}>Dr. {item?.doctor?.full_name} - {moment(item?.date_appointment).format('YYYY-MM-DD')}</span>

</div>
                              }

                                 

                                    
                                  </div>
                                );
                              })}
                            </div>

                            <Modal
                              show={showNewPrescription}
                              onHide={() => setShow(false)}
                              size="lg"
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title className="h5">
                                  Patient Prescription
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Prescription patient={patientsData?.full_name} medication={medication} prescription={prescription} />
                              </Modal.Body>
                            </Modal>
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
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                      }
                      {/* ........... */}


                    </div>
                  ) : (
                    ""
                  )}
                  {activeIndex === 2 ? (
                    <div className="tab-pane fade show active">
                      <div className="card border-0 shadow overflow-issue check-card-width-check">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 5 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(5)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  Provisional Diagnosis
                                </h6>
                              </div>
                            </Link>
                          </li>
                          <Modal
                              show={showNewMedicines}
                              onHide={() => onNewshowNewMedicinesClose()}
                              size="lg"
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title className="h5">
                                  Add New Medicine
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <label>Medicine Name</label>
                                <input 
                                className="form-control"
                                onChange={(e)=>{
                                  setMedicationForm((prev)=>({...prev, name:e.target.value}))
                                }}
                                 />
                               <label className="mt-4">Medicine Description</label>

                                <input
                                className="form-control"
                                onChange={(e)=>{
                                  setMedicationForm((prev)=>({...prev, description:e.target.value}))
                                }}
                                />
                                <button
                                className="btn btn-primary mt-4"
                                onClick={()=>{
                                  addNewMedicineFunction()
                                }}
                                >Add</button>
                              </Modal.Body>
                            </Modal>
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 6 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(6)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  Lab Tests
                                </h6>
                              </div>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 7 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(7)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  Final Prescription
                                </h6>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {
                        activeSubIndex == 5 && <div
                          className={`tab-pane fade show active`}
                        >


                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4">
                              <BulletTextbox text={provisional} setText={setProvisional}/>
                              
                              <div className="col-md-12 mt-2" >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => {
                                    showDrawer()
                                    setPrescription((prev) => ({ ...prev, provisionalDiagnosis: provisional.replace(/\n/g, '') }))
                                  }}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                      {
                        activeSubIndex == 6 && <div
                          className={`tab-pane fade show active`}
                        >


                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4">
                              <DoctorInvestigationForm
                                showDrawer={showDrawer}
                                prescription={prescription}
                                setPrescription={setPrescription}
                                medication={labTests}
                                setMedication={setLabTests}
                                activeSubIndex={activeSubIndex}
                              />
                            </div>
                          </div>
                        </div>
                      }
                      {
                        activeSubIndex == 7 && <div
                          className={`tab-pane fade show active`}
                        >


                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4">
                              <DoctorPrescriptionForm
                                departmentsName={departmentsName}
                                patientsData={patientsData}
                                showDrawer={showDrawer}
                                prescription={prescription}
                                setPrescription={setPrescription}
                                medication={medication}
                                setMedication={setMedication}
                                activeSubIndex={activeSubIndex}
                                onNewshowNewMedicinesShow={onNewshowNewMedicinesShow}
                              />
                            </div>
                          </div>
                        </div>
                      }




                    </div>
                  ) : (
                    ""
                  )}
                  {activeIndex === 3 ? (
                    <div className="tab-pane fade show active">
                      <div className="card border-0 shadow overflow-issue check-card-width">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 3 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(3)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  General
                                </h6>
                              </div>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 4 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(4)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h6 className="title fw-normal mb-0">
                                  Systemic
                                </h6>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* complaints */}

                      <div
                        className={`tab-pane fade show active`}
                      >


                        <div className="row">
                          <div className="col-lg-12 col-12 mt-4">
                            <DoctorExaminationForm
                              showDrawer={showDrawer}
                              prescription={prescription}
                              setPrescription={setPrescription}
                              medication={examination}
                              setMedication={setExamination}
                              systemic={systemic}
                              setSystemic={setSystemic}
                              activeSubIndex={activeSubIndex}
                            />
                          </div>
                        </div>
                      </div>

                      {/* ........... */}


                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          




            <div  className="col-md-6 col-lg-4">
            {/* <Radio.Group
            style={{
              marginBottom:"1rem",
            }}
        options={optionsWithDisabled}
        onChange={onChangePrescriptionMethod}
        value={prescriptionMethod}
        optionType="button"
        buttonStyle="solid"
      /> */}
       {prescriptionMethod == "manual" &&
      <div
      style={{
        display:"flex",
        flexDirection:"column"
      }}
      >
    <Button type="primary" onClick={generatePrescription} style={{
      marginBottom:"0.4rem",
      padding:"2rem",
      fontSize:"1.3rem",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>Complete Appointment</Button>
    <Button
    style={{
      marginBottom:"0.4rem",
      padding:"2rem",
      fontSize:"1.2rem",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    onClick={()=>{
      router.push("/doctor-appointment")
    }}
    >Back to Appointment Screen</Button>

        </div>}
       {prescriptionMethod == "digital" &&
            <div
            style={{
              border: "0.1px solid",
              padding: "1rem",
              background:prescriptionMethod == "manual" && "rgb(246 246 246)",
              cursor:prescriptionMethod == "manual" && "not-allowed"

            }}
            >
              <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"

              }}>
            <h3 
            className="font-presc"
            >Prescription</h3>
            
            {prescriptionMethod == "digital" &&

            <button className="btn btn-primary"
        style={{
          position:"relative",
          float:"right",
          marginTop:"1rem"
        }}
      onClick={() => {
        setActiveIndex(1)
        setActiveSubIndex(1)
        showNewPrescriptionDrawer()
      }}
    >Submit</button>
    }
              </div>
              <div style={{
                display:"flex",
                flexDirection:"column",
                height: "90%",
                justifyContent: "space-between"
              }}>
<div style={{
  minHeight: "20vh"
}}>
{prescription.symptoms.length > 0 &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Chief Query
            </div>
            <div className="row">
              {prescription.symptoms.map((med, indexAr=0) => (
                med.symptoms && med.dosage && med.duration && 
                <>
                <div className="col-md-10 mt-2">
                     <li key={indexAr}>
                  {capitalizeFirst(med.symptoms)} X {med.dosage} {med.duration}
           
                </li>
</div>
                <div className="col-md-2 mt-2">
                   <button style={{
                        background:"red",
                         color:"white",
                         border:"transparent"
                      }}
                      onClick={()=>{
                        let sym = prescription.symptoms.filter((item, index) => index !== indexAr);
                        setPrescription((prevPrescription) => ({
                          ...prevPrescription,
                          symptoms: sym,
                        }));
                        
                      }}
                      ><FiTrash2  /></button>
</div>
</>
             
                      
              
              ))}
            </div>

          </div>
        }
                {Object.keys(prescription.examination).length > 0 &&

<div className="col-md-12 mt-4 row">
  <div className="col-md-12" style={{ fontWeight: "800" }}>
    General Examination
  </div>
  <div className="row">
    {Object.keys(prescription.examination).map((med, index) => (
      prescription.examination[med] != "" && med != "DBP" &&
      <>
         <div className="col-md-10 mt-2">
          {med == "SBP" && prescription.examination["DBP"] ?
            <li key={index}>
            {"BP"} - {prescription.examination[med]} / {prescription.examination["DBP"]}
            <br />
          </li>  

          :

          med == "PulseRate" ?
          <li key={index}>
          {"Pulse Rate"} - {prescription.examination[med]}
          <br />
        </li>   :


          <li key={index}>
          {capitalizeFirst(med)} - {prescription.examination[med]} {med == "temperature" && " °F" }
          <br />
        </li>
          }
       
      </div>
      <div className="col-md-2 mt-2">
      {index == 0 &&
                      <button style={{
                           background:"red",
                            color:"white",
                            border:"transparent"
                         }}
                         onClick={()=>{
                          setPrescription((prev)=>({
                            ...prev, examination : {}
                          }))
                           onClose()
                         }}
                         ><FiTrash2  /></button>}
</div>

      </>
    

    ))}
  </div>
</div>
}
        {Object.keys(prescription.systemic).length > 0 &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Systemic Examination
            </div>
            <div className="row">
              {Object.keys(prescription.systemic).map((med, index) => (
                prescription.systemic[med] != "" && 
<>
                  <div className="col-md-10 mt-2">
                  <li key={index}>
                  {capitalizeFirst(med)} - {prescription.systemic[med]}
                </li>
                </div>
                                <div className="col-md-2 mt-2">
                               {index == 0 &&
                                <button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    setPrescription((prev)=>({
                                      ...prev, systemic : {}
                                    }))
                                     onClose()
                                   }}
                                   ><FiTrash2  /></button>}
             </div>
             
</>

              ))}
            </div>
          </div>
        }

        {prescription.provisionalDiagnosis != "" &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Provisional Diagnosis
            </div>
            <div className="row">
            <>
            <div className="col-md-10">

            {prescription.provisionalDiagnosis != "" && 
                          prescription.provisionalDiagnosis.split("•").map((med, index) => (
                            med != "" && 
            <>
                              <div className="col-md-10 mt-2">
                              <li key={index}>
                              {capitalizeFirst(med)}
                            </li>
                            </div>
                                            <div className="col-md-2 mt-2">
                                           {index == 0 &&
                                            <button style={{
                                                 background:"red",
                                                  color:"white",
                                                  border:"transparent"
                                               }}
                                               onClick={()=>{
                                                setPrescription((prev)=>({
                                                  ...prev, provisionalDiagnosis : ""
                                                }))
                                                 onClose()
                                               }}
                                               ><FiTrash2  /></button>}
                         </div>
                         
            </>
            
                          ))}

            
</div>
<div className="col-md-2">
<button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    setPrescription((prev)=>({
                                      ...prev, provisionalDiagnosis : ""
                                    }))
                                     onClose()
                                   }}
                                   ><FiTrash2  /></button>
</div>

</>
            </div>
          </div>}

        {prescription.labReports.length > 0 ? (
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
            Recommended Test
            </div>
            <div className="row">

              {prescription.labReports.map((med, indexAr) => (
                med!="" &&
                <>
                <div className="col-md-10 mt-2">

                <li key={indexAr}>
                  {capitalizeFirst(med)}
                  <br />
                </li>
                </div>
                <div className="col-md-2 mt-2">
                <button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    let sym = prescription.labReports.filter((item, index) => index !== indexAr);
                                    setPrescription((prevPrescription) => ({
                                      ...prevPrescription,
                                      labReports: sym,
                                    }));
                                   }}
                                   ><FiTrash2  /></button>
                  </div>
                  </>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
                {prescription.medications.length > 0 &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Prescribed Medications
            </div>
            <div className="row">
              {prescription.medications.map((med, indexAr) => (
<>
<div className="col-md-10 mt-2">

                <li key={indexAr}>
                {med.medicationType ? med.medicationType : ""}{' '}{med.medicationType == "Inj" && med.InjectionType}{" "}{capitalizeFirst(med.medicineName)}{" "}{med?.Strength && (med?.Strength)}{" "}{med?.medicineConsume}{" "}{med.amount}{""}{med.medicationType=="Syp"||med.medicationType=="Inj" ? "Ml" : med.medicationType}{" "}{med.dosage}{" "}{med.timings}{" "} X {" "}
                {med.dayduration} {med.duration}

                <br />
              </li>
              </div>
              <div className="col-md-2">
              <button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    let sym = prescription.medications.filter((item, index) => index !== indexAr);
                                    setPrescription((prevPrescription) => ({
                                      ...prevPrescription,
                                      medications: sym,
                                    }));
                                   }}
                                   ><FiTrash2  /></button>
</div>


              </>

              ))}
            </div>
          </div>
        }

        {prescription.instructions.length > 0 ? (
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Instructions
            </div>
            <div className="row">
             

         
              {prescription?.instructions[0] && prescription.instructions[0].split("•").map((med, index) => (
                med != "" && <>
                <div className="col-md-10 mt-2">
               <li key={index}>
                  {capitalizeFirst(med)}
                  <br />
                </li>
                </div>

                <div className="col-md-2 mt-2">
                  {index == 1 &&
                                              <button style={{
                                                background:"red",
                                                 color:"white",
                                                 border:"transparent"
                                              }}
                                              onClick={()=>{
                                                setPrescription((prevPrescription) => ({
                                                  ...prevPrescription,
                                                  instructions: [],
                                                }));
                                              }}
                                              ><FiTrash2  /></button>}
               
                  </div>

              </>


              ))}
            </div>

          </div>
        ) : (
          ""
        )}
                {prescription.referTo.length > 0 ? (
          <div className="col-md-12 mt-4 row">
          <div className="col-md-12" style={{ fontWeight: "800" }}>
            Refer To
          </div>
          <div className="row">
              {prescription.referTo.map((med, indexAr) => (
                med!="" &&
                <>
                                <div className="col-md-10 mt-2">

                  <li key={indexAr}>
                  {capitalizeFirst(med)}
                  <br />
                </li>
                </div>
                <div className="col-md-2 mt-2">
                <button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    let sym = prescription.referTo.filter((item, index) => index !== indexAr);
                                    setPrescription((prevPrescription) => ({
                                      ...prevPrescription,
                                      medications: sym,
                                    }));
                                    prescription.referTo.splice(indexAr, 1)
                                   }}
                                   ><FiTrash2  /></button>

                </div>
                
                </>
              ))}
            </div>
 
          </div>
        ) : (
          ""
        )}
                {medication.nextVisit &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-12" style={{ fontWeight: "800" }}>
              Next Visit
            </div>
            <div className="row">
              <>
              <div className="col-md-10 mt-2">
              {medication.nextVisit} Days

</div>
<div className="col-md-2 mt-2">
<button style={{
                                     background:"red",
                                      color:"white",
                                      border:"transparent"
                                   }}
                                   onClick={()=>{
                                    setMedication((prev)=>({
                                      ...prev, nextVisit : ""
                                    }))

                                     onClose()
                                   }}
                                   ><FiTrash2  /></button>
</div>
              </>
            </div>
          </div>}
</div>
<div>
{prescriptionMethod == "digital" &&

<button className="btn btn-primary"
        style={{
          position:"relative",
          float:"right",
          marginTop:"1rem",
          marginBottom:"1rem"
        }}
      onClick={() => {
        setActiveIndex(1)
        setActiveSubIndex(1)
        showNewPrescriptionDrawer()
      }}
    >Submit</button>}
</div>
</div>
       
            </div>}
            </div>
            
          </div>
 
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}











