import React, { useEffect, useState } from 'react';
import convertToPDF from '../../utils/convertToPdf';
import { test_url_images } from '../../config/environment';
import { checkNotNull } from '../../utils/commonFunctions';

const prescriptionStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: '0',
  padding: '20px',
  listStyle:"none"
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const headerTextStyle = {
  fontSize: '24px',
  margin: '0',
};

const patientInfoStyle = {
  marginTop: '20px',
  marginBottom: '30px',
};

const patientInfoTextStyle = {
  margin: '0',
};

const prescriptionHeaderStyle = {
  borderTop: '1px solid #ccc',
  paddingTop: '20px',
};

const prescriptionHeaderTextStyle = {
  fontSize: '20px',
  margin: '0',
};

const medicineItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
};

const medicineNameStyle = {
  flex: '1',
};

const medicineDosageStyle = {
  flex: '1',
};

const doctorSignatureStyle = {
  marginTop: '30px',
};

const doctorSignatureTextStyle = {
  fontWeight: 'bold',
  margin: '0',
};

function Prescription({patient, prescription, medication, setPDFFile, generatePrescription}) {
  const [date, setDate] = useState('');

  // Function to get the current date in the format "ddth MMM. yyyy"
  const getCurrentDate = () => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    return today.replace(/(\d+)(th|st|nd|rd)/, '$1<sup>$2</sup>');
  };

  // Function to update the date
  const updateDate = () => {
    setDate(getCurrentDate());
  };
  const [doctorComment, setDoctorComment] = useState("")
  const submitPrescription = () => {
    const htmlContent = document.getElementById('pres_new')
    generatePrescription(htmlContent, doctorComment)

  }
  useEffect(()=>{updateDate()})
  return (
    <>
    <div style={prescriptionStyle} id="pres_new">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={headerTextStyle}>Doctor's Prescription</h1>
        </div>
        <div style={patientInfoStyle}>
          <p style={patientInfoTextStyle}><strong>Patient Name:</strong> {patient?.full_name}</p>
          <p style={patientInfoTextStyle}><strong>Date:</strong> {date}</p>
        </div>
        {prescription?.symptoms.length >0 &&
              <div className="col-md-12 mt-4">
          <h5 className="mb-0">Chief Query</h5>
          <ul>
            {prescription?.symptoms.map((med, index) => (
              <li key={index}>
                {med.symptoms} X {med.dosage} per {med.duration}
                <br />
              </li>
            ))}
          </ul>
        </div>
        }
        {Object.keys(prescription?.systemic).length>0 &&
        <div className="col-md-12 mt-4">
          <h5 className="mb-0">Systemic Examination</h5>
          <ul>
            {Object.keys(prescription?.systemic).map((med, index) => (
                prescription.systemic[med] != "" &&   <li key={index}>
                {med} - {prescription.systemic[med]}
                <br />
              </li>
            

            ))}
          </ul>
        </div>
        }
        {Object.keys(prescription?.examination).length >0 &&
        <div className="col-md-12 mt-4">
          <h5 className="mb-0">General Examination</h5>
          <ul>
            {Object.keys(prescription?.examination).map((med, index) => (
                prescription.examination[med] != ""  && <li key={index}>
                {med} - {prescription.examination[med]}
                <br />
              </li>
            

            ))}
          </ul>
        </div>
        }
        {prescription?.provisionalDiagnosis!="" &&
        <div className="col-md-12 mt-4">
          <h5 className="mb-0">Provisional Diagnosis</h5>
          
           {prescription?.provisionalDiagnosis!="" && <p>{prescription.provisionalDiagnosis}</p>}
          
        </div>}
        {prescription?.medications.length > 0 &&
        <div className="col-md-12 mt-4">
          <h5 className="mb-0">Prescribed Medications</h5>
          <ul>
            {prescription?.medications.map((med, index) => (
                <li key={index}>
                {med.medicineName} {med.Strength}{med.medicineConsume}  <br/> Dosage: {med.dosage} Per {" "}
                {med.duration} <br/> Timings: {med.timings} 
                <br/> Type: {med.medicationType} 

                <br />
              </li>
            ))}
          </ul>
        </div>
        }
        {prescription?.labReports.length > 0 ? (
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Lab Reports</h5>
            <ul>
              {prescription?.labReports.map((med, index) => (
                                med!="" &&

                <li key={index}>
                  {med}
                  <br />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        {medication?.nextVisit &&
                <div className="col-md-12 mt-4">
          <h5 className="mb-0">Next Visit</h5>
          <ul>
            {medication?.nextVisit} Days
          </ul>
        </div>}
        {prescription?.instructions.length > 0 ? (
          <div className="col-md-12 mt-4">
            <h5 className="mb-0">Instructions</h5>
            <ul>
              {prescription?.instructions.map((med, index) => (
                med!="" &&
                  <li key={index}>
                  {med}
                  <br />
                </li>
                
       
              ))}
            </ul>

          </div>
        ) : (
          ""
        )}
        {prescription?.referTo.length > 0 ? (
          <div className="col-md-12 mt-4">
           <h5 className="mb-0">Refer To</h5>
            <ul>
              {prescription?.referTo.map((med, index) => (
                med!="" &&
                  <li key={index}>
                  {med}
                  <br />
                </li>
                
       
              ))}
            </ul>

          </div>
        ) : (
          ""
        )}
        <div style={doctorSignatureStyle}>
          <p style={doctorSignatureTextStyle}>Dr. {patient?.appointments?.[0]?.doctor?.full_name}</p>
        </div>

      </div>
     
    </div>
    <input placeholder='Comments'
    className="form-control" 
    style={{marginBottom:"1rem"}}
    onChange={(e)=>{
      setDoctorComment(e.target.value);
    }}/>
     <button
     className="btn btn-primary"
     style={{marginRight:"1rem"}}
     onClick={()=>{
       convertToPDF(        document.getElementById('pres_new')
,"Prescription"        )
     }}
     >Download</button>
     <button
     onClick={()=>{
      submitPrescription()
     }}
     className="btn btn-secondary"
     >Submit</button>
    </>
  );
}

export default Prescription;
