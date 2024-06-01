import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import hospital from "../../assets/images/hospitals/01.jpg";
import Wrapper from "../../components/wrapper";
import useAxios from "../../network/useAxios";
import { addAdminHospital, fetchAllHospital } from "../../urls/urls";
import { test_url_images } from "../../config/environment";
import { Alert } from "antd";
import { useDispatch } from "react-redux";
import { updateHospitals } from "../../redux/reducers/functionalities.reducer";

export default function AddHospitalProfile() {
  
  // const [formValue, setFormValue] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileLogo, setUploadedFileLogo] = useState(null);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    phoneNumber: "+91-" // Initialize phoneNumber with '91'
  });
  const [errors, setErrors] = useState({});
  const [
    addHospitalResponse,
    addHospitalError,
    addHospitalLoading,
    addHospitalFetch,
  ] = useAxios();
  const [
    allHospitalResponse,
    allHospitalError,
    allHospitalLoading,
    allHospitalFetch,
  ] = useAxios();
  const [message, setMessage] = useState({
    message: "",
    showMessage: "",
    type:"error"
  });

  const fetchAllHospitalFunc = () => {
    allHospitalFetch(fetchAllHospital());
  };
  useEffect(() => {
    if (addHospitalResponse?.result == "success") {
      fetchAllHospitalFunc()
      setMessage({
        message: addHospitalResponse?.message,
        showMessage: true,
        type:"success"
      });
    }
  }, [addHospitalResponse]);
  useEffect(() => {
    if (allHospitalResponse?.result == "success") {
      dispatch(updateHospitals(allHospitalResponse?.data));

      router('/hospitals')
    }
  }, [allHospitalResponse]);
  useEffect(() => {
    if (addHospitalError) {
      setMessage({
        message: addHospitalError?.response?.data?.message,
        showMessage: true,
        type:"error"
      });
    }
  }, [addHospitalError]);
  
  const router = useNavigate();

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.website) {
      // errors.website = "Website is required!";
    }
    // if (!values.description) {
    //   errors.description = "Description is required!";
    // }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.hospitalName) {
      errors.hospitalName = "Hospital is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (values.phoneNumber.length != 14) {
      errors.phoneNumber = "Phone number is not valid";
    }
    return errors;
  };

  const addHospitalFunc = () => {
    const errors = validate(formValue);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      addHospitalFetch(addAdminHospital(formValue));
      
    }
  };
  const fileInputRef = React.useRef(null);
  const fileInputLogoRef = React.useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploadedLogo, setIsLogoUploaded] = useState(false);

  const openFile = () => {
    fileInputRef.current.click();
  };
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValue((prev) => ({
        ...prev,
        profile: file,
      }));
      setIsUploaded(true);
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedFile(e.target.result);
      };
      reader.readAsDataURL(file);

    }
  };

  const handleRemove = () => {
    setIsUploaded(false);
    setUploadedFile("");
    setFormValue((prev) => ({
      ...prev,
      profile: "",
    }));
  };
  const openFileLogo = () => {
    fileInputLogoRef.current.click();
  };
  const handleUploadLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValue((prev) => ({
        ...prev,
        logo: file
      }));
      setIsLogoUploaded(true);
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedFileLogo(e.target.result);
      };
      reader.readAsDataURL(file);

    }
  };

  const handleRemoveLogo = () => {
    setIsLogoUploaded(false);
    setUploadedFileLogo("");
    setFormValue((prev) => ({
      ...prev,
      logo: "",
    }));
  };
  return (
    <Wrapper>
      <div className="container-fluid">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleUpload}
        />
        <input
          type="file"
          ref={fileInputLogoRef}
          style={{ display: "none" }}
          onChange={handleUploadLogo}
        />
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Add New Hospital</h5>
          </div>


          <div className="col-lg-10">

            {message?.showMessage && (
              <Alert
                style={{ marginTop: "1rem" }}
                message={message?.message}
                type={message?.type}
                closable
                onClose={() => {
                  setMessage({
                    message: "",
                    showMessage: false,
                  });
                }}
              />
            )}
            <p style={{color:"green"}} className="mt-2">The Default Password of the account will be : demo@123</p>

            <div className="rounded shadow mt-4">

              <div className="p-4">
          

                <div className="row align-items-center">
                  {uploadedFile &&
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
                    <h6 className="">Upload hospital picture</h6>
                    <p className="text-muted mb-0">
                      For best results, use an image at least 256px by 256px in
                      either .jpg or .png format
                    </p>
                  </div>

                  <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                    {!isUploaded && (
                      <Link className="btn btn-primary" onClick={openFile}>
                        Upload
                      </Link>
                    )}
                    {isUploaded && (
                      <Link
                        className="btn btn-soft-primary ms-2"
                        onClick={handleRemove}
                      >
                        Remove
                      </Link>
                    )}
                  </div>
                </div>

                <div className="row align-items-center mt-4">
                  {uploadedFileLogo &&
                <div className="col-lg-2 col-md-2">
																		<img
																			src={uploadedFileLogo || ''}
																			className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                                      style={{
                                        objectFit:"cover"
                                      }}
																			alt=""
																		/>
																	</div>}
                  <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                    <h6 className="">Upload hospital Logo</h6>
                    <p className="text-muted mb-0">
                      For best results, use an image at least 256px by 256px in
                      either .jpg or .png format
                    </p>
                  </div>

                  <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                    {!uploadedFileLogo && (
                      <Link className="btn btn-primary" onClick={openFileLogo}>
                        Upload
                      </Link>
                    )}
                    {isUploaded && (
                      <Link
                        className="btn btn-soft-primary ms-2"
                        onClick={handleRemoveLogo}
                      >
                        Remove
                      </Link>
                    )}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Hospital Name</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Hospital Name :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
                            ...prev,
                            hospitalName: e.target.value,
                          }));
                        }}
                      />
                      {errors.hospitalName && (
                        <div className="text-danger">{errors.hospitalName}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Hospital Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Hospital email :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
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
                      <label className="form-label">Hospital Phone no.</label>
                      <input
                        name="number"
                        id="number"
                        type="number"
                        maxLength={14}
                        className="form-control"
                        placeholder="Phone no. :91"
                        value={formValue?.phoneNumber}
                        onChange={(e) => {
                          setFormValue((prev) => ({
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
                      <label className="form-label">Hospital Website</label>
                      <input
                        name="website"
                        id="website"
                        type="text"
                        className="form-control"
                        placeholder="website link :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
                            ...prev,
                            website: e.target.value,
                          }));
                        }}
                      />
                      {errors.website && (
                        <div className="text-danger">{errors.website}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Hospital Address</label>
                      <textarea
                        name="address"
                        id="address"
                        rows="2"
                        className="form-control"
                        placeholder="Address :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }));
                        }}
                      ></textarea>
                      {errors.address && (
                        <div className="text-danger">{errors.address}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Hospital Description</label>
                      <textarea
                        name="description"
                        id="description"
                        rows="3"
                        className="form-control"
                        placeholder="Description :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }));
                        }}
                      ></textarea>
                      {errors.description && (
                        <div className="text-danger">{errors.description}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Hospital Maps</label>
                      <textarea
                        name="description"
                        id="description"
                        rows="3"
                        className="form-control"
                        placeholder="Google Map Link :"
                        onChange={(e) => {
                          setFormValue((prev) => ({
                            ...prev,
                            googleMap: e.target.value,
                          }));
                        }}
                      ></textarea>
                  
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" onClick={addHospitalFunc}>
                  Add Hospital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
