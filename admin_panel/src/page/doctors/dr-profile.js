import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import doctor1 from "../../assets/images/client/01.jpg";
import Wrapper from "../../components/wrapper";
import { Modal } from "antd";
import {
  clientReview,
  companyLogo,
  doctorData,
  drTimetable,
  experienceData,
} from "../../data/data";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import { RiTimeFill, FiPhone, FiMail } from "../../assets/icons/vander";
import { fetchHospitalDoctorsProfile } from "../../urls/urls";
import useAxios from "../../network/useAxios";
import { test_url_images } from "../../config/environment";
import { designStarsReviews } from "../../utils/commonFunctions";

export default function DrProfile() {
  let params = useParams();
  let id = params.id;
  let [editMode, setEditMode] = useState(false);
  let [morningTiming, setMorningTiming] = useState("");
  let [morningPrice, setMorningPrice] = useState("");
  let data = doctorData.find((doctor) => doctor.id === parseInt(id));
  let [activeIndex, setActiveIndex] = useState(1);

  // Function to handle edit button click
  const handleEditClick = () => {
    // Set initial values for edit fields
    setMorningTiming(doctorsData?.doctor_slots[0].morning_timings);
    setMorningPrice(doctorsData?.doctor_slots[0].morning_slots_price);
    // Set initial values for other timings and prices

    // Toggle edit mode
    setEditMode(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated data to the server
    // Implement logic to update the data
    // Reset edit mode
    setEditMode(false);
  };

  const [doctorsData, setDoctorsData] = useState([]);
  const [
    doctorProfileResponse,
    doctorProfileError,
    doctorProfileLoading,
    doctorProfileFetch,
  ] = useAxios();
  useEffect(() => {
    if (id) {
      doctorProfileFetch(
        fetchHospitalDoctorsProfile({
          doctor_id: id,
        })
      );
    }
  }, [id]);
  useEffect(() => {
    if (
      doctorProfileResponse?.result == "success" &&
      doctorProfileResponse?.data
    ) {
      setDoctorsData(doctorProfileResponse?.data);
    }
  }, [doctorProfileResponse]);

  let settings2 = {
    container: ".client-review-slider",
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  };

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between">
            <h5 className="mb-0">Doctor Profile & Settings</h5>

            <nav
              aria-label="breadcrumb"
              className="d-inline-block mt-4 mt-sm-0"
            >
              <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/">UJUR</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="doctors">Doctor</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile
                </li>
              </ul>
            </nav>
          </div>

          <div className="card rounded shadow overflow-hidden mt-4 border-0">
            <div className="p-5 bg-primary bg-gradient"></div>
            <div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
              <img
                src={test_url_images + doctorsData?.profile_picture}
                className="rounded-circle shadow-md avatar avatar-medium"
                alt=""
              />
              <div className="mt-4 ms-3 pt-3">
                <h5 className="mt-3 mb-1">{doctorsData?.full_name}</h5>
                <p className="text-muted mb-0">{doctorsData?.education}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-4">
                <div className="card border-0 rounded-0 p-4">
                  <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
                    <li className="nav-item">
                      <Link
                        className={`${
                          activeIndex === 1 ? "active" : ""
                        } nav-link rounded-0`}
                        to="#"
                        onClick={() => setActiveIndex(1)}
                      >
                        <div className="text-center pt-1 pb-1">
                          <h5 className="mb-0">Overview</h5>
                        </div>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`${
                          activeIndex === 3 ? "active" : ""
                        } nav-link rounded-0`}
                        to="#"
                        onClick={() => setActiveIndex(3)}
                      >
                        <div className="text-center pt-1 pb-1">
                          <h5 className="mb-0">Reviews</h5>
                        </div>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`${
                          activeIndex === 4 ? "active" : ""
                        } nav-link rounded-0`}
                        to="#"
                        onClick={() => setActiveIndex(4)}
                      >
                        <div className="text-center pt-1 pb-1">
                          <h5 className="mb-0">Time Table</h5>
                        </div>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`${
                          activeIndex === 5 ? "active" : ""
                        } nav-link rounded-0`}
                        to="#"
                        onClick={() => setActiveIndex(5)}
                      >
                        <div className="text-center pt-1 pb-1">
                          <h5 className="mb-0">Settings</h5>
                        </div>
                      </Link>
                    </li>
                  </ul>

                  <div className="tab-content mt-4" id="pills-tabContent">
                    {activeIndex === 1 ? (
                      <div className="tab-pane fade show active">
                        <p className="text-muted">{doctorsData?.bio}</p>
                      </div>
                    ) : (
                      ""
                    )}

                    {activeIndex === 3 ? (
                      <div className="tab-pane fade show active">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 text-center">
                            <div className="client-review-slider">
                              <TinySlider settings={settings2}>
                                {doctorsData?.doctor_reviews.map(
                                  (item, index) => {
                                    return (
                                      <div
                                        className="tiny-slide text-center"
                                        key={index}
                                      >
                                        <p className="text-muted fw-normal fst-italic">
                                          {item.comment}
                                        </p>
                                        <ul className="list-unstyled mb-0">
                                          {designStarsReviews(
                                            item?.reviews_star
                                          )}
                                        </ul>
                                        <h6 className="text-primary">
                                          {item?.patient?.full_name}{" "}
                                          <small className="text-muted">
                                            {item?.patient?.date_of_birth}
                                          </small>
                                        </h6>
                                      </div>
                                    );
                                  }
                                )}
                              </TinySlider>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {activeIndex === 4 ? (
                      <div className="tab-pane fade show active">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <button
                              type="button"
                              className="btn btn-primary w-10 h-20"
                              onClick={handleEditClick} // Changed "class" to "className"
                            >
                              Edit
                            </button>

                            {editMode ? (
                              <div className="modal">
                                <form onSubmit={handleSubmit}>
                                  <input
                                    type="text"
                                    value={morningTiming}
                                    onChange={(e) =>
                                      setMorningTiming(e.target.value)
                                    }
                                  />
                                  <button type="submit">Save</button>
                                  <button onClick={() => setEditMode(false)}>
                                    Cancel
                                  </button>
                                </form>
                              </div>
                            ) : null}
                            <div className="card border-0 p-3 pt-0 rounded shadow">
                              <ul className="list-unstyled mb-0">
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Morning
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.morning_timings
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                  <p>
                                    Rs{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.morning_slots_price
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                </li>
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Afternoon
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.afternoon_timings
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                  <p>
                                    Rs{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.afternoon_slots_price
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                </li>
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Evening
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.evening_timings
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                  <p>
                                    Rs{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        ?.evening_slots_price
                                    }{" "}
                                    {/* Added "?" to handle null or undefined */}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="card border-0 text-center features feature-primary">
                              <div className="icon text-center mx-auto rounded-md">
                                <i className="uil uil-phone h3 mb-0"></i>
                                <FiPhone className="h3 mb-0" />
                              </div>

                              <div className="card-body p-0 mt-4">
                                <h5 className="title fw-bold">Phone</h5>
                                <Link to="tel:+152534-468-854" className="link">
                                  {doctorsData?.user?.phone}
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="card border-0 text-center features feature-primary">
                              <div className="icon text-center mx-auto rounded-md">
                                <i className="uil uil-envelope h3 mb-0"></i>
                                <FiMail className="h3 mb-0" />
                              </div>

                              <div className="card-body p-0 mt-4">
                                <h5 className="title fw-bold">Email</h5>
                                <Link
                                  to="mailto:contact@example.com"
                                  className="link"
                                >
                                  {doctorsData?.user?.email}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* {activeIndex === 4 ? (
                      <div className="tab-pane fade show active">
                        <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <button
                              type="button"
                              class="btn btn-primary w-10 h-20"
                              onClick={handleEditClick}
                            >
                              Edit
                            </button>

                            {editMode ? (
                              <div className="modal">
                                {" "}
                                {/* Replace this with your modal component */}
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* Input fields for editing */}
                    {/* <input
                                    type="text"
                                    value={morningTiming}
                                    onChange={(e) =>
                                      setMorningTiming(e.target.value)
                                    }
                                  /> */}
                    {/* Input fields for other timings and prices */}
                    {/* <button type="submit">Save</button>
                                  <button onClick={() => setEditMode(false)}>
                                    Cancel
                                  </button>
                                </form>
                              </div>
                            ) : null} */}
                    {/* <div className="card border-0 p-3 pt-0 rounded shadow">
                              <ul className="list-unstyled mb-0">
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Morning
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>
                                    {
                                      doctorsData?.doctor_slots[0]
                                        .morning_timings
                                    }
                                  </p>
                                  <p>
                                    Rs{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        .morning_slots_price
                                    }
                                  </p>
                                </li>
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Afternoon
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>
                                    {
                                      doctorsData?.doctor_slots[0]
                                        .afternoon_timings
                                    }
                                  </p>
                                  <p>
                                    Rs{" "} */}
                    {/* {
                                      doctorsData?.doctor_slots[0]
                                        .afternoon_slots_price
                                    }
                                  </p>
                                </li>
                                <li className="d-flex justify-content-between mt-2 ms-0 mt-3">
                                  <p className="text-muted mb-0">
                                    <RiTimeFill className="text-primary align-middle h5 mb-0" />{" "}
                                    Evening
                                  </p>
                                  <p className="text-primary mb-0">
                                    <span className="text-dark">Time:</span>
                                    {
                                      doctorsData?.doctor_slots[0]
                                        .evening_timings
                                    }
                                  </p>
                                  <p>
                                    Rs{" "}
                                    {
                                      doctorsData?.doctor_slots[0]
                                        .evening_slots_price
                                    }
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="card border-0 text-center features feature-primary">
                              <div className="icon text-center mx-auto rounded-md">
                                <i className="uil uil-phone h3 mb-0"></i>
                                <FiPhone className="h3 mb-0" />
                              </div>

                              <div className="card-body p-0 mt-4">
                                <h5 className="title fw-bold">Phone</h5>
                                <Link to="tel:+152534-468-854" className="link"> */}
                    {/* {doctorsData?.user?.phone}
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="card border-0 text-center features feature-primary">
                              <div className="icon text-center mx-auto rounded-md">
                                <i className="uil uil-envelope h3 mb-0"></i>
                                <FiMail className="h3 mb-0" />
                              </div>

                              <div className="card-body p-0 mt-4">
                                <h5 className="title fw-bold">Email</h5>
                                <Link
                                  to="mailto:contact@example.com"
                                  className="link"
                                >
                                  {doctorsData?.user?.email}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}} */}
                    {activeIndex === 5 ? (
                      <div className="tab-pane fade show active">
                        <h5 className="mb-1">Settings</h5>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="rounded shadow mt-4">
                              <div className="p-4 border-bottom">
                                <h6 className="mb-0">
                                  Account Notifications :
                                </h6>
                              </div>

                              <div className="p-4">
                                <form>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Old password :
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="Old password"
                                          required=""
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          New password :
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="New password"
                                          required=""
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Re-type New password :
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          placeholder="Re-type New password"
                                          required=""
                                        />
                                      </div>
                                    </div>

                                    <div className="col-lg-12 mt-2 mb-0">
                                      <button className="btn btn-primary">
                                        Save password
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
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
