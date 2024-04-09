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
import { Drawer, Input, Radio, Space } from "antd";
import DoctorInspectForm from "./doctorInspectForm";
import DoctorExaminationForm from "./doctorExaminationForm";
import DoctorInvestigationForm from "./investigationForm";
import { useRouter } from "../../hooks/use-router";
import { fetchPatientProfile, uploadDocumentPrescription } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { calculateAge, capitalizeFirst } from "../../utils/commonFunctions";
import { FiUser, FiTrash2 } from "react-icons/fi";
import { RiMindMap, RiNodeTree, RiScales2Fill, RiWeiboFill } from "react-icons/ri";
import { GiMedicalDrip } from "react-icons/gi";
import moment from "moment";
import PrescriptionHistory from "./prescriptionHistory";

export default function PatientProfile() {
  const { id, appointment } = useParams()
  const [patientProfileResponse, patientProfileError, patientProfileLoading, patientProfileFetch] = useAxios();
  const [uploadDocumentResponse, uploadDocumentError, uploadDocumentLoading, uploadDocumentFetch] = useAxios();
  const router = useRouter();
  const [patientsData, setPatientsData] = useState([])
  const [filterValues, setFilterValues] = useState({});
  const [pdfFile, setPDFFile] = useState(null);
  const [htmlDataS, setHTMLData] = useState('xcxc');
  useEffect(() => {
    console.log(id)
    if (id) {
      patientProfileFetch(fetchPatientProfile({
        patientId: id,

      }
      ))
    }
  }, [id])

  const generatePrescription = (htmlContent, doctorComment) => {
    if (htmlContent) {
      uploadDocumentFetch(uploadDocumentPrescription({
        htmlContent: htmlContent.innerHTML,
        appointmentDetails: appointment,
        doctorComment: doctorComment
      })
      )
    }
  }
  useEffect(() => {
    if (patientProfileResponse?.result == "success") {
      setPatientsData(patientProfileResponse?.data[0])
    }
  }, [patientProfileResponse])
  useEffect(() => {
    if (uploadDocumentResponse?.result == "success") {
      router.push("/doctor-appointment")
    }
  }, [uploadDocumentResponse])

  let [activeIndex, setActiveIndex] = useState(1);
  let [activeSubIndex, setActiveSubIndex] = useState(1);
  let [show, setShow] = useState(false);
  let [showNewPrescription, setShowNewPrescription] = useState(false);
  const [open, setOpen] = useState(false);
  const [prescription, setPrescription] = useState({
    patientName: "Rahul Sharma",
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

  }, [id]);

  const [medication, setMedication] = useState({
    medicineName: "",
    dosage: "1",
    timings: "Before Food",
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
  const [examination, setExamination] = useState({
    Hr: "",
    Bp: "",
    SPO2: "",
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

  return (
    <>
      <Navbar
        navDark={true}
        manuClass="navigation-menu nav-left"
        containerClass="container"
      />

      <section className="bg-hero">
        <div className="container">
          <div className="row mt-lg-5">
            <div className="col-md-6 col-lg-4">
              <div className="rounded shadow overflow-hidden sticky-bar">
                <div className="card border-0">
                  <img src={bg1} className="img-fluid" alt="" />
                </div>

                <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                  <img
                    src={client1}
                    className="rounded-circle shadow-md avatar avatar-md-md"
                    alt=""
                  />
                  <h5 className="mt-3 mb-1">{patientsData?.full_name}</h5>
                  <p className="text-muted mb-0">{calculateAge(patientsData?.date_of_birth)} Years old</p>
                </div>

                <div className="list-unstyled p-4">
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <FiUser className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"Gender"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.gender}</p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <RiMindMap className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"District"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.district}</p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <RiNodeTree className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"Block"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.block}</p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <RiWeiboFill className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"Height"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.height} Foot</p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <RiScales2Fill className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"Weight"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.weight} Kg</p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-3"
                  >
                    <GiMedicalDrip className="align-text-bottom text-primary h5 mb-0 me-2" />
                    <h6 className="mb-0">{"Blood Group"}</h6>
                    <p className="text-muted mb-0 ms-2">{patientsData?.blood_group}</p>
                  </div>
                </div>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                  <button className="btn btn-secondary"
                    onClick={() => {
                      showDrawer()
                    }}
                  >Show Prescription</button>
                  <button className="btn btn-primary"
                    onClick={() => {
                      setActiveIndex(1)
                      setActiveSubIndex(1)

                      showNewPrescriptionDrawer()
                    }}
                  >Submit Prescription</button>
                </div>

              </div>

            </div>

            <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 shadow overflow-issue">
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
                </ul>

                <div className="tab-content p-4 ">
                  {activeIndex === 1 ? (
                    <div className="tab-pane fade show active">
                      <div className="card border-0 shadow overflow-issue">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 1 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(1)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h5 className="title fw-normal mb-0">
                                  Chief Query
                                </h5>
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
                                <h5 className="title fw-normal mb-0">
                                  History
                                </h5>
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
                                <Prescription patient={patientsData} medication={medication} prescription={prescription} setPDFFile={setPDFFile} generatePrescription={generatePrescription} />
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
                      {activeSubIndex === 2 &&
                        <div
                          className={`tab-pane fade show active`}
                        >


                          <div className="row">
                            <div className="col-lg-12 col-12 mt-4">
                              {patientsData?.appointments.map((item, index) => {
                                return (
                                  <div className="row rounded shadow" style={{ margin: "1rem", marginBottom: "2rem" }}>
                                    <div className="col-4" style={{ background: "rgb(56,108,240)", color: "white", height: "4rem", alignItems: "center", display: "flex", justifyContent: "center", cursor: "pointer" }}
                                      onClick={() => {
                                        setShow(true)
                                        setHTMLData(item.pdf_content)
                                        console.log(item.pdf_content)

                                      }}
                                    >
                                      Report
                                    </div>
                                    <div className="col-8" style={{ display: "flex", flexDirection: "column" }}>
                                      {item.doctor_instruction}
                                      <span className="mb-0 mt-2" style={{ fontWeight: "600" }}>Dr. {item?.doctor?.full_name} - {moment(item?.date_appointment).format('YYYY-MM-DD')}</span>

                                    </div>
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
                      <div className="card border-0 shadow overflow-issue">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 5 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(5)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h5 className="title fw-normal mb-0">
                                  Provisional Diagnosis
                                </h5>
                              </div>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 6 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(6)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h5 className="title fw-normal mb-0">
                                  Lab Tests
                                </h5>
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
                                <h5 className="title fw-normal mb-0">
                                  Final Prescription
                                </h5>
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
                              <Input style={{ height: "5rem" }}
                                value={provisional}
                                onChange={(e) => setProvisional(e.target.value)}
                              />
                              <div className="col-md-12 mt-2" >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => {
                                    showDrawer()
                                    setPrescription((prev) => ({ ...prev, provisionalDiagnosis: provisional }))
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
                                showDrawer={showDrawer}
                                prescription={prescription}
                                setPrescription={setPrescription}
                                medication={medication}
                                setMedication={setMedication}
                                activeSubIndex={activeSubIndex}
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
                      <div className="card border-0 shadow overflow-issue">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                          <li className="nav-item">
                            <Link
                              className={`${activeSubIndex === 3 ? "active" : ""
                                } nav-link rounded-0`}
                              to="#"
                              onClick={() => setActiveSubIndex(3)}
                            >
                              <div className="text-center pt-1 pb-1">
                                <h5 className="title fw-normal mb-0">
                                  General
                                </h5>
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
                                <h5 className="title fw-normal mb-0">
                                  Systemic
                                </h5>
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
          </div>
        </div>
      </section>
      <Drawer
        title=" "
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        {prescription.symptoms.length > 0 &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Chief Query
            </div>
            <div className="col-md-8 row">
              {prescription.symptoms.map((med, index) => (
                med.symptoms && med.dosage && med.duration && 
                <>
                <div className="col-md-10 mt-2">
                     <li key={index}>
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
                        prescription.symptoms.splice(index, 1)
                        onClose()
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
  <div className="col-md-4" style={{ fontWeight: "800" }}>
    General Examination
  </div>
  <div className="col-md-8 row">
    {Object.keys(prescription.examination).map((med, index) => (
      prescription.examination[med] != "" &&
      <>
         <div className="col-md-10 mt-2">
         <li key={index}>
        {capitalizeFirst(med)} - {prescription.examination[med]}
        <br />
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
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Systemic Examination
            </div>
            <div className="col-md-8 row">
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
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Provisional Diagnosis
            </div>
            <div className="col-md-8 row">
            <>
            <div className="col-md-10">

            {prescription.provisionalDiagnosis != "" && <p>{capitalizeFirst(prescription.provisionalDiagnosis)}</p>}
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
            <div className="col-md-4" style={{ fontWeight: "800" }}>
            Recommended Test
            </div>
            <div className="col-md-8 row">

              {prescription.labReports.map((med, index) => (
                med!="" &&
                <>
                <div className="col-md-10 mt-2">

                <li key={index}>
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
                                    prescription.labReports.splice(index, 1)

                                     onClose()
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
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Prescribed Medications
            </div>
            <div className="col-md-8 row">
              {prescription.medications.map((med, index) => (
<>
<div className="col-md-10 mt-2">

                <li key={index}>
                {capitalizeFirst(med.medicineName)}{"-"}{med.medicationType}{'-'}{med.Strength}{" "}{med.medicineConsume}  <br />  {med.dosage} Per {" "}
                  {med.duration} {"-"} {med.timings}

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
                                    prescription.medications.splice(index, 1)

                                     onClose()
                                   }}
                                   ><FiTrash2  /></button>
</div>


              </>

              ))}
            </div>
          </div>
        }
        {medication.nextVisit &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Next Visit
            </div>
            <div className="col-md-8 row">
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
        {prescription.instructions.length > 0 ? (
          <div className="col-md-12 mt-4 row">
            <div className="col-md-4" style={{ fontWeight: "800" }}>
              Instructions
            </div>
            <div className="col-md-8 row">
             

         
              {prescription.instructions.map((med, index) => (
                med != "" && <>
                <div className="col-md-10 mt-2">
   <li key={index}>
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
                                    prescription.instructions.splice(index, 1)
                                     onClose()
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
                {prescription.referTo.length > 0 ? (
          <div className="col-md-12 mt-4 row">
          <div className="col-md-4" style={{ fontWeight: "800" }}>
            Refer To
          </div>
          <div className="col-md-8 row">
              {prescription.referTo.map((med, index) => (
                med!="" &&
                <>
                                <div className="col-md-10 mt-2">

                  <li key={index}>
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
                                    prescription.referTo.splice(index, 1)
                                     onClose()
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
      </Drawer>
      <Footer />
      <ScrollTop />
    </>
  );
}
