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
  const [errors, setErrors] = useState({});

  const [
    hospitalPatientAddResponse,
    hospitalPatientAddError,
    hospitalPatientAddLoading,
    hospitalPatientAddFetch,
  ] = useAxios();

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const regexWeight = /^\d+(\.\d+)?$/;

    if (!values.weight) {
      errors.weight = "Weight is required!";
    } else if (!regexWeight.test(values.weight)) {
      errors.weight = "Invalid weight format!";
    } else {
      const numericWeight = parseFloat(values.weight);
      if (numericWeight <= 0) {
        errors.weight = "Weight must be greater than zero!";
      } else if (numericWeight > 1000) {
        errors.weight = "Weight seems too high! Please check.";
      }
    }

    if (!values.fullName) {
      errors.fullName = "Fullname is required!";
    }
    if (!values.dob) {
      errors.dob = "Date of Birth is required!";
    }
    if (!values.bloodGroup) {
      errors.bloodGroup = "Blood group is required!";
    }
    if (!values.district) {
      errors.district = "District is required!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (values.phoneNumber.length != 10) {
      errors.phoneNumber = "Phone number is not valid";
    }
    return errors;
  };

  const sumitHospitalPatient = () => {
    const errors = validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      hospitalPatientAddFetch(addPatientsHospital(formValues));
    }
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

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Add New Patient</h5>

            {/* <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link>UJUR</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/patients">Patients</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Patient
                </li>
              </ul>
            </nav> */}
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
                      {errors.fullName && (
                        <div className="text-danger">{errors.fullName}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone no.</label>
                      <input
                        name="number"
                        id="number"
                        type="text"
                        maxLength={10}
                        className="form-control"
                        placeholder="Phone no. :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }));
                        }}
                      />
                      {errors.phoneNumber && (
                        <div className="text-danger">{errors.phoneNumber}</div>
                      )}
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
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
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
                      {errors.bloodGroup && (
                        <div className="text-danger">{errors.bloodGroup}</div>
                      )}
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
                      {errors.weight && (
                        <div className="text-danger">{errors.weight}</div>
                      )}
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
                            address: e.target.value,
                          }));
                        }}
                      />
                      {errors.address && (
                        <div className="text-danger">{errors.address}</div>
                      )}
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
                      {errors.district && (
                        <div className="text-danger">{errors.district}</div>
                      )}
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
                      {errors.gender && (
                        <div className="text-danger">{errors.gender}</div>
                      )}
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
                      {errors.dob && (
                        <div className="text-danger">{errors.dob}</div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={sumitHospitalPatient}
                  className="btn btn-primary"
                >
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
