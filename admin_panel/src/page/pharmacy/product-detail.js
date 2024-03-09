import React from "react";
import { Link, useParams } from "react-router-dom";

import product1 from '../../assets/images/pharmacy/shop/01.jpg'
import product2 from '../../assets/images/pharmacy/shop/02.jpg'
import product3 from '../../assets/images/pharmacy/shop/03.jpg'
import product4 from '../../assets/images/pharmacy/shop/04.jpg'

import Wrapper from "../../components/wrapper";
import { productData } from "../../data/data";
import CounterTwo from "../../components/counterTwo";
import Counter from "../../components/counter";

import { FiHeart, FiEye, FiShoppingCart } from '../../assets/icons/vander'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ProductDetail(){
    let params = useParams();
    let id = params.id
    let data = productData.find((product) => product.id === parseInt(id))

    let settings ={
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
    }
    let settings2 ={
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
      }
    let productImg = [ product1, product2, product3, product4 ]
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">{data?.name ? data.name : 'Plastic Medicine Box'}</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="card border-0 rounded shadow p-4 mt-4">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5">
                                {data?.image ?
                                    <div><img src={data.image} alt="" className="img-fluid"/></div>:
                                    <div className="client-review-slider">
                                        <TinySlider settings={settings2}>
                                            {productImg.map((item, index) =>{
                                                return(
                                                    <div className="tiny-slide" key={index}><img src={item} className="img-fluid rounded" alt=""/></div>
                                                )
                                            })}
                                        </TinySlider>
                                    </div>
                                }
                            </div>
        
                            <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
                                <div className="ms-md-4">
                                    <h4 className="title">{data?.name ? data.name : 'Plastic Medicine Box'}</h4>
                                    <h5 className="text-muted">$21.00 </h5>
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
                                        <h6 className="mb-0">Qty:</h6>
                                        <CounterTwo/>
                                    </div>
        
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Shop Now</Link>
                                        <Link to="#" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5 className="mb-0">Related Products:</h5>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-lg-12 mt-4">
                            <div className="slider-range-four">
                                <TinySlider settings={settings}>
                                    {productData.slice(0,10).map((item, index) =>{
                                        return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="card shop-list border-0 overflow-hidden rounded shadow">
                                                <ul className="label list-unstyled mb-0">
                                                    <li><Link to="#" className="badge rounded-pill badge-success">Featured</Link></li>
                                                </ul>
                                                <div className="shop-image position-relative overflow-hidden">
                                                    <Link to={`/product-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                                                    <ul className="list-unstyled shop-icons">
                                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                        <li className="mt-2"><Link to={`/product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                                        <li className="mt-2"><Link to="/shopcart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                                    </ul>                                
                                                    <Counter/>
                                                </div>
                                                <div className="card-body content p-4 border-top">
                                                    <Link to={`/product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                                    <div className="d-flex justify-content-between mt-1">
                                                        <h6 className="text-muted small font-italic mb-0 mt-1">{item.price} </h6>
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
            </div>
        </Wrapper>
    )
}