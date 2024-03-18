import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client from "../assets/images/client/01.jpg";
import doctor from "../assets/images/doctors/01.jpg";
import Wrapper from "../components/wrapper";
import { resetPassword } from "../data/data";

import { FiEye, BsPencil, FiTrash } from "../assets/icons/vander";

import Modal from "react-bootstrap/Modal";
import useAxios from "../network/useAxios";
import { fetchResetPasswords } from "../urls/urls";

export default function ResetPassword() {
  let [editProfile, setEditProfile] = useState(false);
  let [show, setShow] = useState(false);
  const [requestData, setRequestData] = useState([]);
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
    resetPassRequestFetch(fetchResetPasswords())
  }
  useEffect(()=>{
    fetchRequests()
  },[])
  useEffect(()=>{
    if(resetPassRequestResponse?.result == "success"){
      setRequestData(resetPassRequestResponse?.data)
    }
  },[resetPassRequestResponse])

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
                                            <button type="button" className="btn btn-primary" onClick={() =>setShow(false)}>Save</button>
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
                  <Link to="/">Doctris</Link>
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
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "100px" }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {resetPassword.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th className="p-3">{item.id}</th>
                          <td className="py-3">
                            <Link to="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.image}
                                  className="avatar avatar-md-sm rounded-circle shadow"
                                  alt=""
                                />
                                <span className="ms-2">{item.name}</span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">{item.comment}</td>
                          <td className="p-3">
                            {item.status === "Approved" ? (
                              <span className="badge bg-soft-success">
                                Approved
                              </span>
                            ) : (
                              <span className="badge bg-soft-warning">
                                Pending
                              </span>
                            )}
                          </td>
                          <td className="text-end p-3">
                         
                            <Link
                              to="#"
                              className="btn btn-icon btn-pills btn-soft-success mx-1"
                              onClick={() => setEditProfile(true)}
                            >
                              <BsPencil />
                            </Link>
                            <Link
                              onClick={()=>
                                {
                                    console.log("hello")
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
                <span className="text-muted me-3">
                  Showing 1 - 10 out of 50
                </span>
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
