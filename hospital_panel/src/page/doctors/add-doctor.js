import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import doctor from "../../assets/images/doctors/01.jpg";
import useAxios from "../../network/useAxios";
import { addDoctorByHospital } from "../../urls/urls.jsx";
import { Alert, TimePicker } from "antd";
import { useRouter } from "../../hooks/use-router.js";
import { useSelector } from "react-redux";
import { GetAllDepartments } from "../../redux/reducers/functionalities.reducer.js";
import { useIsMobile } from "../../utils/commonFunctions.js";

export default function AddDoctor() {
  const isMobile = useIsMobile()


  const router = useRouter();

  const [formValues, setFormValues] = useState({
    phoneNumber:"+91-"
  });
  const [isUploaded, setIsUploaded] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = React.useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  
  const [
    doctorProfileResponse,
    doctorProfileError,
    doctorProfileLoading,
    doctorProfileFetch,
  ] = useAxios();
  const openFile = () => {
    fileInputRef.current.click();
  };
  const format = 'HH:mm';


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
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedFile(e.target.result);
      };
      reader.readAsDataURL(file);
      setIsUploaded(true);
    }
  };
  const allDepartments = useSelector(GetAllDepartments);
  const formatTime = (time) => {
    let [hour, minute] = time.split(':').map(Number);
    let period = hour < 12 ? 'AM' : 'PM';
    hour = hour % 12 || 12;
    return { hour, minute, period };
  };
  
  const onChangeTime = (time, timeString) => {
    console.log(timeString);
    if (timeString[0] !== '' && timeString[1] !== '') {
      let time1 = timeString[0];
      let time2 = timeString[1];
  
      const time1Formatted = formatTime(time1);
      let time2Formatted = formatTime(time2);
  
      // Check if the first time is AM and second time hour is less than the first time hour, assume it's PM
      if (time1Formatted.period === 'AM' && parseInt(time2.split(':')[0]) < parseInt(time1.split(':')[0])) {
        time2Formatted.period = 'PM';
      }
      
      // Format the output
      const finalFormat = `${time1Formatted.hour.toString().padStart(2, '0')}:${time1Formatted.minute.toString().padStart(2, '0')}${time1Formatted.period} - ${time2Formatted.hour.toString().padStart(2, '0')}:${time2Formatted.minute.toString().padStart(2, '0')}${time2Formatted.period}`;
  
      console.log(finalFormat);
  
      setFormValues((prev) => ({
        ...prev,
        morningTime: finalFormat,
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        morningTime: "",
      }));
    }
  };
  const onChangeTimeAfternoon = (time, timeString) => {
    console.log(timeString);
    if (timeString[0] !== '' && timeString[1] !== '') {
      let time1 = timeString[0];
      let time2 = timeString[1];
  
      const time1Formatted = formatTime(time1);
      let time2Formatted = formatTime(time2);
  
      // Handle AM/PM transition for afternoon
      if (time1Formatted.period === 'AM' && parseInt(time2.split(':')[0]) < parseInt(time1.split(':')[0])) {
        time2Formatted.period = 'PM';
      }
  
      const finalFormat = `${time1Formatted.hour.toString().padStart(2, '0')}:${time1Formatted.minute.toString().padStart(2, '0')}${time1Formatted.period} - ${time2Formatted.hour.toString().padStart(2, '0')}:${time2Formatted.minute.toString().padStart(2, '0')}${time2Formatted.period}`;
  
      console.log(finalFormat);
  
      setFormValues((prev) => ({
        ...prev,
        afternoonTime: finalFormat,
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        afternoonTime: "",
      }));
    }
  };
  
  const onChangeTimeEvening = (time, timeString) => {
    console.log(timeString);
    if (timeString[0] !== '' && timeString[1] !== '') {
      let time1 = timeString[0];
      let time2 = timeString[1];
  
      const time1Formatted = formatTime(time1);
      let time2Formatted = formatTime(time2);
  
      // Handle AM/PM transition for evening
      if (time1Formatted.period === 'AM' && parseInt(time2.split(':')[0]) < parseInt(time1.split(':')[0])) {
        time2Formatted.period = 'PM';
      }
  
      const finalFormat = `${time1Formatted.hour.toString().padStart(2, '0')}:${time1Formatted.minute.toString().padStart(2, '0')}${time1Formatted.period} - ${time2Formatted.hour.toString().padStart(2, '0')}:${time2Formatted.minute.toString().padStart(2, '0')}${time2Formatted.period}`;
  
      console.log(finalFormat);
  
      setFormValues((prev) => ({
        ...prev,
        eveningTime: finalFormat,
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        eveningTime: "",
      }));
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
    // if (!values.bio) {
      // errors.bio = "Bio is required!";
    // }
    // if (!values.specialization) {
    //   // errors.specialization = "Specialization is required!";
    // }
    // if (!values.education) {
    //   errors.education = "Education is required!";
    // }
    if (!values.department) {
      errors.department = "Department is required!";
    }
    // if (!values.address) {
    //   errors.address = "Address is required!";
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } 
    else if(values.phoneNumber.length != 14){
      errors.phoneNumber = "Invalid Phone Number +91-xxxxxxxxxx";

    }

    return errors;
  };

  const submitValues = () => {
    const errors = validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      setErrors({});
      doctorProfileFetch(addDoctorByHospital(formValues));
    }
  };
  useEffect(() => {
    if (doctorProfileResponse?.result == "success") {
      router.push('/doctors')
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
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Add New Doctor</h5>

            {/* <nav
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
            </nav> */}
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
            <p style={{color:"green"}}>The Default Password of the account will be : demo@123</p>

              <div className="card border-0 p-4 rounded shadow">
                <div className="row align-items-center">
                  <div className="row">
                  {isUploaded &&
                <div className="col-lg-2 col-md-2">
                                      <img
                                        src={uploadedFile || ''}
                                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                                        style={{
                                          objectFit:"cover"
                                        }}
                                        alt=""
                                      />
																	</div>}
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
                       accept=".png, .jpg, .jpeg"
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
                      <label className="form-label">Phone no</label>
                      <input
                        name="number"
                        id="number"
                        type="text"
                        maxLength={14}

                        className="form-control"
                        value={formValues?.phoneNumber}
                        placeholder="Phone no. :"
                        onChange={(e) => {
                          const value = e.target.value;
                          // Ensure the prefix is always present
                          const prefix = '+91-';
                          let numericPart = value.slice(prefix.length).replace(/[^0-9]/g, '');
                          if (numericPart.length > 10) {
                            numericPart = numericPart.slice(0, 10);
                          }
                          setFormValues((prev) => ({
                            ...prev,
                            phoneNumber: prefix + numericPart,
                          }));
                          }}
                        onKeyDown={(e) => {
                          // Prevent backspace from deleting the prefix
                          if (e.keyCode === 8 && e.target.selectionStart <= 4) {
                            e.preventDefault();
                          }
                        }}
                      />
                  {errors.phoneNumber && (
                        <div className="text-danger"> {errors.phoneNumber}</div>
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
                                           <option>Please Select from dropdown</option>

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
                        placeholder="Address :"
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

{!isMobile &&
<>
                  <div className="col-md-4 mb-3">
                  <label className="form-label"><b>Morning Slots</b></label>
                    </div>
                  <div className="col-md-4 mb-3">
                  <label className="form-label"><b>Afternoon Slots</b></label>
                    </div>
                  <div className="col-md-4 mb-3">
                  <label className="form-label"><b>Evening Slots</b></label>
                    </div>
                    </>
                    }
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Timings" : "Morning Timings"}</label>
                      <TimePicker.RangePicker
                                            format={format}

                      onChange={onChangeTime}
                      className="form-control"
                        
                      />
                      {errors.morningTime && (
                        <div className="text-danger">{errors.morningTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Timings" : "Afternoon Timings"}</label>
                      <TimePicker.RangePicker
                                            format={format}

                      onChange={onChangeTimeAfternoon}
                      className="form-control"
                      />
                       {errors.afternoonTime && (
                        <div className="text-danger">{errors.afternoonTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Timings" : "Evening Timings"}</label>
                      <TimePicker.RangePicker
                                            format={format}

                        onChange={onChangeTimeEvening}
                        className="form-control"
                      />
                      {errors.eveningTime && (
                        <div className="text-danger">{errors.eveningTime}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Capacity" : "Morning Capacity"}</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Morning Capacity :"
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
                      <label className="form-label">{!isMobile ? "Capacity" : "Afternoon Capacity"}</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Afternoon Capacity :"
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
                      <label className="form-label">{!isMobile ? "Capacity" : "Evening Capacity"}</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Evening Capacity :"
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
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Price" : "Morning Price"}</label>
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
                      {errors.morningPrice && (
                        <div className="text-danger">{errors.morningPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Price" : "Afternoon Price"}</label>
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
                      {errors.afternoonPrice && (
                        <div className="text-danger">{errors.afternoonPrice}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">{!isMobile ? "Price" : "Evening Price"}</label>
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
                      {errors.eveningPrice && (
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
