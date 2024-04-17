import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { doctorData } from "../../data/data";

import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
} from "../../assets/icons/vander";
import useAxios from "../../network/useAxios";
import { fetchHospitalDoctors } from "../../urls/urls";
import { test_url_images } from "../../config/environment";
import DoctorSearch from "../../common-components/DoctorsSearch";
import DepartmentSearch from "../../common-components/DepartmentSearch";

import dummy from "../../assets/images/doctors/dummy.jpg";

export default function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [filters, setFilters] = useState({});
  const [
    patientListResponse,
    patientListError,
    patientListLoading,
    patientListFetch,
  ] = useAxios();
  useEffect(() => {
    patientListFetch(fetchHospitalDoctors(filters));
  }, [filters]);
  useEffect(() => {
    if (patientListResponse?.result == "success" && patientListResponse?.data) {
      setDoctorsData(patientListResponse?.data);
    }
  }, [patientListResponse]);
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Doctors</h5>

              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">UJUR</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Doctors
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link to="/add-doctor" className="btn btn-primary">
                Add New Doctor
              </Link>
            </div>
          </div>
          <div className="row" style={{ marginTop: "1rem" }}>
            <div className="col-sm-6 col-lg-3">
              <DoctorSearch filters={filters} setFilters={setFilters} />
            </div>
            <div className="col-sm-6 col-lg-3">
              <DepartmentSearch filters={filters} setFilters={setFilters} />
            </div>
            <div className="col-sm-6 col-lg-3">
              <button
                className="form-control btn-check-reset"
                onClick={() => {
                  setFilters({
                    department: "",
                    hospitalSearch: "",
                    doctorName: "",
                  });
                }}
                style={{
                  backgroundColor: "red",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="row row-cols-md-2 row-cols-lg-5">
            {doctorsData?.map((item, index) => {
              return (
                <div className="col mt-4" key={index}>
                  <div className="card team border-0 rounded shadow overflow-hidden h-100">
                    <div className="team-img position-relative">
                      <img
                        src={
                          item?.profile_picture
                            ? test_url_images + item.profile_picture
                            : dummy
                        }
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-body content text-center">
                      <Link
                        to={`/dr-profile/${item.id}`}
                        className="title text-dark h5 d-block mb-0"
                      >
                        {item.full_name}
                      </Link>
                      <small className="text-muted speciality">
                        {item.education}
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
