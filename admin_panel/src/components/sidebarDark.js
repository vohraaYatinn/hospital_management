import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'

import {GrDashboard, PiBrowsers, RiStethoscopeLine, LuUser2, PiWheelchairFill, AiOutlineAppstore, PiShoppingCart, MdFlip, FaRegFile, BsEnvelopeOpen, BiLogOutCircle, TbFileInfo, BsPostcard, FaRegComment} from '../assets/icons/vander'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function SidebarDark(){
    const [manu , setManu] = useState('');
    const [subManu , setSubManu] = useState('');
    const location = useLocation();

    useEffect(()=>{
        var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)
        setSubManu(current)
    },[location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    return(
            <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
                <SimpleBar className="sidebar-content" data-simplebar style={{height:'calc(100% - 60px)'}}>
                    <div className="sidebar-brand">
                        <Link to="/index">
                            <img src={logoDark} height="22" className="logo-light-mode" alt=""/>
                            <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                            <span className="sidebar-colored">
                                <img src={logoLight} height="22" alt=""/>
                            </span>
                        </Link>
                    </div>
        
                    <ul className="sidebar-menu">
                        <li className={`${manu === "index" || "/" ? "active" : ""} ms-0`}><Link to="/index"><GrDashboard className="me-2 d-inline-block mb-0 icon"/>Dashboard</Link></li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === "layouts-item" ? "" : "layouts-item")}}><PiBrowsers className="me-2 d-inline-block mb-0 icon"/>Layouts <span className="badge bg-danger rounded-pill ms-2">New</span></Link>
                            <div className={`sidebar-submenu ${["index-dark","index-rtl","index-rtl-dark","index-sidebar-dark","index-sidebar-colored","layouts-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "index-dark" ? "active" : ""} ms-0`}><Link to="/index-dark">Dark Dashboard</Link></li>
                                    <li className={`${manu === "index-rtl" ? "active" : ""} ms-0`}><Link to="/index-rtl">RTL Dashboard</Link></li>
                                    <li className={`${manu === "index-rtl-dark" ? "active" : ""} ms-0`}><Link to="/index-rtl-dark">Dark RTL Dashboard</Link></li>
                                    <li className={`${manu === "index-sidebar-dark" ? "active" : ""} ms-0`}><Link to="/index-sidebar-dark">Dark Sidebar</Link></li>
                                    <li className={`${manu === "index-sidebar-colored" ? "active" : ""} ms-0`}><Link to="/index-sidebar-colored">Colored Sidebar</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className={`${manu === "appointment" ? "active" : ""} ms-0`}><Link to="/appointment"><RiStethoscopeLine className="me-2 d-inline-block mb-0 icon"/>Appointment</Link></li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === "doctors-item" ? "" : "doctors-item")}}><LuUser2 className="me-2 d-inline-block mb-0 icon"/>Doctors</Link>
                            <div className={`sidebar-submenu ${["doctors","add-doctor","dr-profile","doctors-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "doctors" ? "active" : ""} ms-0`}><Link to="/doctors">Doctors</Link></li>
                                    <li className={`${manu === "add-doctor" ? "active" : ""} ms-0`}><Link to="/add-doctor">Add Doctor</Link></li>
                                    <li className={`${manu === "dr-profile" ? "active" : ""} ms-0`}><Link to="/dr-profile">Profile</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'patient-item' ? '' : 'patient-item')}}><PiWheelchairFill className="me-2 d-inline-block mb-0 icon"/>Patients</Link>
                            <div className={`sidebar-submenu ${["patients","add-patient","patient-profile","patient-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "patients" ? "active" : ""} ms-0`}><Link to="/patients">All Patients</Link></li>
                                    <li className={`${manu === "add-patient" ? "active" : ""} ms-0`}><Link to="/add-patient">Add Patients</Link></li>
                                    <li className={`${manu === "patient-profile" ? "active" : ""} ms-0`}><Link to="/patient-profile">Profile</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'app-item' ? '' : 'app-item')}}><AiOutlineAppstore className="me-2 d-inline-block mb-0 icon"/>Apps</Link>
                            <div className={`sidebar-submenu ${["chat","email","calendar","app-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "chat" ? "active" : ""} ms-0`}><Link to="/chat">Chat</Link></li>
                                    <li className={`${manu === "email" ? "active" : ""} ms-0`}><Link to="/email">Email</Link></li>
                                    <li className={`${manu === "calendar" ? "active" : ""} ms-0`}><Link to="/calendar">Calendar</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'pharmacy-item' ? '' : 'pharmacy-item')}}><PiShoppingCart className="me-2 d-inline-block mb-0 icon"/>Pharmacy</Link>
                            <div className={`sidebar-submenu ${["shop","product-detail","shopcart","checkout",'pharmacy-item'].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "shop" ? "active" : ""} ms-0`}><Link to="/shop">Shop</Link></li>
                                    <li className={`${manu === "product-detail" ? "active" : ""} ms-0`}><Link to="/product-detail">Shop Detail</Link></li>
                                    <li className={`${manu === "shopcart" ? "active" : ""} ms-0`}><Link to="/shopcart">Shopcart</Link></li>
                                    <li className={`${manu === "checkout" ? "active" : ""} ms-0`}><Link to="/checkout">Checkout</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'blog-item' ? '' : 'blog-item')}}><MdFlip className="me-2 d-inline-block mb-0 icon"/>Blogs</Link>
                            <div className={`sidebar-submenu ${["blog-detail","blogs",'blog-item'].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "blogs" ? "active" : ""} ms-0`}><Link to="/blogs">Blogs</Link></li>
                                    <li className={`${manu === "blog-detail" ? "active" : ""} ms-0`}><Link to="/blog-detail">Blog Detail</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'page-item' ? '' : 'page-item')}}><FaRegFile className="me-2 d-inline-block mb-0 icon"/>Pages</Link>
                            <div className={`sidebar-submenu ${["faqs","review","invoice-list", "invoice", "terms",  "privacy", "blank-page", 'page-item'].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "faqs" ? "active" : ""} ms-0`}><Link to="/faqs">FAQs</Link></li>
                                    <li className={`${manu === "review" ? "active" : ""} ms-0`}><Link to="/review">Reviews</Link></li>
                                    <li className={`${manu === "invoice-list" ? "active" : ""} ms-0`}><Link to="/invoice-list">Invoice List</Link></li>
                                    <li className={`${manu === "invoice" ? "active" : ""} ms-0`}><Link to="/invoice">Invoice</Link></li>
                                    <li className={`${manu === "terms" ? "active" : ""} ms-0`}><Link to="/terms">Terms & Policy</Link></li>
                                    <li className={`${manu === "privacy" ? "active" : ""} ms-0`}><Link to="/privacy">Privacy Policy</Link></li>
                                    <li className={`${manu === "blank-page" ? "active" : ""} ms-0`}><Link to="/blank-page">Blank Page</Link></li>
                                </ul>
                            </div>
                        </li>
            
                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'mail-item' ? '' : 'mail-item')}}><BsEnvelopeOpen className="me-2 d-inline-block mb-0 icon"/>Email Template </Link>
                            <div className={`sidebar-submenu ${["email-confirmation","email-password-reset",'email-alert',"email-invoice", "mail-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "email-confirmation" ? "active" : ""} ms-0`}><Link to="/email-confirmation">Confirmation</Link></li>
                                    <li className={`${manu === "email-password-reset" ? "active" : ""} ms-0`}><Link to="/email-password-reset">Reset Password</Link></li>
                                    <li className={`${manu === "email-alert" ? "active" : ""} ms-0`}><Link to="/email-alert">Alert</Link></li>
                                    <li className={`${manu === "email-invoice" ? "active" : ""} ms-0`}><Link to="/email-invoice">Invoice</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'auth-item' ? '' : 'auth-item')}}><BiLogOutCircle className="me-2 d-inline-block mb-0 icon"/>Authentication</Link>
                            <div className={`sidebar-submenu ${["login","signup",'forgot-password',"lock-screen", "auth-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className={`${manu === "login" ? "active" : ""} ms-0`}><Link to="/login">Login</Link></li>
                                    <li className={`${manu === "signup" ? "active" : ""} ms-0`}><Link to="/signup">Signup</Link></li>
                                    <li className={`${manu === "forgot-password" ? "active" : ""} ms-0`}><Link to="/forgot-password">Forgot Password</Link></li>
                                    <li className={`${manu === "lock-screen" ? "active" : ""} ms-0`}><Link to="/lock-screen">Lock Screen</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown ms-0">
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
                        </li>

                        <li className="sidebar-dropdown ms-0">
                            <Link to="#" onClick={(e)=>{setSubManu(subManu === 'miscellaneous-item' ? '' : 'miscellaneous-item')}}><BsPostcard className="me-2 d-inline-block mb-0 icon"/>Miscellaneous </Link>
                            <div className={`sidebar-submenu ${["comingsoon","maintenance",'error',"thankyou", "miscellaneous-item"].includes(subManu)? "d-block" : ""}`}>
                                <ul>
                                    <li className="ms-0"><Link to="/comingsoon">Comingsoon</Link></li>
                                    <li className="ms-0"><Link to="/maintenance">Maintenance</Link></li>
                                    <li className="ms-0"><Link to="/error">404 !</Link></li>
                                    <li className="ms-0"><Link to="/thankyou">Thank you...!</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    
                </SimpleBar>
                <ul className="sidebar-footer list-unstyled mb-0">
                    <li className="list-inline-item mb-0 ms-1">
                        <Link to="#" className="btn btn-icon btn-pills btn-soft-primary">
                            <FaRegComment />
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}