/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls.jsx';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const addDoctorByHospital = (payload_data) => {
  return project.multiPartFormData(Urls.ADD_DOCTOR_HOSPITAL, payload_data);
};
export const addDoctorByAdmin = (payload_data) => {
  return project.multiPartFormData(Urls.ADD_ADMIN_DOCTOR, payload_data);
};
export const addAdminHospital = (payload_data) => {
  return project.multiPartFormData(Urls.ADD_ADMIN_HOSPITAL, payload_data);
};
export const loginMainAdmin = (payload_data) => {
  return project.post(Urls.FETCH_MAIN_ADMIN, payload_data);
};
export const fetchAllHospital = (payload_data) => {
  return project.get(Urls.FETCH_ALL_HOSPITAL, payload_data);
};
export const fetchHospitalProfile = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_DETAILS, payload_data);
};
export const fetchHospitalEditProfile = (payload_data) => {
  return project.multiPartFormData(Urls.FETCH_HOSPITAL_EDIT_DETAILS, payload_data);
};
export const fetchAllDoctors = (payload_data) => {
  return project.get(Urls.FETCH_ALL_DOCTORS, payload_data);
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
export const handleDelete = (payload_data) => {
  return project.post(Urls.DELETE_HANDLE, payload_data);
};
export const changeResetPassword = (payload_data) => {
  return project.post(Urls.CHANGE_DOCTORS_PASSWORD, payload_data);
};
export const fetchPatientsHospitals = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_PATIENTS, payload_data);
};
export const fetchPatientsAdmin = (payload_data) => {
  return project.get(Urls.FETCH_ADMIN_PATIENTS, payload_data);
};
export const fetchAdminData = (payload_data) => {
  return project.get(Urls.FETCH_ADMIN_DATA, payload_data);
};
export const fetchHospitalAdminData = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ADMIN, payload_data);
};
export const addHospitalAdminData = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_ADMIN, payload_data);
};

export const addPatientsHospital = (payload_data) => {
  return project.post(Urls.ADD_HOSPITAL_PATIENT, payload_data);
};
export const addAdmin = (payload_data) => {
  return project.post(Urls.ADD_ADMIN, payload_data);
};
export const fetchDepartmentHospital = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_DEPARTMENTS, payload_data);
};
export const fetchDepartmentAll = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ALL_DEPARMENTS, payload_data);
};
export const fetchAppointmentsHospital = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_APPOINTMENTS, payload_data);
};
export const fetchAppointmentsAllHospital = (payload_data) => {
  return project.get(Urls.FETCH_HOSPITAL_ALL_APPOINTMENTS, payload_data);
};
export const fetchRevenueAllHospital = (payload_data) => {
  return project.get(Urls.FETCH_REVENUE_ALL_APPOINTMENTS, payload_data);
};
export const fetchSoftwareDepartmentHospital = (payload_data) => {
  return project.get(Urls.FETCH_SOFTWARE_DEPARTMENTS, payload_data);
};
export const addDepartmentHospital = (payload_data) => {
  return project.post(Urls.ADD_DEPARTMENTS_HOSPITAL, payload_data);
};
export const addDepartmentAdmin = (payload_data) => {
  return project.post(Urls.ADD_DEPARTMENTS_ADMIN, payload_data);
};
export const fetchAllReviews = (payload_data) => {
  return project.get(Urls.FETCH_ALL_REVIEWS, payload_data);
};
export const fetchAllHospitalsReviews = (payload_data) => {
  return project.get(Urls.FETCH_ALL_REVIEWS_HOSPITALS, payload_data);
};
export const fetchAdminDashboard = (payload_data) => {
  return project.get(Urls.FETCH_ADMIN_DASHBOARD, payload_data);
};
export const deleteHospitalAdminByUjur = (payload_data) => {
  return project.post(Urls.DELETE_HOSPITAL_ADMIN_BY_UJUR, payload_data);
};
export const deletePatientAdminByUjur = (payload_data) => {
  return project.post(Urls.DELETE_PATIENT_ADMIN_BY_UJUR, payload_data);
};
export const CancelAppointmentAdmin = (payload_data) => {
  return project.post(Urls.CANCEL_APPOINTMENTS_ADMIN_BY_UJUR, payload_data);
};
export const editDoctorProfile = (payload_data) => {
  return project.multiPartFormData(Urls.EDIT_DOCTOR_PROFILE, payload_data);
};
export const editAdminPassword = (payload_data) => {
  return project.post(Urls.EDIT_HOSPITAL_ADMIN_PASSWORD, payload_data);
};
export const editCustomerPassword = (payload_data) => {
  return project.post(Urls.EDIT_CUSTOMER_PASSWORD, payload_data);
};
export const addPromoCode = (payload_data) => {
  return project.post(Urls.ADD_PROMO_CODE, payload_data);
};
export const fetchPromoCode = (payload_data) => {
  return project.get(Urls.VIEW_PROMO_CODE, payload_data);
};
export const deletePromoCode = (payload_data) => {
  return project.post(Urls.DELETE_PROMO_CODE, payload_data);
};

