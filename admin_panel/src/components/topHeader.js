import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import logoIcon from "../assets/images/logo-icon.png";
import country1 from "../assets/images/language/american.png";
import doctor1 from "../assets/images/doctors/01.jpg";

import {
  FaBars,
  FiSettings,
  FiMail,
  GrDashboard,
  RiLogoutCircleRLine,
} from "../assets/icons/vander";

import { countryData, mailData } from "../data/data";

import SimpleBar from "simplebar-react";

import Offcanvas from "react-bootstrap/Offcanvas";
import PersonChatTwo from "./personChatTwo";

export default function TopHeader({ toggle, setToggle }) {
  let [countryModal, setCountryModal] = useState(false);
  let [mailModal, setMailModal] = useState(false);
  let [userModal, setUserModal] = useState(false);
  let [show, setShow] = useState(false);

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  useEffect(() => {
    const handleclose = () => {
      setCountryModal(false);
    };
    const closeMail = () => {
      setMailModal(false);
    };
    const closeUserModal = () => {
      setUserModal(false);
    };
    // document.addEventListener("mousedown", handleclose);
    // document.addEventListener("mousedown", closeMail);
    // document.addEventListener("mousedown", closeUserModal);

    return () => {
      // document.removeEventListener("mousedown", handleclose);
      // document.removeEventListener("mousedown", closeMail);
      // document.removeEventListener("mousedown", closeUserModal);
    };
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top-header">
      <div className="header-bar d-flex justify-content-between border-bottom">
        <div className="d-flex align-items-center">
          <Link to="#" className="logo-icon">
            <img src={logoIcon} height="30" className="small" alt="" />
            <span className="big">
              <img
                src={logoDark}
                height="22"
                className="logo-light-mode"
                alt=""
              />
              <img
                src={logoLight}
                height="22"
                className="logo-dark-mode"
                alt=""
              />
            </span>
          </Link>
          
        </div>

            <div className="dropdown dropdown-primary">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-soft-primary ms-2"
                onClick={() => setUserModal(!userModal)}
              >
                <FaBars />
                {/* <img
                  src={doctor1}
                  className="avatar avatar-ex-small rounded-circle"
                  alt=""
                /> */}
              </button>
              <div
              ref={dropdownRef}
                className={`${
                  userModal ? "div-div-check-show" : "" 
                } div-div-check`}
                style={{ minWidth: "200px", position: "absolute", right: "0", background:"white" }}
              >
                <Link
                  className="dropdown-item text-dark d-flex align-items-center"
                  to="/index"
                >
                  <span className="mb-0 d-inline-flex me-1">
                    <GrDashboard className="align-middle h6 mb-0" />
                  </span>{" "}
                  Dashboard
                </Link>
                <Link
                  className="dropdown-item text-dark d-flex align-items-center"
                  to="/admins"
                >
                  <span className="mb-0 d-inline-block me-1">
                    <FiSettings className="align-middle h6 mb-0" />
                  </span>{" "}
                  Admins Settings
                </Link>
                <div className="dropdown-divider border-top"></div>
                <Link
                  to={"/logout"}
                  className="dropdown-item text-dark d-flex align-items-center"
                >
                  <span className="mb-0 d-inline-block me-1">
                    <RiLogoutCircleRLine className="align-middle h6 mb-0" />
                  </span>{" "}
                  Logout
                </Link>
              </div>
            </div>
         
      </div>
    </div>
  );
}
