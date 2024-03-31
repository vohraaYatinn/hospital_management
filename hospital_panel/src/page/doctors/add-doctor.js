import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import doctor from "../../assets/images/doctors/01.jpg";
import useAxios from "../../network/useAxios";
import { addDoctorByHospital } from "../../urls/urls.jsx";
import { Alert } from 'antd';


export default function AddDoctor() {
  const [formValues, setFormValues] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = React.useRef(null);
  const [
    doctorProfileResponse,
    doctorProfileError,
    doctorProfileLoading,
    doctorProfileFetch,
  ] = useAxios();
  const openFile = () =>{
    fileInputRef.current.click();

  }
  const[message, setMessage] = useState({
    message:"",
    showMessage:""
  })
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValues((prev) => ({
        ...prev,
        profilePhoto: file
      }));      
      setIsUploaded(true);
    }
  };

  const handleRemove = () => {
    setIsUploaded(false);
    console.log("Remove button clicked");
    setFormValues((prev) => ({
        ...prev,
        profilePhoto: ""
      }));  
  };
  const submitValues = () => {
    doctorProfileFetch(addDoctorByHospital(formValues))
  }
  useEffect(()=>{
    if(doctorProfileResponse?.result == "success"){
      setMessage({
        message:doctorProfileResponse?.message,
        showMessage:true
      })
    }
  },[doctorProfileResponse])
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
                <li className="breadcrumb-item active" aria-current="page"
                onChange={submitValues}
                >
                  Add Doctor
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
       {message?.showMessage &&  <Alert 
       style={{marginTop:"1rem"}}
       message={message?.message} type="success" 
                closable
                onClose={()=>{
                  setMessage({
                    message:"",
                    showMessage:false
                  })
                }}
          />}
            <div className="col-lg-12 mt-4">
              <div className="card border-0 p-4 rounded shadow">
                <div className="row align-items-center">

                <div className="row">


      <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
        <h5 className="">Upload doctors picture</h5>
        <p className="text-muted mb-0">
          For best results, use an image at least 600px by 600px in either .jpg
          or .png format
        </p>
      </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleUpload}
          />

      <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
      {!isUploaded && (
        <button className="btn btn-primary" onClick={openFile}>
          Upload
        </button>
      )}
      {isUploaded && (
        <button className="btn btn-soft-primary ms-2" onClick={handleRemove}>
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
                        </select>
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
                          placeholder="Education :"
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              license: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">address</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Full Name :"
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }));
                          }}
                        />
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
                      </div>
                    </div>

                    <h3>Slots</h3>
                    
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Morning Timings</label>
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Afternoon Timings</label>
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Evening Timings</label>
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Morning Slots</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
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
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Morning Price</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Morning Price :"
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              morningPrice: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Afternoon Price</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Afternoon Price :"
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              afternoonPrice: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Evening Price</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Evening Price :"
                          onChange={(e) => {
                            setFormValues((prev) => ({
                              ...prev,
                              eveningPrice: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary"
                  onClick={submitValues}
                  >Add Doctor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}