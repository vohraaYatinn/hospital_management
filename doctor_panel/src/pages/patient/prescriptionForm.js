import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotAllNull, compareObjects, getCurrentDate } from "../../utils/commonFunctions";
import BulletTextbox from "../../common-components/BulletTextBox";
import { useSelector } from 'react-redux';
import { medicinesDetails, updateMedicines } from "../../redux/reducers/functionalities.reducer";
import { useEffect } from "react";
import useAxios from "../../network/useAxios";
import { fetchDoctorMedicinesDashboard } from "../../urls/urls";
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';


const optionsa = [
  { value: "aspirin", label: "Aspirin" },
  { value: "ibuprofen", label: "Ibuprofen" },
  { value: "acetaminophen", label: "Acetaminophen" },
  { value: "amoxicillin", label: "Amoxicillin" },
  { value: "vitaminC", label: "Vitamin C" },
  { value: "prednisone", label: "Prednisone" },
  { value: "prozac", label: "Prozac" },
  { value: "lisinopril", label: "Lisinopril" },
  { value: "omeprazole", label: "Omeprazole" },
  { value: "zantac", label: "Zantac" },
  { value: "claritin", label: "Claritin" },
  { value: "tylenol", label: "Tylenol" },
  { value: "advil", label: "Advil" },
  { value: "benadryl", label: "Benadryl" },
  { value: "pepto-bismol", label: "Pepto-Bismol" },
  { value: "xanax", label: "Xanax" },
  { value: "ciprofloxacin", label: "Ciprofloxacin" },
  { value: "valium", label: "Valium" },
  { value: "lipitor", label: "Lipitor" },
  { value: "penicillin", label: "Penicillin" },
  { value: "zyrtec", label: "Zyrtec" },
  { value: "propecia", label: "Propecia" },
  { value: "zoloft", label: "Zoloft" },
  { value: "vicodin", label: "Vicodin" },
  { value: "atenolol", label: "Atenolol" },
  { value: "morphine", label: "Morphine" },
  { value: "cymbalta", label: "Cymbalta" },
  { value: "nexium", label: "Nexium" },
  { value: "wellbutrin", label: "Wellbutrin" },
  { value: "levothyroxine", label: "Levothyroxine" },
  { value: "furosemide", label: "Furosemide" },
  { value: "amitriptyline", label: "Amitriptyline" },
  { value: "tramadol", label: "Tramadol" },
  { value: "diazepam", label: "Diazepam" },
  { value: "prednisolone", label: "Prednisolone" },
  { value: "sertraline", label: "Sertraline" },
  { value: "losartan", label: "Losartan" },
  { value: "atenolol", label: "Atenolol" },
  { value: "hydrochlorothiazide", label: "Hydrochlorothiazide" },
  { value: "naproxen", label: "Naproxen" },
  { value: "citalopram", label: "Citalopram" },
  { value: "folic acid", label: "Folic Acid" },
  { value: "sildenafil", label: "Sildenafil" },
  { value: "gabapentin", label: "Gabapentin" },
  { value: "metformin", label: "Metformin" },
  { value: "omeprazole", label: "Omeprazole" },
  { value: "warfarin", label: "Warfarin" },
  { value: "lorazepam", label: "Lorazepam" },
];
const medicationType = [
  { value: "Tab", label: "Tab" },
  { value: "Syp", label: "Syp" },
  { value: "Cap", label: "Cap" },
  { value: "Inj", label: "Inj" }
]
const injectionStrength = [ 
  { value: "IM", label: "IM" },
  { value: "SC", label: "SC" },
  { value: "IV", label: "IV" },
  { value: "ID", label: "ID" }
]
const medicationStrength = [];

