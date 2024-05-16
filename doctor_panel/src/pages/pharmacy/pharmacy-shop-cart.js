import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import CounterTwo from "../../components/counterTwo";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import { cartData } from "../../data/data";
import {LiaTimesSolid} from '../../assets/icons/vander'

export default function ShopCart(){
    return(
        <>
            <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
            <section className="bg-half-170 d-table w-100 bg-light">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4">Shop Cart</h3>
                                <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 bg-transparent">
                                        <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                        <li className="breadcrumb-item"><Link to="/pharmacy">Pharmacy</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop Cart</li>
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
                    <div className="col-12">
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table table-center table-padding mb-0">
                                <thead>
                                    <tr>
                                        <th className="border-bottom p-3" style={{minWidth:'20px'}}></th>
                                        <th className="border-bottom p-3" style={{minWidth:'300px'}}>Product</th>
                                        <th className="border-bottom text-center p-3" style={{minWidth:'160px'}}>Price</th>
                                        <th className="border-bottom text-center p-3" style={{minWidth:'190px'}}>Qty</th>
                                        <th className="border-bottom text-end p-3" style={{minWidth:'50px'}}>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartData.map((item,index) =>{
                                        return(
                                            <tr key={index}>
                                                <td className="h5 p-3 text-center"><Link to="#" className="text-danger"><LiaTimesSolid /></Link></td>
                                                <td className="p-3">
                                                    <div className="d-flex align-items-center">
                                                        <img src={item.image} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                                        <h6 className="mb-0 ms-3">{item.name}</h6>
                                                    </div>
                                                </td>
                                                <td className="text-center p-3">{item.price}</td>
                                                <td className="text-center shop-list p-3">
                                                    <CounterTwo/>
                                                </td>
                                                <td className="text-end font-weight-bold p-3">{item.priceTwo}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-6 mt-4 pt-2">
                        <Link to="#" className="btn btn-primary">Shop More</Link>
                        <Link to="#" className="btn btn-soft-primary ms-2">Update Cart</Link>
                    </div>
                    <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                        <div className="table-responsive bg-white rounded shadow">
                            <table className="table table-center table-padding mb-0">
                                <tbody>
                                    <tr>
                                        <td className="h6 p-3">Subtotal</td>
                                        <td className="text-end font-weight-bold p-3">$ 2190</td>
                                    </tr>
                                    <tr>
                                        <td className="h6 p-3">Taxes</td>
                                        <td className="text-end font-weight-bold p-3">$ 219</td>
                                    </tr>
                                    <tr className="bg-light">
                                        <td className="h6 p-3">Total</td>
                                        <td className="text-end font-weight-bold p-3">$ 2409</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 pt-2 text-end">
                            <Link to="#" className="btn btn-primary">Proceed to checkout</Link>
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