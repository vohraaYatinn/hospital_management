import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { Input } from "antd";

const options = [
  { value: "fever", label: "Fever" },
  { value: "vomit", label: "Vomit" },
  { value: "chestpain", label: "Chest Pain" },
];
const optionsDosage = Array.from({ length: 100 }, (_, index) => ({
  value: (index + 100).toString(),
  label: `${index + 100}`,
}));
const optionsDosageTrueFalse = [
  { value: "true", label: "True" },
  { value: "false", label: "False" }
];
const weeksOptions = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Week" },
];
const time = [
  { value: "Before Food", label: "Before Food" },
  { value: "After Food", label: "After Food" },
  { value: "Empty Stomach", label: "Empty Stomach" },
];
const handleChange = (selectedOption) => {};

function DoctorExaminationForm({
  showDrawer,
  prescription,
  setPrescription,
  medication,
  setMedication,
  activeSubIndex,
  systemic,
  setSystemic
}) {
  const handleMedicationChangeSystemic = (e, name = false) => {
    console.log(e)
    if (e?.target) {
      const { name, value } = e.target;
      setSystemic((prevMedication) => ({
        ...prevMedication,
        [name]: value,
      }));
    } else {
      setSystemic((prevMedication) => ({
        ...prevMedication,
        [name]: e.value,
      }));
    }
  };
  const handleMedicationChange = (e, name = false) => {
    console.log(e)
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

  const handleAddMedicationSys = () => {
    showDrawer();
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      systemic: systemic,
    }));

    setSystemic({
      CVS:"",
      Respiratory:"",
      Abdominal:"",
      CNS:""
    });
  };

  const handleAddMedication = () => {
    showDrawer();
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      examination: medication,
    }));

    setMedication({
      medicineName: "",
      dosage: "1",
      timings: "Before Food",
      comments: "",
      duration: "day",
    });
  };


  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
  };
  let [activeIndex, setActiveIndex] = useState(1)


  return (
    <div className="tab-pane fade show active">
      <form className="mt-4" onSubmit={handlePrescriptionSubmit}>
        {activeSubIndex == 3?
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row">
 
                <label className="form-label">Symptoms</label>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"HR"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.Hr,
                      label: medication.Hr,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Hr")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                  <Input
                  disabled={true}
                    name="medicineName"
                    value={"BP"}

                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.Bp,
                      label: medication.Bp,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Bp")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                  <Input
                  disabled={true}
                    name="medicineName"
                    value={"SPO2"}

                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.Spo2,
                      label: medication.Spo2,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Spo2")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Rhythm"}

                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.Rhythm,
                      label: medication.Rhythm,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Rhythm")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Volume"}

                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.Volume,
                      label: medication.Volume,
                    }}
                    onChange={(e) => handleMedicationChange(e, "Volume")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Temperature"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                        value: medication.Temperature,
                        label: medication.Temperature,
                      }}
                    onChange={(e) => handleMedicationChange(e, "Temperature")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Pulse Rate"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                        value: medication.PulseRate,
                        label: medication.PulseRate,
                      }}
                    onChange={(e) => handleMedicationChange(e, "PulseRate")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"RR"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: medication.RR,
                      label: medication.RR,
                    }}
                    onChange={(e) => handleMedicationChange(e, "RR")}
                    options={optionsDosage}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
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
          
        </div>:<div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row">
 
                <label className="form-label">Symptoms</label>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"CVS"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: systemic.CVS,
                      label: systemic.CVS,
                    }}
                    onChange={(e) => handleMedicationChangeSystemic(e, "CVS")}
                    options={optionsDosageTrueFalse}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Respiratory"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: systemic.Respiratory,
                      label: systemic.Respiratory,
                    }}
                    onChange={(e) => handleMedicationChangeSystemic(e, "Respiratory")}
                    options={optionsDosageTrueFalse}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"Abdominal"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: systemic.Abdominal,
                      label: systemic.Abdominal,
                    }}
                    onChange={(e) => handleMedicationChangeSystemic(e, "Abdominal")}
                    options={optionsDosageTrueFalse}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-2">
                <Input
                  disabled={true}
                    name="medicineName"
                    value={"CNS"}
                    placeholder="Select Symptoms"
                    disable={true}
                  />
                </div>
                <div className="col-md-2">
                  <Select
                    name="dosage"
                    style={{ height: "2rem" }}
                    value={{
                      value: systemic.CNS,
                      label: systemic.CNS,
                    }}
                    onChange={(e) => handleMedicationChangeSystemic(e, "CNS")}
                    options={optionsDosageTrueFalse}
                    placeholder="Select Dosage"
                    isSearchable
                    required
                  />
                </div>
                </div>
              
        
              </div>

            </div>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddMedicationSys}
            >
              Add
            </button>
          </div>
          
        </div>}
      </form>
    </div>
  );
}

export default DoctorExaminationForm;
