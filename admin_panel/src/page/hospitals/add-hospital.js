import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import hospital from "../../assets/images/hospitals/01.jpg";

export default function AddHospital() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [website, setWebsite] = useState("");
	const [address, setAddress] = useState("");
	const [desc, setDesc] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		console.log({
			name: name,
			email: email,
			"Phone-no.": phone,
			"Website-link": website,
			Address: address,
			Description: desc,
		});
	};

	return (
		<Wrapper>
			<div className="container-fluid">
				<div className="layout-specing">
					<div className="d-md-flex justify-content-between">
						<h5 className="mb-0">Add New Hospital</h5>

						<nav
							aria-label="breadcrumb"
							className="d-inline-block mt-4 mt-sm-0">
							<ul className="breadcrumb bg-transparent rounded mb-0 p-0">
								<li className="breadcrumb-item">
									<Link to="/index">Hospitals</Link>
								</li>
								<li className="breadcrumb-item">
									<Link to="/hospitals">Hospitals</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									Add Hospital
								</li>
							</ul>
						</nav>
					</div>

					<div className="row">
						<div className="col-lg-20 mt-4">
							<div className="card border-0 p-4 rounded shadow">
								<div className="row align-items-center">
									<div className="col-lg-2 col-md-4">
										<img
											src={hospital}
											className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
											alt=""
										/>
									</div>

									<div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
										<h5 className="">Upload hospital picture</h5>
										<p className="text-muted mb-0">
											For best results, use an image at least 600px by 600px in
											either .jpg or .png format
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

								<form className="mt-4">
									<div className="row">
										<div className="col-md-6">
											<div className="mb-3">
												<label className="form-label">Hospital Name</label>
												<input
													name="name"
													value={name}
													onChange={(e) => setName(e.target.value)}
													id="name"
													type="text"
													className="form-control"
													placeholder="First Name :"
												/>
											</div>
										</div>

										<div className="col-md-6">
											<div className="mb-3">
												<label className="form-label">Hospital Email</label>
												<input
													name="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													id="email"
													type="email"
													className="form-control"
													placeholder="Your email :"
												/>
											</div>
										</div>

										<div className="col-md-6">
											<div className="mb-3">
												<label className="form-label">Hospital Phone no.</label>
												<input
													name="number"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
													id="number"
													type="text"
													className="form-control"
													placeholder="Phone no. :"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label className="form-label">Hospital Website</label>
												<input
													name="website"
													value={website}
													onChange={(e) => setWebsite(e.target.value)}
													id="website"
													type="text"
													className="form-control"
													placeholder="website link :"
												/>
											</div>
										</div>

										<div className="col-md-12">
											<div className="mb-3">
												<label className="form-label">Hospital Address</label>
												<textarea
													name="address"
													value={address}
													onChange={(e) => setAddress(e.target.value)}
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
													value={desc}
													onChange={(e) => setDesc(e.target.value)}
													id="description"
													rows="3"
													className="form-control"
													placeholder="Description :"></textarea>
											</div>
										</div>
									</div>

									<button onClick={handleChange} className="btn btn-primary">
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
