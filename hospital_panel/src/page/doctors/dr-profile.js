import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import doctor1 from '../../assets/images/client/01.jpg'
import Wrapper from "../../components/wrapper";
import { clientReview, companyLogo, doctorData, drTimetable, experienceData } from "../../data/data";
import Modal from "react-bootstrap/Modal";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import {RiTimeFill, FiPhone, FiMail} from '../../assets/icons/vander'
import { editDoctorProfile, fetchHospitalDoctorsProfile, handleDelete } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { test_url_images } from "../../config/environment";
import { useRouter } from "../../hooks/use-router";
import { addDoctorByHospital } from "../../urls/urls.jsx";
import { Alert } from "antd";
import { GetAllDepartments } from "../../redux/reducers/functionalities.reducer.js";
import { useSelector } from "react-redux";


export default function DrProfile(){
    const router = useRouter();

    let params = useParams();
    let id = params.id
    let [show, setShow] = useState(false);

    let data = doctorData.find((doctor)=>doctor.id === parseInt(id))
    let [activeIndex, setActiveIndex] = useState(1)
    const allDepartments = useSelector(GetAllDepartments);

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        department: '',
        gender: '',
        experience: '',
        education: '',
        specialization: '',
        license: '',
        address: '',
        bio: "",
        morningTime: "",
        morningPrice: "",
        morningSlots: "",
        afternoonTime: "",
        afternoonPrice: "",
        afternoonSlots: "",
        eveningPrice: "",
        eveningTime: "",
        eveningSlots: "",
      });
    const [doctorsData, setDoctorsData] = useState([]);
    const [
      doctorProfileResponse,
      doctorProfileError,
      doctorProfileLoading,
      doctorProfileFetch,
    ] = useAxios();
    const [
        performActionResponse,
        performActionError,
        performActionLoading,
        performActionFetch,
      ] = useAxios();
    const [
        performEdttResponse,
        performEdttError,
        performEdttLoading,
        performEdttFetch,
      ] = useAxios();
    const performActionRequest = () => {
      performActionFetch(handleDelete(formValues))
    }
    const editDoctor = () =>{
      performEdttFetch(editDoctorProfile({...formValues, doctor_id:id}))
    }
    useEffect(() => {
		if (performActionResponse?.result == "success") {
			router.push("/doctors")
		}
	  }, [performActionResponse]);
    useEffect(() => {
		if (performEdttResponse?.result == "success") {
			router.push("/doctors")
		}
	  }, [performEdttResponse]);
    useEffect(() => {
        if(id){
            doctorProfileFetch(fetchHospitalDoctorsProfile({
                doctor_id:id
            }));
        }
    }, [id]);
    useEffect(() => {
      if (doctorProfileResponse?.result == "success" && doctorProfileResponse?.data) {
        setDoctorsData(doctorProfileResponse?.data);
        setFormValues({
            fullName: doctorProfileResponse?.data?.full_name,
            email: doctorProfileResponse?.data?.email,
            phoneNumber: doctorProfileResponse?.data?.user?.phone,
            experience: doctorProfileResponse?.data?.experience,
            education: doctorProfileResponse?.data?.education,
            specialization: doctorProfileResponse?.data?.specialization,
            license: doctorProfileResponse?.data?.license,
            address: doctorProfileResponse?.data?.address,
            bio: doctorProfileResponse?.data?.bio,

            morningPrice: doctorProfileResponse?.data?.doctor_slots[0].morning_slots_price,
            morningSlots: doctorProfileResponse?.data?.doctor_slots[0].morning_slots,
            morningTime: doctorProfileResponse?.data?.doctor_slots[0].morning_timings,

            afternoonPrice: doctorProfileResponse?.data?.doctor_slots[0].afternoon_slots_price,
            afternoonTime: doctorProfileResponse?.data?.doctor_slots[0].afternoon_timings,
            afternoonSlots: doctorProfileResponse?.data?.doctor_slots[0].afternoon_slots,

            eveningPrice: doctorProfileResponse?.data?.doctor_slots[0].evening_slots_price,
            eveningSlots: doctorProfileResponse?.data?.doctor_slots[0].evening_slots,
            eveningTime: doctorProfileResponse?.data?.doctor_slots[0].evening_timings,
        })
      }
    }, [doctorProfileResponse]);
    
    const designStarsReviews = (stars) => {
        let starsArray = [];
        for (let i = 0; i < stars; i++) {
            starsArray.push(
                <li key={i} className="list-inline-item">
                    <i className="mdi mdi-star text-warning"></i>
                </li>
            );
        }
        return starsArray;
    }

      let settings2 ={
        container: '.client-review-slider',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      }
      
      // useEffect(()=>{
      //   if(formValues?.action == "active"){
      //       performActionRequest()
      //   }
      // },[formValues])



      const [isUploaded, setIsUploaded] = useState(false);
      const [errors, setErrors] = useState({});
      const fileInputRef = React.useRef(null);
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
        // if (!values.license) {
        //   errors.license = "Medical license is required!";
        // }
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
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Phone number is required";
        } else if (values.phoneNumber.length < 11) {
          errors.phoneNumber = "Phone number is not valid";
        }
        return errors;
      };
    
      const submitValues = () => {
        const errors = validate(formValues);
        if (Object.keys(errors).length !== 0) {
          setErrors(errors);
        } else {
          doctorProfileFetch(addDoctorByHospital(formValues));
        }
      };
      useEffect(() => {
        console.log(doctorProfileResponse);
        console.log(doctorProfileError);
        if (doctorProfileResponse?.result == "success") {
          setMessage({
            message: doctorProfileResponse?.message,
            showMessage: true,
          });
        }
        if (doctorProfileError) {
          setMessage({
            message: doctorProfileError?.response?.data?.message,
            showMessage: true,
            isError: true,
          });
        }
      }, [doctorProfileResponse, doctorProfileError]);
    return(
       <Wrapper>
                        <div className="modal fade" id="LoginForm">
                                    <Modal show={show} onHide={() =>setShow(false)} centered>
                                        <Modal.Header closeButton>
                                            <h5 className="modal-title" id="LoginForm-title">Are You Sure To {formValues?.action}?</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="p-3 rounded box-shadow">
                                                <p className="text-muted mb-0">
                                                    Are you sure to perform action on this request?
                                                    </p>                                                        
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-secondary" onClick={() =>setShow(false)}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() =>{
                                            performActionRequest()
                                            setShow(false)
                                          }
                                          
                                          }
                                            
                                            >Confirm</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Doctor Profile & Settings</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                <li className="breadcrumb-item"><Link to="doctors">Doctor</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="card rounded shadow overflow-hidden mt-4 border-0">
                        <div className="p-5 bg-primary bg-gradient"></div>
                        <div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
                            <img src={test_url_images + doctorsData?.profile_picture} className="rounded-circle shadow-md avatar avatar-medium" alt=""
                            style={{
                                objectFit: "cover"
                            }}
                            />
                            <div className="mt-4 ms-3 pt-3">
                                <h5 className="mt-3 mb-1">{doctorsData?.full_name}</h5>
                                <p className="text-muted mb-0">{doctorsData?.education}</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card border-0 rounded-0 p-4">
                                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(1)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Overview</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(3)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Reviews</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 4 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(4)} >
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Time Table</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 5 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(5)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Settings</h5>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
        
                                    <div className="tab-content mt-4" id="pills-tabContent">
                                        {activeIndex === 1 ? 
                                            <div className="tab-pane fade show active">
                                                <p className="text-muted">{doctorsData?.bio}</p>
                                   
            
                                                
                                            </div> : ''
                                        }
                                        
                                        {activeIndex === 3 ? 
                                            <div className="tab-pane fade show active">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-8 text-center">
                                                        <div className="client-review-slider">
                                                            <TinySlider settings={settings2}>
                                                                {doctorsData?.doctor_reviews.map((item,index) =>{
                                                                    return(
                                                                        <div className="tiny-slide text-center" key={index}>
                                                                            <p className="text-muted fw-normal fst-italic">{item.comment}</p>
                                                                                                                                                        <ul className="list-unstyled mb-0">
                                                                                {designStarsReviews(item?.reviews_star)}
                                                                            </ul>
                                                                            <h6 className="text-primary">{item?.patient?.full_name} <small className="text-muted">{item?.patient?.date_of_birth}</small></h6>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </TinySlider>
                                                        </div>
                                                    </div>
                                                </div>
            
                                                
                                            </div> : ''
                                        }
                                        {activeIndex === 4 ? 
                                            <div className="tab-pane fade show active">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="card border-0 p-3 pt-0 rounded shadow">
                                                            <ul className="list-unstyled mb-0">
                                                                
                                                                    <li className="d-flex justify-content-between mt-2 ms-0 mt-3" >
                                                                        <p className="text-muted mb-0"><RiTimeFill className="text-primary align-middle h5 mb-0"/> Morning</p>
                                                                        <p className="text-primary mb-0"><span className="text-dark">Time:</span>{doctorsData?.doctor_slots[0].morning_timings}</p>
                                                                        <p>Rs {doctorsData?.doctor_slots[0].morning_slots_price}</p>
                                                                    </li>
                                                                    <li className="d-flex justify-content-between mt-2 ms-0 mt-3" >
                                                                        <p className="text-muted mb-0"><RiTimeFill className="text-primary align-middle h5 mb-0"/> Afternoon</p>
                                                                        <p className="text-primary mb-0"><span className="text-dark">Time:</span>{doctorsData?.doctor_slots[0].afternoon_timings}</p>
                                                                        <p>Rs {doctorsData?.doctor_slots[0].afternoon_slots_price}</p>

                                                                    </li>
                                                                    <li className="d-flex justify-content-between mt-2 ms-0 mt-3" >
                                                                        <p className="text-muted mb-0"><RiTimeFill className="text-primary align-middle h5 mb-0"/> Evening</p>
                                                                        <p className="text-primary mb-0"><span className="text-dark">Time:</span>{doctorsData?.doctor_slots[0].evening_timings}</p>
                                                                        <p>Rs {doctorsData?.doctor_slots[0].evening_slots_price}</p>

                                                                    </li>
                                                                    
                                                            </ul>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                        <div className="card border-0 text-center features feature-primary">
                                                            <div className="icon text-center mx-auto rounded-md">
                                                                <i className="uil uil-phone h3 mb-0"></i><FiPhone className="h3 mb-0"/>
                                                            </div>
                                
                                                            <div className="card-body p-0 mt-4">
                                                                <h5 className="title fw-bold">Phone</h5>
                                                                <Link to="tel:+152534-468-854" className="link">{doctorsData?.user?.phone}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                
                                                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                        <div className="card border-0 text-center features feature-primary">
                                                            <div className="icon text-center mx-auto rounded-md">
                                                                <i className="uil uil-envelope h3 mb-0"></i><FiMail className="h3 mb-0"/>
                                                            </div>
                                
                                                            <div className="card-body p-0 mt-4">
                                                                <h5 className="title fw-bold">Email</h5>
                                                                <Link to="mailto:contact@example.com" className="link">{doctorsData?.user?.email}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : ''
                                        }
                                        {activeIndex === 5 ? 
                                        <>
    <h5 className="mb-1">Settings</h5>

                                                
      <div className="container-fluid">
        <div className="">
          <div className="d-md-flex justify-content-between">

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
          
            <div className="col-lg-12 mt-4">
              <div className="card border-0 p-4 rounded shadow">
                <div className="row align-items-center">
                  <div className="row">
                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload doctors picture</h5>
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
                        value={formValues.fullName}
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
                        value={formValues.email}
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
                        value={formValues.phoneNumber}
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
                      <label className="form-label">Departments</label>
                      <select
                        className="form-select form-control"
                        value={formValues.department}
                        onChange={(e) => {
                          setFormValues((prev) => ({
                            ...prev,
                            department: e.target.value,
                          }));
                        }}
                      >
                           {allDepartments.map((item)=>{
                    return(
                        <option value={item.id}>{item.name}</option>
                    )
                })}
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
                        value={formValues.gender}
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
                        value={formValues.experience}
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
                        value={formValues.education}
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
                        value={formValues.specialization}
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
                  {/* <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Medical License</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Medical license :"
                        value={formValues.license}
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
                  </div> */}
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">address</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="address :"
                        value={formValues.address}
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
                        value={formValues.bio}
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
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Morning Time :"
                        value={formValues.morningTime}
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
                        value={formValues.afternoonTime}
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
                        value={formValues.eveningTime}
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
                        value={formValues.morningSlots}
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
                        value={formValues.afternoonSlots}
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
                        value={formValues.eveningSlots}
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
                        value={formValues.morningPrice}
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
                        value={formValues.afternoonPrice}
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
                        value={formValues.eveningPrice}
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

                <button className="btn btn-primary" onClick={editDoctor}>
                  Update Doctor Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div className="tab-pane fade show active ">


                                                <div className="row">

                                                    <div className="col-lg-6">
                                                        <div className="rounded shadow mt-4">
                                                           
                                
                                                            <div className="p-4">
                                                            
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">Doctor Is Active</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch2" 
                                                                        checked={doctorsData?.is_active}
                                                                        onChange={(e)=>[
                                                                            setFormValues({
                                                                                action:"active",
                                                                                id:doctorsData?.id,
                                                                                type:"doctor"
                                                                            })
                                                                        ]}
                                                                        />
                                                                        <label className="form-check-label" htmlFor="customSwitch2"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>

                                                        
                                                        <div className="col-lg-6">
                                                        <div className="rounded shadow mt-4">
                                                          
                                
                                                            <div className="p-4">
                                                                <div className="p-4 border-bottom">
                                                                    <h5 className="mb-0 text-danger"

                                                                    >Delete Account :</h5>
                                                                </div>

                                                                <div className="p-4">
                                                                    <h6 className="mb-0 fw-normal">Do you want to delete the account? Please press below "Delete" button</h6>
                                                                    <div className="mt-4">
                                                                        <button className="btn btn-danger"
                                                                        onClick={()=>{
                                                                            setFormValues({
                                                                                action:"delete",
                                                                                id:doctorsData?.id,
                                                                                type:"doctor"
                                                                            })
                                                                            setShow(true)
                                                                        }}
                                                                        >Delete Account</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> </>: ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </Wrapper>
    )
}