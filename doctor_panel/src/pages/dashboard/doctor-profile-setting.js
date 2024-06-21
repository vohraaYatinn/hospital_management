import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/main_sign.webp";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import useAxios from "../../network/useAxios";
import { doctorChangePassword, fetchDoctorProfiles, doctorChangeProfile, handleDoctorImages } from "../../urls/urls";
import { test_url_images } from "../../config/environment";
import { useRouter } from "../../hooks/use-router";
import { Alert } from 'antd';
import sign from "../../assets/sign.png"

export default function DoctorProfileSettimg() {
  const router = useRouter();
  const [doctorProfile, setDoctorProfile] = useState([]);
  const [changeSignature, setChangeSignature] = useState();
  const [formValues, setFormValues] = useState();
  const [changePassword, setChangePassword] = useState();
  const [
    fetchDoctorProfileResponse,
    fetchDoctorProfileError,
    fetchDoctorProfileLoading,
    fetchDoctorProfileFetch,
  ] = useAxios();
  const [
    changeProfileResponse,
    changeProfileError,
    changeProfileLoading,
    changeProfileFetch,
  ] = useAxios();
  const [
    changePasswordResponse,
    changePasswordError,
    changePasswordLoading,
    changePasswordFetch,
  ] = useAxios();
  const [
    handleImageChangeResponse,
    handleImageChangeError,
    handleImageChangeLoading,
    handleImageChangeFetch,
  ] = useAxios();
  const fileInputProfileRef = React.useRef(null);
  const fileInputSignRef = React.useRef(null);
  const [isUploadedPhoto, setIsUploadedPhoto] = useState(false);
  const [isUploadedSign, setIsUploadedSign] = useState(false);
  const[message, setMessage] = useState({
    message:"",
    showMessage:"",
    type:"error"
  })
  const openFilePhoto = () =>{
    fileInputProfileRef.current.click();

  }
  const openFileSign = () =>{
    fileInputSignRef.current.click();

  }
  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValues((prev) => ({
        ...prev,
        profilePhoto: file
      }));      
      setIsUploadedPhoto(true);
    }
  };

  const handleRemovePhoto = () => {
    setIsUploadedPhoto(false);
    console.log("Remove button clicked");
    setFormValues((prev) => ({
        ...prev,
        profilePhoto: ""
      }));  
  };
  const handleUploadSign = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValues((prev) => ({
        ...prev,
        signPhoto: file
      }));      
      setIsUploadedSign(true);
    }
  };
  const handleImagesChange = () => {
    handleImageChangeFetch(handleDoctorImages(formValues))
  }
  const handleRemoveSign = () => {
    setIsUploadedSign(false);
    console.log("Remove button clicked");
    setFormValues((prev) => ({
        ...prev,
        signPhoto: ""
      }));  
  };
  useEffect(() => {
    fetchDoctorProfileFetch(fetchDoctorProfiles());
  }, []);
  useEffect(() => {

  if(changeProfileResponse?.result == "success"){
      setMessage({
          message:changeProfileResponse?.message,
          showMessage:true,
          type:"success"
        })
  }
  if(changeProfileResponse?.result == "failure"){
      setMessage({
          message:changeProfileResponse?.message,
          showMessage:true,
          type:"error"
        })
  }
  if(handleImageChangeResponse?.result == "success"){
      setMessage({
          message:handleImageChangeResponse?.message,
          showMessage:true,
          type:"success"
        })
  }
  if(handleImageChangeResponse?.result == "failure"){
      setMessage({
          message:handleImageChangeResponse?.message,
          showMessage:true,
          type:"error"
        })
  }
  }, [changeProfileResponse, handleImageChangeResponse ]);

  useEffect(() => {
    if (fetchDoctorProfileResponse?.result == "success") {
      setDoctorProfile(fetchDoctorProfileResponse?.data);
      setFormValues(fetchDoctorProfileResponse?.data);
      console.log(fetchDoctorProfileResponse?.data?.bio);
    }
  }, [fetchDoctorProfileResponse]);

  const changePasswordFunction = () => {
    changePasswordFetch(doctorChangePassword(changePassword));
  };
  const changeProfileFunction = () => {
    changeProfileFetch(doctorChangeProfile(formValues));
  };
  useEffect(()=>{
    if(changePasswordResponse?.result == "success"){
      router.push("/logout")

    }
  },[changePasswordResponse])
  return (
    <>
      <Navbar
        navDark={true}
        manuClass="navigation-menu nav-left"
        containerClass="container"
      />
      <section className="bg-dashboard">
        <div className="container">
          <div className="row justify-content-center">
            <Sidebar colClass="col-xl-4 col-lg-4 col-md-5 col-12" />

            <div className="col-xl-8 col-lg-8 col-md-7 pt-2 mt-sm-0 pt-sm-0">
            {message?.showMessage &&  <Alert 
       style={{marginTop:"1rem", marginBottom:"1rem"}}
       message={message?.message} type={message?.type}
                closable
                
                onClose={()=>{
                  setMessage({
                    message:"",
                    showMessage:false
                  })
                }}
          />}
              <div className="rounded shadow">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Professional Information :</h5>
                </div>

                <div className="p-4 border-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src={test_url_images + doctorProfile?.profile_picture}
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload / Change your profile photo</h5>
                      <p className="text-muted mb-0">
                        For best results, use an image at least 256px by 256px
                        in either .jpg or .png format
                      </p>
                    </div>
                    <input
            type="file"
            ref={fileInputProfileRef}
            style={{ display: 'none' }}
            onChange={handleUploadPhoto}
          />
                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                    {!isUploadedPhoto && (
        <button className="btn btn-primary" onClick={openFilePhoto}>
          Upload
        </button>
      )}
      {isUploadedPhoto && (
        <button className="btn btn-soft-primary ms-2" onClick={handleRemovePhoto}>
          Remove
        </button>
      )}
                    </div>
                  </div>
                  <div className="row align-items-center mt-5">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src={doctorProfile?.signature ? test_url_images + doctorProfile?.signature : sign}
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload / Change your signature</h5>
                      <p className="text-muted mb-0">
                        For best results, use an image at least 256px by 256px
                        in either .jpg or .png format
                      </p>
                    </div>
                    <input
            type="file"
            ref={fileInputSignRef}
            style={{ display: 'none' }}
            onChange={handleUploadSign}
          />
                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                    {!isUploadedSign && (
        <button className="btn btn-primary" onClick={openFileSign}>
          Upload
        </button>
      )}
      {isUploadedSign && (
        <button className="btn btn-soft-primary ms-2" onClick={handleRemoveSign}>
          Remove
        </button>
      )}
                    </div>
                    <button style={{marginTop:'3rem', border:"0rem", backgroundColor:"blue", color:"white", width:"30%", padding:"0.5rem"}}
                    onClick={()=>{
                      handleImagesChange()
                    }}
                    >Change</button>
                  </div>
                </div>

                <div className="p-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            defaultValue={doctorProfile?.full_name}
                            className="form-control"
                            placeholder="First Name :"
                            disabled
          
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Specialization</label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            value={doctorProfile?.specialization}
                            className="form-control"
                            placeholder="First Name :"
                            disabled
          
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Your Email</label>
                          <input
                            name="email"
                            className="form-control"
                            placeholder="Your email :"
                            defaultValue={doctorProfile?.user?.email}
                            onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"email":e.target.value}))
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone no.</label><div className="input-group">
                          <span className="input-group-text">+91</span>
                          <input
                            name="number"
                            id="number"
                            defaultValue={doctorProfile?.user?.phone}
                            type="number"
                            className="form-control"
                            placeholder="Phone no. :"
                            onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"phoneNumber":e.target.value}))
                            }}
                          />
                        </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Bio Here</label>
                          {formValues ? (
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              value={formValues?.bio}
                              className="form-control"
                              onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"bio":e.target.value}))
                            }}
                            >
                              
                            </textarea>
                          ):  <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control"
                              onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"bio":e.target.value}))
                            }}
                            >
                              ""
                            </textarea>
                          }
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
                          value="Save changes"
                          onClick={()=>{
                            changeProfileFunction()
                          }}
                        />
                      </div>
                    </div>
                </div>
              </div>

              <div className="rounded shadow mt-4" style={{
                marginBottom:"3rem"
              }}>
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Change Password :</h5>
                </div>

                <div className="p-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Old password :</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Old password"
                          required=""
                          onChange={(e) => {
                            setChangePassword((prev) => ({
                              ...prev,
                              oldPassword: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">New password :</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New password"
                          required=""
                          onChange={(e) => {
                            setChangePassword((prev) => ({
                              ...prev,
                              newPassword: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Re-type New password :
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Re-type New password"
                          required=""
                          onChange={(e) => {
                            setChangePassword((prev) => ({
                              ...prev,
                              retypePassword: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mt-2 mb-0">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          changePasswordFunction();
                        }}
                      >
                        Save password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdminFooter />
    </>
  );
}
