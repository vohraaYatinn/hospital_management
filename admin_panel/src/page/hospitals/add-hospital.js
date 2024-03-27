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
						<h5 className="mb-0">Add New Hospital</h5>

					</div>
					<div className="col-lg-10">
														<div className="rounded shadow mt-4">
														

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
				</div>
			</div>
		</Wrapper>
	);
}