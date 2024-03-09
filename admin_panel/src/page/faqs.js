import React,{useState} from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import { faqData } from "../data/data";

import Modal from 'react-bootstrap/Modal';

export default function Faqs(){
    let [activeIndex, setActiveIndex] = useState(1);
    let [activeIndex2, setActiveIndex2] = useState(5);
    let [activeIndex3, setActiveIndex3] = useState(9);
    let [activeIndex4, setActiveIndex4] = useState(13);

    let [show, setShow] = useState(false);

    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">FAQs</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-1">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="mt-4 mt-sm-0">
                            <Link to="#" className="btn btn-primary" onClick={() =>setShow(true)}>Add Questions</Link>
                        </div>
                        <Modal show={show} onHide={() =>setShow(false)} centered>
                            <Modal.Header closeButton>
                                <h5 className="modal-title" id="exampleModalLabel">Add Questions</h5>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Question <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Question :"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Answer <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Answer :"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 text-end">
                                            <button className="btn btn-primary">Add Question</button>
                                        </div>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className="card p-4 rounded shadow border-0">
                                <h6 className="mb-0">Doctris Practice Questions</h6>

                                <div className="accordion mt-4" id="buying">
                                    {faqData.slice(0,4).map((item,index) =>{
                                        return(
                                            <div className="accordion-item border rounded mt-2" key={index}>
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} type="button" onClick={() =>setActiveIndex(item.id)}>
                                                       {item.title}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className={`${activeIndex === item.id ? 'show' : ''} accordion-collapse border-0 collapse`} >
                                                    <div className="accordion-body text-muted">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card p-4 rounded shadow border-0">
                                <h6 className="mb-0">Text Consultations Questions</h6>

                                <div className="accordion mt-4" id="general">
                                    {faqData.slice(4,8).map((item,index) =>{
                                        return(
                                            <div className="accordion-item border rounded mt-2" key={index}>
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className={`${activeIndex2 === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} type="button" onClick={() =>setActiveIndex2(item.id)}>
                                                       {item.title}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className={`${activeIndex2 === item.id ? 'show' : ''} accordion-collapse border-0 collapse`} >
                                                    <div className="accordion-body text-muted">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card p-4 rounded shadow border-0">
                                <h6 className="mb-0">Patient Health Data & Records Questions</h6>

                                <div className="accordion mt-4" id="payments">
                                    {faqData.slice(8,12).map((item,index) =>{
                                        return(
                                            <div className="accordion-item border rounded mt-2" key={index}>
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className={`${activeIndex3 === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} type="button" onClick={() =>setActiveIndex3(item.id)}>
                                                       {item.title}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className={`${activeIndex3 === item.id ? 'show' : ''} accordion-collapse border-0 collapse`} >
                                                    <div className="accordion-body text-muted">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card p-4 rounded shadow border-0">
                                <h6 className="mb-0">About the Doctris Practice Questions</h6>

                                <div className="accordion mt-4" id="support">
                                    {faqData.slice(12,16).map((item,index) =>{
                                        return(
                                            <div className="accordion-item border rounded mt-2" key={index}>
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className={`${activeIndex4 === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} type="button" onClick={() =>setActiveIndex4(item.id)}>
                                                       {item.title}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className={`${activeIndex4 === item.id ? 'show' : ''} accordion-collapse border-0 collapse`} >
                                                    <div className="accordion-body text-muted">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}