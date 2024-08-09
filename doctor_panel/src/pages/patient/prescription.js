import React, { useEffect, useState } from 'react';
import convertToPDF from '../../utils/convertToPdf';
import { test_url_images } from '../../config/environment';
import { calculateAge, capitalizeFirst, capitalizeFirstChar, checkNotNull } from '../../utils/commonFunctions';
import "../../newcss.css"
import ujur_logo from "../../../src/assets/images/logo-dark.png"
import playstoreBar from "../../assets/play-store.jpg"
import playstore from "../../assets/playstore.png"
import { useSelector } from 'react-redux';
import { doctorDetails } from '../../redux/reducers/functionalities.reducer';
import convertToPDFAndBackend from '../../utils/convertToPdfAndBackend';

const prescriptionStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: '0',
  padding: '20px',
  listStyle:"none"
};


const patientInfoTextStyle = {
  margin: '0',
};


function Prescription({patient, prescription, medication, setPDFFile, generatePrescription, setPdfGenerateDownload, pdfGenerateDownload}) {

  let doctor = useSelector(doctorDetails);
  const [disableTrue, setDisableTrue] = useState(false)
  const [logoBase64, setLogoBase64] = useState('');
  const [signatureBased, setSignatureBased] = useState('');
  const [ujurBase64, setUjurBased64] = useState('');
  const [playstore64, setplaystore64] = useState('');
  const [barcode64, setBarcode64] = useState('');
  useEffect(()=>{
    if(pdfGenerateDownload){
      setDisableTrue(false)
      submitPrescription()

    }

  },[pdfGenerateDownload])
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch(test_url_images + doctor?.hospital?.logo);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoBase64(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const fetchLogo2 = async () => {
      try {
        const response = await fetch(test_url_images + doctor?.signature);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setSignatureBased(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const ujurBased64 = async () => {
      try {
        const response = await fetch(ujur_logo);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setUjurBased64(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const barcode64 = async () => {
      try {
        const response = await fetch(playstoreBar);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setBarcode64(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const playstore64 = async () => {
      try {
        const response = await fetch(playstore);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setplaystore64(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (doctor?.hospital?.logo) {
      fetchLogo();
    }
    if(test_url_images + doctor?.signature){
      fetchLogo2();
    }
    ujurBased64()
    barcode64()
    playstore64()
  }, [test_url_images, doctor]);






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
  const [doctorSign, setDoctorSign] = useState(false)
  return (
    <>
    <div style={prescriptionStyle} id="pres_new">
    <div>
  <section className="green-background-color-1" id="header" style={{
    display:"flex", alignItems:"center", justifyContent:"space-around"
  }}>
    <div>
      <img
        className="hospital-logo-top-side"
        src={logoBase64}
        alt=""
      />
    </div>
    <div className="top-heading-name-ss" >
      <h4>{doctor?.hospital?.name}</h4>
      <h6>{doctor?.hospital?.address}</h6>
      <div>
        <p>Phone: {doctor?.hospital?.contact_number}</p>
        <p style={{marginTop:"-1rem"}}>Email: {doctor?.hospital?.email}</p>
      </div>
    </div>
    <div>
      <img style={{height:"4rem", width:"7rem"}} src={ujurBase64} alt="" />
    </div>
  </section>
  <section className="middle-names-section" style={{
    pageBreakInside:"avoid"
  }}>
    <div className="flexible-items" style={{marginTop:"0rem"}}>
      <p style={{
        fontWeight:700
      }}>Dr. {doctor?.full_name}</p>
      <p style={{
        fontWeight:700
      }}>Date: {getCurrentDate()}</p>
    </div>
    <p style={{marginTop:"-1rem"}}>{doctor?.specialization}</p>
    <div className="flexible-items-2">
      <div className='row' style={{
        display:"flex"
      }}>
      <p className='col-8'><b>Name:</b> {patient?.full_name}</p>
      <p className='col-4' style={{
        textAlignLast:"end"
      }}><b>Phone:</b>  {patient?.user?.phone}</p>
      </div>
      <div className='row' style={{
        display:"flex",
        marginTop:"-1rem"
      }}>
              <p className='col-4'><b>Age:</b>  {calculateAge(patient?.date_of_birth)}</p>

      <p className='col-4' style={{
        textAlign:"center"
      }}><b>Sex:</b> {patient?.gender}</p>
      <p className='col-4' style={{
        textAlignLast:"end"
      }}><b>
      District:</b>  {capitalizeFirstChar(patient?.district)}
      </p>
      </div>
    </div>
  </section>
  <section>
    <div className="names-address-section">
    <div className="watermark" id="watermark">UJUR</div> 
      <div className="right-side-border">
      {prescription?.symptoms.length >0 &&
              <div className="col-md-12 mt-4">
          <p style={patientInfoTextStyle}><strong>Chief Query</strong></p>
           <ul className='pres-ul-detail'>
            {prescription?.symptoms.map((med, index) => (
              <li key={index}>
                {med.symptoms} X {med.dosage} per {med.duration}
                <br />
              </li>
            ))}
          </ul>
        </div>
        }
                {Object.keys(prescription?.examination).length >0 &&
        <div className="col-md-12 mt-4">
          <p style={patientInfoTextStyle}><strong>General Examination</strong></p>
           <ul className='pres-ul-detail'>
          {Object.keys(prescription.examination).map((med, index) => (
      prescription.examination[med] != "" && med != "DBP" &&
      <>
          {med == "SBP" && prescription.examination["DBP"] ?
            <li key={index}>
            {"BP"} - {prescription.examination[med]} / {prescription.examination["DBP"]}
            <br />
          </li>  

          :

          med == "PulseRate" ?
          <li key={index}>
          {"Pulse Rate"} - {prescription.examination[med]}
          <br />
        </li>   :


          <li key={index}>
          {capitalizeFirst(med)} - {prescription.examination[med]} {med == "temperature" && " °F" }
          <br />
        </li>
          }
       


      </>
    

    ))}
          </ul>
        </div>
        }
        {Object.keys(prescription?.systemic).length>0 &&
        <div className="col-md-12 mt-4">
                    <p style={patientInfoTextStyle}><strong>Systemic Examination</strong></p>

           <ul className='pres-ul-detail'>
            {Object.keys(prescription?.systemic).map((med, index) => (
                prescription.systemic[med] != "" &&   <li key={index}>
                {med} - {prescription.systemic[med]}
                <br />
              </li>
            

            ))}
          </ul>
        </div>
        }

        {prescription?.provisionalDiagnosis!="" &&
        <div className="col-md-12 mt-4">
                              <p style={patientInfoTextStyle}><strong>Provisional Diagnosis</strong></p>

          
           {prescription?.provisionalDiagnosis && prescription?.provisionalDiagnosis!="" && 
           <ul className='pres-ul-detail'>
          {prescription.provisionalDiagnosis.split("•").map((med, index) => (
              med != "" &&   <li key={index}>
              {med}
              <br />
            </li>
          

          ))}
        </ul>           
           }
          
        </div>}

        {prescription?.labReports.length > 0 ? (
          <div className="col-md-12 mt-4">
         <p style={patientInfoTextStyle}><strong>Recommended Test</strong></p>

             <ul className='pres-ul-detail'>
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
         

        {prescription?.instructions.length > 0 ? (
          <div className="col-md-12 mt-4">
          <p style={patientInfoTextStyle}><strong>Instructions</strong></p>

             <ul className='pres-ul-detail'>
              {prescription?.instructions[0] && prescription.instructions[0].split("•").map((med, index) => (
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
        {prescription?.referTo.length > 0 ? (
          <div className="col-md-12 mt-4">
                      <p style={patientInfoTextStyle}><strong>Refer To</strong></p>

             <ul className='pres-ul-detail'>
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
{medication?.nextVisit &&
                <div className="col-md-12 mt-4">
                                     <p style={patientInfoTextStyle}><strong>Next Visit</strong></p>

           <ul className='pres-ul-detail'>
            {medication?.nextVisit} Days
          </ul>
        </div>}
       
      </div>
      <div className="left-border-section">
        <div className="rx-top">
          <h4>Rx</h4>
          {prescription?.medications.length > 0 &&
        <div className="col-md-12 mt-4">
                   <p style={patientInfoTextStyle}><strong>Prescribed Medications</strong></p>

           <ul className='pres-ul-detail'>
            {prescription?.medications.map((med, index) => (
                <li key={index}>
                {med.medicationType ? med.medicationType : ""}{' '}{med.medicationType == "Inj" && med.InjectionType}{" "}{capitalizeFirst(med.medicineName)}{" "}{med?.Strength && (med?.Strength)}{" "}{med?.medicineConsume}{" "}{med.amount}{""}{med.medicationType=="Syp"||med.medicationType=="Inj" ? "Ml" : med.medicationType}{" "}{med.dosage}{" "}{med.timings}{" "} X {" "}
                {med.dayduration} {med.duration}

                <br />
              </li>
            ))}
          </ul>
        </div>
        }
          {/* <p className="tabletss">Tab Ascoral-D 250mg 2 Tabs BD Af x 15 Days</p> */}
        </div>
 
      </div>

    </div>
    
  </section>
  {doctorSign &&
  <section style={{display:"flex", justifyContent:"flex-end"}}>
         <div className="absolute-sign" style={{marginTop:"2.6rem"}}>
        <p>Doctor's Signature <img src={signatureBased} style={{height:"3rem", marginLeft:"1rem"}}/></p>
      </div>
      </section>}
  <section className="green-background-color-2" id="footer" style={{marginTop:doctorSign && "7rem"}}>
    <div className="text-bottom">
      <p>www.ujurcare.com || support @ujurcare.com</p>
    </div>
    <div className="absolute-images-bottom">
      <div className="something mr-2" style={{marginRight:"1rem", marginTop:"0.3rem"}}>
        <p>Download UJUR</p>
        <img className="images-low-1" src={playstore64} alt="" />
      </div>
      <img className="images-low" src={barcode64}  alt="" />
    </div>
  </section>
</div>

     
    </div>
    <input type='checkbox' name='sign' onClick={()=>{
      setDoctorSign(!doctorSign)
    }}/>
    <label for="sign" style={{marginLeft:"1rem"}}>Signature</label>
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
      
       convertToPDF(document.getElementById('pres_new')
,"Prescription"  )
     }}
     >Download</button>
     <button
     disabled={disableTrue}
     onClick={async()=>{
      setDisableTrue(true)
      await convertToPDFAndBackend(document.getElementById('pres_new')
      ,"Prescription", setPdfGenerateDownload  )
     }}
     className="btn btn-primary"
     >Submit</button>
    </>
  );
}

export default Prescription;
