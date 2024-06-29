import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./invoice.css"
import logoDark from '../assets/images/logo-dark.png'
import convertToPDF from '../utils/convertToPdf';
import moment from 'moment';

const InvoiceModal = ({ show,setShow, invoice }) => {
    const handleClose = () =>{
        setShow(false)
    }
    const handleDownload = () => {
      const check_html = document.getElementById('invoice-container')
      convertToPDF(check_html,"Invoice")
    }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice #{invoice.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    {invoice &&
      <div className="container invoice-container" id="invoice-container" style={{
        overflow:'auto'
      }}>
  <div className="row invoice-header">

  <div className="col-sm-6">
      <h1>INVOICE</h1>
      <p>
        Invoice #: {invoice.id}
        <br />
        Date: {moment(invoice?.appointment?.date_appointment).format("DD, MM, YYYY")}
        <br />
      </p>
    </div>
  <div className="col-sm-6" style={{
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end"
  }}>
  <img src={logoDark} alt="Hospital Logo" style={{
    height:"3rem",
    marginTop:"1rem"
  }}/>

      <p style={{
        textAlign:"end",
        fontSize:"0.8rem",
        fontFamily:"inherit"
      }}>
      support@ujurcare.com
        <br />
        www.ujurcare.com
        <br />
      </p>
    </div>
    <div className="col-sm-6 text-right">
      
    
    </div>

  </div>
  <div className="row invoice-details">
    <div className="col-sm-6">
      <h5>Bill To:</h5>
      <p>
        {invoice?.appointment?.patient?.full_name}
        <br />
        District: {invoice?.appointment?.patient?.district && invoice?.appointment?.patient?.district?.replace(/^./, str => str.toUpperCase())}
        <br />
        {invoice?.appointment?.patient?.user?.email}
        <br />
        <span style={{
          fontWeight:800
        }}>{invoice?.appointment?.patient?.user?.phone}</span>
        
      </p>
    </div>
    <div className="col-sm-6 text-right" >
      <h5 style={{
        textAlign:"end"
      }}>Appointment Details:</h5>
      <p style={{
        textAlign:"end"
      }}>
        Hospital: {invoice?.appointment?.doctor?.hospital?.name}
        <br />
        Booking Date: {moment(invoice?.appointment?.date_appointment).format("dddd, MMM D, YYYY")}
        <br/>
        Visit: {invoice?.appointment?.slot}
        
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Item</th>
            <th>Consultation fees</th>
            <th>Booking charges</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span style={{
              fontWeight:600
            }}>{invoice?.appointment?.doctor?.full_name}</span><br/>({invoice?.hospital})</td>
            <td>Rs {invoice?.items[0]?.quantity}</td>
            <td>Rs {invoice?.items[0]?.price}</td>
            <th>Rs {(parseFloat(invoice?.items[0]?.quantity) + parseFloat(invoice?.items[0]?.price)).toFixed(2)}</th>
          </tr>

        </tbody>
        <tfoot>
   
          <tr>
            <th colSpan={3} className="text-right">
              Total
            </th>
            <th>Rs {(parseFloat(invoice?.items[0]?.quantity) + parseFloat(invoice?.items[0]?.price)).toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div className="row invoice-footer">
    <div className="col-12">
      <p>Thank you for using UJUR!</p>
    </div>
  </div>

</div>
}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={()=>{
          handleDownload()
        }}>
          Download Invoice
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const InvoiceUjur = ({show, setShow, appointmentDetails}) => {

  console.log(appointmentDetails)
  const invoice = {
    appointment:appointmentDetails,
    hospital:appointmentDetails?.doctor?.hospital?.name,
    id: '00'+appointmentDetails?.id,
    customerName: appointmentDetails?.patient?.full_name,
    date: '2024-06-23',
    items: [
      { name: 'Item 1', quantity: appointmentDetails?.revenues?.[0]?.doctor_fees, price: appointmentDetails?.revenues?.[0]?.booking_amount },
    ],
  };



  return (
    
      <InvoiceModal show={show} setShow={setShow} invoice={invoice} />
   
  );
};

export default InvoiceUjur;
