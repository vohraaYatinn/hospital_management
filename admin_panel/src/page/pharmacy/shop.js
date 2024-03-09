import React,{useState} from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/wrapper";
import Counter from "../../components/counter";

import { categories, productData } from "../../data/data";

import { FiHeart, FiEye, FiShoppingCart } from '../../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';

export default function Shop(){
    let [show, setShow] = useState(false);
    let [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between">
                            <div>
                                <h5 className="mb-0">Shop</h5>

                                <nav aria-label="breadcrumb" className="d-inline-block mt-1">
                                    <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                        <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="mt-4 mt-sm-0">
                                <Link to="#" className="btn btn-primary" onClick={()=>setShow(true)}>Add Product</Link>
                            </div>
                            <Modal show={show} onHide={()=>setShow(false)} size="lg" centered>
                                <Modal.Header closeButton>
                                <h5 className="modal-title" id="exampleModalLabel">Add Shop Product</h5>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="d-grid me-md-4">
                                                <p className="text-muted">Upload your shop image here, Please click "Upload Image" Button.</p>
                                                {file === null ?
                                                    <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>:
                                                    <img src={file} alt="" style={{width:'100%', height:'auto'}}/>
                                                }
                                                
                                                <input type="file" id="input-file" name="input-file" accept="image/*" className="btn-upload btn btn-primary mt-4" onChange={handleChange} hidden/>
                                               
                                                <label className="btn-upload btn btn-primary mt-4" htmlFor="input-file">Upload Image</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mt-4 mt-sm-0">
                                            <form>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Shop Title <span className="text-danger">*</span></label>
                                                            <input name="name" id="name" type="text" className="form-control" placeholder="Title :"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Price: </label>
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text border bg-transparent" id="basic-addon1">$</span>
                                                                <input type="number" min="0" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Label:</label>
                                                            <select className="form-select form-control">
                                                                <option value="FE">Featured</option>
                                                                <option value="NE">New</option>
                                                                <option value="PO">Popular</option>
                                                                <option value="RE">Recent</option>
                                                                <option value="FR">Free</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Rating : </label>
                                                            <input name="time" type="text" className="form-control" id="time" value="0"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 text-end">
                                                        <button type="submit" className="btn btn-primary">Add Product</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Modal.Body>
                                
                            </Modal>
                        </div>

                        <h6 className="mt-4 mb-0">Most Viewed Products</h6>
                        
                        <div className="row row-cols-md-2 row-cols-lg-5">
                            {productData.slice(0,10).map((item, index) =>{
                                return(
                                <div className="col mt-4" key={index}>
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
                        </div>

                        <h6 className="mt-4 mb-0">Categories</h6>

                        <div className="row row-cols-md-2 row-cols-lg-5">
                            {categories.map((item, index) =>{
                                return(
                                <div className="col mt-4 pt-2" key={index}>
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

                        <h6 className="mt-4 mb-0">Popular Products</h6>

                        <div className="row row-cols-md-2 row-cols-lg-5">                            
                            {productData.slice(10,15).map((item, index) =>{
                                return(
                                <div className="col mt-4" key={index}>
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
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}