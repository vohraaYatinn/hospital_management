/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

const functionalitiesSlice = createSlice({
  name: "functionalities",
  initialState: {
    functionalities: {
        showNavbar: false,
        token: false,
        doctor:{}
    },

  },
  reducers: {
    updateNavbar(state) {
      state.functionalities.showNavbar = !state.functionalities.showNavbar
    },
    updateToken(state, payload) {
      state.functionalities.token = payload.payload
    },
    updateDoctor(state, payload) {
      state.functionalities.doctor = payload.payload
    },
    clearRedux(state) {
      state.functionalities = {
        showNavbar: false,
        token: false
    }
    },


  },
});

export const { updateNavbar, updateToken, clearRedux, updateDoctor } = functionalitiesSlice.actions;

export const functionalitiesNavbar = state => state.loader.functionalities.showNavbar;
export const tokenJson = state => state.loader.functionalities.token;
export const doctorDetails = state => state.loader.functionalities.doctor;

export default functionalitiesSlice.reducer;
