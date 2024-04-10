import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { checkNotAllNull, getCurrentDate } from "../../utils/commonFunctions";
import BulletTextbox from "../../common-components/BulletTextBox";

const options = [
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
  { value: "Tablet", label: "Tablet" },
  { value: "Syrup", label: "Syrup" },
  { value: "Injection", label: "Injection" },
  { value: "Capsule", label: "Capsule" }
]
const medicationStrength = [];

for (let i = 5; i <= 1000; i += 5) {
  medicationStrength.push({ value: `${i}`, label: `${i}` });
}
const medicineConsumeOptions = [
  { value: "ml", label: "ml" },
  { value: "mg", label: "mg" }]
const optionsDosage = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
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
const dummyHospitalData = [
  { value: "Dr. Rakesh - Ganga Hospital", label: "Dr. Rakesh - Ganga Hospital" },
  { value: "Dr. Priya - City Medical Center", label: "Dr. Priya - City Medical Center" },
  { value: "Dr. Gupta - Riverside Clinic", label: "Dr. Gupta - Riverside Clinic" },
  { value: "Dr. Sharma - Hilltop Hospital", label: "Dr. Sharma - Hilltop Hospital" },
  { value: "Dr. Patel - Lakeside Health Center", label: "Dr. Patel - Lakeside Health Center" },
  { value: "Dr. Singh - Sunrise Hospital", label: "Dr. Singh - Sunrise Hospital" },
  { value: "Dr. Khan - Valley Clinic", label: "Dr. Khan - Valley Clinic" },
  { value: "Dr. Joshi - Oceanview Medical Center", label: "Dr. Joshi - Oceanview Medical Center" },
  { value: "Dr. Das - Pine Hospital", label: "Dr. Das - Pine Hospital" },
  { value: "Dr. Banerjee - Skyline Healthcare", label: "Dr. Banerjee - Skyline Healthcare" },
  { value: "Dr. Chowdhury - Sunset Clinic", label: "Dr. Chowdhury - Sunset Clinic" },
  { value: "Dr. Roy - Greenfield Medical Center", label: "Dr. Roy - Greenfield Medical Center" },
  { value: "Dr. Verma - Silverlake Hospital", label: "Dr. Verma - Silverlake Hospital" },
  { value: "Dr. Dasgupta - Mountainview Clinic", label: "Dr. Dasgupta - Mountainview Clinic" },
  { value: "Dr. Mishra - Riverside Medical Center", label: "Dr. Mishra - Riverside Medical Center" }
];

const nextVisit = Array.from({ length: 60 }, (_, index) => ({
  value: (index + 1).toString(),
  label: `${index + 1} Day${index !== 0 ? 's' : ''}`,
}));

const handleChange = (selectedOption) => { };

function DoctorPrescriptionForm({
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

  const handleAddInstructions = () => {
    showDrawer();
    if (activeIndex == 1 && medication.comments.length > 2) {
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        instructions: [...prevPrescription.instructions, medication.comments.replace(/\n/g, '')],
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
          referTo: [...symArr, medication.referTo],
        }));
      }     

    }

    setMedication((prev) => ({
      ...prev,
      referTo: ""
    }))
  };

  const handleAddMedication = () => {
    if (medication?.medicineName && medication?.timings && medication?.medicineConsume && medication?.medicationType && medication?.duration && medication?.dosage) {
      showDrawer();
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        medications: [...prevPrescription.medications, medication],
      }));
    }


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
              <label className="form-label">Date</label>
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
                  <label className="form-label">Medications</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.medicineName,
                      label: medication.medicineName,
                    }}
                    onChange={(e) => handleMedicationChange(e, "medicineName")}
                    options={options}
                    placeholder="Select Medicine"
                    isSearchable
                    required
                  />
                </div>
                <div className="col-md-3 mb-2">
                  <label className="form-label">Type</label>

                  <Select
                    name="medicineName"
                    value={{
                      value: medication.medicationType,
                      label: medication.medicationType,
                    }}
                    onChange={(e) => handleMedicationChange(e, "medicationType")}
                    options={medicationType}
                    placeholder="Select Medicine"
                    isSearchable
                    required
                  />
                </div>
                <div className="col-md-3 mb-2">
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
                <div className="col-md-2 mb-2">
                  <label className="form-label">Mg/Ml</label>

                  <Select
                    name="medicineConsume"
                    value={{
                      value: medication.medicineConsume,
                      label: medication.medicineConsume,
                    }}
                    onChange={(e) => handleMedicationChange(e, "medicineConsume")}
                    options={medicineConsumeOptions}
                    placeholder="Select Strength"
                    isSearchable
                    required
                  />
                </div>
                <label className="form-label">Dosage</label>

                <div className="col-md-2">
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
                <div className="col-md-1 ">
                  <div
                    style={{ height: "2.3rem", marginTop: "0.4rem" }}
                  >Per
                  </div>
                </div>
                <div className="col-md-3" style={{ marginLeft: "1rem" }}>
                  <Select
                    style={{ height: "2rem" }}
                    name="duration"
                    value={{
                      value: medication.duration,
                      label: medication.duration,
                    }}
                    onChange={(e) => handleMedicationChange(e, "duration")}
                    options={weeksOptions}
                    placeholder="Select Duration"
                    isSearchable
                    required
                  />
                </div>
                <div className="col-md-12 mt-2">
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
              {/* comments coments */}
              {/* <div className="row mt-2">

                <label className="form-label">Comments</label>
               <div className="col-md-12">
                <textarea 
                placeholder='Comments'
                name="comments"
                value={medication.comments}

                onChange={handleMedicationChange}
                style={{width: '100%'}}
                />
                </div>
               </div> */}
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
