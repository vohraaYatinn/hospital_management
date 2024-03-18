/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'

import UserDetailsReducer from './reducers/userDetails.reducer'
import functionalitiesReducer from "./reducers/functionalities.reducer"


export default configureStore({
  reducer: {
    loader: UserDetailsReducer,
    loader: functionalitiesReducer,
  },
  devTools: true,
})