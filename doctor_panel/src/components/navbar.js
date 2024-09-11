/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logoDark from "../assets/images/logo-tag.png";
import logoLight from "../assets/images/logo-tag.png";

import Offcanvas from "react-bootstrap/Offcanvas";

import {
  FiSettings,
  FiSearch,
  FiCalendar,
  LiaSignOutAltSolid,
  FiXOctagon,
  FiPhoneCall,
  FiUsers,
  FiUser,
} from "../assets/icons/vander";
import { useSelector } from "react-redux";
import { doctorDetails } from "../redux/reducers/functionalities.reducer";
import { test_url_images } from "../config/environment";
import { useIsMobile } from "../utils/commonFunctions";

export default function Navbar({ navDark, containerClass }) {
  let token = useSelector(doctorDetails);
  const isMobile = useIsMobile();

  let [show, setShow] = useState(false);
  let [scroll, setScroll] = useState(false);
  let [isMenu, setisMenu] = useState(false);
  let [modal, setModal] = useState(false);


  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);

  let [manu, setManu] = useState("");
  let location = useLocation();
  let list_to_show_hamburger = ["doctor-dashboard", "doctor-appointment", "patient-review", "doctor-profile-setting", "doctor-leave"]
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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

  }, []);
  useEffect(()=>{
    let elem = document.getElementById("navigation23")
    if(elem){
      elem.style.display = "none"

    }
  },[])



  let toggleMenu = () => {
    setisMenu(!isMenu);
    let elem = document.getElementById("navigation23")
    if (elem) {
      if (elem.style.display == "none" && !isMenu){
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
      style={{
        maxWidth:"100vw"
      }}
    >
      <div className={containerClass}>
        <div>
          {navDark === true ? (
            <Link className="logo" to="/doctor-dashboard">
              <img
                src={logoDark}
                style={  {  
                  objectFit: "cover",
                  height: "2rem",
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
              <img
                src={test_url_images + token?.hospital?.logo}
                style={  {  
                  objectFit: "cover",
                  height: "5rem",
                  marginLeft: "1rem",
                  width: "7rem"
              
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
        {list_to_show_hamburger.includes(manu) &&
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
        </div>}

        <ul className="dropdowns list-inline mb-0">
          <li className="list-inline-item mb-0 ms-1">

          </li>
          <Offcanvas show={show} onHide={handleClose} placement="top" style={{ height: "250px" }}>
            <Offcanvas.Header closeButton></Offcanvas.Header>

          </Offcanvas>
          <li className="list-inline-item mb-0 ms-1">
      <div className="dropdown dropdown-primary" style={{ display: "flex", gap: "1rem" }}>
        {!isMobile && !list_to_show_hamburger.includes(manu) &&
          <div className="flex-1 ms-2">
            <span className="d-block" style={{ fontWeight: "600", marginBottom: "0rem !important" }}>Dr {token?.full_name}</span>
            <small className="text-muted">{token?.specialization}</small>
          </div>
          
          }

          {!isMobile &&
          <>
        <button
          type="button"
          className={`btn btn-pills btn-soft-primary dropdown-toggle p-0 ${list_to_show_hamburger.includes(manu) && "classic-nav-width"}`}
          onClick={() => setModal(!modal)}
        >
          {list_to_show_hamburger.includes(manu) ?
            <i class="hamburger-menu mdi mdi-menu" style={{ fontSize: "1.3rem" }}></i>
            :
            <img src={test_url_images + token?.profile_picture} className="avatar avatar-ex-small rounded-circle" alt="" />}
        </button>
        <div
          ref={dropdownRef}
          className={`${modal === true ? "show" : ""} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3 ${list_to_show_hamburger.includes(manu) && "classic-nav-left"}`}
          style={{ minWidth: "200px", left: "-5rem" }}
        >
          <Link className="dropdown-item text-dark mb-2" to="/doctor-profile-setting">
            <span className="mb-0 d-inline-block me-1">
              <FiUsers className="align-middle h6 mb-0" />
            </span>{" "}
            My Profile
          </Link>
          <Link className="dropdown-item text-dark mb-2" to="/doctor-leave">
            <span className="mb-0 d-inline-block me-1">
              <FiCalendar className="align-middle h6 mb-0" />
            </span>{" "}
            Leave
          </Link>
          <a href="https://ujurcare.com/" target="_blank" className="dropdown-item text-dark mb-2">
            <span className="mb-0 d-inline-block me-1">
              <FiPhoneCall className="align-middle h6 mb-0" />
            </span>{" "}
            Contact UJUR
          </a>
          <div className="dropdown-divider border-top"></div>
          <Link className="dropdown-item text-dark" to="/logout">
            <span className="mb-0 d-inline-block me-1">
              <LiaSignOutAltSolid className="align-middle h6 mb-0" />
            </span>{" "}
            Logout
          </Link>
        </div>
        </>
}
      </div>
    </li>
        </ul>
      </div>
    </header>
  );
}