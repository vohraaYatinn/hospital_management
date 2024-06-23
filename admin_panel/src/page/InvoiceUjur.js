import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./invoice.css"
import logoDark from '../assets/images/logo-dark.png'

const InvoiceModal = ({ show,setShow, invoice }) => {
    const handleClose = () =>{
        setShow(false)
    }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice #{invoice.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
      <div className="container invoice-container" id="invoice-container">
  <div className="row invoice-header">

  <div className="col-sm-6">
      <h1>INVOICE</h1>
      <p>
        Invoice #: 001234
        <br />
        Date: 2024-06-23
        <br />
        Due Date: 2024-07-23
      </p>
    </div>
    <div className="col-sm-6 text-right">
      
    
    </div>

  </div>
  <div className="row invoice-details">
    <div className="col-sm-6">
      <h5>Bill To:</h5>
      <p>
        John Doe
        <br />
        789 Patient Rd.
        <br />
        Healthville, PT 12345
        <br />
        Phone: (987) 654-3210
        <br />
        Email: johndoe@example.com
      </p>
    </div>
    <div className="col-sm-6 text-right">
      <h5>Patient Details:</h5>
      <p>
        Patient ID: 6789
        <br />
        Date of Admission: 2024-06-20
        <br />
        Date of Discharge: 2024-06-22
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Cost</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultation Fee</td>
            <td>1</td>
            <td>$100</td>
            <td>$100</td>
          </tr>

        </tbody>
        <tfoot>
     
          <tr>
            <th colSpan={3} className="text-right">
              Tax (18%)
            </th>
            <th>$61</th>
          </tr>
          <tr>
            <th colSpan={3} className="text-right">
              Total
            </th>
            <th>$671</th>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const InvoiceUjur = ({show, setShow}) => {

  const invoice = {
    id: '12345',
    customerName: 'John Doe',
    date: '2024-06-23',
    items: [
      { name: 'Item 1', quantity: 2, price: 10.0 },
      { name: 'Item 2', quantity: 1, price: 20.0 },
      { name: 'Item 3', quantity: 5, price: 5.0 },
    ],
  };


  return (
    
      <InvoiceModal show={show} setShow={setShow} invoice={invoice} />
   
  );
};

export default InvoiceUjur;
