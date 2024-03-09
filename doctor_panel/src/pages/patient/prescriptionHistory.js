import React, { useEffect, useState } from 'react';
import convertToPDF from '../../utils/convertToPdf';

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

function PrescriptionHistory({htmlContent}) {
  useEffect(()=>{
    console.log("sd")
    console.log(htmlContent)
  },[htmlContent])
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default PrescriptionHistory;
