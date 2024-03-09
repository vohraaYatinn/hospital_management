import React from "react";
import { Link, useParams } from "react-router-dom";

import shop1 from '../../assets/images/pharmacy/shop/01.jpg'
import shop2 from '../../assets/images/pharmacy/shop/02.jpg'
import shop3 from '../../assets/images/pharmacy/shop/03.jpg'
import shop4 from '../../assets/images/pharmacy/shop/04.jpg'

import Navbar from "../../components/navbar";
import { productData } from "../../data/data";
import Counter from "../../components/counter";
import CounterTwo from "../../components/counterTwo";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import {FiHeart, FiEye,FiShoppingCart} from '../../assets/icons/vander'
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

export default function PharmacyProductDetail(){
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
      let settings2 = {
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

    let params = useParams();
    let id = params.id
    let data = productData.find((item)=>item.id === parseInt(id))
    let productImage = [shop1,shop2, shop3, shop4]
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-half-170 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">{data?.name ? data.name :'Plastic Medicine Box'}</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-light rounded mb-0 bg-transparent">
                                    <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                    <li className="breadcrumb-item"><Link to="/pharmacy">Pharmacy</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
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
                <div className="row align-items-center">
                    {data?.image? 
                    <div className="col-md-5">
                       <img src={data.image} className="img-fluid rounded" alt=""/>
                    </div>:
                    <div className="col-md-5">
                        <div className="client-review-slider">
                        <TinySlider settings={settings2}>
                            {productImage.map((item,index) =>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <img src={item} className="img-fluid rounded" alt=""/>
                                    </div>
                                )
                            })}
                        </TinySlider>      
                        </div>
                    </div>
                    }

                    <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-md-4">
                            <h4 className="title">{data?.name ? data.name :'Plastic Medicine Box'}</h4>
                            <h5 className="text-muted">{data?.price ? data.price : '$21.00 '}</h5>
                            <ul className="list-unstyled text-warning h5 mb-0">
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item me-2 h6 text-muted">(20 Ratting)</li>
                            </ul>
                            
                            <h5 className="mt-4 py-2">Overview :</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                        
                            <div className="d-flex shop-list align-items-center">
                                <h6 className="mb-0">Quantity:</h6>
                                <CounterTwo/>
                            </div>

                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Shop Now</Link>
                                <Link to="/pharmacy-shop-cart" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Related Products:</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mt-4 pt-2">
                        <div className="slider-range-four">
                            <TinySlider settings={settings}>
                                {productData.map((item,index) =>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="card shop-list border-0">
                                                <ul className="label list-unstyled mb-0">
                                                    <li><Link to="#" className="badge rounded-pill badge-success">Featured</Link></li>
                                                </ul>
                                                <div className="shop-image position-relative overflow-hidden">
                                                    <Link to="pharmacy-product-detail.html"><img src={item.image} className="img-fluid" alt=""/></Link>
                                                    <ul className="list-unstyled shop-icons">
                                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                        <li className="mt-2"><Link to={`/pharmacy-product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                                        <li className="mt-2"><Link to="/pharmacy-shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                                    </ul>                                 
                    
                                                <Counter/>
                                                </div>
                                                <div className="card-body content pt-4 p-2">
                                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Thermometer</Link>
                                                    <div className="d-flex justify-content-between mt-1">
                                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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
                            </TinySlider>   
                            
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