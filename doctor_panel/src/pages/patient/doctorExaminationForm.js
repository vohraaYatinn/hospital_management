import React, { useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { Input } from "antd";

const optionsDosagePulse = Array.from({ length: 151 }, (_, index) => ({
  value: (index + 50).toString(),
  label: `${index + 50}`,
}));
optionsDosagePulse.unshift({ value: "<50", label: "< 50" });
optionsDosagePulse.push({ value: ">200", label: "> 200" })

let optionsDosageRR = Array.from({ length: 66 }, (_, index) => ({
  value: (index + 5).toString(),
  label: `${index + 5}`,
}));

optionsDosageRR.unshift({ value: "<5", label: "< 5" });
optionsDosageRR.push({ value: ">70", label: "> 70" })


let optionsDosageHR = Array.from({ length: 161 }, (_, index) => (

  {
    value: (index + 40).toString(),
    label: `${index + 40}`,
  }

));
optionsDosageHR.unshift({ value: "<40", label: "< 40" });
optionsDosageHR.push({ value: ">200", label: "> 200" })


let optionsDosageSPO2 = Array.from({ length: 51 }, (_, index) => (

  {
    value: (index + 50).toString(),
    label: `${index + 50}`,
  }

));
optionsDosageSPO2.unshift({ value: "<50", label: "< 50" });
optionsDosageSPO2.push({ value: ">100", label: "> 100" })


let optionsDosageSBP = Array.from({ length: 151 }, (_, index) => (

  {
    value: (index + 50).toString(),
    label: `${index + 50}`,
  }

));
optionsDosageSBP.unshift({ value: "<50", label: "< 50" });
optionsDosageSBP.push({ value: ">200", label: "> 200" })


let optionsDosageTemp = Array.from({ length: 36 }, (_, index) => (

  {
    value: (index + 75).toString(),
    label: `${index + 75}`,
  }

));
let optionsDosageTempDecimal = Array.from({ length: 10 }, (_, index) => (

  {
    value: "."+(index).toString(),
    label: `.${index}`,
  }

));



let optionsDosageDBP = Array.from({ length: 111 }, (_, index) => (

  {
    value: (index + 40).toString(),
    label: `${index + 40}`,
  }

));
optionsDosageDBP.unshift({ value: "<40", label: "< 40" });
optionsDosageDBP.push({ value: ">150", label: "> 150" })






const optionsDosageCvs = [
  { value: "normal", label: "Normal" },
  { value: "abnormal", label: "Abnormal" }
];
const optionsDosageCvsExtend = [
  { value: "Murmur", label: "Murmur" },
  { value: "any other", label: "Any other" }
];
const optionsDosageRespExtend = [
  { value: "Wheeze", label: "Wheeze" },
  { value: "Rhmchi", label: "Rhmchi" },
  { value: "Crepitation", label: "Crepitation" }
];
const gynicOptions = [
  { value: "Ongoing", label: "Ongoing" },
  { value: "Menopause", label: "Menopause" },
  { value: "Stopped Since", label: "Stopped Since" },
];
const gynicOptionsOngoingExtend = [
  { value: "Regular", label: "Regular" },
  { value: "Irregular", label: "Irregular" },
];
const gynicOptionsStoppedExtend = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];
const optionsAbdominal = [
  { value: "Soft", label: "Soft" },
  { value: "Tenderness", label: "Tenderness" },
  { value: "Lo", label: "Lo" },
  { value: "So", label: "So" },
  { value: "Liver - Enlarged", label: "Liver - Enlarged" },
  { value: "Spline - Palpable", label: "Spline - Palpable" }
];
const optionsAbdominalExtend = [
  { value: "(area) +", label: "(area) +" },
  { value: "Epigastric", label: "Epigastric" },
  { value: "Unibilical", label: "Unibilical" },
  { value: "Hypogastric", label: "Hypogastric" },
  { value: "Right Hypochondriac", label: "Right Hypochondriac" },
  { value: "Leftt Hypochondriac", label: "Leftt Hypochondriac" },
  { value: "Right Lumbar", label: "Right Lumbar" },
  { value: "Left Lumbar", label: "Left Lumbar" },
  { value: "Right Tnguinal", label: "Right Tnguinal" },
  { value: "Left Tnguinal", label: "Left Tnguinal" },
];
const gynicOptionsTime = [
  { value: "days", label: "days" },
  { value: "months", label: "months" }
];

