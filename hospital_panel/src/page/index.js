import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Charts from "../components/chart";
import PersonChat from "../components/personChat";

import { aboutData, departmentData, latestAppointment, patientsReviews } from "../data/data";

import {
  FiCalendar,
  MdOutlineCheck,
  LiaTimesSolid,
  LuUser2,
  FaBed,
  LiaFileMedicalAltSolid,
  TbUsersGroup,
  GiMedicalDrip,
  LiaMedkitSolid,
  TbAmbulance,
} from "../assets/icons/vander";
import SimpleBar from "simplebar-react";
import Wrapper from "../components/wrapper";
import {
  ageGraphsFetch,
  fetchAdminDashboard,
  fetchAllDoctors,
  fetchDepartmentAll,
  genderGraphsFetch,
  graphsFetch,
  ageGenderGraphsFetch
} from "../urls/urls";
import {
  updateDepartments,
  updateDoctors,
} from "../redux/reducers/functionalities.reducer";
import { useDispatch } from "react-redux";
import useAxios from "../network/useAxios";
import { useState } from "react";

export default function Index() {
  const [dashboardDetails, setDashboardDetails] = useState({});
  const [pieChart, setPieChart] = useState([]);
  const [genderChart, setGenderChart] = useState([]);
  const [ageChart, setAgeChart] = useState([]);
  const [formPie, setFormPie] = useState("week")
  const [ageGraph, setAgeGraph] = useState("Week")
  const [genderGraph, setGenderGraph] = useState("Week")
  const [
    allDepartmentsResponse,
    allDepartmentsError,
    allDepartmentsLoading,
    allDepartmentsFetch,
  ] = useAxios();
  const [
    graphDepartmentsResponse,
    graphDepartmentsError,
    graphDepartmentsLoading,
    graphDepartmentsFetch,
  ] = useAxios();
  const [
    dashboardDetailsResponse,
    dashboardDetailsError,
    dashboardDetailsLoading,
    dashboardDetailsFetch,
  ] = useAxios();
  const [
    allDoctorsResponse,
    allDoctorsError,
    allDoctorsLoading,
    allDoctorsFetch,
  ] = useAxios();
  const [
    graphsDoctorsResponse,
    graphsDoctorsError,
    graphsDoctorsLoading,
    graphsDoctorsFetch,
  ] = useAxios();
  const [
    graphsHospitalResponse,
    graphsHospitalError,
    graphsHospitalLoading,
    graphsHospitalFetch,
  ] = useAxios();
  const [
    ageGraphsHospitalResponse,
    ageGraphsHospitalError,
    ageGraphsHospitalLoading,
    ageGraphsHospitalFetch,
  ] = useAxios();
  const dispatch = useDispatch();

  const fetchAllDashboardDetailsFunc = () => {
    dashboardDetailsFetch(fetchAdminDashboard());
  };
  const graphsFetchHospital = () => {
    graphsDoctorsFetch(graphsFetch({"time":formPie}));
  };
  const ageGraphsFetchHospital = () => {
    ageGraphsHospitalFetch(genderGraphsFetch({"time":ageGraph}));
  };
  const GendergraphsFetchHospital = () => {
    graphsHospitalFetch(genderGraphsFetch({"time":genderGraph}));
  };
  const fetchAllDepartmentsFunc = () => {
    allDepartmentsFetch(fetchDepartmentAll());
  };
  const fetchallDoctorsFunc = () => {
    allDoctorsFetch(fetchAllDoctors());
  };
  const ageGenderFunc = () => {
    graphDepartmentsFetch(ageGenderGraphsFetch({
      "time":genderGraph, 
      "age":ageGraph
    }))
  }

  useEffect(() => {
    fetchAllDepartmentsFunc();
    fetchallDoctorsFunc();
    fetchAllDashboardDetailsFunc();
    
  }, []);
  const [genderData, setGenderData] = useState({})
  useEffect(() => {
    graphsFetchHospital();
  }, [formPie]);
  useEffect(() => {
    if(graphDepartmentsResponse?.result == "success"){
      setAgeChart(graphDepartmentsResponse?.age)
      setGenderData(graphDepartmentsResponse?.data)

    }
  }, [graphDepartmentsResponse]);
  useEffect(() => {
    ageGraphsFetchHospital();
  }, [ageGraph]);
  useEffect(() => {
    ageGenderFunc();
  }, [genderGraph, ageGraph]);
  useEffect(() => {
    if (allDoctorsResponse?.result == "success") {
      dispatch(updateDoctors(allDoctorsResponse?.data));
    }
    if (allDepartmentsResponse?.result == "success") {
      dispatch(updateDepartments(allDepartmentsResponse?.data));
    }
  }, [allDepartmentsResponse, allDoctorsResponse]);
  useEffect(() => {
    if (dashboardDetailsResponse?.result == "success") {
      setDashboardDetails(dashboardDetailsResponse?.data);
    }
  }, [dashboardDetailsResponse]);
  useEffect(() => {
    if (graphsDoctorsResponse?.result == "success") {
      setPieChart(graphsDoctorsResponse?.data);
    }
  }, [graphsDoctorsResponse]);
  useEffect(() => {
    if (graphsHospitalResponse?.result == "success") {
      setGenderChart(graphsHospitalResponse?.data);
      console.log(graphsHospitalResponse);

      
    }
  }, [graphsHospitalResponse]);


  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="layout-specing">
            <h5 className="mb-0">Dashboard</h5>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <FaBed className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.patient}</h5>
                      <p className="text-muted mb-0">Total Patients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <LiaFileMedicalAltSolid className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.department}</h5>

                      <p className="text-muted mb-0">Total Departments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <TbUsersGroup className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.doctor}</h5>

                      <p className="text-muted mb-0">Total Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <TbAmbulance className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.appointment}</h5>

                      <p className="text-muted mb-0">Total Appointments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <LiaMedkitSolid className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.admin}</h5>

                      <p className="text-muted mb-0">Total Admins</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <GiMedicalDrip className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.reviews}</h5>

                      <p className="text-muted mb-0">Total Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <Charts ageChart={ageChart} genderData={genderData} pieChart={pieChart} ageGraph={ageChart} setFormPie={setFormPie} ageFilter={ageGraph} setAgeGraph={setAgeGraph} genderChart={genderChart} setGenderGraph={setGenderGraph} genderGraph={genderGraph}/>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
