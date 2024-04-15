/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

const functionalitiesSlice = createSlice({
  name: "functionalities",
  initialState: {
    functionalities: {
        showNavbar: false,
        token: false,
        hospitals:[],
        departments:[]
    },

  },
  reducers: {
    updateNavbar(state) {
      state.functionalities.showNavbar = !state.functionalities.showNavbar
    },
    updateToken(state, payload) {
      state.functionalities.token = payload.payload
    },
    updateHospitals(state, payload) {
      state.functionalities.hospitals = payload.payload
    },
    updateDepartments(state, payload) {
      state.functionalities.departments = payload.payload
    },
    clearRedux(state) {
      state.functionalities = {
        showNavbar: false,
        token: false
    }
    },


  },
});

export const { updateNavbar, updateToken, clearRedux, updateHospitals, updateDepartments } = functionalitiesSlice.actions;

export const functionalitiesNavbar = state => state.loader.functionalities.showNavbar;
export const tokenJson = state => state.loader.functionalities.token;
export const GetAllDepartments = state => state.loader.functionalities.departments;
export const GetAllHospitals = state => state.loader.functionalities.hospitals;

export default functionalitiesSlice.reducer;
