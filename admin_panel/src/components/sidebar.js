import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";


import {
  GrDashboard,
  PiBrowsers,
  RiStethoscopeLine,
  LuUser2,
  PiWheelchairFill,
  AiOutlineAppstore,
  PiShoppingCart,
  MdFlip,
  FaRegFile,
  BsEnvelopeOpen,
  BiLogOutCircle,
  TbFileInfo,
  BsPostcard,
  FaRegComment,
  CiHospital1,
  PiTreeStructureFill,
  MdOutlineReviews,
  LiaPercentageSolid,
  LiaSignOutAltSolid,
} from "../assets/icons/vander";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { isNumber, useIsMobile } from "../utils/commonFunctions";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Sidebar({ manuClass }) {
  const [manu, setManu] = useState("");
  const [subManu, setSubManu] = useState("");
  const location = useLocation();
  const isMobile = useIsMobile()

  useEffect(() => {
    let current = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    if (isNumber(current)) {
      const pathname = location.pathname;
      const segments = pathname.split("/");
      current = segments[1];
      console.log(current);
    }
    setManu(current);
    setSubManu(current);
  }, [location.pathname.substring(location.pathname.lastIndexOf("/") + 1)]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <nav id="sidebar" className={manuClass}>
      <SimpleBar
        className="sidebar-content"
        data-simplebar
        style={{ height: "calc(100% - 60px)" }}
      >
        <div className="sidebar-brand">
          <Link to="/index">
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
            <span className="sidebar-colored">
              <img src={logoLight} height="22" alt="" />
            </span>
          </Link>
        </div>

        <ul className="sidebar-menu">
          <li className={`${manu === "index" || "" ? "active" : ""} ms-0`}>
            <Link to="/index">
              <GrDashboard className="me-2 d-inline-block mb-0 icon" />
              Dashboard
            </Link>
          </li>
          {/* <li
            className={`sidebar-dropdown ms-0 ${
              ["admin", "add-admin", "admin-profile", "admin-item"].includes(
                manu
              )
                ? "active"
                : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                setSubManu(subManu === "admin-item" ? "" : "admin-item");
              }}
            >
              <LuUser2 className="me-2 d-inline-block mb-0 icon" />
              Admins Accounts
            </Link>
            <div
              className={`sidebar-submenu ${
                ["admins", "add-admin", "admin-profile", "admin-item"].includes(
                  subManu
                )
                  ? "d-block"
                  : ""
              }`}
            >
              <ul>
                <li className={`${manu === "admins" ? "active" : ""} ms-0`}>
                  <Link to="/admins">All Admins</Link>
                </li>
                <li className={`${manu === "add-admin" ? "active" : ""} ms-0`}>
                  <Link to="/add-admin">Add Admins</Link>
                </li>
              </ul>
            </div>
          </li> */}
          <li
            className={`sidebar-dropdown ms-0 ${
              [
                "hospitals",
                "add-hospital",
                "hospital-profile",
                "hospital-item",
              ].includes(manu)
                ? "active"
                : ""
            }`}
          >
            <div
              className={`sidebar-submenu ${
                [
                  "hospitals",
                  "add-hospital",
                  "hospital-profile",
                  "hospital-item",
                ].includes(subManu)
                  ? "d-block"
                  : ""
              }`}
            ></div>
          </li>
          {/* <li
            className={`sidebar-dropdown ms-0 ${
              ["hospitals-admin", ""].includes(manu)
                ? "active"
                : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                setSubManu(
                  subManu === "add-hospital-admin" ? "" : "add-hospital-admin"
                );
              }}
            >
              <PiWheelchairFill className="me-2 d-inline-block mb-0 icon" />
              Hospital Accounts
            </Link>
            <div
              className={`sidebar-submenu ${
                ["hospitals-admin", "add-hospital-admin"].includes(subManu)
                  ? "d-block"
                  : ""
              }`}
            >
              <ul>
               
              
              </ul>
            </div>
          </li> */}
          <li
            className={`sidebar-dropdown ms-0 ${
              [
                "hospitals",
                "add-hospital",
                "hospital-profile",
                "hospital-item",
                "hospitals-admin", "add-hospital-admin"
              ].includes(manu)
                ? "active"
                : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                setSubManu(subManu === "hospital-item" ? "" : "hospital-item");
              }}
            >
              <CiHospital1 className="me-2 d-inline-block mb-0 icon" />
              Hospitals
            </Link>
            <div
              className={`sidebar-submenu ${
                [
                  "hospitals",
                  "add-hospital",
                  "hospital-profile",
                  "hospital-item",
                  "hospitals-admin", "add-hospital-admin"
                ].includes(subManu)
                  ? "d-block"
                  : ""
              }`}
            >
              <ul>
              <li
                  className={`${manu === "add-hospital" ? "active" : ""} ms-0`}
                >
                  <Link to="/add-hospital">Add Hospital</Link>
                </li>
                <li className={`${manu === "hospitals" ? "active" : ""} ms-0`}>
                  <Link to="/hospitals">Current Hospitals</Link>
                </li>
                {/* <li
                  className={`${
                    manu === "add-hospital-admin" ? "active" : ""
                  } ms-0`}
                >
                  <Link to="/add-hospital-admin">Add Hospital Admins</Link>
                </li> */}

                <li
                  className={`${
                    manu === "hospitals-admin" ? "active" : ""
                  } ms-0`}
                >
                  <Link to="/hospitals-admin">All Hospital Account</Link>
                </li>
              </ul>
            </div>
          </li>

          <li
            className={`sidebar-dropdown ms-0 ${
              ["doctors", "add-doctor", "dr-profile", "doctors-item"].includes(
                manu
              )
                ? "active"
                : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                setSubManu(subManu === "doctors-item" ? "" : "doctors-item");
              }}
            >
              <LuUser2 className="me-2 d-inline-block mb-0 icon" />
              Doctors Accounts
            </Link>
            <div
              className={`sidebar-submenu ${
                [
                  "doctors",
                  "add-doctor",
                  "dr-profile",
                  "doctors-item",
                ].includes(subManu)
                  ? "d-block"
                  : ""
              }`}
            >
              <ul>
              <li className={`${manu === "add-doctor" ? "active" : ""} ms-0`}>
                  <Link to="/add-doctor">Add Doctor</Link>
                </li>
                <li className={`${manu === "doctors" ? "active" : ""} ms-0`}>
                  <Link to="/doctors">Current Doctors</Link>
                </li>
               
              </ul>
            </div>
          </li>

          <li className={`${manu === "appointment" ? "active" : ""} ms-0`}>
            <Link to="/appointment">
              <RiStethoscopeLine className="me-2 d-inline-block mb-0 icon" />
              Appointment
            </Link>
          </li>
          <li className={`${manu === "revenue-tab" ? "active" : ""} ms-0`}>
            <Link to="/revenue-tab">
              <FaIndianRupeeSign className="me-2 d-inline-block mb-0 icon" />
              Revenue
            </Link>
          </li>
          <li className={`${manu === "departments" ? "active" : ""} ms-0`}>
            <Link to="/departments">
              {/* <RiStethoscopeLine  /> */}
              <PiTreeStructureFill className="me-2 d-inline-block mb-0 icon"/>
              Departments
            </Link>
          </li>
          {/* <li className={`${manu === "departments" ? "active" : ""} ms-0`}>
            <Link to="/admin-reviews">
              <RiStethoscopeLine className="me-2 d-inline-block mb-0 icon" />
              Reviews
            </Link>
          </li> */}
          {/* <li className={`${manu === "review" ? "active" : ""} ms-0`}><Link to="/review"><RiStethoscopeLine className="me-2 d-inline-block mb-0 icon"/>Reviews</Link></li> */}
          {/* <li className={`${manu === "doctor-leave" ? "active" : ""} ms-0`}><Link to="/doctor-leave"><RiStethoscopeLine className="me-2 d-inline-block mb-0 icon"/>Leave Request</Link></li> */}

          <li
            className={` ms-0 ${
              [
                "patients",
                "add-patient",
                "patient-profile",
                "patient-item",
              ].includes(manu)
                ? "active"
                : ""
            }`}
          >
            <Link
              to="/patients"
              onClick={(e) => {
                setSubManu(subManu === "patient-item" ? "" : "patient-item");
              }}
            >
              <PiWheelchairFill className="me-2 d-inline-block mb-0 icon" />
              Patients
            </Link>
            <div
              className={`sidebar-submenu ${
                [
                  "patients",
                  "add-patient",
                  "patient-profile",
                  "patient-item",
                ].includes(subManu)
                  ? "d-block"
                  : ""
              }`}
            >
             
            </div>
          </li>

          <li className={`${manu === "admin-review" ? "active" : ""} ms-0`}>
            <Link to="/review">
              <MdOutlineReviews  className="me-2 d-inline-block mb-0 icon" />
              Reviews
            </Link>
          </li>
          <li className={`${manu === "promocode" ? "active" : ""} ms-0`}>
            <Link to="/promocode">
              <LiaPercentageSolid     className="me-2 d-inline-block mb-0 icon" />
              Promo Code
            </Link>
          </li>
          {isMobile &&
          <li className={`${manu === "promocode" ? "active" : ""} ms-0`}>
            <Link to="/logout">
              <LiaSignOutAltSolid     className="me-2 d-inline-block mb-0 icon" />
              Logout
            </Link>
          </li>
          }

          {/* <li className={`${manu === "reset-password" ? "active" : ""} ms-0`}><Link to="/reset-password"><RiStethoscopeLine className="me-2 d-inline-block mb-0 icon"/>Reset Password</Link></li> */}

          {/* <li className={`sidebar-dropdown ms-0 ${["login","signup",'forgot-password',"lock-screen", "auth-item"].includes(manu)? "active" : ""}`}>
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'auth-item' ? '' : 'auth-item')}}><BiLogOutCircle className="me-2 d-inline-block mb-0 icon"/>Authentication</Link>
                            <div className={`sidebar-submenu ${["login","signup",'forgot-password',"lock-screen", "auth-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "login" ? "active" : ""} ms-0`}><Link to="/login">Login</Link></li>
                                    <li className={`${manu === "signup" ? "active" : ""} ms-0`}><Link to="/signup">Signup</Link></li>
                                    <li className={`${manu === "forgot-password" ? "active" : ""} ms-0`}><Link to="/forgot-password">Forgot Password</Link></li>
                                    <li className={`${manu === "lock-screen" ? "active" : ""} ms-0`}><Link to="/lock-screen">Lock Screen</Link></li>
                                </ul>
                            </div>
                        </li> */}

          {/* <li className={`sidebar-dropdown ms-0 ${["ui-button","ui-badges",'ui-alert',"ui-dropdown", "ui-typography", "ui-background", "ui-text", "ui-tooltip-popover","ui-shadow", "ui-border", "ui-form", "ui-pagination", "ui-avatar", "ui-modals", "ui-icons", 'ui-item'].includes(manu)? "active" : ""}`}>
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'ui-item' ? '' : 'ui-item')}}><TbFileInfo className="me-2 d-inline-block mb-0 icon"/>UI Components </Link>
                            <div className={`sidebar-submenu ${["ui-button","ui-badges",'ui-alert',"ui-dropdown", "ui-typography", "ui-background", "ui-text", "ui-tooltip-popover","ui-shadow", "ui-border", "ui-form", "ui-pagination", "ui-avatar", "ui-modals", "ui-icons", 'ui-item'].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "ui-button" ? "active" : ""} ms-0`}><Link to="/ui-button">Buttons</Link></li>
                                    <li className={`${manu === "ui-badges" ? "active" : ""} ms-0`}><Link to="/ui-badges">Badges</Link></li>
                                    <li className={`${manu === "ui-alert" ? "active" : ""} ms-0`}><Link to="/ui-alert">Alert</Link></li>
                                    <li className={`${manu === "ui-dropdown" ? "active" : ""} ms-0`}><Link to="/ui-dropdown">Dropdowns</Link></li>
                                    <li className={`${manu === "ui-typography" ? "active" : ""} ms-0`}><Link to="/ui-typography">Typography</Link></li>
                                    <li className={`${manu === "ui-background" ? "active" : ""} ms-0`}><Link to="/ui-background">Background</Link></li>
                                    <li className={`${manu === "ui-text" ? "active" : ""} ms-0`}><Link to="/ui-text">Text Color</Link></li>
                                    <li className={`${manu === "ui-tooltip-popover" ? "active" : ""} ms-0`}><Link to="/ui-tooltip-popover">Tooltips & Popovers</Link></li>
                                    <li className={`${manu === "ui-shadow" ? "active" : ""} ms-0`}><Link to="/ui-shadow">Shadows</Link></li>
                                    <li className={`${manu === "ui-border" ? "active" : ""} ms-0`}><Link to="/ui-border">Border</Link></li>
                                    <li className={`${manu === "ui-form" ? "active" : ""} ms-0`}><Link to="/ui-form">Form Elements</Link></li>
                                    <li className={`${manu === "ui-pagination" ? "active" : ""} ms-0`}><Link to="/ui-pagination">Pagination</Link></li>
                                    <li className={`${manu === "ui-avatar" ? "active" : ""} ms-0`}><Link to="/ui-avatar">Avatars</Link></li>
                                    <li className={`${manu === "ui-modals" ? "active" : ""} ms-0`}><Link to="/ui-modals">Modals</Link></li>
                                    <li className={`${manu === "ui-icons" ? "active" : ""} ms-0`}><Link to="/ui-icons">Icons</Link></li>
                                </ul>
                            </div>
                        </li> */}
          {/* <li className={`${manu === "logout" ? "active" : ""} ms-0`}>
            <Link to="/logout">
              <RiStethoscopeLine className="me-2 d-inline-block mb-0 icon" />
              logout
            </Link>
          </li> */}

          {/* <li className={`sidebar-dropdown ms-0 ${["comingsoon","maintenance",'error',"thankyou", "miscellaneous-item"].includes(manu)? "active" : ""}`}>
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'miscellaneous-item' ? '' : 'miscellaneous-item')}}><BsPostcard className="me-2 d-inline-block mb-0 icon"/>Miscellaneous </Link>
                            <div className={`sidebar-submenu ${["comingsoon","maintenance",'error',"thankyou", "miscellaneous-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className="ms-0"><Link to="/comingsoon">Comingsoon</Link></li>
                                    <li className="ms-0"><Link to="/maintenance">Maintenance</Link></li>
                                    <li className="ms-0"><Link to="/error">404 !</Link></li>
                                    <li className="ms-0"><Link to="/thankyou">Thank you...!</Link></li>
                                </ul>
                            </div>
                        </li> */}
        </ul>
      </SimpleBar>
      
    </nav>
  );
}