for (let i = 5; i <= 1000; i += 5) {
  medicationStrength.push({ value: `${i}`, label: `${i}` });
}
const medicineConsumeOptions = [
  { value: "¼", label: "¼" },
  { value: "½", label: "½" },
  { value: "1", label: "1" },
  { value: "2", label: "2" }
]
const amountBox = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" }
]
const amountBoxSyp = [
  { value: "ml", label: "ml" },
  { value: "mg", label: "mg" }
]
const optionsDosage = [
  { value: "OD", label: "OD" },
  { value: "BD", label: "BD" },
  { value: "TDS", label: "TDS" },
  { value: "QDS", label: "QDS" },
  { value: "HS", label: "HS" },
  { value: "5 times a day", label: "5 times a day" },
  { value: "6 times a day", label: "6 times a day" }
];
const weeksOptions = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
];
const dayDuration = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
];
const time = [
  { value: "AF", label: "AF" },
  { value: "BF", label: "BF" },
  { value: "Empty Stomach(Morning)", label: "Empty Stomach(Morning)" },
];

const nextVisit = Array.from({ length: 60 }, (_, index) => ({
  value: (index + 1).toString(),
  label: `${index + 1} Day${index !== 0 ? 's' : ''}`,
}));

const handleChange = (selectedOption) => { };

