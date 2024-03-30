import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { useState } from "react";
import { addPatientsHospital } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { useEffect } from "react";
import { Alert } from "antd";

export default function AddPatient() {
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
    fullName: "",
    gender: "M",
    email: "",
    dob: "",
    bloodGroup: "",
    weight: "",
    district: "",
  });
  const [
    hospitalPatientAddResponse,
    hospitalPatientAddError,
    hospitalPatientAddLoading,
    hospitalPatientAddFetch,
  ] = useAxios();

  const sumitHospitalPatient = () => {
    hospitalPatientAddFetch(addPatientsHospital(formValues));
  };
  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
  });
  useEffect(() => {
    if (hospitalPatientAddResponse?.result == "success") {
      setMessage({
        message: hospitalPatientAddResponse?.message,
        showMessage: true,
      });
    }
  }, [hospitalPatientAddResponse]);
  const [errors, setErrors] = useState({});

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Add New Patient</h5>

            <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/">UJUR</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/patients">Patients</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                >
                  Add Patient
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
            {message?.showMessage && (
              <Alert
                style={{ marginTop: "1rem" }}
                message={message?.message}
                type="success"
                closable
                onClose={() => {
                  setMessage({
                    message: "",
                    showMessage: false,
                  });
                }}
              />
            )}
            <div className="col-lg-8 mt-4">
              <div className="card border-0 p-4 rounded shadow">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Full Name :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone no.</label>
                      <input
                        name="number"
                        id="number"
                        type="text"
                        className="form-control"
                        placeholder="Phone no. :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Email : </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control start"
                        placeholder="Enter Email :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Blood Group : </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control start"
                        placeholder="Enter Blood Group :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            bloodGroup: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Weight : </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control start"
                        placeholder="Enter Weight :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            weight: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Address : </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control start"
                        placeholder="Enter Address :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> District : </label>
                      <input
                        name="email"
                        type="text"
                        className="form-control start"
                        placeholder="Enter District :"
                        onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              district: e.target.value,
                            }));
                          }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select form-control"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }));
                        }}
                      >
                        <option defaultValue="M">Male</option>
                        <option defaultValue="F">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Date of Birth : </label>
                      <input
                        name="date"
                        type="date"
                        className="form-control start"
                        placeholder="Select date :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            dob: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>

                <button                   onClick={sumitHospitalPatient}
 className="btn btn-primary">
                  Add Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
