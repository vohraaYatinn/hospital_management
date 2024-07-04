import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotNull } from "../../utils/commonFunctions";
import Modal from 'react-bootstrap/Modal';



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
  const [options, setOptions] = useState([
    { value: "", label: <><button style={{width:"100%", background:"green", color:"white"}} onClick={()=>{
      setEditProfile(true)
    }}>Add New</button></> },
    { value: "Complete Blood Count (CBC)", label: "Complete Blood Count (CBC)" },
    { value: "Blood Glucose (Fasting and Postprandial)", label: "Blood Glucose (Fasting and Postprandial)" },
    { value: "Hemoglobin A1c (HbA1c)", label: "Hemoglobin A1c (HbA1c)" },
    { value: "Lipid Profile", label: "Lipid Profile" },
    { value: "Liver Function Tests (LFT)", label: "Liver Function Tests (LFT)" },
    { value: "Kidney Function Tests (KFT)", label: "Kidney Function Tests (KFT)" },
    { value: "Thyroid Function Tests (TFT)", label: "Thyroid Function Tests (TFT)" },
    { value: "Urine Routine and Microscopy", label: "Urine Routine and Microscopy" },
    { value: "Stool Routine and Microscopy", label: "Stool Routine and Microscopy" },
    { value: "Electrolyte Panel", label: "Electrolyte Panel" },
    { value: "Erythrocyte Sedimentation Rate (ESR)", label: "Erythrocyte Sedimentation Rate (ESR)" },
    { value: "C-Reactive Protein (CRP)", label: "C-Reactive Protein (CRP)" },
    { value: "Serum Creatinine", label: "Serum Creatinine" },
    { value: "Blood Urea Nitrogen (BUN)", label: "Blood Urea Nitrogen (BUN)" },
    { value: "Prothrombin Time (PT) and INR", label: "Prothrombin Time (PT) and INR" },
    { value: "Activated Partial Thromboplastin Time (aPTT)", label: "Activated Partial Thromboplastin Time (aPTT)" },
    { value: "Serum Bilirubin", label: "Serum Bilirubin" },
    { value: "Serum Albumin", label: "Serum Albumin" },
    { value: "Alkaline Phosphatase (ALP)", label: "Alkaline Phosphatase (ALP)" },
    { value: "Aspartate Aminotransferase (AST)", label: "Aspartate Aminotransferase (AST)" },
    { value: "Alanine Aminotransferase (ALT)", label: "Alanine Aminotransferase (ALT)" },
    { value: "Gamma-Glutamyl Transferase (GGT)", label: "Gamma-Glutamyl Transferase (GGT)" },
    { value: "Calcium", label: "Calcium" },
    { value: "Magnesium", label: "Magnesium" },
    { value: "Phosphate", label: "Phosphate" },
    { value: "Vitamin D", label: "Vitamin D" },
    { value: "Vitamin B12", label: "Vitamin B12" },
    { value: "Folate", label: "Folate" },
    { value: "Iron Studies", label: "Iron Studies" },
    { value: "Ferritin", label: "Ferritin" },
    { value: "Total Iron-Binding Capacity (TIBC)", label: "Total Iron-Binding Capacity (TIBC)" },
    { value: "Transferrin Saturation", label: "Transferrin Saturation" },
    { value: "Rheumatoid Factor (RF)", label: "Rheumatoid Factor (RF)" },
    { value: "Anti-Nuclear Antibody (ANA)", label: "Anti-Nuclear Antibody (ANA)" },
    { value: "HLA-B27", label: "HLA-B27" },
    { value: "Hepatitis B Surface Antigen (HBsAg)", label: "Hepatitis B Surface Antigen (HBsAg)" },
    { value: "Hepatitis C Antibody", label: "Hepatitis C Antibody" },
    { value: "HIV Antibody Test", label: "HIV Antibody Test" },
    { value: "Syphilis Test (VDRL/RPR)", label: "Syphilis Test (VDRL/RPR)" },
    { value: "Tuberculosis (TB) Test (Mantoux Test/PPD)", label: "Tuberculosis (TB) Test (Mantoux Test/PPD)" },
    { value: "Prostate-Specific Antigen (PSA)", label: "Prostate-Specific Antigen (PSA)" },
    { value: "CA-125", label: "CA-125" },
    { value: "Carcinoembryonic Antigen (CEA)", label: "Carcinoembryonic Antigen (CEA)" },
    { value: "Alpha-Fetoprotein (AFP)", label: "Alpha-Fetoprotein (AFP)" },
    { value: "Beta-Human Chorionic Gonadotropin (Beta-hCG)", label: "Beta-Human Chorionic Gonadotropin (Beta-hCG)" },
    { value: "Lactate Dehydrogenase (LDH)", label: "Lactate Dehydrogenase (LDH)" },
    { value: "Creatine Kinase (CK)", label: "Creatine Kinase (CK)" },
    { value: "Troponin", label: "Troponin" },
    { value: "Brain Natriuretic Peptide (BNP)", label: "Brain Natriuretic Peptide (BNP)" },
    { value: "D-Dimer", label: "D-Dimer" },
    { value: "Fibrinogen", label: "Fibrinogen" },
    { value: "Hematocrit", label: "Hematocrit" },
    { value: "Platelet Count", label: "Platelet Count" },
    { value: "White Blood Cell (WBC) Count", label: "White Blood Cell (WBC) Count" },
    { value: "Red Blood Cell (RBC) Count", label: "Red Blood Cell (RBC) Count" },
    { value: "Hemoglobin", label: "Hemoglobin" },
    { value: "Mean Corpuscular Volume (MCV)", label: "Mean Corpuscular Volume (MCV)" },
    { value: "Mean Corpuscular Hemoglobin (MCH)", label: "Mean Corpuscular Hemoglobin (MCH)" },
    { value: "Mean Corpuscular Hemoglobin Concentration (MCHC)", label: "Mean Corpuscular Hemoglobin Concentration (MCHC)" },
    { value: "Red Cell Distribution Width (RDW)", label: "Red Cell Distribution Width (RDW)" },
    { value: "Reticulocyte Count", label: "Reticulocyte Count" },
    { value: "Blood Group and Rh Type", label: "Blood Group and Rh Type" },
    { value: "Antibody Screen", label: "Antibody Screen" },
    { value: "Coombs Test (Direct and Indirect)", label: "Coombs Test (Direct and Indirect)" },
    { value: "Serum Protein Electrophoresis", label: "Serum Protein Electrophoresis" },
    { value: "Allergy Testing (IgE)", label: "Allergy Testing (IgE)" },
    { value: "Autoimmune Panel", label: "Autoimmune Panel" },
    { value: "Thyroid Peroxidase Antibody (TPO)", label: "Thyroid Peroxidase Antibody (TPO)" },
    { value: "Thyroglobulin Antibody (TGAb)", label: "Thyroglobulin Antibody (TGAb)" },
    { value: "Glucose Tolerance Test (GTT)", label: "Glucose Tolerance Test (GTT)" },
    { value: "Insulin", label: "Insulin" },
    { value: "C-Peptide", label: "C-Peptide" },
    { value: "Serum Osmolality", label: "Serum Osmolality" },
    { value: "Ammonia", label: "Ammonia" },
    { value: "Lactic Acid", label: "Lactic Acid" },
    { value: "Cholesterol (Total, HDL, LDL)", label: "Cholesterol (Total, HDL, LDL)" },
    { value: "Triglycerides", label: "Triglycerides" },
    { value: "Apolipoproteins (ApoA, ApoB)", label: "Apolipoproteins (ApoA, ApoB)" },
    { value: "Homocysteine", label: "Homocysteine" },
    { value: "Cortisol", label: "Cortisol" },
    { value: "Adrenocorticotropic Hormone (ACTH)", label: "Adrenocorticotropic Hormone (ACTH)" },
    { value: "Aldosterone", label: "Aldosterone" },
    { value: "Renin", label: "Renin" },
    { value: "Parathyroid Hormone (PTH)", label: "Parathyroid Hormone (PTH)" },
    { value: "Calcitonin", label: "Calcitonin" },
    { value: "Growth Hormone (GH)", label: "Growth Hormone (GH)" },
    { value: "Prolactin", label: "Prolactin" },
    { value: "Follicle-Stimulating Hormone (FSH)", label: "Follicle-Stimulating Hormone (FSH)" },
    { value: "Luteinizing Hormone (LH)", label: "Luteinizing Hormone (LH)" },
    { value: "Estradiol", label: "Estradiol" }
  ])
  let [editProfile, setEditProfile] = useState(false)
  const [newSymptom, setNewSymptom] = useState()

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
                           <Modal show={editProfile} onHide={()=>setEditProfile(false)} centered size="lg">
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Add New Test</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row align-items-center">
                         

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input name="number" id="number" type="text" className="form-control" value={newSymptom} placeholder="type test name" onChange={(e)=>{
                                          setNewSymptom(e.target.value)
                                        }}/>
                                    </div>                                                                               
                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Add"
                                    onClick={()=>{
                                      setOptions([...options,{value:newSymptom, label:newSymptom}])
                                      setEditProfile(false)

                                    }
                                  }
                                    />
                                </div>
                            </div>
                        
                        </Modal.Body>
                    </Modal>
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
