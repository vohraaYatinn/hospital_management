/* eslint-disable */

import { HttpAxiosService } from './httpService';
import { Urls } from './constantsUrls';
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

