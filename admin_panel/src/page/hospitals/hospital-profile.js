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
import { fetchHospitalProfile, handleDelete } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { test_url_images } from "../../config/environment";
import { useRouter } from "../../hooks/use-router";

export default function HospitalProfile() {
	const router = useRouter();
	let params = useParams();
	let id = params.id;
	const [formValues, setFormValues] = useState({
		hospital_name: "",
		email: "",
		phoneNumber: "",
		website: "",
		address: "",
		description: "",
	});
	let [show, setShow] = useState(false);

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
	const [
		hospitalsResponse,
		hospitalsError,
		hospitalsLoading,
		hospitalsFetch,
	  ] = useAxios();
	  useEffect(() => {
		hospitalsFetch(fetchHospitalProfile({
			hospitalId:id
		}
		));
	  }, []);
	  useEffect(() => {
		if (hospitalsResponse?.result == "success" && hospitalsResponse?.data) {
		  setHospitalData(hospitalsResponse?.data);
		  console.log(hospitalsResponse.data)
		  setFormValues({
			hospital_name: hospitalsResponse?.data?.name,
			address: hospitalsResponse?.data?.address,
			email: hospitalsResponse?.data?.email,
			description: hospitalsResponse?.data?.description,
			website: hospitalsResponse?.data?.website,
			phoneNumber: hospitalsResponse?.data?.contact_number,
		  })
		}
	  }, [hospitalsResponse]);
	  useEffect(() => {
		if (performActionResponse?.result == "success") {
			router.push("/hospitals")
		}
	  }, [performActionResponse]);

	let [activeIndex, setActiveIndex] = useState(1);

	return (
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
						<h5 className="mb-0">Hospital Profile & Settings</h5>

						<nav
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
						</nav>
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
								<p className="text-muted mb-0 ">
									{hospitalData?.website}
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

										<li className="nav-item">
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
										</li>

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
												<h5 className="mb-1">Client Reviews:</h5>
												<div className="row row-cols-md-2 row-cols-lg-4">
													{clientReview.map((item, index) => {
														return (
															<div className="col mt-4" key={index}>
																<div className="card team border-0 rounded shadow overflow-hidden h-100">
																	<div className="card-body content text-center">
																		<div className="title text-dark h5 d-block mb-0">
																			{item.name}
																		</div>
																		<small className="text-muted speciality">
																			{item.title}
																		</small>
																		<p className="text-muted speciality flex-grow-1 mt-2">
																			{item.desc}
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
																Navigate the digital corridors of healthcare excellence: Explore our hospital's website.

																</p>
																<Link to="tel:+152534-468" className="link">
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

															<div className="p-4">
																<div className="row align-items-center">
																	<div className="col-lg-2 col-md-4">
																		<img
																			src={test_url_images + hospitalData?.logo}
																			className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
																			alt=""
																		/>
																	</div>

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
																		<Link to="#" className="btn btn-primary">
																			Upload
																		</Link>
																		<Link
																			to="#"
																			className="btn btn-soft-primary ms-2">
																			Remove
																		</Link>
																	</div>
																</div>

																<form className="mt-4">
																	<div className="row">
																		<div className="col-md-6">
																			<div className="mb-3">
																				<label className="form-label">
																					Hospital Name
																				</label>
																				<input
																					name="name"
																					id="name"
																					type="text"
																					className="form-control"
																					placeholder="Hospital Name :"
																					value={formValues.hospital_name}
																				/>
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
																				/>
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
																					className="form-control"
																					placeholder="Phone no. :"
																					value={formValues.phoneNumber}
																					placeholder="Phone no :"
																				/>
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
																				/>
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
																					></textarea>
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
																					></textarea>
																			</div>
																		</div>
																	</div>

																	<button className="btn btn-primary">
																		Edit Hospital
																	</button>
																</form>
															</div>
														</div>
													</div>
													<div className="col-lg-4" >
														<button style={{color:"white", background:"red", border:"0px solid", padding:"1rem"}}
														onClick={()=>{
															setFormValues({
																action:"delete",
																id:hospitalData?.id,
																type:"hospital"
															})
															setShow(true)
														}}
														>DELETE HOSPITAL</button>
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