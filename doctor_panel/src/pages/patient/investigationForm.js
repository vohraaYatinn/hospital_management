import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotNull } from "../../utils/commonFunctions";

const options = [
  { value: "Complete Blood Count (CBC)", label: "Complete Blood Count (CBC)" },
  { value: "Blood Glucose Test", label: "Blood Glucose Test" },
  { value: "Lipid Panel", label: "Lipid Panel" },
  { value: "Thyroid Function Tests", label: "Thyroid Function Tests" },
  { value: "Liver Function Tests", label: "Liver Function Tests" },
  { value: "Kidney Function Tests", label: "Kidney Function Tests" },
  { value: "Hemoglobin A1c Test", label: "Hemoglobin A1c Test" },
  { value: "Coagulation Panel", label: "Coagulation Panel" },
  { value: "Urinalysis", label: "Urinalysis" },
  { value: "Serum Electrolytes Test", label: "Serum Electrolytes Test" },
  { value: "C-reactive Protein (CRP) Test", label: "C-reactive Protein (CRP) Test" },
  { value: "Vitamin D Levels Test", label: "Vitamin D Levels Test" },
  { value: "Iron Studies", label: "Iron Studies" },
  { value: "HIV Screening", label: "HIV Screening" },
  { value: "Hepatitis Panel", label: "Hepatitis Panel" },
  { value: "Thyroid Antibodies Test", label: "Thyroid Antibodies Test" },
  { value: "Prostate Specific Antigen (PSA)", label: "Prostate Specific Antigen (PSA)" },
  { value: "Allergy Testing", label: "Allergy Testing" },
  { value: "Serum Cortisol Test", label: "Serum Cortisol Test" },
  { value: "Erythrocyte Sedimentation Rate (ESR)", label: "Erythrocyte Sedimentation Rate (ESR)" },
  { value: "Blood Type Testing", label: "Blood Type Testing" },
  { value: "C-reactive Protein (CRP) Test", label: "C-reactive Protein (CRP) Test" },
  { value: "Thyroid Stimulating Hormone (TSH) Test", label: "Thyroid Stimulating Hormone (TSH) Test" },
  { value: "Hemoglobin Electrophoresis", label: "Hemoglobin Electrophoresis" },
  { value: "Serum Ferritin Test", label: "Serum Ferritin Test" },
  { value: "Creatine Kinase (CK) Test", label: "Creatine Kinase (CK) Test" },
  { value: "Lipase Test", label: "Lipase Test" },
  { value: "Prothrombin Time (PT) Test", label: "Prothrombin Time (PT) Test" },
  { value: "Activated Partial Thromboplastin Time (APTT) Test", label: "Activated Partial Thromboplastin Time (APTT) Test" },
  { value: "Hormone Panel", label: "Hormone Panel" },
  { value: "D-dimer Test", label: "D-dimer Test" },
  { value: "Electrolyte Panel", label: "Electrolyte Panel" },
  { value: "Uric Acid Test", label: "Uric Acid Test" },
  { value: "Serum Calcium Test", label: "Serum Calcium Test" },
  { value: "hCG Pregnancy Test", label: "hCG Pregnancy Test" },
  { value: "Fibrinogen Test", label: "Fibrinogen Test" },
];

const optionsDosage = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];
const weeksOptions = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
];
const time = [
  { value: "Before Food", label: "Before Food" },
  { value: "After Food", label: "After Food" },
  { value: "Empty Stomach", label: "Empty Stomach" },
];
const handleChange = (selectedOption) => {};

function DoctorInvestigationForm({
  showDrawer,
  prescription,
  setPrescription,
  medication,
  setMedication,
}) {
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

  const handleAddMedication = () => {
    const existingIndex = prescription.labReports.findIndex(entry => entry === medication.labTests);
    if(checkNotNull(medication.labTests)){
      showDrawer();
      let symArr = [];
      if(existingIndex !== -1){
        symArr = [...prescription.labReports];
        symArr.splice(existingIndex, 1);

      }
      else{
        symArr = prescription.labReports
      }
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        labReports: [...symArr, medication.labTests],
      }));
    }


    setMedication({
      labTests: ""

    });
  };


  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
  };
  let [activeIndex, setActiveIndex] = useState(1)


  return (
    <div className="tab-pane fade show active">
      <h5 className="mb-0">Recommend Test:</h5>
      <form className="mt-4" onSubmit={handlePrescriptionSubmit}>
        <div className="row">
     
          <div className="col-md-12">
            <div className="mb-3">
              <div className="row">
                <div className="col-md-12 mb-2">
                  <Select
                    name="medicineName"
                    value={{
                      value: medication.labTests,
                      label: medication.labTests,
                    }}
                    onChange={(e) => handleMedicationChange(e, "labTests")}
                    options={options}
                    placeholder="Select Medicine"
                    isSearchable
                    required
                  />
                </div>

              </div>

            </div>
          </div>
          <div className="col-md-12 " style={{paddingBottom:"10rem"}}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddMedication}
            >
              Add
            </button>
          </div>
       
              
        </div>
      </form>
    </div>
  );
}

export default DoctorInvestigationForm;
