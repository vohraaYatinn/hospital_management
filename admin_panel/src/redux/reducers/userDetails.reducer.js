/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";



const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    sidebarShow: false,
    userDetails: {
      full_name: false,
      login: false,
      email: false,
      role: "",
      user_coins:[]
    },

  },
  reducers: {
    updateUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    updateUserCoins(state, action) {
      state.userDetails.user_coins[0].coin = action.payload;
    },
    changeState(state, action) {
      state.sidebarShow = action.payload;
    }

  },
});

export const { updateUserDetails, updateUserCoins, changeState } = UserDetailsSlice.actions;

export const userDetails = state => state.loader.userDetails;
export const sidebarShowAct = state => state.loader.sidebarShow;


export default UserDetailsSlice.reducer;
