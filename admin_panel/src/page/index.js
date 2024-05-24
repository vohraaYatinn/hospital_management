import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Charts from "../components/chart";
import PersonChat from "../components/personChat";

import { aboutData, latestAppointment, patientsReviews } from "../data/data";

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

export default function Index() {
  const [dashboardDetails, setDashboardDetails] = useState({});
  const [
    allDepartmentsResponse,
    allDepartmentsError,
    allDepartmentsLoading,
    allDepartmentsFetch,
  ] = useAxios();
  const [
    dashboardDetailsResponse,
    dashboardDetailsError,
    dashboardDetailsLoading,
    dashboardDetailsFetch,
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
  const fetchAllDashboardDetailsFunc = () => {
    dashboardDetailsFetch(fetchAdminDashboard());
  };
  const fetchAllHospitalFunc = () => {
    allHospitalFetch(fetchAllHospital());
  };
  useEffect(() => {
    fetchAllDepartmentsFunc();
    fetchAllHospitalFunc();
    fetchAllDashboardDetailsFunc();
  }, []);
  useEffect(() => {
    if (allHospitalResponse?.result == "success") {
      dispatch(updateHospitals(allHospitalResponse?.data));
    }
    if (allDepartmentsResponse?.result == "success") {
      dispatch(updateDepartments(allDepartmentsResponse?.data));
    }
  }, [allDepartmentsResponse, allHospitalResponse]);
  useEffect(() => {
    if (dashboardDetailsResponse?.result == "success") {
      setDashboardDetails(dashboardDetailsResponse?.data);
    }
  }, [dashboardDetailsResponse]);

  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <div className="layout-specing">
            <h5 className="mb-0">Dashboard</h5>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
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
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
                <div className="card features feature-primary rounded border-0 shadow p-4">
                  <div className="d-flex align-items-center">
                    <div className="icon text-center rounded-md">
                      <LiaFileMedicalAltSolid className="h3 mb-0" />
                    </div>
                    <div className="flex-1 ms-2">
                      <h5 className="mb-0">{dashboardDetails?.hospital}</h5>

                      <p className="text-muted mb-0">Total Hospitals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
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
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
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
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
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
              <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
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
              {/* <Charts /> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
