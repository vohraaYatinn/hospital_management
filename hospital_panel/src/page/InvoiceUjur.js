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
    <div className="col-sm-6 text-right">
      
    
    </div>

  </div>
  <div className="row invoice-details">
    <div className="col-sm-6">
      <h5>Bill To:</h5>
      <p>
        {invoice?.appointment?.patient?.full_name}
        <br />
        {invoice?.appointment?.patient?.block}
        <br />
        {invoice?.appointment?.patient?.district}
      </p>
    </div>
    <div className="col-sm-6 text-right">
      <h5>Appointment Details:</h5>
      <p>
        Appointment ID: {invoice?.appointment?.id}
        <br />
        Booking Date: {moment(invoice?.appointment?.date_appointment).format("dddd, MMM D, YYYY")}

        
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Description</th>
            <th>Doctor fees</th>
            <th>Booking charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultation Fee<br/>({invoice?.hospital})</td>
            <td>Rs {(parseFloat(invoice?.items[0]?.quantity) - parseFloat(invoice?.items[0]?.quantity)*0.18).toFixed(2)}</td>
            <td>Rs {(parseFloat(invoice?.items[0]?.price) - parseFloat(invoice?.items[0]?.price*0.18)).toFixed(2)}</td>
          </tr>

        </tbody>
        <tfoot>
     
          <tr>
            <th colSpan={3} className="text-right">
              Tax (18%)
            </th>
            <th>Rs {((parseFloat(invoice?.items[0]?.quantity) + parseFloat(invoice?.items[0]?.price )) * 0.18 ).toFixed(2)}</th>
          </tr>
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
  <img src={logoDark} alt="Hospital Logo" class="watermark"/>

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
