import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client from "../assets/images/client/01.jpg";
import doctor from "../assets/images/doctors/01.jpg";
import Wrapper from "../components/wrapper";
import { resetPassword } from "../data/data";

import { FiEye, BsPencil, FiTrash } from "../assets/icons/vander";

import Modal from "react-bootstrap/Modal";
import useAxios from "../network/useAxios";
import { changeResetPassword, fetchResetPasswords } from "../urls/urls";
import { test_url_images } from "../config/environment";

export default function ResetPassword() {
  let [editProfile, setEditProfile] = useState(false);
  let [show, setShow] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const [formValues, setFormValues] = useState({
    action:"",
    password_id:"",
    password:""
  });
  const [
    resetPassRequestResponse,
    resetPassRequestError,
    resetPassRequestLoading,
    resetPassRequestFetch,
  ] = useAxios();
  const [
    resetPassChangeResponse,
    resetPassChangeError,
    resetPassChangeLoading,
    resetPassChangeFetch,
  ] = useAxios();
  const fetchRequests = () => {
    resetPassRequestFetch(fetchResetPasswords(formValues))
  }
  const changePassword = () => {
    resetPassChangeFetch(changeResetPassword(formValues))
  }
  useEffect(()=>{
    fetchRequests()
  },[])
  useEffect(()=>{
    if(resetPassRequestResponse?.result == "success"){
      setRequestData(resetPassRequestResponse?.data)
    }
  },[resetPassRequestResponse])
  useEffect(()=>{
    if(resetPassChangeResponse?.result == "success"){
      setShow(false)
      setEditProfile(false)
      fetchRequests()


    }
  },[resetPassChangeResponse])

  return (
    <Wrapper>
                        <div className="modal fade" id="LoginForm">
                                    <Modal show={show} onHide={() =>setShow(false)} centered>
                                        <Modal.Header closeButton>
                                            <h5 className="modal-title" id="LoginForm-title">Delete Reset Request?</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="p-3 rounded box-shadow">
                                                <p className="text-muted mb-0">
                                                    Are you sure to delete this request?
                                                    </p>                                                        
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-secondary" onClick={() =>setShow(false)}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() =>
                                              {
                                                changePassword()
                                                setShow(false)

                                              }
                                              
                                              }>Save</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Reset Password</h5>

            <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link>UJUR</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Reset Password
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive shadow rounded">
                <table className="table table-center bg-white mb-0">
                  <thead>
                    <tr>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "50px" }}
                      >
                        Id
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "180px" }}
                      >
                        Name
                      </th>
                      <th className="border-bottom p-3">Comments</th>
                      <th className="border-bottom p-3">Status</th>
                      <th className="border-bottom p-3">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {requestData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="p-3">{item.id}</td>
                          <td className="py-3">
                            <Link to="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src={ test_url_images+item.doctor?.profile_picture}
                                  className="avatar avatar-md-sm rounded-circle shadow"
                                  alt=""
                                />
                                <span className="ms-2">{item?.doctor?.full_name}</span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">{item.comment}</td>
                          <td className="p-3">
                          {item.status === "APPROVED" ? (
  <span className="badge bg-soft-success">
    Approved
  </span>
) : item.status === "CANCELLED" ? (
  <span className="badge bg-soft-danger">
    Cancelled
  </span>
) : (
  <span className="badge bg-soft-warning">
    Pending
  </span>
)}
                          </td>
                          <td className="p-3">
                         
                            <Link
                              to="#"
                              className="btn btn-icon btn-pills btn-soft-success mx-1"
                              onClick={() => {
                                setFormValues((prev)=>({...prev, 
                                  action:"approve",
                                  password_id:item.id}))
                                setEditProfile(true)
                              }
                              }
                            >
                              <BsPencil />
                            </Link>
                            <Link
                              onClick={()=>
                                {
                                  setFormValues((prev)=>({...prev, 
                                    action:"reject",
                                    password_id:item.id}))
                                setShow(true)
                            }
                            }
                              className="btn btn-icon btn-pills btn-soft-danger"
                            >
                              <FiTrash />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       
          <Modal
            show={editProfile}
            onHide={() => setEditProfile(false)}
            centered
            size="lg"
          >
            <Modal.Header closeButton>
              <h5 className="modal-title" id="exampleModalLabel1">
                Reset Password
              </h5>
            </Modal.Header>
            <Modal.Body>
              <div className="row align-items-center">

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Enter New Password</label>
                      <input
                        name="name"
                        onChange={(e)=>
                          {
                            setFormValues((prev)=>({...prev, 
                              password:e.target.value}))
                      }
                      }
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="password:"
                      />
                    </div>
                  </div>

                
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary"
                      onClick={changePassword}
                      value="Save"
                    />
                  </div>
                </div>
                </div>
            </Modal.Body>
          </Modal>
          <div className="row text-center">
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
            
                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      Prev
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
