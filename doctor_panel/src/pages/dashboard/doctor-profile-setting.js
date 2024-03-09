import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/main_sign.webp";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import useAxios from "../../network/useAxios";
import { doctorChangePassword, fetchDoctorProfiles, doctorChangeProfile } from "../../urls/urls";

export default function DoctorProfileSettimg() {
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

  useEffect(() => {
    fetchDoctorProfileFetch(fetchDoctorProfiles());
  }, []);

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
              <div className="rounded shadow">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Professional Information :</h5>
                </div>

                <div className="p-4 border-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src={image1}
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload your signature</h5>
                      <p className="text-muted mb-0">
                        For best results, use an image at least 256px by 256px
                        in either .jpg or .png format
                      </p>
                    </div>

                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                      <Link to="#" className="btn btn-primary">
                        Upload
                      </Link>
                      <Link to="#" className="btn btn-soft-primary ms-2">
                        Remove
                      </Link>
                    </div>
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
                          <label className="form-label">Phone no.</label>
                          <input
                            name="number"
                            id="number"
                            defaultValue={doctorProfile?.user?.phone}
                            type="text"
                            className="form-control"
                            placeholder="Phone no. :"
                            onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"phoneNumber":e.target.value}))
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Bio Here</label>
                          {formValues?.bio && (
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control"
                              onChange={(e)=>{
                                setFormValues((prev)=>({...prev,"bio":e.target.value}))
                            }}
                            >
                              {formValues?.bio}
                            </textarea>
                          )}
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

              <div className="rounded shadow mt-4">
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
