import React, { useEffect, useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotAllNull, useIsMobile } from "../../utils/commonFunctions";
import Modal from 'react-bootstrap/Modal';

const optionsDosage = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];
const optionsDosageForDays = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];
for (let i = 5; i <= 30; i++) {
  optionsDosageForDays.push({ value: i.toString(), label: i.toString() });
}

const weeksOptions = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
];
const weeksOptionsPlural = [
  { value: "Days", label: "Days" },
  { value: "Weeks", label: "Weeks" },
  { value: "Months", label: "Months" },
];
const time = [
  { value: "Before Food", label: "Before Food" },
  { value: "After Food", label: "After Food" },
  { value: "Empty Stomach", label: "Empty Stomach" },
];
const handleChange = (selectedOption) => {};

function DoctorInspectForm({
  showDrawer,
  prescription,
  setPrescription,
  medication,
  setMedication,
  vomitData,
  addNewVomit
}) {
  const isMobile = useIsMobile();

  let [editProfile, setEditProfile] = useState(false)

const [options, setOptions] = useState([
  { value: "", label: <><button style={{width:"100%", background:"green", color:"white"}} onClick={()=>{
    setEditProfile(true)
  }}>Add New</button></> },
  ...vomitData
]);
useEffect(()=>{
  setOptions([
    { value: "", label: <><button style={{width:"100%", background:"green", color:"white"}} onClick={()=>{
      setEditProfile(true)
    }}>Add New</button></> },
    ...vomitData
  ])
},[vomitData])
  const handleMedicationChange = (e, name = false) => {

    if (e?.target) {
      const { name, value } = e.target;
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: value,
      }));
    } else {
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: e.value,
      }));
    }
  };

  const handleTimeChange = (e, name = false) => {

    if (e?.target) {
      const { name, value } = e.target;
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: value,
      }));
    } else {
      setMedication((prevMedication) => ({
        ...prevMedication,
        [name]: e.value,
      }));
    }
  };

  const handleAddInstructions = () => {
    showDrawer();
    if(activeIndex==1){
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        instructions: [...prevPrescription.instructions, medication.comments],
      }));
    }
    else{
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        labReports: [...prevPrescription.labReports, medication.labReports],
      }));
    }

    setMedication((prev)=>({...prev,
    comments:"",
    labReports:""
    }))
  };

  const handleAddMedication = () => {
    const existingIndex = prescription.symptoms.findIndex(entry => entry.symptoms === medication.symptoms);

    if(checkNotAllNull(medication)){
      showDrawer();
      let symArr = []
      if(existingIndex !== -1){
        symArr = [...prescription.symptoms];
        symArr.splice(existingIndex, 1);
      }
      else{
        symArr = prescription.symptoms
      }
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        symptoms: [...symArr, medication],
      }));
    }


    setMedication({
      symptoms: "",
      dosage: "1",
      duration: "day"
    });
  };


  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
  };
  let [activeIndex, setActiveIndex] = useState(1)
  const [newSymptom, setNewSymptom] = useState()

  return (
    <div className="tab-pane fade show active">
                     <Modal show={editProfile} onHide={()=>setEditProfile(false)} centered size="lg">
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Add New Symptoms</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row align-items-center">
                         

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input name="number" id="number" type="text" className="form-control" value={newSymptom} placeholder="type symptoms" onChange={(e)=>{
                                          setNewSymptom(e.target.value)
                                        }}/>
                                    </div>                                                                               
                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Add"
                                    onClick={()=>{
                                      addNewVomit(newSymptom)
                                      setEditProfile(false)

                                    }
                                  }
                                    />
                                </div>
                            </div>
                        
                        </Modal.Body>
                    </Modal>
      <h5 className="mb-0">Doctor's Inspect</h5>
      <form className="mt-4" onSubmit={handlePrescriptionSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row">
 
                <div className="col-md-6 mb-2">
                <label className="form-label">Symptoms</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.symptoms,
                      label: medication.symptoms,
                    }}
                    onChange={(e) => handleMedicationChange(e, "symptoms")}
                    options={options}
                    placeholder="Select Symptoms"
                    isSearchable
                    required
                  />
                </div>
                                  <div className="col-md-2 mb-2">
                                  <label className="form-label">Duration</label>


                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.dosage,
                      label: medication.dosage,
                    }}
                    onChange={(e) =>{
                      handleMedicationChange(e, "dosage")
                      setMedication((prevMedication) => ({
                        ...prevMedication,
                        duration: "",
                      }));
                    } }
                    options={optionsDosageForDays}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                <div className="col-md-3" style={{ marginLeft:!isMobile && "1rem" }}>
                <label className="form-label">D/W/M</label>

                  <Select
                    style={{ height: "2rem" }}
                    name="duration"
                    value={{
                      value: medication.duration,
                      label: medication.duration,
                    }}
                    onChange={(e) =>{

                      handleMedicationChange(e, "duration")
                    }
                    
                    }
                    options={medication.dosage!=1 ?weeksOptionsPlural: weeksOptions}
                    placeholder="Select Duration"
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
              style={{marginBottom:"4rem"}}

            >
              Add
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default DoctorInspectForm;
