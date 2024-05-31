import React, { useEffect, useState } from "react";

import {
  fetchAdminDashboard,
  fetchAllHospital,
  fetchDepartmentAll,
} from "../urls/urls";
import {
  updateDepartments,
  updateHospitals,
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
    allHospitalResponse,
    allHospitalError,
    allHospitalLoading,
    allHospitalFetch,
  ] = useAxios();
  const dispatch = useDispatch();

  const fetchAllDepartmentsFunc = () => {
    allDepartmentsFetch(fetchDepartmentAll());
  };

  const fetchAllHospitalFunc = () => {
    allHospitalFetch(fetchAllHospital());
  };
  useEffect(() => {
    fetchAllDepartmentsFunc();
    fetchAllHospitalFunc();
  }, []);
  useEffect(() => {
    if (allHospitalResponse?.result == "success") {
      dispatch(updateHospitals(allHospitalResponse?.data));
    }
    if (allDepartmentsResponse?.result == "success") {
      dispatch(updateDepartments(allDepartmentsResponse?.data));
    }
  }, [allDepartmentsResponse, allHospitalResponse]);


  return (
    <>
    </>
  );
}
