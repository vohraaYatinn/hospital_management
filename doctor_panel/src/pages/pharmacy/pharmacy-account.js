import React, { useState } from "react";
import { Link } from "react-router-dom";

import client from '../../assets/images/client/09.jpg'

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import {GrDashboard, MdList, MdArrowCircleDown, FiMapPin, LuUser2, BiSolidEdit} from '../../assets/icons/vander'

export default function PharmacyAccount(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-half-170 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">My Account</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-light rounded mb-0 bg-transparent">
                                    <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                    <li className="breadcrumb-item"><Link to="/pharmacy">Pharmacy</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Account</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center">
                            <img src={client} className="avatar avatar-md-md rounded-circle" alt=""/>
                            <div className="ms-3">
                                <h6 className="text-muted mb-0">Hello,</h6>
                                <h5 className="mb-0">Mrs. Christopher</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0">
                            <li className="nav-item ms-0">
                                <Link className={`${activeIndex === 1 ? 'active' : '' } nav-link rounded`} to="#" onClick={()=>setActiveIndex(1)}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><GrDashboard className="h5 align-middle me-2 mb-0"/> Dashboard</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-0 mt-2">
                                <Link className={`${activeIndex === 2 ? 'active' : '' } nav-link rounded`} to="#" onClick={()=>setActiveIndex(2)}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><MdList className="h5 align-middle me-2 mb-0"/> Orders</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-0 mt-2">
                                <Link className={`${activeIndex === 3 ? 'active' : '' } nav-link rounded`} to="#" onClick={()=>setActiveIndex(3)}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><MdArrowCircleDown className="h5 align-middle me-2 mb-0"/> Downloads</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-0 mt-2">
                                <Link className={`${activeIndex === 4 ? 'active' : '' } nav-link rounded`} to="#" onClick={()=>setActiveIndex(4)}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><FiMapPin className="h5 align-middle me-2 mb-0"/> Addresses</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-0 mt-2">
                                <Link className={`${activeIndex === 5 ? 'active' : '' } nav-link rounded`} to="#" onClick={()=>setActiveIndex(5)}>
                                    <div className="text-start py-1 px-3">
                                        <h6 className="mb-0"><LuUser2 className="h5 align-middle me-2 mb-0"/> Account Details</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-8 col-12 mt-4 pt-2">
                        <div className="tab-content">
                            {activeIndex === 1 ? 
                                <div className="tab-pane fade show active shadow rounded p-4">
                                    <p className="text-muted">Hello <span className="text-dark">christopher</span> (not <span className="text-dark fw-bold">christopher</span>? <Link to="#" className="text-danger fw-bold">Log out</Link>)</p>

                                    <p className="text-muted mb-0">From your account dashboard you can view your <Link to="#" className="text-danger fw-bold">recent orders</Link>, manage your <Link to="#" className="text-danger fw-bold">shipping and billing addresses</Link>, and <Link to="#" className="text-danger fw-bold">edit your password and account details</Link>.</p>
                                </div>:''
                            }
                            {activeIndex === 2 ? 
                                <div className="tab-pane fade show active shadow rounded p-4">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3" scope="col">Order no.</th>
                                                    <th className="border-bottom p-3" scope="col">Date</th>
                                                    <th className="border-bottom p-3" scope="col">Status</th>
                                                    <th className="border-bottom p-3" scope="col">Total</th>
                                                    <th className="border-bottom p-3" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3">7107</td>
                                                    <td className="p-3">1st November 2020</td>
                                                    <td className="text-success p-3">Delivered</td>
                                                    <td className="p-3">$ 320 <span className="text-muted">for 2items</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8007</td>
                                                    <td className="p-3">4td November 2020</td>
                                                    <td className="text-muted p-3">Processing</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8008</td>
                                                    <td className="p-3">4th November 2020</td>
                                                    <td className="text-danger p-3">Canceled</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : ''
                            }
                            {activeIndex === 3 ?
                                <div className="tab-pane fade show active shadow rounded p-4">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3" scope="col">Product Name</th>
                                                    <th className="border-bottom p-3" scope="col">Description</th>
                                                    <th className="border-bottom p-3" scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3">Quick heal</td>
                                                    <td className="text-muted p-3">It is said that song composers of the past <br/> used dummy texts as lyrics when writing <br/> melodies in order to have a 'ready-made' <br/> text to sing with the melody.</td>
                                                    <td className="text-success p-3">Downloaded</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 4 ?
                                <div className="tab-pane fade show active shadow rounded p-4">
                                    <h6 className="text-muted mb-0">The following addresses will be used on the checkout page by default.</h6>

                                    <div className="row">
                                        <div className="col-lg-6 mt-4 pt-2">
                                            <div className="d-flex align-items-center mb-4 justify-content-between">
                                                <h5 className="mb-0">Billing Address:</h5>
                                                <Link to="#" className="text-primary h5 mb-0"><BiSolidEdit className="mb-0 align-middle"/></Link>
                                            </div>
                                            <div className="pt-4 border-top">
                                                <p className="h6">Cally Joseph</p>
                                                <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                                <p className="text-muted mb-0">Suite 558,</p>
                                                <p className="text-muted mb-0">Houston, USA 485</p>
                                                <p className="text-muted mb-0">+123 897 5468</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mt-4 pt-2">
                                            <div className="d-flex align-items-center mb-4 justify-content-between">
                                                <h5 className="mb-0">Shipping Address:</h5>
                                                <Link to="#" className="text-primary h5 mb-0" ><BiSolidEdit className="mb-0 align-middle"/></Link>
                                            </div>
                                            <div className="pt-4 border-top">
                                                <p className="h6">Cally Joseph</p>
                                                <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                                <p className="text-muted mb-0">Suite 558,</p>
                                                <p className="text-muted mb-0">Houston, USA 485</p>
                                                <p className="text-muted mb-0">+123 897 5468</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 5 ?
                                <div className="tab-pane fade show active shadow rounded p-4">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input name="name" id="first-name" type="text" className="form-control" defaultValue="Cally"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input name="name" id="last-name" type="text" className="form-control" defaultValue="Joseph"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email</label>
                                                    <input name="email" id="email" type="email" className="form-control" defaultValue="callyjoseph@gmail.com"/>
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Display Name</label>
                                                    <input name="name" id="display-name" type="text" className="form-control" defaultValue="christopher"/>
                                                </div> 
                                            </div>

                                            <div className="col-lg-12 mt-2 mb-0">
                                                <button className="btn btn-primary">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>

                                    <h5 className="mt-4">Change password :</h5>
                                    <form>
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Old password :</label>
                                                    <input type="password" className="form-control" placeholder="Old password" required=""/>
                                                </div>
                                            </div>
        
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">New password :</label>
                                                    <input type="password" className="form-control" placeholder="New password" required=""/>
                                                </div>
                                            </div>
        
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Re-type New password :</label>
                                                    <input type="password" className="form-control" placeholder="Re-type New password" required=""/>
                                                </div>
                                            </div>
        
                                            <div className="col-lg-12 mt-2 mb-0">
                                                <button className="btn btn-primary">Save Password</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}