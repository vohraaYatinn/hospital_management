import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client from "../assets/images/client/01.jpg";
import doctor from "../assets/images/doctors/01.jpg";
import Wrapper from "../components/wrapper";
import { resetPassword } from "../data/data";

import {
  FiEye,
  BsPencil,
  FiTrash,
  FiToggleRight,
} from "../assets/icons/vander";

import Modal from "react-bootstrap/Modal";
import useAxios from "../network/useAxios";
import { fetchLeaveRequest, performLeaveAction } from "../urls/urls";
import { test_url_images } from "../config/environment";
import { Button } from "antd";
import DepartmentSearch from "../common-components/DepartmentSearch";
import DoctorSearch from "../common-components/DoctorsSearch";
import { PaginationCountList, handlePagination, useIsMobile } from "../utils/commonFunctions";

export default function DoctorLeave() {
  const isMobile = useIsMobile()
  let [editProfile, setEditProfile] = useState(false);
  let [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [filters, setFilters] = useState({});
  const [requestData, setRequestData] = useState([]);
  const [
    leaveDoctorResponse,
    leaveDoctorError,
    leaveDoctorLoading,
    leaveDoctorFetch,
  ] = useAxios();
  const [
    performActionResponse,
    performActionError,
    performActionLoading,
    performActionFetch,
  ] = useAxios();
  const [paginationNumber, setPaginationNumber] = useState({
    from:0,
    to:10,
    currentTab:1
})
  const fetchLeaveRequestFunc = () => {
    leaveDoctorFetch(fetchLeaveRequest(filters));
  };
  const performActionRequest = () => {
    performActionFetch(performLeaveAction(formValues));
  };
  useEffect(() => {
    fetchLeaveRequestFunc();
  }, [filters]);
  useEffect(() => {
    if (performActionResponse?.result == "success") {
      fetchLeaveRequestFunc();
    }
  }, [performActionResponse]);
  useEffect(() => {
    if (leaveDoctorResponse?.result == "success") {
      setRequestData(leaveDoctorResponse?.data);
    }
  }, [leaveDoctorResponse]);
  return (
    <Wrapper>
      <div className="modal fade" id="LoginForm">
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title" id="LoginForm-title">
              Are You Sure To {formValues?.action}?
            </h5>
          </Modal.Header>
          <Modal.Body>
            <div className="p-3 rounded box-shadow">
              <p className="text-muted mb-0">
                Are you sure to perform action on this request?
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                performActionRequest();
                setShow(false);
              }}
            >
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Doctor Leaves</h5>

            {/* <nav
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
            </nav> */}
          </div>

          <div className="row">
            <div className="row" style={{ marginTop: "1rem" }}>
              <div className="col-sm-6 col-lg-3" style={{
                marginBottom:isMobile && "1rem"
              }}>
                <DoctorSearch filters={filters} setFilters={setFilters} />
              </div>
              <div className="col-sm-6 col-lg-3" style={{
                marginBottom:isMobile && "1rem"
              }}>
                <DepartmentSearch filters={filters} setFilters={setFilters} />
              </div>
              <div className="col-sm-6 col-lg-3">
                <button
                  className="form-control btn-check-reset"
                  onClick={() => {
                    setFilters({
                      department: "",
                    });
                  }}
                  style={{
                    backgroundColor: "red",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="table-responsive shadow rounded">
                <table className="table table-center bg-white mb-0">
                  <thead>
                    <tr>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "50px" }}
                      >
                        UJUR ID
                      </th>
                      <th
                        className="border-bottom p-3"
                        style={{ minWidth: "180px" }}
                      >
                        Name
                      </th>
                      <th className="border-bottom p-3">Dates</th>

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
                    {requestData.slice(paginationNumber.from, paginationNumber.to).map((item, index) => {
                      return (
                        <tr key={index}>
                          <th className="p-3">{item?.doctor?.ujur_id}</th>
                          <td className="py-3">
                            <Link to="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img
                                  src={
                                    test_url_images +
                                    item.doctor.profile_picture
                                  }
                                  className="avatar avatar-md-sm rounded-circle shadow"
                                  alt=""
                                />
                                <span className="ms-2">
                                  {item.doctor.full_name}
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">
                            {item.from_date} | {item.to_date}
                          </td>
                          <td className="p-3">{item.comment}</td>

                          <td className="p-3">
                            {item.status === "APPROVED" ? (
                              <span className="badge bg-soft-success">
                                Approved
                              </span>
                            ) : item.status === "REJECTED" ? (
                              <span className="badge bg-soft-danger">
                                Cancelled
                              </span>
                            ) : (
                              <span className="badge bg-soft-warning">
                                Waiting for approval
                              </span>
                            )}
                          </td>
                          <td className="text-end p-3">
                            <Link
                              onClick={() => {
                                setFormValues((prev) => ({
                                  ...prev,
                                  id: item.id,
                                  action: "Approve",
                                }));
                                setShow(true);
                              }}
                              className="btn btn-icon btn-pills btn-soft-success"
                            >
                              <FiToggleRight />
                            </Link>
                            <Link
                              onClick={() => {
                                setFormValues((prev) => ({
                                  ...prev,
                                  id: item.id,
                                  action: "Reject",
                                }));
                                setShow(true);
                              }}
                              className="btn btn-icon btn-pills btn-soft-warning"
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
                    <Button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary"
                      onSubmit={performActionRequest}
                      value="Save"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <div className="row text-center">
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
             
                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                { PaginationCountList(handlePagination, paginationNumber , requestData, setPaginationNumber) }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
