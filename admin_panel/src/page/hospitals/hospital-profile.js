import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import hospital from "../../assets/images/hospitals/01.jpg";
import Wrapper from "../../components/wrapper";
import {
	clientReview,
	companyLogo,
	doctorData,
	hospitalData,
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

export default function HospitalProfile() {
	let params = useParams();
	let id = params.id;
	let data = hospitalData.find((doctor) => doctor.id === parseInt(id));

	let [activeIndex, setActiveIndex] = useState(1);

	let settings = {
		container: ".slider-range-four",
		items: 4,
		controls: false,
		mouseDrag: true,
		loop: true,
		rewind: true,
		autoplay: true,
		autoplayButtonOutput: false,
		autoplayTimeout: 3000,
		navPosition: "bottom",
		speed: 400,
		gutter: 24,
		responsive: {
			992: {
				items: 4,
			},

			767: {
				items: 2,
			},

			320: {
				items: 1,
			},
		},
	};
	let settings2 = {
		container: ".client-review-slider",
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
	};

	return (
		<Wrapper>
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
								src={data?.image ? data.image : hospital}
								className="rounded-circle shadow-md avatar avatar-medium"
								alt=""
							/>
							<div className="mt-4 ms-3 pt-3">
								<h5 className="mt-3 mb-1">
									{data?.name ? data.name : "City Hospital"}
								</h5>
								<p className="text-muted mb-0 ">
									Ratings: {data?.rating ? data.rating + " " : "4.5"} <FaStar />
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
										<li className="nav-item">
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
										</li>

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
													{data?.description
														? data.description
														: `A gynecologist is a surgeon who specializes in the
														female reproductive system, which includes the cervix,
														fallopian tubes, ovaries, uterus, vagina and vulva.
														Menstrual problems, contraception, sexuality,
														menopause and infertility issues are diagnosed and
														treated by a gynecologist; most gynecologists also
														provide prenatal care, and some provide primary care.`}
												</p>
											</div>
										) : (
											""
										)}
										{activeIndex === 2 ? (
											<div className="tab-pane fade show active">
												<h5 className="mb-1">Doctors Teams:</h5>

												<div className="row row-cols-md-2 row-cols-lg-5">
													{doctorData.map((item, index) => {
														return (
															<div className="col mt-4" key={index}>
																<div className="card team border-0 rounded shadow overflow-hidden h-100">
																	<div className="team-img position-relative">
																		<img
																			src={item.image}
																			className="img-fluid"
																			alt=""
																		/>
																		<ul className="list-unstyled team-social mb-0">
																			<li>
																				<Link
																					to="#"
																					className="btn btn-icon btn-pills btn-soft-primary">
																					<FiFacebook className="icons" />
																				</Link>
																			</li>
																			<li className="mt-2">
																				<Link
																					to="#"
																					className="btn btn-icon btn-pills btn-soft-primary">
																					<FiLinkedin className="icons" />
																				</Link>
																			</li>
																			<li className="mt-2">
																				<Link
																					to="#"
																					className="btn btn-icon btn-pills btn-soft-primary">
																					<FiInstagram className="icons" />
																				</Link>
																			</li>
																			<li className="mt-2">
																				<Link
																					to="#"
																					className="btn btn-icon btn-pills btn-soft-primary">
																					<FiTwitter className="icons" />
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="card-body content text-center">
																		<Link
																			to={`/dr-profile/${item.id}`}
																			className="title text-dark h5 d-block mb-0">
																			{item.name}
																		</Link>
																		<small className="text-muted speciality">
																			{item.title}
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
										{activeIndex === 3 ? (
											<div className="tab-pane fade show active">
												<h5 className="mb-1">Doctors Teams:</h5>

												<div className="row row-cols-md-2 row-cols-lg-5">
													{patientData.map((item, index) => {
														return (
															<div className="col mt-4" key={index}>
																<div className="card team border-0 rounded shadow overflow-hidden h-100">
																	<div className="team-img position-relative">
																		<img
																			src={item.image}
																			className="img-fluid"
																			alt=""
																		/>
																	</div>
																	<div className="card-body content text-center">
																		<div className="title text-dark h5 d-block mb-0">
																			{item.name}
																		</div>
																		<small className="text-muted speciality">
																			{item.title}
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
																	Great doctor if you need your family member to
																	get effective immediate assistance
																</p>
																<Link to="tel:+152534-468" className="link">
																	website.example.com
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
																	Great doctor if you need your family member to
																	get effective immediate assistance
																</p>
																<Link to="tel:+152534-468-854" className="link">
																	+152 534-468-854
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
																	Great doctor if you need your family member to
																	get effective immediate assistance
																</p>
																<Link
																	to="mailto:contact@example.com"
																	className="link">
																	contact@example.com
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
																			src={data?.image ? data.image : hospital}
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
																					placeholder="First Name :"
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
																					placeholder="Address :"></textarea>
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
																					placeholder="Description :"></textarea>
																			</div>
																		</div>
																	</div>

																	<button className="btn btn-primary">
																		Add Hospital
																	</button>
																</form>
															</div>
														</div>
													</div>

													<div className="col-lg-4">
														<div className="rounded shadow mt-4">
															<div className="p-4 border-bottom">
																<h6 className="mb-0">
																	General Notifications :
																</h6>
															</div>

															<div className="p-4">
																<div className="d-flex justify-content-between pb-4">
																	<h6 className="mb-0 fw-normal">
																		When someone mentions me
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			defaultValue=""
																			id="customSwitch1"
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch1"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		When someone follows me
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch2"
																			checked
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch2"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		When shares my activity
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch3"
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch3"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		When someone messages me
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch4"
																			checked
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch4"></label>
																	</div>
																</div>
															</div>
														</div>

														<div className="rounded shadow mt-4">
															<div className="p-4 border-bottom">
																<h6 className="mb-0">
																	Marketing Notifications :
																</h6>
															</div>

															<div className="p-4">
																<div className="d-flex justify-content-between pb-4">
																	<h6 className="mb-0 fw-normal">
																		There is a sale or promotion
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch5"
																			checked
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch5"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		Company news
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch6"
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch6"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		Weekly jobs
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch7"
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch7"></label>
																	</div>
																</div>
																<div className="d-flex justify-content-between py-4 border-top">
																	<h6 className="mb-0 fw-normal">
																		Unsubscribe News
																	</h6>
																	<div className="form-check">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="customSwitch8"
																			checked
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="customSwitch8"></label>
																	</div>
																</div>
															</div>
														</div>

														<div className="rounded shadow mt-4">
															<div className="p-4 border-bottom">
																<h6 className="mb-0">
																	General Notifications :
																</h6>
															</div>

															<div className="p-4">
																<div className="p-4 border-bottom">
																	<h5 className="mb-0 text-danger">
																		Delete Account :
																	</h5>
																</div>

																<div className="p-4">
																	<h6 className="mb-0 fw-normal">
																		Do you want to delete the account? Please
																		press below "Delete" button
																	</h6>
																	<div className="mt-4">
																		<button className="btn btn-danger">
																			Delete Account
																		</button>
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
