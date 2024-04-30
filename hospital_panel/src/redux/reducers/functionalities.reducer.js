/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

const functionalitiesSlice = createSlice({
  name: "functionalities",
  initialState: {
    functionalities: {
        showNavbar: false,
        token: false,
        doctors:[],
        departments:[],
        hospital_details:""
    },

  },
  reducers: {
    updateNavbar(state) {
      state.functionalities.showNavbar = !state.functionalities.showNavbar
    },
    updateToken(state, payload) {
      state.functionalities.token = payload.payload
    },
    updateDoctors(state, payload) {
      state.functionalities.doctors = payload.payload
    },
    updateDepartments(state, payload) {
      state.functionalities.departments = payload.payload
    },
    updateHospitalDetails(state, payload) {
      state.functionalities.hospital_details = payload.payload
    },
    clearRedux(state) {
      state.functionalities = {
        showNavbar: false,
        token: false
    }
    },


  },
});

export const { updateNavbar, updateToken, clearRedux, updateDoctors, updateDepartments, updateHospitalDetails } = functionalitiesSlice.actions;

export const functionalitiesNavbar = state => state.loader.functionalities.showNavbar;
export const tokenJson = state => state.loader.functionalities.token;
export const GetAllDepartments = state => state.loader.functionalities.departments;
export const GetAllDoctors = state => state.loader.functionalities.doctors;
export const GetHospitalDetails = state => state.loader.functionalities.hospital_details;

export default functionalitiesSlice.reducer;
