import React, { useEffect, useState } from "react";

import {
  fetchAdminDashboard,
  fetchAllDoctors,
  fetchAllHospital,
  fetchDepartmentAll,
} from "../urls/urls";
import {
  updateDepartments,
  updateDoctors,
} from "../redux/reducers/functionalities.reducer";
import { useDispatch } from "react-redux";
import useAxios from "../network/useAxios";

export default function RefershToken() {
  const [
    allDepartmentsResponse,
    allDepartmentsError,
    allDepartmentsLoading,
    allDepartmentsFetch,
  ] = useAxios();

  const [
    allDoctorsResponse,
    allDoctorsError,
    allDoctorsLoading,
    allDoctorsFetch,
  ] = useAxios();
  
  const dispatch = useDispatch();

  const fetchAllDepartmentsFunc = () => {
    allDepartmentsFetch(fetchDepartmentAll());
  };

  const fetchallDoctorsFunc = () => {
    allDoctorsFetch(fetchAllDoctors());
  };
  useEffect(() => {
    fetchAllDepartmentsFunc();
    fetchallDoctorsFunc();
  }, []);
  useEffect(() => {
    if (allDoctorsResponse?.result == "success") {
      dispatch(updateDoctors(allDoctorsResponse?.data));
    }
    if (allDepartmentsResponse?.result == "success") {
      dispatch(updateDepartments(allDepartmentsResponse?.data));
    }
  }, [allDepartmentsResponse, allDoctorsResponse]);


  return (
    <>
    </>
  );
}
