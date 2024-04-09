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
import { calculateAge, capitalizeFirst, checkNotNull } from "../../utils/commonFunctions";
import { FiUser } from "react-icons/fi";
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
  const [htmlDataS, setHTMLData] = useState('');
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
  let [activeSubIndex, setActiveSubIndex] = useState(2);
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
    investigation: []
  });

  useEffect(() => {

  }, [id]);

  const [medication, setMedication] = useState({
    medicineName: "",
    dosage: "1",
    timings: "Before Food",
    comments: "",
    duration: "day",
    labReports: "",
    nextVisit: ""
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
                        setActiveSubIndex(2)
                        setActiveIndex(1)

                      }}
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="title fw-normal mb-0">HISTORY</h5>
                      </div>
                    </Link>
                  </li>

                </ul>

                <div className="tab-content check-padd-patient-profile" >
                  {activeIndex === 1 ? (
                    <div className="tab-pane fade show active">
                      <div className="card border-0 shadow overflow-issue">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">


                        </ul>
                      </div>

                      {/* complaints */}
                      {activeSubIndex === 1 &&
                        <div
                          className={`tab-pane fade ${activeSubIndex === 1 ? "show active" : ""
                            }`}
                        >
                          <p className="text-muted mb-0">
                            {patientsData?.appointments?.find(appointments => appointments.id == appointment)?.patients_query}
                          </p>

                          <div className="row">
                            <div className="col-lg-12 col-12 ">
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

                            <div className="col-lg-12 col-12 ">
                              {patientsData?.appointments && patientsData?.appointments.map((item, index) => {
                                return (
                                  <div className="row rounded shadow" style={{ margin: "1rem", marginBottom: "2rem" }}>
                                    <div className="col-4" style={{ background: "rgb(56,108,240)", color: "white", height: "4rem", alignItems: "center", display: "flex", justifyContent: "center", cursor: "pointer" }}
                                      onClick={() => {
                                        setShow(true)
                                        setHTMLData(item.pdf_content)

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
        {prescription.symptoms && prescription.symptoms.length > 0 &&
          <div className="col-md-12 mt-4 row">
            <div className="col-md-4">
              Chief Query:
            </div>
            <div className="col-md-8">
              {prescription.symptoms.map((med, index) => (
                <li key={index}>
                  {capitalizeFirst(med.symptoms)} X {med.dosage} {med.duration}
                  <br />
                </li>
              ))}
            </div>

          </div>
        }

        {prescription.examination && Object.keys(prescription.examination).length > 0 &&
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">General Examination:</h5>
            <ul className="check-patient-dashboard-prescription">
              {Object.keys(prescription.examination).map((med, index) => (
                (prescription.examination[med] != "" || med != "temperatureDecimal") && (
                  med == "temperature" ?
                    <li key={index}>
                      {capitalizeFirst(med)} - {prescription.examination["temperature"]}{prescription.examination["temperatureDecimal"]}°F
                      <br />
                    </li> : <li key={index}>
                    {capitalizeFirst(med)} - {prescription.examination[med]}
                      <br />
                    </li>

                ))
              )

              }
            </ul>
          </div>
        }
                {prescription.systemic && Object.keys(prescription.systemic).length > 0 &&
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Systemic Examination:</h5>
            <ul className="check-patient-dashboard-prescription">
              {Object.keys(prescription.systemic).map((med, index) => (
                prescription.systemic[med] != "" && <li key={index}>
                   {capitalizeFirst(med)} - {prescription.systemic[med]}
                  <br />
                </li>


              ))}
            </ul>
          </div>
        }
        {prescription.provisionalDiagnosis && prescription.provisionalDiagnosis != "" &&
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Provisional Diagnosis:</h5>

            {prescription.provisionalDiagnosis && prescription.provisionalDiagnosis != "" && <p>{capitalizeFirst(prescription.provisionalDiagnosis)}</p>}

          </div>}

        {prescription.labReports && prescription.labReports.length > 0 ? (
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Recommended Test:</h5>
            <ul className="check-patient-dashboard-prescription">
              {prescription.labReports.map((med, index) => (
                med != "" &&
                <li key={index}>
                  {capitalizeFirst(med)}
                  <br />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
                {prescription.medications && prescription.medications.length > 0 &&
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Prescribed Medications:</h5>
            <ul className="check-patient-dashboard-prescription">
              {prescription.medications.map((med, index) => (
                <li key={index}>
                  {capitalizeFirst(med.medicineName)}{"-"}{med.medicationType}{'-'}{med.Strength}{" "}{med.medicineConsume}  <br /> {med.dosage} Per {" "}
                  {med.duration} {"-"} {med.timings}

                  <br />
                </li>
              ))}
            </ul>
          </div>
        }
        {medication.nextVisit &&
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Next Visit:</h5>
            <ul className="check-patient-dashboard-prescription">
              {medication.nextVisit} Days
            </ul>
          </div>}
        {prescription.instructions && prescription.instructions.length > 0 ? (
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Instructions:</h5>
            <ul className="check-patient-dashboard-prescription">
              {prescription.instructions.map((med, index) => (
                med != "" &&
                <li key={index}>
                  {capitalizeFirst(med)}
                  <br />
                </li>


              ))}
            </ul>
          
          </div>
        ) : (
          ""
        )}
        {prescription.referTo && prescription.referTo.length > 0 ? (
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">refer To:</h5>
            <ul className="check-patient-dashboard-prescription">
              {prescription.referTo.map((med, index) => (
                med != "" &&
                <li key={index}>
                  {capitalizeFirst(med)}
                  <br />
                </li>


              ))}
            </ul>
   
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
