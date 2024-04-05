import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { useState } from "react";
import {
	addAdmin,
	addHospitalAdminData,
	fetchAllHospital,
} from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { useEffect } from "react";
import { Alert } from "antd";

export default function AddHospitalAccount() {
	const [formValues, setFormValues] = useState({
		phoneNumber: "",
		fullName: "",
		gender: "M",
		email: "",
		dob: "",
		bloodGroup: "",
		weight: "",
		district: "",
	});

	const [errors, setErrors] = useState({});

	const [
		addAdminAddResponse,
		addAdminAddError,
		addAdminAddLoading,
		addAdminAddFetch,
	] = useAxios();
	const [
		hospitalDataResponse,
		hospitalDataError,
		hospitalDataLoading,
		hospitalDataFetch,
	] = useAxios();
	const fetchAllHospitalFunc = () => {
		hospitalDataFetch(fetchAllHospital());
	};
	useEffect(() => {
		fetchAllHospitalFunc();
	}, []);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.fullName) {
			errors.fullName = "Fullname is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 6) {
			errors.password = "Password must be more than 6 characters";
		}
		return errors;
	};

	const sumitAdminForm = () => {
		const errors = validate(formValues);
		if (Object.keys(errors).length !== 0) {
			setErrors(errors);
		} else {
			addAdminAddFetch(addHospitalAdminData(formValues));
		}
	};
	const [message, setMessage] = useState({
		message: "",
		showMessage: "",
	});
	useEffect(() => {
		if (addAdminAddResponse?.result == "success") {
			setMessage({
				message: addAdminAddResponse?.message,
				showMessage: true,
			});
		} else if (addAdminAddResponse?.result == "failure") {
			setMessage({
				message: addAdminAddResponse?.response?.message,
				showMessage: true,
			});
		}
	}, [addAdminAddResponse]);

	return (
		<Wrapper>
			<div className="container-fluid">
				<div className="layout-specing">
					<div className="d-md-flex justify-content-between">
						<h5 className="mb-0">Add New Ujur Admin</h5>

						<nav
							aria-label="breadcrumb"
							className="d-inline-block mt-4 mt-sm-0">
							<ul className="breadcrumb bg-transparent rounded mb-0 p-0">
								<li className="breadcrumb-item">
									<Link to="/">UJUR</Link>
								</li>
								<li className="breadcrumb-item">
									<Link to="/patients">Hospital Accounts</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									Add Hospital Admin
								</li>
							</ul>
						</nav>
					</div>

					<div className="row">
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
						<div className="col-lg-8 mt-4">
							<div className="card border-0 p-4 rounded shadow">
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
											<label className="form-label"> Email </label>
											<input
												name="email"
												type="text"
												className="form-control start"
												placeholder="Enter Email :"
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
											<label className="form-label">Password</label>
											<input
												name="number"
												id="number"
												type="password"
												className="form-control"
												placeholder="Password:"
												onChange={(e) => {
													setFormValues((prev) => ({
														...prev,
														password: e.target.value,
													}));
												}}
											/>
											{errors.password && (
												<div className="text-danger">{errors.password}</div>
											)}
										</div>
									</div>
									<div className="col-md-12">
										<div className="mb-3">
											<label className="form-label">Hospitals</label>
											<select
												className="form-select form-control"
												onChange={(e) => {
													setFormValues((prev) => ({
														...prev,
														HospitalsId: e.target.value,
													}));
												}}>
												<option value="">Select Hospital</option>
												{hospitalDataResponse?.data?.map((item) => {
													return <option value={item?.id}>{item?.name}</option>;
												})}
											</select>
										</div>
									</div>
								</div>

								<button onClick={sumitAdminForm} className="btn btn-primary">
									Add Admin
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
