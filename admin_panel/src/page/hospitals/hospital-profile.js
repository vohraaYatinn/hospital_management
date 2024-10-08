import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import hospital from "../../assets/images/hospitals/01.jpg";
import Wrapper from "../../components/wrapper";
import Modal from "react-bootstrap/Modal";

import {
	clientReview,
	companyLogo,
	doctorData,
	patientData,
} from "../../data/data";

import "tiny-slider/dist/tiny-slider.css";
import { Alert } from "antd";

import {
	FaStar,
	BsLink45Deg,
	FiFacebook,
	FiLinkedin,
	FiTwitter,
	FiPhone,
	FiMail,
	FiInstagram,
} from "../../assets/icons/vander";
import { fetchHospitalEditProfile, fetchHospitalProfile, handleDelete } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { test_url_images } from "../../config/environment";
import { useRouter } from "../../hooks/use-router";
import { designStarsReviews } from "../../utils/commonFunctions";

export default function HospitalProfile() {
	const router = useRouter();
	let params = useParams();
	let id = params.id;
	const [isUploaded, setIsUploaded] = useState(false);
	const [isUploadedLogo, setIsLogoUploaded] = useState(false);

	const [formValues, setFormValues] = useState({
		hospital_name: "",
		email: "",
		phoneNumber: "",
		website: "",
		address: "",
		description: "",
		years_of_establishment:""
	});
	let [show, setShow] = useState(false);
	const [uploadedFileLogo, setUploadedFileLogo] = useState(null);
	const [uploadedFile, setUploadedFile] = useState(null);

const [
    performActionResponse,
    performActionError,
    performActionLoading,
    performActionFetch,
  ] = useAxios();
const performActionRequest = () => {
  performActionFetch(handleDelete(formValues))
}
	const [hospitalData, setHospitalData] = useState([])
	const fileInputRef = React.useRef(null);
	const fileInputLogoRef = React.useRef(null);
	const [errors, setErrors] = useState({});

	const [reviewsData, setReviews] = useState([])
	const [
		hospitalsResponse,
		hospitalsError,
		hospitalsLoading,
		hospitalsFetch,
	  ] = useAxios();
	const [
		hospitalsEditResponse,
		hospitalsEditError,
		hospitalsEditLoading,
		hospitalsEditFetch,
	  ] = useAxios();
	  
  useEffect(() => {
    if (hospitalsEditResponse?.result == "success") {
      setMessage({
        message: hospitalsEditResponse?.message,
        showMessage: true,
      });
	  router.push("/hospitals")
    }
  }, [hospitalsEditResponse]);
  
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      setFormValues((prev) => ({
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
  const handleRemoveLogo = () => {
    setIsLogoUploaded(false);
    setUploadedFileLogo("");
    setFormValues((prev) => ({
      ...prev,
      logo: "",
    }));
  };
  const handleRemove = () => {
    setIsUploaded(false);
    setUploadedFile("");
    setFormValues((prev) => ({
      ...prev,
      profile: "",
    }));
  };
	
	  const handleUploadLogo = (e) => {
		const file = e.target.files[0];
		if (file) {
		  console.log("Selected file:", file);
		  setFormValues((prev) => ({
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
	  const openFile = () => {
		fileInputRef.current.click();
	  };
	  const openFileLogo = () => {
		fileInputLogoRef.current.click();
	  };	
	  useEffect(() => {
		hospitalsFetch(fetchHospitalProfile({
			hospitalId:id
		}
		));
	  }, []);

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
		if (!values.hospital_name) {
		  errors.hospital_name = "Hospital is required!";
		}
		if (!values.years_of_establishment) {
		  errors.years_of_establishment = "years of establishment is required!";
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

	  const EditHospitalProfileFunction = () => {
		const errors = validate(formValues);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
	  hospitalsEditFetch(fetchHospitalEditProfile({...formValues, hospitalId:id}))
    }
	  }
	  useEffect(() => {
		if (hospitalsResponse?.result == "success" && hospitalsResponse?.data) {
		  setHospitalData(hospitalsResponse?.data);
		  setReviews(hospitalsResponse?.reviews)
		  setFormValues({
			hospital_name: hospitalsResponse?.data?.name,
			address: hospitalsResponse?.data?.address,
			email: hospitalsResponse?.data?.email,
			description: hospitalsResponse?.data?.description,
			website: hospitalsResponse?.data?.website,
			phoneNumber: hospitalsResponse?.data?.contact_number,
			googleMap: hospitalsResponse?.data?.google_link,
			years_of_establishment: hospitalsResponse?.data?.years_of_establishment,
		  })
		}
	  }, [hospitalsResponse]);
	  useEffect(() => {
		if (performActionResponse?.result == "success") {
			router.push("/hospitals")
		}
	  }, [performActionResponse]);

	let [activeIndex, setActiveIndex] = useState(1);
	const [message, setMessage] = useState({
		message: "",
		showMessage: "",
	  });
	
	return (
		<Wrapper>
			        <input
          type="file"
		  accept=".png, .jpg, .jpeg"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleUpload}
        />
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
						<h5 className="mb-0">Hospital Profile & Settings</h5>

						{/* <nav
							aria-label="breadcrumb"
							className="d-inline-block mt-4 mt-sm-0">
							<ul className="breadcrumb bg-transparent rounded mb-0 p-0">
								<li className="breadcrumb-item">
									<Link to="/">Hospitals</Link>
								</li>
								<li className="breadcrumb-item">
									<Link to="/hospitals">Hospital</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									Profile
								</li>
							</ul>
						</nav> */}
					</div>

					<div className="card rounded shadow overflow-hidden mt-4 border-0">
						<div className="p-5 bg-primary bg-gradient"></div>
						<div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
							<img
								src={test_url_images + hospitalData?.logo}
								className="rounded-circle shadow-md avatar avatar-medium"
								alt=""
							/>
							<div className="mt-4 ms-3 pt-3">
								<h5 className="mt-3 mb-1">
									{hospitalData?.name ? hospitalData.name : "N/A"}
								</h5>
								<small>{hospitalData?.hospital_details_account?.[0]?.ujur_id }</small>
								<p className="text-muted mb-0 ">
									{hospitalData?.website}
								</p>
								<p className="text-muted mb-0 ">
									{hospitalData?.google_link ? hospitalData?.google_link : ""}
								</p>
							</div>
						</div>

						<div className="row">
							<div className="col-12 mt-4">
								<div className="card border-0 rounded-0 p-4">
									<ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
										<li className="nav-item">
											<Link
												className={`${
													activeIndex === 1 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(1)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Overview</h5>
												</div>
											</Link>
										</li>

										<li className="nav-item">
											<Link
												className={`${
													activeIndex === 2 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(2)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Doctors</h5>
												</div>
											</Link>
										</li>
										{/* <li className="nav-item">
											<Link
												className={`${
													activeIndex === 3 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(3)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Patients</h5>
												</div>
											</Link>
										</li> */}

										{/* <li className="nav-item">
											<Link
												className={`${
													activeIndex === 4 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(4)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Reviews</h5>
												</div>
											</Link>
										</li> */}

										<li className="nav-item">
											<Link
												className={`${
													activeIndex === 5 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(5)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Contact</h5>
												</div>
											</Link>
										</li>

										<li className="nav-item">
											<Link
												className={`${
													activeIndex === 6 ? "active" : ""
												} nav-link rounded-0`}
												to="#"
												onClick={() => setActiveIndex(6)}>
												<div className="text-center pt-1 pb-1">
													<h5 className="mb-0">Settings</h5>
												</div>
											</Link>
										</li>
									</ul>

									<div className="tab-content mt-4" id="pills-tabContent">
										{activeIndex === 1 ? (
											<div className="tab-pane fade show active">
												<p className="text-muted">
													Description:{" "}
													{hospitalData?.description}
														
												</p>
											</div>
										) : (
											""
										)}
										{activeIndex === 2 ? (
											<div className="tab-pane fade show active">
												<h5 className="mb-1">Doctors Teams:</h5>

												<div className="row row-cols-md-2 row-cols-lg-5">
													{hospitalData?.hospital_doctors && hospitalData?.hospital_doctors.map((item, index) => {
														return (
															<div className="col mt-4" key={index}>
																<div className="card team border-0 rounded shadow overflow-hidden h-100">
																	<div className="team-img position-relative">
																		<img
																			src={test_url_images + item?.profile_picture}
																			className="img-fluid"
																			style={{height: "188px"}}
																			alt=""
																		/>
															
																	</div>
																	<div className="card-body content text-center">
																		<Link
																			to={`/dr-profile/${item.id}`}
																			className="title text-dark h5 d-block mb-0">
																			{item.full_name}
																		</Link>
																		<small className="text-muted speciality">
																			{item.specialization}
																		</small>
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										) : (
											""
										)}
									
										{activeIndex === 4 ? (
											<div className="tab-pane fade show active">
												<h5 className="mb-1">Client Reviews</h5>
												<div className="row row-cols-md-2 row-cols-lg-4">
													{reviewsData.map((item, index) => {
														return (
															<div className="col mt-4" key={index}>
																<div className="card team border-0 rounded shadow overflow-hidden h-100">
																	<div className="card-body content text-center">
																		<div className="title text-dark h5 d-block mb-0">
																			{designStarsReviews(item.reviews_star)}
																			
																		</div>
																		<small className="text-muted speciality">
																			{item?.doctor.full_name}
																		</small>
																		<p className="text-muted speciality flex-grow-1 mt-2">
																			{item.comment}
																		</p>
																	</div>
																</div>
															</div>
														);
													})}
												</div>

												<div className="row justify-content-center">
													{companyLogo.map((item, index) => {
														return (
															<div
																className="col-lg-2 col-md-2 col-6 text-center py-4"
																key={index}>
																<img
																	src={item}
																	className="avatar avatar-client"
																	alt=""
																/>
															</div>
														);
													})}
												</div>
											</div>
										) : (
											""
										)}
										{activeIndex === 5 ? (
											<div className="tab-pane fade show active">
												<div className="row">
													<div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
														<div className="card border-0 text-center features feature-primary">
															<div className="icon text-center mx-auto rounded-md">
																<i className="uil uil-phone h3 mb-0"></i>
																<BsLink45Deg className="h3 mb-0" />
															</div>

															<div className="card-body p-0 mt-4">
																<h5 className="title fw-bold">Website</h5>
																<p className="text-muted">
																Navigate the hospital's website.

																</p>
																<Link to={hospitalData?.website} className="link">
																	{hospitalData?.website}
																</Link>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
														<div className="card border-0 text-center features feature-primary">
															<div className="icon text-center mx-auto rounded-md">
																<i className="uil uil-phone h3 mb-0"></i>
																<FiPhone className="h3 mb-0" />
															</div>

															<div className="card-body p-0 mt-4">
																<h5 className="title fw-bold">Phone</h5>
																<p className="text-muted">
																Stay connected through Phone number

																</p>
																<Link to={`tel:${hospitalData?.contact_number}`} className="link">
																{hospitalData?.contact_number}
																</Link>
															</div>
														</div>
													</div>

													<div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
														<div className="card border-0 text-center features feature-primary">
															<div className="icon text-center mx-auto rounded-md">
																<i className="uil uil-envelope h3 mb-0"></i>
																<FiMail className="h3 mb-0" />
															</div>

															<div className="card-body p-0 mt-4">
																<h5 className="title fw-bold">Email</h5>
																<p className="text-muted">
																Stay connected via email
																</p>
																<Link
																	to={hospitalData?.email}
																	className="link">
																		{hospitalData?.email}
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										) : (
											""
										)}
										{activeIndex === 6 ? (
											<div className="tab-pane fade show active">
												<h5 className="mb-1">Settings</h5>
												<div className="row">
													<div className="col-lg-8">
														<div className="rounded shadow mt-4">
															<div className="p-4 border-bottom">
																<h6 className="mb-0">Hospital Information :</h6>
															</div>
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
															<div className="p-4">
																<div className="row align-items-center">
																	
																		{isUploaded &&<div className="col-lg-2 col-md-4">
																	<img
																			src={uploadedFile || ''}
																			className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                                      style={{
                                        objectFit:"cover"
                                      }}
																			alt=""
																		/></div>
																	}
																	
																	<div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
																		<h6 className="">
																			Upload hospital picture
																		</h6>
																		<p className="text-muted mb-0">
																			For best results, use an image at least
																			256px by 256px in either .jpg or .png
																			format
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
																	
																	{uploadedFileLogo && <div className="col-lg-2 col-md-4"><img
																			src={uploadedFileLogo || ''}
																			className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                                      style={{
                                        objectFit:"cover"
                                      }}
																			alt=""
																		/></div>}
																	

																	<div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
																		<h6 className="">
																			Upload hospital Logo
																		</h6>
																		<p className="text-muted mb-0">
																			For best results, use an image at least
																			256px by 256px in either .jpg or .png
																			format
																		</p>
																	</div>

																	<div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
																	{!isUploadedLogo && (
                      <Link className="btn btn-primary" onClick={openFileLogo}>
                        Upload
                      </Link>
                    )}
                    {isUploadedLogo && (
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
																				<label className="form-label">
																					Hospital Name
																				</label>
																				<input
          type="file"
		  accept=".png, .jpg, .jpeg"
          ref={fileInputLogoRef}
          style={{ display: "none" }}
          onChange={handleUploadLogo}
		  />
																				<input
																					name="name"
																					id="name"
																					type="text"
																					className="form-control"
																					placeholder="Hospital Name :"
																					value={formValues.hospital_name}
																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							hospital_name:e.target.value}))
																						}}
																				/>
																				{errors.hospital_name && (
			  <div className="text-danger">{errors.hospital_name}</div>
			)}
																			</div>
																		</div>

																		<div className="col-md-6">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Email
																				</label>
																				<input
																					name="email"
																					id="email"
																					type="email"
																					className="form-control"
																					placeholder="Your email :"
																					value={formValues.email}
																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							email:e.target.value}))
																					}}
																				/>
																				{errors.email && (
			  <div className="text-danger">{errors.email}</div>
			)}
																			</div>
																		</div>

																		<div className="col-md-6">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Phone no.
																				</label>
																				<input
																					name="number"
																					id="number"
																					type="text"
																					maxLength={14}
																					className="form-control"
																					placeholder="Phone no. :"
																					value={formValues.phoneNumber}
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
			  <div className="text-danger">{errors.phoneNumber}</div>
			)}
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Website
																				</label>
																				<input
																					name="website"
																					id="website"
																					type="text"
																					className="form-control"
																					placeholder="website link :"
																					value={formValues.website}
																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							website:e.target.value}))
																					}}
																				/>
																			</div>
																		</div>
																		<div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Years of Establishment </label>
                      <input
                        name="address"
                        id="address"
						value={formValues.years_of_establishment}

                        type="number"
                        rows="2"
                        className="form-control"
                        placeholder="No. of Years :"
                        onChange={(e) => {
							setFormValues((prev) => ({
                            ...prev,
                            years_of_establishment: e.target.value,
                          }));
                        }}
                      />
                      {errors.years_of_establishment && (
                        <div className="text-danger">{errors.years_of_establishment}</div>
                      )}
                    </div>

                  </div>
																		<div className="col-md-12">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Address
																				</label>
																				<textarea
																					name="address"
																					id="address"
																					rows="2"
																					className="form-control"
																					placeholder="Address :"
																					value={formValues.address}
																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							address:e.target.value}))
																					}}
																					></textarea>
																					{errors.address && (
			  <div className="text-danger">{errors.address}</div>
			)}
																			</div>
																		</div>
																		<div className="col-md-12">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Description
																				</label>
																				<textarea
																					name="description"
																					id="description"
																					rows="3"
																					className="form-control"
																					placeholder="Description :"
																					value={formValues.description}
																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							description:e.target.value}))
																					}}
																					></textarea>
																			</div>
																		</div>
																		<div className="col-md-12">
																			<div className="mb-3">
																				<label className="form-label">
																					Google Map Link
																				</label>
																				<textarea
																				name="description"
																				id="description"
																				rows="3"
																				className="form-control"
																				placeholder="Google Map Link :"
																				value={formValues.googleMap}

																					onChange={(e)=>{
																						setFormValues((prev)=>({...prev, 
																							googleMap:e.target.value}))
																					}}
																					></textarea>
																			</div>
																		</div>
																	</div>

																	<button className="btn btn-primary"
																	onClick={()=>{
																		EditHospitalProfileFunction()
																	}}
																	>
																		Update Hospital
																	</button>
																
															</div>
														</div>
													<div className="col-md-12">
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
                                                                            id:hospitalData?.id,
                                                                            type:"hospital"
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

													
												</div>
											</div>
										) : (
											""
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}