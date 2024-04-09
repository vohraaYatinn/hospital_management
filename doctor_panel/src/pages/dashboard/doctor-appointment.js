import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import useAxios from "../../network/useAxios";
import { fetchDoctorAppointments } from "../../urls/urls";
import { useRouter } from "../../hooks/use-router";
import {
	PaginationCountList,
	calculateAge,
	handlePagination,
} from "../../utils/commonFunctions";
import DateSearchComponent from "../../common-components/DateSearch";
import StatusSearch from "../../common-components/StatusSearch";
import PatientName from "../../common-components/PatientName";
import Modal from "react-bootstrap/Modal";
import PrescriptionHistory from "../patient/prescriptionHistory";

export default function DoctorAppointment() {
	const [
		appointmentsResponse,
		appointmentsError,
		appointmentsLoading,
		appointmentsFetch,
	] = useAxios();
	const router = useRouter();
	let [show, setShow] = useState(false);
	const [htmlDataS, setHTMLData] = useState("");

	const [appointmentData, setAppointmentData] = useState([]);
	const [filterValues, setFilterValues] = useState({});
	const [paginationNumber, setPaginationNumber] = useState({
		from: 0,
		to: 10,
		currentTab: 1,
	});
	const getTodayDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	};
	useEffect(() => {
		// Function to get today's date in the format YYYY-MM-DD

		// Set the default value of the date filter to today's date
		setFilterValues((prevFilters) => ({
			...prevFilters,
			date: getTodayDate(),
		}));
	}, []);
	const searchStatusConstants = [
		{
			value: "completed",
			name: "Completed",
		},
		{
			value: "pending",
			name: "Pending",
		},

		{
			value: "canceled",
			name: "Canceled",
		},
	];
	const searchSlotConstants = [
		{
			value: "morning",
			name: "Morning",
		},
		{
			value: "afternoon",
			name: "Afternoon",
		},
		{
			value: "evening",
			name: "Evening",
		},
	];

	useEffect(() => {
		if (filterValues) {
			appointmentsFetch(fetchDoctorAppointments(filterValues));
		}
	}, [filterValues]);
	useEffect(() => {
		if (appointmentsResponse?.result == "success") {
			setAppointmentData(appointmentsResponse?.data);
			handlePagination(1, setPaginationNumber);
		}
	}, [appointmentsResponse]);

	return (
		<>
			<Navbar
				navDark={true}
				manuClass="navigation-menu nav-left"
				containerClass="container-fluid"
			/>
			<section className="bg-dashboard">
				<div className="container-fluid">
					<div
						className="row "
						style={{
							marginBottom: "5rem",
						}}>
						<Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

						<div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
							<div className="row">
								<div className="col-xl-5 col-lg-4 col-md-4">
									<h5 className="mb-0">Appointment</h5>
								</div>

								<div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
									<div style={{ justifyContent: "space-between" }}>
										<form>
											<div className="row justify-content-between align-items-center">
												<div
													className="col-sm-12 col-md-6"
													style={{
														display: "flex",
														justifyContent: "space-between",
														gap: "1rem",
													}}></div>
											</div>
										</form>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="row" style={{ marginTop: "2rem" }}>
									<div className="col-3">
										<PatientName
											filters={filterValues}
											setFilters={setFilterValues}
										/>
									</div>
									<div className="col-3">
										<StatusSearch
											filters={filterValues}
											setFilters={setFilterValues}
											statusSearch={searchStatusConstants}
											name={"status"}
										/>
									</div>
									<div className="col-3">
										<StatusSearch
											filters={filterValues}
											setFilters={setFilterValues}
											statusSearch={searchSlotConstants}
											name={"slot"}
										/>
									</div>
									<div className="col-3">
										<DateSearchComponent
											filters={filterValues}
											setFilters={setFilterValues}
											label={false}
										/>
									</div>
									<div className="row mt-3">
										<div className="col-3">
											<button
												className="form-control btn-check-reset"
												onClick={() => {
													setFilterValues({
														status: "",
														slot: "",
														date: getTodayDate(),
														patientName: "",
													});
												}}
												style={{ backgroundColor: "red" }}>
												Reset
											</button>
										</div>
									</div>
								</div>
								<div className="col-12 mt-4">
									<div className="table-responsive bg-white shadow rounded">
										<table className="table mb-0 table-center">
											<thead>
												<tr>
													<th
														className="border-bottom p-3"
														style={{ minWidth: "50px" }}>
														Slot Token
													</th>
													<th
														className="border-bottom p-3"
														style={{ minWidth: "100px" }}>
														Name
													</th>
													<th className="border-bottom p-3">Age</th>
													<th className="border-bottom p-3">Gender</th>
													<th className="border-bottom p-3">District</th>
													<th className="border-bottom p-3">Block</th>
													<th className="border-bottom p-3">Status</th>
													<th className="border-bottom p-3">Report</th>
												</tr>
											</thead>
											<tbody>
												{appointmentData
													.slice(paginationNumber.from, paginationNumber.to)
													.map((item, index) => {
														return (
															<tr key={index}>
																<th className="p-3">{index + 1}</th>
																<td className="p-3">
																	<Link
																		to={
																			item?.status != "completed" &&
																			`/patient-profile/${item?.patient?.id}/${item?.id}`
																		}
																		className="text-dark">
																		<div className="d-flex align-items-center">
																			{item?.status == "completed" ? (
																				<span
																					className="ms-2"
																					style={{
																						color: "black",
																						textTransform: "capitalize",
																					}}>
																					{item?.patient?.full_name}
																				</span>
																			) : (
																				<span
																					className="ms-2"
																					style={{
																						color: "blue",
																						textTransform: "capitalize",
																					}}>
																					{item?.patient?.full_name}
																				</span>
																			)}
																		</div>
																	</Link>
																</td>
																<td className="p-3">
																	{calculateAge(item?.patient?.date_of_birth)}
																</td>
																<td className="p-3">
																	{item?.patient?.gender == "M"
																		? "Male"
																		: "Female"}
																</td>
																<td className="p-3">
																	{item?.patient?.district}
																</td>
																<td className="p-3">{item?.patient?.block}</td>
																<td
																	className={
																		item?.status == "canceled"
																			? "p-3 color-red"
																			: item?.status == "pending"
																			? "p-3 color-yellow"
																			: item?.status == "completed"
																			? "p-3 color-green"
																			: ""
																	}>
																	{item?.status}
																</td>
																<td className="p-3">
																	{item?.pdf_content && (
																		<button
																			style={{
																				background: "rgb(56, 108, 240)",
																				color: "white",
																			}}
																			onClick={() => {
																				setShow(true);
																				setHTMLData(item.pdf_content);
																			}}>
																			View
																		</button>
																	)}
																</td>
															</tr>
														);
													})}
											</tbody>
										</table>
									</div>
									<Modal
										show={show}
										onHide={() => setShow(false)}
										size="lg"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="h5">
												Patient History Prescription
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<PrescriptionHistory htmlContent={htmlDataS} />
										</Modal.Body>
									</Modal>
								</div>
							</div>
							<div className="row text-center">
								<div className="col-12 mt-4">
									<div className="d-md-flex align-items-center text-center justify-content-between">
										<ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
											{PaginationCountList(
												handlePagination,
												paginationNumber,
												appointmentData,
												setPaginationNumber
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<AdminFooter />
			<ScrollTop />
		</>
	);
}
