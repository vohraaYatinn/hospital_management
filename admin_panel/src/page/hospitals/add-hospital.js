import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import hospital from "../../assets/images/hospitals/01.jpg";
import Wrapper from "../../components/wrapper";
import useAxios from "../../network/useAxios";
import { addAdminHospital } from "../../urls/urls";
import { test_url_images } from "../../config/environment";
import { Alert } from "antd";

export default function AddHospitalProfile() {
	const [formValue, setFormValue] = useState([]);
	const [errors, setErrors] = useState({});

	const [
		addHospitalResponse,
		addHospitalError,
		addHospitalLoading,
		addHospitalFetch,
	] = useAxios();
	const [message, setMessage] = useState({
		message: "",
		showMessage: "",
	});

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.website) {
			errors.website = "Website is required!";
		}
		if (!values.description) {
			errors.description = "Description is required!";
		}
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
		} else if (values.phoneNumber.length < 11) {
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

	useEffect(() => {
		if (addHospitalResponse?.result == "success") {
			setMessage({
				message: addHospitalResponse?.message,
				showMessage: true,
			});
			// setDoctorsData(addHospitalResponse?.data);
		}
	}, [addHospitalResponse]);

	const fileInputRef = React.useRef(null);
	const [isUploaded, setIsUploaded] = useState(false);

	const openFile = () => {
		fileInputRef.current.click();
	};
	const handleUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			console.log("Selected file:", file);
			setFormValue((prev) => ({
				...prev,
				logo: file,
			}));
			setIsUploaded(true);
		}
	};

	const handleRemove = () => {
		setIsUploaded(false);
		console.log("Remove button clicked");
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
				<div className="layout-specing">
					<div className="d-md-flex justify-content-between">
						<h5 className="mb-0">Add New Hospital</h5>
					</div>

					<div className="col-lg-10">
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
						<div className="rounded shadow mt-4">
							<div className="p-4">
								<div className="row align-items-center">
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
												onClick={handleRemove}>
												Remove
											</Link>
										)}
									</div>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="mb-3">
											<label className="form-label">Hospital Name</label>
											<input
												name="name"
												id="name"
												type="text"
												className="form-control"
												placeholder="First Name :"
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
												placeholder="Your email :"
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
												type="text"
												className="form-control"
												placeholder="Phone no. :"
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
												}}></textarea>
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
												}}></textarea>
											{errors.description && (
												<div className="text-danger">{errors.description}</div>
											)}
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
