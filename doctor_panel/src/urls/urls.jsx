/* eslint-disable */
import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls';
import { test_url } from "../../src/config/environment.js"

const project = new HttpAxiosService(test_url);

//login and signup
export const phoneNumberOtp = (payload_data) => {
  return project.post(Urls.PHONE_NUMBER_OTP, payload_data);
};
export const loginDoctor = (payload_data) => {
  return project.get(Urls.LOGIN_DOCTOR, payload_data);
};
export const fetchDoctorDashboard = (payload_data) => {
  return project.get(Urls.DASHBOARD_DETAILS, payload_data);
};
export const fetchDoctorPatientsDashboard = (payload_data) => {
  return project.get(Urls.DASHBOARD_PATIENTS_DETAILS, payload_data);
};
export const fetchDoctorReviewsDashboard = (payload_data) => {
  return project.get(Urls.DASHBOARD_REVIEWS_DETAILS, payload_data);
};
export const fetchDoctorAppointments = (payload_data) => {
  return project.get(Urls.DOCTORS_FETCH_SELF_APPOINTMENTS, payload_data);
};
export const fetchAllDoctorPatients = (payload_data) => {
  return project.get(Urls.FETCH_ALL_DOCTORS, payload_data);
};
export const fetchMyDoctorReviews = (payload_data) => {
  return project.get(Urls.FETCH_MY_DOCTOR_REVIEWS, payload_data);
};
export const fetchDoctorProfiles = (payload_data) => {
  return project.get(Urls.DOCTOR_PROFILE, payload_data);
};
export const doctorChangePassword = (payload_data) => {
  return project.post(Urls.DOCTOR_CHANGE_PASSWORD, payload_data);
};
export const doctorChangeProfile = (payload_data) => {
  return project.post(Urls.DOCTOR_CHANGE_PROFILE, payload_data);
};
export const fetchPatientProfile = (payload_data) => {
  return project.get(Urls.DOCTOR_PATIENT_PROFILE_GET, payload_data);
};
export const uploadDocumentPrescription = (payload_data) => {
  return project.post(Urls.UPLOAD_DOCUMENT_PRESCRIPTION, payload_data);
};
export const doctorLeaveFunction = (payload_data) => {
  return project.get(Urls.DOCTOR_FETCH_LEAVE, payload_data);
};
export const doctorApplyFunction = (payload_data) => {
  return project.post(Urls.DOCTOR_APPLY_LEAVE, payload_data);
};
export const forgotPasswordRequest = (payload_data) => {
  return project.post(Urls.RECOVER_PASSWORD_REQUEST, payload_data);
};
export const handleDoctorImages = (payload_data) => {
  return project.multiPartFormData(Urls.HANDLE_DOCTOR_IMAGES, payload_data);
};
export const getDetailsFromToken = (payload_data) => {
  return project.get(Urls.GET_DATA_FROM_TOKEN, payload_data);
};