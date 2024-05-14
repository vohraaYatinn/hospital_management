import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import doctor from "../../assets/images/doctors/01.jpg";
import useAxios from "../../network/useAxios";
import { addDoctorByAdmin, fetchAllHospital } from "../../urls/urls.jsx";
import { Alert } from "antd";
// import { TimePicker } from 'antd';
import { TimePicker } from "antd";
import { useRouter } from "../../hooks/use-router.js";

export default function AddDoctor() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = React.useRef(null);
  const [errors, setErrors] = useState({});
  const [
    hospitalDataResponse,
    hospitalDataError,
    hospitalDataLoading,
    hospitalDataFetch,
  ] = useAxios();
  // const [
  //   departmentResponse,
  //   departmentError,
  //   departmentLoading,
  //   departmentFetch,
  // ] = useAxios();
  const [
    doctorProfileResponse,
    doctorProfileError,
    doctorProfileLoading,
    doctorProfileFetch,
  ] = useAxios();
  const openFile = () => {
    fileInputRef.current.click();
  };
  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
  });
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValues((prev) => ({
        ...prev,
        profilePhoto: file,
      }));
      setIsUploaded(true);
    }
  };

  const handleRemove = () => {
    setIsUploaded(false);
    console.log("Remove button clicked");
    setFormValues((prev) => ({
      ...prev,
      profilePhoto: "",
    }));
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullName) {
      errors.fullName = "Fullname is required!";
    }
    if (!values.license) {
      errors.license = "Medical license is required!";
    }
    if (!values.experience) {
      errors.experience = "Experience is required!";
    }
    if (!values.bio) {
      errors.bio = "Bio is required!";
    }
    if (!values.specialization) {
      errors.specialization = "Specialization is required!";
    }
    if (!values.education) {
      errors.education = "Education is required!";
    }
    if (!values.department) {
      errors.department = "Department is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.HospitalsId) {
      errors.HospitalsId = "Hospital is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if(!values.profilePhoto){
      errors.profilePhoto = "Profile Photo is required"
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (values.phoneNumber.length != 10) {
      errors.phoneNumber = "Phone number is not valid";
    }
   
    return errors;
  };

  const submitValues = () => {
    const errors = validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      doctorProfileFetch(addDoctorByAdmin(formValues));
    }
  };
  const fetchAllHospitalFunc = () => {
    hospitalDataFetch(fetchAllHospital());
  };
  useEffect(() => {
    fetchAllHospitalFunc();
  }, []);
  useEffect(() => {
    if (doctorProfileResponse?.result == "success") {
      setMessage({
        message: doctorProfileResponse?.message,
        showMessage: true,
      });
      router.push('/doctors')
    }
  }, [doctorProfileResponse]);
  useEffect(() => {
    if (doctorProfileResponse?.result == "failure") {
      setMessage({
        message: doctorProfileError?.message,
        showMessage: true,
        isError: true,
      });
    }
  }, [doctorProfileError]);
  
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Add New Doctor</h5>

            <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/index">UJUR</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  onChange={submitValues}
                >
                  Add Doctor
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
            {message?.showMessage && (
              <Alert
                style={{ marginTop: "1rem" }}
                message={message?.message}
                type={message?.isError ? "error" : "success"}
                closable
                onClose={() => {
                  setMessage({
                    message: "",
                    showMessage: false,
                  });
                }}
              />
            )}
            <div className="col-lg-12 mt-4">
              <div className="card border-0 p-4 rounded shadow">
                <div className="row align-items-center">
                  <div className="row">
                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload doctors picture</h5>
                      {errors.profilePhoto && (
                        <div className="text-danger">{errors.profilePhoto}</div>
                      )}
                      <p className="text-muted mb-0">
                        For best results, use an image at least 600px by 600px
                        in either .jpg or .png format
                      </p>
                    </div>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleUpload}
                    />

                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                      {!isUploaded && (
                        <button className="btn btn-primary" onClick={openFile}>
                          Upload
                        </button>
                      )}
                      {isUploaded && (
                        <button
                          className="btn btn-soft-primary ms-2"
                          onClick={handleRemove}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>

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
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
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
                      {errors.phoneNumber && (
                        <div className="text-danger">{errors.phoneNumber}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Hospitals</label>
                      <select
                        className="form-select form-control"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            HospitalsId: e.target.value,
                          }));
                        }}
                      >
                        <option value="">Select Hospital</option>

                        {hospitalDataResponse?.data?.map((item) => {
                          return <option value={item?.id}>{item?.name}</option>;
                        })}
                      </select>
                      {errors.HospitalsId && (
                        <div className="text-danger">{errors.HospitalsId}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <select
                        className="form-select form-control"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            department: e.target.value,
                          }));
                        }}
                      >
                        <option value="1">Eye Care</option>
                        <option value="2">Gynecologist</option>
                        <option value="3">Psychotherapist</option>
                        <option value="4">Orthopedic</option>
                        <option value="5">Dentist</option>
                        <option value="6">Gastrologist</option>
                        <option value="7">Urologist</option>
                        <option value="8">Neurologist</option>
                      </select>
                      {errors.department && (
                        <div className="text-danger">{errors.department}</div>
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
                        <option defaultValue="Male">Male</option>
                        <option defaultValue="Female">Female</option>
                        <option defaultValue="Others">Others</option>
                      </select>
                      {errors.gender && (
                        <div className="text-danger">{errors.gender}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Experience</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Experience in years :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            experience: e.target.value,
                          }));
                        }}
                      />
                      {errors.experience && (
                        <div className="text-danger">{errors.experience}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Education</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Education :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            education: e.target.value,
                          }));
                        }}
                      />
                      {errors.education && (
                        <div className="text-danger">{errors.education}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Specialization</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Specialization :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            specialization: e.target.value,
                          }));
                        }}
                      />
                      {errors.specialization && (
                        <div className="text-danger">
                          {errors.specialization}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Medical License</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Medical License :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            license: e.target.value,
                          }));
                        }}
                      />
                      {errors.license && (
                        <div className="text-danger">{errors.license}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Address  :"
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

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Your Bio Here</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="3"
                        className="form-control"
                        placeholder="Bio :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            bio: e.target.value,
                          }));
                        }}
                      ></textarea>
                      {errors.bio && (
                        <div className="text-danger">{errors.bio}</div>
                      )}
                    </div>
                  </div>

                  <h3>Slots</h3>

                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Morning Timings</label>
                      {/* <TimePicker.RangePicker
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            morningTime: e.target.value,
                          }));
                        }}
                      /> */}

                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Morning Time :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            morningTime: e.target.value,
                          }));
                        }}
                      />
                        {errors.morningTime && (
                        <div className="text-danger">{errors.morningTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Afternoon Timings</label>
                      {/* <TimePicker.RangePicker
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            afternoonTime: e.target.value,
                          }));
                        }}
                      /> */}
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Afternoon Time :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            afternoonTime: e.target.value,
                          }));
                        }}
                      />
                        {errors.afternoonTime && (
                        <div className="text-danger">{errors.afternoonTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Evening Timings</label>
                      {/* <TimePicker.RangePicker
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            eveningTime: e.target.value,
                          }));
                        }}
                      /> */}

                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Evening Time :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            eveningTime: e.target.value,
                          }));
                        }}
                      />
                        {errors.eveningTime && (
                        <div className="text-danger">{errors.eveningTime}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Morning Slots</label>
                      <input
                        name="morningSlots"
                        id="morningSlots"
                        type="number" // Change input type to "number"
                        // maxLength={3}
                        className="form-control"
                        placeholder="Morning Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            morningSlots: e.target.value,
                          }));
                        }}
                      />
                      {errors.morningSlots && (
                        <div className="text-danger">{errors.morningSlots}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Afternoon Slots</label>
                      <input
                        name="afternoonSlots"
                        id="afternoonSlots"
                        type="number" // Change input type to "number"
                        className="form-control"
                        // maxLength={3}
                        placeholder="Afternoon Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            afternoonSlots: e.target.value,
                          }));
                        }}
                      />
                      {errors.afternoonSlots && (
                        <div className="text-danger">{errors.afternoonSlots}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Evening Slots</label>
                      <input
                        name="eveningSlots"
                        id="eveningSlots"
                        type="number" // Change input type to "number"
                        className="form-control"
                        // maxLength={3}
                        placeholder="Evening Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            eveningSlots: e.target.value,
                          }));
                        }}
                      />
                      {errors.eveningSlots && (
                        <div className="text-danger">{errors.eveningSlots}</div>
                      )}
                    </div>
                  </div>

                  {/* <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Morning Slots</label>
                      <input
                        name="name"
                        id="name"
                        type="number"
                        maxLength={999}
                        className="form-control"
                        placeholder="Morning Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            morningSlots: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Afternoon Slots</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Afternoon Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            afternoonSlots: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Evening Slots</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Evening Slots :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            eveningSlots: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div> */}
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Morning Price</label>
                      <input
                        name="name"
                        id="name"
                        type="number"
                        className="form-control"
                        placeholder="Morning Price :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            morningPrice: e.target.value,
                          }));
                        }}
                      />     {errors.morningPrice && (
                        <div className="text-danger">{errors.morningPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Afternoon Price</label>
                      <input
                        name="name"
                        id="name"
                        type="number"
                        className="form-control"
                        placeholder="Afternoon Price :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            afternoonPrice: e.target.value,
                          }));
                        }}
                      />     {errors.afternoonPrice && (
                        <div className="text-danger">{errors.afternoonPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Evening Price</label>
                      <input
                        name="name"
                        id="name"
                        type="number"
                        className="form-control"
                        placeholder="Evening Price :"
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            eveningPrice: e.target.value,
                          }));
                        }}
                      />     {errors.afternoonSlots && (
                        <div className="text-danger">{errors.eveningPrice}</div>
                      )}
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" onClick={submitValues}>
                  Add Doctor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
