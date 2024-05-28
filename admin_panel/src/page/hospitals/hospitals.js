import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
// import { hospitalData } from "../../data/data";
import { FaStar } from "../../assets/icons/vander";
import useAxios from "../../network/useAxios";
import { fetchAllHospital } from "../../urls/urls";
import { test_url_images } from "../../config/environment";
import DepartmentSearch from "../../common-components/DepartmentSearch";
import HospitalNameSearch from "../../common-components/HospitalName";
import AppointmentSlots from "../../common-components/SlotsSearch";
import DateSearchComponent from "../../common-components/DateSearch";
import DoctorSearch from "../../common-components/DoctorsSearch";
import PatientName from "../../common-components/PatientName";
import StatusSearch from "../../common-components/StatusSearch";

export default function Hospitals() {
  const [filters, setFilters] = useState({});
  const [hospitalData, setHospitalData] = useState([]);
  const [hospitalsResponse, hospitalsError, hospitalsLoading, hospitalsFetch] =
    useAxios();
  useEffect(() => {
    hospitalsFetch(fetchAllHospital(filters));
  }, [filters]);
  useEffect(() => {
    if (hospitalsResponse?.result == "success" && hospitalsResponse?.data) {
      setHospitalData(hospitalsResponse?.data);
    }
  }, [hospitalsResponse]);
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Hospitals</h5>
            
            </div>
            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link to="/add-hospital" className="btn btn-primary">
                Add New Hospital
              </Link>
            </div>
          </div>
          <div className="row" style={{ marginTop: "1rem" }}>
            <div className="col-sm-6 col-lg-3">
              <HospitalNameSearch filters={filters} setFilters={setFilters} />
            </div>

            <div className="col-sm-6 col-lg-3">
              <button
                className="form-control btn-check-reset"
                onClick={() => {
                  setFilters({
                    hospitalSearch: "",
                  });
                }}
                style={{ backgroundColor: "red" }}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="row row-cols-md-2 row-cols-lg-5">
            {hospitalData.map((item, index) => {
              return (
                <div className="col mt-4" key={index}>
                  <Link to={`/hospital-profile/${item.id}`}>
                    <div className="card team border-0 rounded shadow overflow-hidden h-100">
                      <div className="team-img position-relative">
                        <img
                          src={test_url_images + item.hospital_image}
                          style={{
                            height:"10rem",
                            width:"100%", 
                            objectFit:"cover"
                          }}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="card-body content text-center d-flex flex-column">
                        <div className="title text-dark h5 d-block mb-0">
                          {item.name}
                        </div>
                        <small> ID: {item?.hospital_details_account?.[0]?.ujur_id}</small>
                        <small className="text-muted speciality mt-2 ">
                          {item.contact_number}
                        </small>
                        <small className="text-muted speciality flex-grow-1 mt-2">
                          Address:{" "}
                          {item.address.length > 50
                            ? `${item.address.substring(0, 50)}...`
                            : item.address}
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
