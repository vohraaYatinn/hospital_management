import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import { reviewData } from "../data/data";
import { useState } from "react";
import useAxios from "../network/useAxios";
import { fetchAllHospitalReviews } from "../urls/urls";
import { useEffect } from "react";
import { test_url_images } from "../config/environment";
import { PaginationCountList, changeDateFormat, designStarsReviews, handlePagination } from "../utils/commonFunctions";
import PatientName from "../common-components/PatientName";
import DoctorSearch from "../common-components/DoctorsSearch";
import DepartmentSearch from "../common-components/DepartmentSearch";

export default function Review() {
  const [filters, setFilters] = useState({});
  const [reviewsData, setReviewsData] = useState([]);
  const [
    adminReviewsResponse,
    adminReviewsError,
    adminReviewsLoading,
    adminReviewsFetch,
  ] = useAxios();
  useEffect(() => {
    adminReviewsFetch(fetchAllHospitalReviews(filters));
  }, [filters]);
  const [paginationNumber, setPaginationNumber] = useState({
    from:0,
    to:10,
    currentTab:1
})
  useEffect(() => {
    if (
      adminReviewsResponse?.result == "success" &&
      adminReviewsResponse?.data
    ) {
      setReviewsData(adminReviewsResponse?.data);
    }
  }, [adminReviewsResponse]);
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Reviews</h5>

            <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/index">UJUR</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Pages</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Review
                </li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div className="row" style={{ marginTop: "1rem" }}>
              <div className="col-sm-6 col-lg-3">
                <PatientName filters={filters} setFilters={setFilters} />
              </div>
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
                      doctorName: "",
                      patientName: "",
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

            <div className="col-12 mt-4">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive bg-white shadow rounded">
                    <table className="table mb-0 table-center">
                      <thead>
                        <tr>
                        <th
                            className="border-bottom p-3"
                            style={{ minWidth: "150px" }}
                          >
                            Doctor ID
                          </th>
                          <th
                            className="border-bottom p-3"
                            style={{ minWidth: "200px" }}
                          >
                            Doctor Name
                          </th>
                          <th
                            className="border-bottom p-3"
                            style={{ minWidth: "200px" }}
                          >
                            Patient Name
                          </th>

                          <th
                            className="border-bottom p-3"
                            style={{ minWidth: "150px" }}
                          >
                            Rating
                          </th>
                          <th
                            className="border-bottom p-3"
                            style={{ minWidth: "350px" }}
                          >
                            Reviews
                          </th>
                          <th
                            className="border-bottom p-3"
                            style={{ minWidth: "150px" }}
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviewsData.slice(paginationNumber.from, paginationNumber.to).map((item, index) => {
                          return (
                            <tr key={index}>
                                                            <td className="p-3">{item.doctor.email}</td>

                              <td className="p-3">
                                <Link to="#" className="text-dark">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={
                                        test_url_images +
                                        item.doctor.profile_picture
                                      }
                                      className="avatar avatar-md-sm rounded-circle shadow"
                                      alt=""
                                    />
                                    <span className="ms-2">
                                      {item.doctor.full_name}
                                    </span>
                                  </div>
                                </Link>
                              </td>
                              <td className="p-3">{item.patient.full_name}</td>
                              <td className="p-3">
                                <ul className="list-unstyled mb-0">
                                  {item?.reviews_star &&
                                    designStarsReviews(item?.reviews_star)}
                                </ul>
                              </td>
                              <td className="p-3 text-muted">{item.comment}</td>
                              <td className="p-3">
                                {changeDateFormat(item.created_at)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-12 mt-4">
                  <div className="d-md-flex align-items-center text-center justify-content-between">
                   
                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                    { PaginationCountList(handlePagination, paginationNumber , reviewsData, setPaginationNumber) }

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
