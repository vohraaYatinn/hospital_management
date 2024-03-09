import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/slider01.jpg'
import bg2 from '../../assets/images/bg/slider02.jpg'
import bg3 from '../../assets/images/bg/slider03.jpg'
import about1 from '../../assets/images/pharmacy/doctor.jpg'
import about2 from '../../assets/images/pharmacy/delivery.jpg'
import download from '../../assets/images/pharmacy/download.png'

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { franchiseProcess, partners, patientsData, pharmaCategories } from "../../data/data";

import {FiChevronRight, FiSmartphone} from '../../assets/icons/vander'

export default function Pharmacy(){
    let settings = {
        container: '.slider-range-four',
        items: 4,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },
            

            320: {
                items: 1
            },
        },
      };
      let settings1 = {
        container: '.client-review-slider',
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
    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>

        <section className="home-slider position-relative">
            <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false}>
                <div className="carousel-item active">
                    <div className="bg-half-260 d-table align-items-center w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
                        <div className="bg-overlay bg-overlay-dark"></div>
                        <div className="container">
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-12 text-center">
                                    <div className="heading-title">
                                        <p className="text-white-50">Trusted Care</p>
                                        <h1 className="fw-bold text-white title-dark mb-4">Provide Genuine medicine</h1>
                                        <p className="para-desc mx-auto text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                        
                                        <div className="mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active" >
                    <div className="bg-half-260 d-table align-items-center w-100" style={{backgroundImage:`url(${bg2})`, backgroundPosition:'center'}}>
                        <div className="bg-overlay bg-overlay-dark"></div>
                        <div className="container">
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-12 text-center">
                                    <div className="heading-title">
                                        <p className="text-light title-dark">Comprohensive Information</p>
                                        <h1 className="fw-bold text-white title-dark mb-4">Know your medicines</h1>
                                        <p className="para-desc mx-auto text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                        
                                        <div className="mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <div className="bg-half-260 d-table align-items-center w-100" style={{backgroundImage:`url(${bg3})`, backgroundPosition:'center'}}>
                        <div className="bg-overlay bg-overlay-dark"></div>
                        <div className="container">
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-12 text-center">
                                    <div className="heading-title">
                                        <p className="text-light title-dark">Available Everywhare</p>
                                        <h1 className="fw-bold text-white title-dark mb-4">Delivering in 100+ Cities</h1>
                                        <p className="para-desc mx-auto text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                        
                                        <div className="mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </Carousel>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Browse medicines & health products</h4>
                            <p className="text-muted para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pharmaCategories.map((item, index) =>{
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2" key={index}>
                                <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="category-title">
                                        <span className="text-dark title-white"><span className="h5">{item.title1}</span><br/>{item.title2}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4 pt-2">
                        <Link to="#" className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Franchise Process</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="col-md-12">
                            <div className="slider-range-four tiny-timeline">
                                <TinySlider settings={settings}>
                                    {franchiseProcess.map((item, index) =>{
                                        let Icon = item.icon
                                        return(
                                            <div className="tiny-slide text-center" key={index}>
                                                <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                    <div><Icon className="h4 text-primary"/></div>
                                                    <h6 className="mt-1 mb-0">{item.title}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </TinySlider>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Trusted Customers</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {partners.map((item, index) =>{
                        return(
                            <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2" key={index}>
                                <img src={item} className="avatar avatar-client" alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="#" className="section-title">
                            <p className="text-primary">Introducing consultation desk</p>
                            <h4 className="text-dark">Don’t self medicate. Talk to an expert. Consult a doctor in 2 minutes.</h4>

                            <div className="card mt-4 pharpachy-categories border-0 rounded-md overflow-hidden">
                                <img src={about1} className="img-fluid" alt=""/>
                                <div className="category-title">
                                    <span className="text-white title-dark">Chat with a <br/><span className="h4">Doctor</span></span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <Link to="#" className="section-title">
                            <p className="text-primary">Introducing fast delivery</p>
                            <h4 className="text-dark">Tired of waiting in a queue? Too weak to go down and buy medicines?</h4>

                            <div className="card mt-4 pharpachy-categories border-0 rounded-md overflow-hidden">
                                <img src={about2} className="img-fluid" alt=""/>
                                <div className="category-title">
                                    <span className="text-white title-dark">Home delivery in <br/><span className="h4">2 Hours</span></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="client-review-slider">
                            <TinySlider settings={settings1}>
                                {patientsData.map((item,index) =>{
                                    return(
                                        <div className="tiny-slide text-center" key={index}>
                                            <p className="text-muted fw-normal fst-italic">{item.desc}</p>
                                            <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt=""/>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            </ul>
                                            <h6 className="text-primary">{item.name} <small className="text-muted">{item.title}</small></h6>
                                        </div>
                                    )
                                })}
                            </TinySlider> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5 col-12">
                        <img src={download} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <div className="alert alert-light alert-pills" role="alert">
                                <span className="badge bg-primary rounded-pill me-1">Apps</span>
                                <span className="content">Download now <FiChevronRight className="fea icon-sm align-middle"/> </span>
                            </div>
                            <h4 className="title mb-3">Available for your <br/> Smartphones</h4>
                            <p className="text-muted para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                            <div className="mt-3 mb-4">
                                <Link to="#" className="btn btn-lg btn-dark mt-2 me-2"><i className="mdi mdi-apple"></i> App Store</Link>
                                <Link to="#" className="btn btn-lg btn-dark mt-2"><i className="mdi mdi-google-play"></i> Play Store</Link>
                            </div>

                            <div className="d-inline-block">
                                <div className="pt-4 d-flex align-items-center border-top">
                                    <FiSmartphone className="fea icon-md me-2 text-primary"/>
                                    <div className="content">
                                        <h6 className="mb-0">Install app now on your cellphones</h6>
                                        <Link to="#" className="text-primary">Learn More <i className="mdi mdi-arrow-right"></i></Link> 
                                    </div>
                                </div>
                            </div>
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