/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls.jsx';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const addDoctorByHospital = (payload_data) => {
  return project.multiPartFormData(Urls.ADD_DOCTOR_HOSPITAL, payload_data);
};
export const loginHospitalAdmin = (payload_data) => {
  return project.post(Urls.FETCH_HOSPITAL_ADMIN, payload_data);
};
export const fetchHospitalDoctors = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_DOCTORS, payload_data);
};

export const fetchHospitalDoctorsProfile = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_DOCTORS_PROFILE, payload_data);
};
export const fetchResetPasswords = (payload_data) => {
  return project.get(Urls.FETCH_RESET_PASSWORD_REQUEST, payload_data);
};
export const fetchLeaveRequest = (payload_data) => {
  return project.get(Urls.FETCH_LEAVE_REQUEST, payload_data);
};
export const performLeaveAction = (payload_data) => {
  return project.post(Urls.PERFORM_LEAVE_ACTION, payload_data);
};
export const changeResetPassword = (payload_data) => {
  return project.post(Urls.CHANGE_DOCTORS_PASSWORD, payload_data);
};
export const fetchPatientsHospitals = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_PATIENTS, payload_data);
};

export const addPatientsHospital = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_PATIENT, payload_data);
};
export const fetchDepartmentHospital = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_DEPARTMENTS, payload_data);
};
export const fetchAppointmentsHospital = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_APPOINTMENTS, payload_data);
};
export const fetchSoftwareDepartmentHospital = (payload_data) => {
  return project.get(Urls.FETCH_SOFTWARE_DEPARTMENTS, payload_data);
};
export const addDepartmentHospital = (payload_data) => {
  return project.post(Urls.ADD_DEPARTMENTS_HOSPITAL, payload_data);
};
export const CancelAppointmentHospital = (payload_data) => {
  return project.post(Urls.CANCEL_APPOINTMENT_HOSPITAL, payload_data);
};
export const UploadLabReport = (payload_data) => {
  return project.multiPartFormData(Urls.UPLOAD_LAB_REPORT, payload_data);
};

export const handleDelete = (payload_data) => {
  return project.post(Urls.DELETE_HANDLE, payload_data);
};
export const editDoctorProfile = (payload_data) => {
  return project.post(Urls.EDIT_DOCTOR_PROFILE, payload_data);
};
export const fetchDepartmentAll = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ALL_DEPARMENTS, payload_data);
};
export const fetchAllDoctors = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ALL_DOCTORS, payload_data);
};
export const fetchAllHospitalReviews = (payload_data) => {
  return project.get(Urls.FEFETCH_ALL_DOCTOR_REVIEWS, payload_data);
};
export const fetchHospitalAdminData = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ADMIN_ACCOUNTS, payload_data);
};
export const deleteHospitalAdmin = (payload_data) => {
  return project.get(Urls.DELETE_HOSPITAL_ADMIN, payload_data);
};
export const addHospitalAdminData = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_ADMIN_ACCOUNTS, payload_data);
};
export const fetchAdminDashboard = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ADMIN_DASHBOARD, payload_data);
};
export const addHospitalMedicine = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_MEDICINE, payload_data);
};
export const fetchHospitalMedicine = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_MEDICINE, payload_data);
};
export const addHospitalReferTo = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_REFER_TO, payload_data);
};
export const fetchHospitalReferTo = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_REFER_TO, payload_data);
};
export const editAdminPassword = (payload_data) => {
  return project.post(Urls.EDIT_HOSPITAL_ADMIN_PASSWORD, payload_data);
};
export const graphsFetch = (payload_data) => {
  return project.get(Urls.HOSPITAL_ANALYTICS_GRAPHS, payload_data);
};
export const genderGraphsFetch = (payload_data) => {
  return project.get(Urls.GENDER_GRAPHS_FETCH, payload_data);
};
export const ageGraphsFetch = (payload_data) => {
  return project.get(Urls.AGE_GRAPHS_FETCH, payload_data);
};