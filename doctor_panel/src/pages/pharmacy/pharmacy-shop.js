import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/pharm01.jpg'
import bg2 from '../../assets/images/bg/pharm02.jpg'
import bg3 from '../../assets/images/bg/pharm03.jpg'
import cta from '../../assets/images/pharmacy/cta.jpg'

import Counter from "../../components/counter";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";
import Navbar from "../../components/navbar";

import Carousel from 'react-bootstrap/Carousel';
import { productData, pharmaCategories } from "../../data/data";

import {FiHeart, FiEye,FiShoppingCart} from '../../assets/icons/vander'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function PharmacyShop(){
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

    let [index, setIndex] = useState(0);

    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
   
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>

        <section className="home-slider position-relative">
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={2000} >
                <Carousel.Item>
                    <div className="carousel-item active">
                        <div className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
                            {/* <div className="bg-overlay bg-overlay-dark"></div> */}
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-lg-12">
                                        <div className="heading-title">
                                            <h1 className="fw-bold mb-4">Doctors Prescribe <br/> Meko Products</h1>
                                            <p className="para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary">Shop now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item active">
                        <div className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage:`url(${bg2})`, backgroundPosition:'center'}}>
                            {/* <div className="bg-overlay bg-overlay-dark"></div> */}
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-lg-12">
                                        <div className="heading-title">
                                            <h1 className="fw-bold mb-4">Virus Protection <br/> Gears @15% Off</h1>
                                            <p className="para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary">Shop now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item active">
                        <div className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage:`url(${bg3})`, backgroundPosition:'center'}}>
                            {/* <div className="bg-overlay bg-overlay-dark"></div> */}
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-lg-12">
                                        <div className="heading-title">
                                            <h1 className="fw-bold mb-4">Cosmetics Body <br/> Lotion</h1>
                                            <p className="para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary">Shop now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>

        <section className="section">
           
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Most Viewed Products</h5>
                    </div>
                </div>

                <div className="row">
                    {productData.slice(0,8).map((item, index) =>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card shop-list border-0">
                                    <ul className="label list-unstyled mb-0">
                                        <li><Link to="" className="badge rounded-pill badge-success">Featured</Link></li>
                                    </ul>
                                    <div className="shop-image position-relative overflow-hidden rounded shadow">
                                        <Link to={`/pharmacy-product-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                                        <ul className="list-unstyled shop-icons">
                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-2"><Link to={`/pharmacy-product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                            <li className="mt-2"><Link to="/pharmacy-shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                        </ul>                                

                                       <Counter/>
                                    </div>
                                    <div className="card-body content pt-4 p-2">
                                        <Link to={`/pharmacy-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                        <div className="d-flex justify-content-between mt-1">
                                            <h6 className="text-muted small font-italic mb-0 mt-1">{item.price}</h6>
                                            <ul className="list-unstyled text-warning mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Categories</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mt-4 pt-2">
                        <div className="slider-range-four">
                            <TinySlider settings={settings}>
                                {pharmaCategories.map((item,index) =>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="category-title">
                                                    <span className="text-dark title-white"><span className="h5">{item.title1}</span><br/>{item.title2}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="py-5 px-4 rounded shadow" style={{backgroundImage:`url(${cta})`}}>
                    <div className="row my-lg-5">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h1 className="title mb-4">Clinical Equipments <br/> Stellar Price</h1>
                                <p className="para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                
                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-primary">Shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Popular Products</h5>
                    </div>
                </div>

                <div className="row">
                    {productData.slice(8,12).map((item, index) =>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card shop-list border-0">
                                    <ul className="label list-unstyled mb-0">
                                        <li><Link to="" className="badge rounded-pill badge-success">Featured</Link></li>
                                    </ul>
                                    <div className="shop-image position-relative overflow-hidden rounded shadow">
                                        <Link to={`/pharmacy-product-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                                        <ul className="list-unstyled shop-icons">
                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-2"><Link to={`/pharmacy-product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                            <li className="mt-2"><Link to="/pharmacy-shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                        </ul>                               

                                       <Counter/>
                                    </div>
                                    <div className="card-body content pt-4 p-2">
                                        <Link to={`/pharmacy-product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                        <div className="d-flex justify-content-between mt-1">
                                            <h6 className="text-muted small font-italic mb-0 mt-1">{item.price}</h6>
                                            <ul className="list-unstyled text-warning mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Recent Products</h5>
                    </div>
                </div>

                <div className="row">
                    {productData.slice(12,16).map((item, index) =>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card shop-list border-0">
                                    <div className="shop-image position-relative overflow-hidden rounded shadow">
                                        <Link to="pharmacy-product-detail.html"><img src={item.image}className="img-fluid" alt=""/></Link>
                                        <ul className="list-unstyled shop-icons">
                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-2"><Link to={`/pharmacy-product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                            <li className="mt-2"><Link to="/pharmacy-shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                        </ul>                               

                                        <Counter/>
                                    </div>
                                    <div className="card-body content pt-4 p-2">
                                        <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">{item.name}</Link>
                                        <div className="d-flex justify-content-between mt-1">
                                            <h6 className="text-muted small font-italic mb-0 mt-1">{item.price}</h6>
                                            <ul className="list-unstyled text-warning mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}