/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import dr1 from "../assets/images/doctors/01.jpg";

import Offcanvas from "react-bootstrap/Offcanvas";

import {
  FiSettings,
  FiSearch,
  GrDashboard,
  LiaSignOutAltSolid,
} from "../assets/icons/vander";
import { useSelector } from "react-redux";
import { doctorDetails } from "../redux/reducers/functionalities.reducer";
import { test_url_images } from "../config/environment";

export default function Navbar({ navDark, containerClass }) {
  let token = useSelector(doctorDetails);

  let [show, setShow] = useState(false);
  let [scroll, setScroll] = useState(false);
  let [isMenu, setisMenu] = useState(false);
  let [modal, setModal] = useState(false);

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  let [manu, setManu] = useState("");
  let location = useLocation();

  useEffect(() => {
    let current = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    setManu(current);

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    window.scrollTo(0, 0);
    const closeModal = () => {
      setModal(false);
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  let toggleMenu = () => {
    setisMenu(!isMenu);
    let elem = document.getElementById("navigation23")
    if (elem) {
      if (elem.style.display == "none"){
        elem.style.display = "block"
      }
      else{
        elem.style.display = "none"
      }
    }

      
     
  };
  return (
    <header
      id="topnav"
      className={`${scroll ? "nav-sticky" : ""} navigation sticky`}
    >
      <div className={containerClass}>
        <div>
          {navDark === true ? (
            <Link className="logo" to="/">
              <img
                src={logoDark}
                style={  {  objectFit: "cover",
                  width: "4rem",
                  borderRadius:"100px",
                  height: "4rem",
                }}
                className="logo-light-mode"
                alt=""
              />
              <img
                src={logoLight}
                height="22"
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          ) : (
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="22" alt="" />
                <img src={logoLight} className="l-light" height="22" alt="" />
              </span>
              <img
                src={logoLight}
                height="22"
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          )}
        </div>

        <div className="menu-extras">
          <div className="menu-item">
            <a
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="dropdowns list-inline mb-0">
          <li className="list-inline-item mb-0 ms-1">
            <Link to="#" className="btn btn-icon btn-pills btn-primary" onClick={handleShow}>
              <FiSearch />
            </Link>
          </li>
          <Offcanvas show={show} onHide={handleClose} placement="top" style={{ height: "250px" }}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className="pb-3">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="text-center">
                      <h4>Search now.....</h4>
                      <div className="subcribe-form mt-4">
                        <form>
                          <div className="mb-0">
                            <input type="text" id="help" name="name" className="border rounded-pill" required="" placeholder="Search" />
                            <button type="submit" className="btn btn-pills btn-primary">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <li className="list-inline-item mb-0 ms-1">
            <div className="dropdown dropdown-primary">
              <button
                type="button"
                className="btn btn-pills btn-soft-primary dropdown-toggle p-0"
                onClick={() => setModal(!modal)}
              >
                <img src={dr1} className="avatar avatar-ex-small rounded-circle" alt="" />
              </button>
              <div
                className={`${modal === true ? "show" : ""} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`}
                style={{ minWidth: "200px", left: "-9rem" }}
              >
                <Link className="dropdown-item d-flex align-items-center text-dark" to="/doctor-profile">
                  <img src={test_url_images + token?.profile_picture} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                  <div className="flex-1 ms-2">
                    <span className="d-block mb-1">{token?.full_name}</span>
                    <small className="text-muted">{token?.specialization}</small>
                  </div>
                </Link>
                <Link className="dropdown-item text-dark mb-2" to="/doctor-dashboard">
                  <span className="mb-0 d-inline-block me-1">
                    <GrDashboard className="align-middle h6 mb-0" />
                  </span>{" "}
                  Dashboard
                </Link>
                <Link className="dropdown-item text-dark" to="/doctor-profile-setting">
                  <span className="mb-0 d-inline-block me-1">
                    <FiSettings className="align-middle h6 mb-0" />
                  </span>{" "}
                  Profile Settings
                </Link>
                <div className="dropdown-divider border-top"></div>
                <Link className="dropdown-item text-dark" to="/login">
                  <span className="mb-0 d-inline-block me-1">
                    <LiaSignOutAltSolid className="align-middle h6 mb-0" />
                  </span>{" "}
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}