const handleChange = (selectedOption) => { };

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

 
  const handleAddMedicationSys = () => {
    showDrawer();
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      systemic: systemic,
    }));

    setSystemic({
      CVS: "",
      Respiratory: "",
      Abdominal: "",
      CNS: ""
    });
  };

  const handleAddMedication = () => {
    showDrawer();
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      examination: medication,
    }));

  };


  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
  };
  let [activeIndex, setActiveIndex] = useState(1)


  return (
    <div className="tab-pane fade show active">
      <form className="mt-4" onSubmit={handlePrescriptionSubmit}>
        {activeSubIndex == 3 ?
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <div className="row">

                  <label className="form-label" style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>Symptoms</label>
                  <div className="row ">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        HR</div>
                    </div>
                    <div className="col-md-4">

                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.Hr,
                          label: medication.Hr,
                        }}
                        onChange={(e) => handleMedicationChange(e, "Hr")}
                        options={optionsDosageHR}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2 mt-4">
                      <div
                      >
                        BP</div></div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>SBP</label>
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: medication.SBP,
                            label: medication.SBP,
                          }}
                          onChange={(e) => handleMedicationChange(e, "SBP")}
                          options={optionsDosageSBP}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      <div className="col-5">
                        <label>DBP</label>

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: medication.DBP,
                            label: medication.DBP,
                          }}
                          onChange={(e) => handleMedicationChange(e, "DBP")}
                          options={optionsDosageDBP}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>

                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        Spo2</div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.Spo2,
                          label: medication.Spo2,
                        }}
                        onChange={(e) => handleMedicationChange(e, "Spo2")}
                        options={optionsDosageSPO2}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        Rhythm</div>
                    </div>
                    <div className="col-md-4 ">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.Rhythm,
                          label: medication.Rhythm,
                        }}
                        onChange={(e) => handleMedicationChange(e, "Rhythm")}
                        options={[
                          { value: "regular", label: "Regular" },
                          { value: "Irregular", label: "Irregular" },
                        ]}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        Volume</div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.Volume,
                          label: medication.Volume,
                        }}
                        onChange={(e) => handleMedicationChange(e, "Volume")}
                        options={[
                          { value: "good", label: "Good" },
                          { value: "low", label: "Low" },
                        ]}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2 mt-4">
                      <div
                      >
                        Temperature</div>
                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>Value</label>
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: medication.temperature ? Math.round(medication.temperature):"",
                            label:medication.temperature ?  Math.round(medication.temperature).toString():"",
                          }}
                          onChange={(e) => handleMedicationChange(e, "temperature")}
                          options={optionsDosageTemp}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      <div className="col-5">
                        <label>Decimal</label>

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          onChange={(e) => 

                            setMedication((prevMedication) => ({
                              ...prevMedication,
                              temperature:  Math.round(medication.temperature)+e.value,
                            }))
                          
                          }
                          options={optionsDosageTempDecimal}
                          placeholder="Select Decimal"
                          isSearchable
                          required
                        />
                      </div>
                      <div className="col-2 " style={{marginTop:"2.4rem"}}>
                        <label>° F</label>
                        </div>

                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        Pulse Rate</div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.PulseRate,
                          label: medication.PulseRate,
                        }}
                        onChange={(e) => handleMedicationChange(e, "PulseRate")}
                        options={optionsDosagePulse}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                      >
                        RR</div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.RR,
                          label: medication.RR,
                        }}
                        onChange={(e) => handleMedicationChange(e, "RR")}
                        options={optionsDosageRR}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-12 mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddMedication}
              >
                Add
              </button>
            </div>

          </div> : <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <div className="row">

                  <label className="form-label" style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>Symptoms</label>
                  <div className="row mt-4">
                    <div className="col-md-4 mb-2">
                      <div
                      >
                        CVS</div>
                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.CVS,
                            label: systemic.CVS,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "CVS")}
                          options={optionsDosageCvs}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      {systemic.CVS == "abnormal" &&
                      <div className="col-5">

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.CvsType,
                            label: systemic.CvsType,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "CvsType")}
                          options={optionsDosageCvsExtend}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      }

                    </div>
                  
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 mb-2">
                      <div
                      >
                        Respiratory</div>
                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Respiratory,
                            label: systemic.Respiratory,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "Respiratory")}
                          options={optionsDosageCvs}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      
                      {systemic.Respiratory == "abnormal" &&
                      <div className="col-5">

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.RespiratoryType,
                            label: systemic.RespiratoryType,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "RespiratoryType")}
                          options={optionsDosageRespExtend}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      }

                    </div>
      
                  </div>
                  <div className="row mt-4" >
                    <div className="col-md-4 mb-2">
                      <div
                      >
                        Abdominal</div>
                    </div>

                    <div className="col-md-10 row">
                      <div className="col-5">
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Abdominal,
                            label: systemic.Abdominal,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "Abdominal")}
                          options={optionsAbdominal}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      
                      {systemic.Abdominal == "Tenderness" &&
                      <div className="col-5">

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.AbdominalExtend,
                            label: systemic.AbdominalExtend,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "AbdominalExtend")}
                          options={optionsAbdominalExtend}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      }

                    </div>



                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4 mb-2">
                      <div
                      >
                        CNS</div>
                    </div>

                    <div className="col-md-10 row">

                    <div className="col-md-5">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: systemic.CNS,
                          label: systemic.CNS,
                        }}
                        onChange={(e) => handleMedicationChangeSystemic(e, "CNS")}
                        options={optionsDosageCvs}
                        placeholder="Select Dosage"
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  </div>
                  <div className="row mt-4" >
                    <div className="col-md-4 mb-2">
                      <div
                      >
                        Gynic</div>
                    </div>

                    <div className="col-md-10 row">
                      <div className="col-5">
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Gynic,
                            label: systemic.Gynic,
                          }}
                          onChange={(e) => handleMedicationChangeSystemic(e, "Gynic")}
                          options={gynicOptions}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      
                      {(systemic.Gynic == "Ongoing" || systemic.Gynic == "Stopped Since") &&
                      <>
                      <div className="col-3">

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.GynicType ? (systemic.GynicType.includes("months")?systemic.GynicType.match(/(\d+)months/)[1]:systemic.GynicType.includes("days")?systemic.GynicType.match(/\d+/)[0]:systemic.GynicType):systemic.GynicType,
                            label: systemic.GynicType ? (systemic.GynicType.includes("months")?systemic.GynicType.match(/(\d+)months/)[1]:systemic.GynicType.includes("days")?systemic.GynicType.match(/\d+/)[0]:systemic.GynicType):systemic.GynicType,
                          }}
                          onChange={(e) => 
                            handleMedicationChangeSystemic(e, "GynicType")}
                          options={systemic.Gynic == "Ongoing" ? gynicOptionsOngoingExtend : gynicOptionsStoppedExtend}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      {systemic.Gynic == "Stopped Since" &&
                      <div className="col-3">

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}

                          onChange={(e) => 
                            setSystemic((prevMedication) => ({
                              ...prevMedication,
                              GynicType: systemic.GynicType + e.value,
                            }))                        
                        
                        }
                          options={gynicOptionsTime}
                          placeholder="Time"
                          isSearchable
                          required
                        />
                      </div>
                      }
                      </>
                      }

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
