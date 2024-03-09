import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import {MdOutlineCheckCircle} from '../../assets/icons/vander'

export default function UiTypography(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Typography</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Typography</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Heading </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>
                                    
                                    <h1>H1. Bootstrap heading</h1>
                                    <h2>H2. Bootstrap heading</h2>
                                    <h3>H3. Bootstrap heading</h3>
                                    <h4>H4. Bootstrap heading</h4>
                                    <h5>H5. Bootstrap heading</h5>
                                    <h6 className="mb-0">H6. Bootstrap heading</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Display Heading </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;p className="display-1"&gt; Display 1 &lt;/p&gt;</code></h6>
                                    
                                    <p className="display-1">Display 1</p>
                                    <p className="display-2">Display 2</p>
                                    <p className="display-3">Display 3</p>
                                    <p className="display-4">Display 4</p>
                                    <p className="display-5">Display 5</p>
                                    <p className="display-6 mb-0">Display 6</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> List </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> <code className="text-danger">
                                        &lt;ul className="list-unstyled text-muted"&gt; <br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircle className="align-middle"/&gt;&lt;/span&gt;Digital Marketing Solutions for Tomorrow&lt;/li&gt;<br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircle className="align-middle"/&gt;&lt;/span&gt;Our Talented &amp; Experienced Marketing Agency&lt;/li&gt;<br/>
                                            &nbsp;&nbsp;&lt;li className="mb-1"&gt;&lt;span className="text-primary h5 me-2"&gt;&lt;MdOutlineCheckCircle className="align-middle"/&gt;&lt;/span&gt;Create your own skin to match your brand&lt;/li&gt;<br/>
                                        &lt;/ul&gt;
                                    </code></h6>
                                    
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-1 ms-0"><span className="text-primary h5 me-2"><MdOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-1 ms-0"><span className="text-primary h5 me-2"><MdOutlineCheckCircle className="align-middle"/></span>Our Talented &amp; Experienced Marketing Agency</li>
                                        <li className="mb-1 ms-0"><span className="text-primary h5 me-2"><MdOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Blockquote </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> <code className="text-danger">
                                        &lt;div className="blockquote-wrapper"&gt;<br/>
                                            &nbsp;&lt;div className="blockquote p-4 p-md-5 rounded-lg position-relative"&gt;<br/>
                                                &nbsp;&nbsp;&lt;h4&gt;Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.&lt;/h4&gt;<br/>
                
                                                &nbsp;&nbsp;&nbsp;&lt;div className="position-absolute start-0" style=&#123;&#123;zIndex: '-1', top: '-30px'&#125;&#125;&gt;<br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;i className="mdi mdi-format-quote-open text-primary opacity-1" style=&#123;&#123;fontSize: '100px'&#125;&#125;&gt;&lt;/i&gt;<br/>
                                                &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            &nbsp;&nbsp;&lt;/div&gt;<br/>
                                            
                                            &nbsp;&lt;h6 className="author"&gt;- UJUR&lt;/h6&gt;<br/>
                                        &lt;/div&gt;
                                    </code></h6>
                                    
                                    <div className="blockquote-wrapper">
                                        <div className="blockquote p-4 p-md-5 rounded-lg position-relative">
                                            <h4>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</h4>
            
                                            <div className="position-absolute start-0" style={{zIndex: '-1', top: '-30px'}}>
                                                <i className="mdi mdi-format-quote-open text-primary opacity-1" style={{fontSize: '100px'}}></i>
                                            </div>
                                        </div>
                                        
                                        <h6 className="author">- UJUR</h6>
                                    </div>

                                    <h6 className="text-muted mt-5 mb-4 pt-5 pb-2 border-top">Ex. <br/> <code className="text-danger">
                                        &lt;blockquote className="blockquote mt-3 p-3"&gt;<br/>
                                            &nbsp;&lt;p className="text-muted mb-0 fst-italic"&gt;" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "&lt;/p&gt;<br/>
                                        &lt;/blockquote&gt;
                                    </code></h6>
                                    
                                    <blockquote className="blockquote mt-3 p-3">
                                        <p className="text-muted mb-0 fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}