function DoctorPrescriptionForm({
  patientsData,
  showDrawer,
  prescription,
  setPrescription,
  medication,
  setMedication,
  onNewshowNewMedicinesShow,
  departmentsName
}) {
  let [editProfile, setEditProfile] = useState(false)
  let [editRefer, setEditRefer] = useState(false)
  const [newRefer, setNewRefer] = useState()

const [dummyHospitalData, setdummyHospitalData] = useState([
  { value: "", label: <><button style={{width:"100%", background:"green", color:"white"}} onClick={()=>{
    setEditRefer(true)
  }}>Add New</button></> },
]);
useEffect(()=>{
  let arrayToAdd = [{ value: "", label: <><button style={{width:"100%", background:"green", color:"white"}} onClick={()=>{
    setEditRefer(true)
  }}>Add New</button></> }]

  const updatedArray = arrayToAdd.concat(departmentsName.map(department => ({
    value: department.name,
    label: department.name
  })));
  setdummyHospitalData(updatedArray)

},[departmentsName])


  const handleMedicationChange = (e, name = false) => {
    if (e?.target) {
      const { name, value } = e.target;
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: value,
      }));
    } else {
     if(name == "medicationType"){
      let power = ""
      if(e.value == "Tab" || e.value == "Cap" ){
        power = "Mg"
      }
      else if(e.value == "Syp" ){
        power = "Ml"
      }
      else if(e.value == "Inj" ){
        power = "Ml/Mg"
      }
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: e.value,
        "medicineConsume":power
      }));
     }
     else{
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: e.value,
      }));
     }

    }
  };

  const handleAddInstructions = () => {
    showDrawer();
    if (activeIndex == 1 && medication.comments.length > 2) {
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        instructions: [medication.comments.replace(/\n/g, '')],
      }));
    }
    else {
      const existingIndex = prescription.referTo.findIndex(entry => entry === medication.referTo);
      let symArr = []
      if(existingIndex !== -1){
        symArr = [...prescription.referTo];
        symArr.splice(existingIndex, 1);
      }
      else{
        symArr = prescription.referTo
      } 
      if(medication.referTo){
        setPrescription((prevPrescription) => ({
          ...prevPrescription,
          referTo: [medication.referTo],
        }));
      }     

    }

    setMedication((prev) => ({
      ...prev,
      referTo: ""
    }))
  };

  const handleAddMedication = () => {
    if (medication?.medicineName && medication?.duration && medication?.dosage) {
      showDrawer();
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        medications: [...prevPrescription.medications, medication],
      }));
    }


    setMedication({
      medicineName: "",
      dosage: "",
      timings: "BF",
      comments: "",
      duration: "day",
    });
  };

  const [medicinesResponse, medicinesError, medicinesLoading, medicinesFetch] = useAxios();
  const dispatch = useDispatch();

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
  };
  let [activeIndex, setActiveIndex] = useState(1)
  const [options, setOptions] = useState([])
  let medicines = useSelector(medicinesDetails);
  useEffect(()=>{
    if(typeof(medicines) == "object" && compareObjects(medicines, {})){
      medicinesFetch(fetchDoctorMedicinesDashboard())
    }
    else{
      let options = []
      options.push({ value:"Add New", label: <button style={{ color:"white", background:"green", width:"100%"}}>Add New</button> });
      medicines.forEach(option => {
        options.push({ value:option.name, label: option.name });
      });
      setOptions(options)
    }
  },[medicines])
  useEffect(() => {
    if (medicinesResponse?.result == "success") {
      let options = []
        dispatch(updateMedicines(medicinesResponse?.data))
        options.push({ value:"Add New", label:  <span style={{fontWeight:"600"}}>Add New</span>  });
        medicinesResponse?.data.forEach(option => {
          options.push({ value:option.name, label: option.name });
        });
        setOptions(options)

    }

}, [medicinesResponse])


  return (
    <div className="tab-pane fade show active">
                                 <Modal show={editRefer} onHide={()=>setEditRefer(false)} centered size="lg">
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Add New Refer To</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row align-items-center">
                         

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input name="number" id="number" type="text" className="form-control" value={newRefer} placeholder="type refer to (doctor-hospital)" onChange={(e)=>{
                                          setNewRefer(e.target.value)
                                        }}/>
                                    </div>                                                                               
                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Add"
                                    onClick={()=>{
                                      setdummyHospitalData([...dummyHospitalData,{value:newRefer, label:newRefer}])
                                      setEditRefer(false)

                                    }
                                  }
                                    />
                                </div>
                            </div>
                        
                        </Modal.Body>
                    </Modal>
      <h5 className="mb-0">Doctor's Prescription:</h5>
      <form className="mt-4" onSubmit={handlePrescriptionSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                disabled
                name="patientName"
                value={prescription.patientName}
                onChange={(e) =>
                  setPrescription({
                    ...prescription,
                    patientName: e.target.value,
                  })
                }
                placeholder="Patient Name"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Today's Date</label>
              <input
                type="date"
                className="form-control"
                disabled
                name="date"
                value={getCurrentDate()}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPrescription({ ...prescription, date: e.target.value });
                }}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row">
              <div className="col-md-4 mb-2">
                  <label className="form-label">Type</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.medicationType,
                      label: medication.medicationType,
                    }}
                    onChange={(e) => {handleMedicationChange(e, "medicationType")
                    setMedication((prevMedication) => ({
                      ...prevMedication,
                      Strength:"",
                      amount:"",
                    }));


                    }}
                    options={medicationType}
                    placeholder="Select Medicine"
                    isSearchable
                    required
                  />
                </div>
                {
                  medication.medicationType == "Inj" &&
 <div className="col-md-4 mb-2">
 <label className="form-label">Injection Type</label>

 <Select
   name="InjectionType"
   value={{
     value: medication.InjectionType,
     label: medication.InjectionType,
   }}
   onChange={(e) => handleMedicationChange(e, "InjectionType")}
   options={injectionStrength}
   placeholder="Select Injection Type"
   isSearchable
   required
 />
</div>
                }
               
                <div className="col-md-4 mb-2">
                  <label className="form-label">Medications</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.medicineName,
                      label: medication.medicineName,
                    }}
                    onChange={(e) => {
                      if(e?.value == "Add New"){
                        onNewshowNewMedicinesShow()
                      }
                      else{
                        handleMedicationChange(e, "medicineName")}}
                      }
                    options={options}
                    placeholder="Select Medicine"
                    isSearchable
                    required
                  />
                </div>

                <div className="col-md-4 mb-2">
                  <label className="form-label">Strength</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.Strength,
                      label: medication.Strength,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Strength")}
                    options={medicationStrength}
                    placeholder="Select Strength"
                    isSearchable
                    required
                  />
                </div>



                <div className="col-md-4">
                <label className="form-label">Amount</label>

                  <Select
                    name="amount"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.amount,
                      label: medication.amount,
                    }}
                    disabled={!medication?.medicationType}
                    onChange={(e) => handleMedicationChange(e, "amount")}
                    options={(medication?.medicationType == "Tab" ||medication?.medicationType == "Cap") ? medicineConsumeOptions :(medication?.medicationType == "Syp" || medication?.medicationType == "Inj"  ) ? amountBox : []  }
                    placeholder="Select Amount"
                    isSearchable
                    required
                  />
                </div>

                <div className="col-md-4">
                <label className="form-label">Dosage</label>

                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.dosage,
                      label: medication.dosage,
                    }}
                    onChange={(e) => handleMedicationChange(e, "dosage")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
               
                <div className="col-md-4 mt-2">
                  <label className="form-label">Consume</label>

                  <Select
                    name="Time"
                    value={{
                      value: medication.timings,
                      label: medication.timings,
                    }}
                    onChange={(e) => handleMedicationChange(e, "timings")}
                    options={time}
                    placeholder="Select Time"
                    isSearchable
                    required
                  />
                </div>
              </div>
              <div className="row">
              <div className="col-md-3 mt-2">
              <label className="form-label">Duration</label>

                  <Select
                    style={{ height: "2rem" }}
                    name="dayduration"
                    value={{
                      value: medication.dayduration,
                      label: medication.dayduration,
                    }}
                    onChange={(e) => handleMedicationChange(e, "dayduration")}
                    options={dayDuration}
                    placeholder="Select Duration"
                    isSearchable
                    required
                  />
                </div>
              <div className="col-md-3 mt-2" style={{ marginLeft: "1rem" }}>
              <label className="form-label">D/W/M</label>
                  <Select
                    style={{ height: "2rem" }}
                    name="duration"
                    value={{
                      value: medication.duration,
                      label: medication.duration,
                    }}
                    onChange={(e) => handleMedicationChange(e, "duration")}
                    options={weeksOptions}
                    placeholder="Select D/W/M"
                    isSearchable
                    required
                  />
                </div>
                </div>

            </div>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddMedication}
            >
              Add
            </button>
          </div>

          <div className="col-md-12 mt-4">
            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mt-2 mb-2">
              <li className="nav-item">
                <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() => setActiveIndex(1)}>
                  <div className="text-center pt-1 pb-1">
                    <h5 className="title fw-normal mb-0">Instructions</h5>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() => setActiveIndex(2)}>
                  <div className="text-center pt-1 pb-1">
                    <h5 className="title fw-normal mb-0">Refer To</h5>
                  </div>
                </Link>
              </li>
            </ul>
            <form>
              <div className="row">
                <div className="col-lg-12">

                  {activeIndex == 1 ?
                    <div className="mb-3">
                      <BulletTextbox text={medication.comments} setText={setMedication} name={"comments"}/>

                    </div>
                    :
                    <div className="mb-3" 
                    style={{marginTop:"1rem"}}

                    >
                  <Select
                    name="referTo"
                    value={{
                      value: medication.referTo,
                      label: medication.referTo,
                    }}
                    onChange={(e) => handleMedicationChange(e, "referTo")}
                    options={dummyHospitalData}
                    placeholder="Select Refer Doctor"
                    isSearchable
                    required
                  />                     
                   {/* <textarea name="referTo" id="name" type="text" className="form-control" placeholder=""
                        value={medication.referTo}
                        onChange={handleMedicationChange}

                        style={{ height: "5rem" }}
                      /> */}
                    </div>
                  }





                </div>

              </div>
            </form>
            <label className="form-label">Next Visit</label>

            <Select
              name="Time"
              value={{
                value: medication.nextVisit,
                label: medication.nextVisit,
              }}
              onChange={(e) => handleMedicationChange(e, "nextVisit")}
              options={nextVisit}
              placeholder="Select Time"
              isSearchable
              required
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{
                marginTop: "1rem",
                marginBottom: "7rem",

              }}
              onClick={handleAddInstructions}
            >

              Add
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default DoctorPrescriptionForm;
