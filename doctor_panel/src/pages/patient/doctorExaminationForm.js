import React, { useEffect, useState } from "react";
import Select from "react-select";
import AddComments from "../../components/dashboard/addComments";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { checkNotNull } from "../../utils/commonFunctions";

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
    value: "." + (index).toString(),
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
  { value: "Normal", label: "Normal" },
  { value: "Abnormal", label: "Abnormal" }
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
  { value: "day", label: "day" },
  { value: "month", label: "month" }
];
const gynicOptionsTimePlu = [
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

let fieldsToFilter = ['CvsType', 'RespiratoryType', 'AbdominalExtend', 'GynicType', 'GynicDuration']
  const handleAddMedicationSys = () => {
    if (checkNotNull(systemic)) {
      let checkFilter = Object.assign({}, systemic);
      showDrawer();
      fieldsToFilter.forEach(field => {
        delete checkFilter[field];
    });
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        systemic: checkFilter,
      }));
    }

  };

  const handleAddMedication = () => {
    if (checkNotNull(medication)) {
      showDrawer();
      setPrescription((prevPrescription) => ({
        ...prevPrescription,
        examination: medication,
      }));
    }


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
                      <div style={{
                        fontWeight: "600"
                      }}
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
                        isSearchable
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2 mt-4">
                      <div
                        style={{
                          fontWeight: "600"
                        }}
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
                        style={{
                          fontWeight: "600"
                        }}
                      >
                        SPO2</div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        name="dosage"
                        style={{ height: "2rem" }}
                        value={{
                          value: medication.SPO2,
                          label: medication.SPO2,
                        }}
                        onChange={(e) => handleMedicationChange(e, "SPO2")}
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
                        style={{
                          fontWeight: "600"
                        }}
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
                        style={{
                          fontWeight: "600"
                        }}
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
                        style={{
                          fontWeight: "600"
                        }}
                      >
                        Temp</div>
                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>Value</label>
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: medication.temperature ? Math.round(medication.temperature) : "",
                            label: medication.temperature ? Math.round(medication.temperature).toString() : "",
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
                          onChange={(e) => {
                            if (medication.temperature) {
                              setMedication((prevMedication) => ({
                                ...prevMedication,
                                temperature: Math.round(medication.temperature) + e.value,
                              }))
                            }
                          }

                          }
                          options={optionsDosageTempDecimal}
                          isSearchable
                          required
                        />
                      </div>
                      <div className="col-2 " style={{ marginTop: "2.4rem" }}>
                        <label>° F</label>
                      </div>

                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2 mb-2">
                      <div
                        style={{
                          fontWeight: "600"
                        }}
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
                        style={{
                          fontWeight: "600"
                        }}
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
                  <div className="row mt-2">
                    <div className="col-md-4 mb-2">

                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>CVS</label>

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.CVS && systemic.CVS.includes("-") ? systemic.CVS.split("-")[0] : systemic.CVS,
                            label: systemic.CVS && systemic.CVS.includes("-") ? systemic.CVS.split("-")[0] : systemic.CVS,
                          }}
                          onChange={(e) => 
                            {
                            handleMedicationChangeSystemic(e, "CVS")
                            setSystemic((prevMedication) => ({
                              ...prevMedication,
                              CvsType: "",
                            }));
                          }}
                          options={optionsDosageCvs}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      {systemic.CVS && (systemic.CVS.includes("-") ? systemic.CVS.split("-")[0] == "Abnormal" : systemic.CVS == "Abnormal" ) &&
                        <div className="col-5">
                          <label>Type</label>

                          <Select
                            name="dosage"
                            style={{ height: "2rem" }}
                            value={{
                              value: systemic.CvsType,
                              label: systemic.CvsType,
                            }}
                            onChange={(e) => 
                              {
                                if(systemic.CVS){
                                  let systemicValue = ""
                                  if(systemic.CVS.includes("-")) {
                                    systemicValue = systemic.CVS.split("-")[0]
                                  }else{
                                    systemicValue = systemic.CVS
                                  }
                                  setSystemic((prevMedication) => ({
                                    ...prevMedication,
                                    CVS: systemicValue +"-"+e.value,
                                  }));
                                }
                                handleMedicationChangeSystemic(e, "CvsType")
                            
                    
                            }}
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
                    </div>
                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>Respiratory</label>

                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Respiratory && systemic.Respiratory.includes("-") ? systemic.Respiratory.split("-")[0] : systemic.Respiratory,
                            label: systemic.Respiratory && systemic.Respiratory.includes("-") ? systemic.Respiratory.split("-")[0] : systemic.Respiratory,
                          }}
                          onChange={(e) =>{
                            handleMedicationChangeSystemic(e, "Respiratory")
                            setSystemic((prevMedication) => ({
                              ...prevMedication,
                              RespiratoryType: "",
                            }));
                          }
                            }
                          options={optionsDosageCvs}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>

                      {systemic.Respiratory && (systemic.Respiratory.includes("-") ? systemic.Respiratory.split("-")[0] == "Abnormal" : systemic.Respiratory == "Abnormal" ) &&
                        <div className="col-5">
                          <label>Type</label>

                          <Select
                            name="dosage"
                            style={{ height: "2rem" }}
                            value={{
                              value: systemic.RespiratoryType,
                              label: systemic.RespiratoryType,
                            }}
                            onChange={(e) =>{
                              if(systemic.Respiratory){
                                let RespiratoryValue = ""

                                if(systemic.Respiratory.includes("-")) {
                                  RespiratoryValue = systemic.Respiratory.split("-")[0]
                                }else{
                                  RespiratoryValue = systemic.Respiratory
                                }

                                setSystemic((prevMedication) => ({
                                  ...prevMedication,
                                  Respiratory: RespiratoryValue +"-"+e.value,
                                }));
                              }
                              handleMedicationChangeSystemic(e, "RespiratoryType")
                            
                            }}
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

                    </div>

                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>Abdominal</label>
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Abdominal && systemic.Abdominal.includes("-") ? systemic.Abdominal.split("-")[0] : systemic.Abdominal,
                            label: systemic.Abdominal && systemic.Abdominal.includes("-") ? systemic.Abdominal.split("-")[0] : systemic.Abdominal,
                          }}
                          onChange={(e) =>{
                            handleMedicationChangeSystemic(e, "Abdominal")
                            setSystemic((prevMedication) => ({
                              ...prevMedication,
                              AbdominalExtend: "",
                            }));
                          }
                            }
                          options={optionsAbdominal}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>

                      {systemic.Abdominal && (systemic.Abdominal.includes("-") ? systemic.Abdominal.split("-")[0] == "Tenderness" : systemic.Abdominal == "Tenderness" ) &&

                        <div className="col-5">
                          <label>Type</label>

                          <Select
                            name="dosage"
                            style={{ height: "2rem" }}
                            value={{
                              value: systemic.AbdominalExtend,
                              label: systemic.AbdominalExtend,
                            }}
                            onChange={(e) => {
                              if(systemic.Abdominal){
                                let AbdominalValue = ""
                                if(systemic.Abdominal.includes("-")) {
                                  AbdominalValue = systemic.Abdominal.split("-")[0]
                                }else{
                                  AbdominalValue = systemic.Abdominal
                                }

                                setSystemic((prevMedication) => ({
                                  ...prevMedication,
                                  Abdominal: AbdominalValue +"-"+e.value,
                                }));
                              }
                              handleMedicationChangeSystemic(e, "AbdominalExtend")
                            }
                            }
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

                    </div>

                    <div className="col-md-10 row">

                      <div className="col-md-5">
                        <label>CNS</label>
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

                    </div>

                    <div className="col-md-10 row">
                      <div className="col-5">
                        <label>Gynic</label>
                        <Select
                          name="dosage"
                          style={{ height: "2rem" }}
                          value={{
                            value: systemic.Gynic && systemic.Gynic.includes("-") ? systemic.Gynic.split("-")[0] : systemic.Gynic,
                            label: systemic.Gynic && systemic.Gynic.includes("-") ? systemic.Gynic.split("-")[0] : systemic.Gynic,
                          }}
                          onChange={(e) => {
                            handleMedicationChangeSystemic(e, "Gynic")
                            setSystemic((prevMedication) => ({
                              ...prevMedication,
                              GynicType: "",
                            }));
                          }

                          }
                          options={gynicOptions}
                          placeholder="Select Dosage"
                          isSearchable
                          required
                        />
                      </div>
                      {systemic.Gynic && (systemic.Gynic.includes("-") ? systemic.Gynic.split("-")[0] == "Ongoing" : systemic.Gynic == "Ongoing") && 
                                                <div className="col-3">
                                                <label>Type</label>
                    
                                                <Select
                                                  name="dosage"
                                                  style={{ height: "2rem" }}
                                                  value={{
                                                    value: systemic.GynicType,
                                                    label: systemic.GynicType,
                                                  }}
                                                  onChange={(e) => {
                                                    if(systemic.Gynic){
                                                      let GynicValue = ""
                                                      if(systemic.Gynic.includes("-")) {
                                                        GynicValue = systemic.Gynic.split("-")[0]
                                                      }else{
                                                        GynicValue = systemic.Gynic
                                                      }
                                                      setSystemic((prevMedication) => ({
                                                        ...prevMedication,
                                                        Gynic: GynicValue +"-"+e.value,
                                                      }));
                                                    }
                                                    handleMedicationChangeSystemic(e, "GynicType")}
                                                  }
                                                  options={gynicOptionsOngoingExtend}
                                                  placeholder="Select Dosage"
                                                  isSearchable
                                                  required
                                                />
                                              </div>}

                      {systemic.Gynic && (systemic.Gynic.includes("-") ? systemic.Gynic.split("-")[0] == "Stopped Since"  : systemic.Gynic == "Stopped Since" )  &&
                        <>
                          <div className="col-3">
                            <label>{"Duration"}</label>

                            <Select
                              name="dosage"
                              style={{ height: "2rem" }}
                              value={{
                                value: systemic.GynicType ? (systemic.GynicType.includes("months") ? systemic.GynicType.match(/(\d+)months/)[1] : systemic.GynicType.includes("days") ? systemic.GynicType.match(/\d+/)[0] : systemic.GynicType) : systemic.GynicType,
                                label: systemic.GynicType ? (systemic.GynicType.includes("months") ? systemic.GynicType.match(/(\d+)months/)[1] : systemic.GynicType.includes("days") ? systemic.GynicType.match(/\d+/)[0] : systemic.GynicType) : systemic.GynicType,
                              }}
                              onChange={(e) =>{
                                handleMedicationChangeSystemic(e, "GynicType")
                                setSystemic((prevMedication) => ({
                                  ...prevMedication,
                                  GynicDuration:"",
                                }))
                              }
                              }
                              options={systemic.Gynic == "Ongoing" ? gynicOptionsOngoingExtend : gynicOptionsStoppedExtend}
                              placeholder="Select Dosage"
                              isSearchable
                              required
                            />
                          </div>
                          {systemic.Gynic && (systemic.Gynic.includes("-") ? systemic.Gynic.split("-")[0] == "Stopped Since"  : systemic.Gynic == "Stopped Since" )  &&
                            <div className="col-3">
                              <label>D/M</label>

                              <Select
                                name="dosage"
                                style={{ height: "2rem" }}
                                value={{
                                  value: systemic.GynicDuration,
                                  label: systemic.GynicDuration,
                                }}
                                onChange={(e) => {
                                  if (systemic.GynicType && systemic.GynicType != "" && systemic.Gynic) {
                                    let GynicValue = ""
                                    if(systemic.Gynic.includes("-")) {
                                      GynicValue = systemic.Gynic.split("-")[0]
                                    }else{
                                      GynicValue = systemic.Gynic
                                    }
                                    handleMedicationChangeSystemic(e, "GynicDuration")

                                    setSystemic((prevMedication) => ({
                                      ...prevMedication,
                                     Gynic: GynicValue + "-" + systemic.GynicType + " " + e.value,
                                    }))
                                  }
                                }

                                }
                                options={systemic.GynicType!=1?gynicOptionsTimePlu:gynicOptionsTime}
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
