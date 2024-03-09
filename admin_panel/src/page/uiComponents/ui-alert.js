import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import { FiInfo, MdOutlineCheckCircleOutline, BsExclamationTriangle, FiAlertOctagon} from '../../assets/icons/vander'

export default function UiAlert(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Alert</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Alert</li>
                            </ul>
                        </nav>
                    </div>
            
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Alert </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert—check it out! &lt;/div&gt;</code></h6>

                                    <div className="alert alert-primary" role="alert"> A simple primary alert—check it out!</div>
                                    <div className="alert alert-secondary" role="alert"> A simple secondary alert—check it out!</div>
                                    <div className="alert alert-success" role="alert"> A simple success alert—check it out!</div>
                                    <div className="alert alert-danger" role="alert"> A simple danger alert—check it out!</div>
                                    <div className="alert alert-warning" role="alert"> A simple warning alert—check it out!</div>
                                    <div className="alert alert-info" role="alert"> A simple info alert—check it out!</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Alert with Icons </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert bg-soft-primary fw-medium" role="alert"&gt; &lt;FiInfo className="fs-5 align-middle me-1"/&gt; An example alert with an icon &lt;/div&gt;</code></h6>

                                    <div className="alert bg-soft-primary fw-medium" role="alert"><FiInfo className="fs-5 align-middle me-1"/> An example alert with an icon</div>
                                    <div className="alert bg-soft-success fw-medium" role="alert"><MdOutlineCheckCircleOutline className="fs-5 align-middle me-1"/> An example success alert with an icon</div>
                                    <div className="alert bg-soft-warning fw-medium" role="alert"><BsExclamationTriangle className="fs-5 align-middle me-1"/> An example warning alert with an icon</div>
                                    <div className="alert bg-soft-danger fw-medium" role="alert"><FiAlertOctagon className="fs-5 align-middle me-1"/> An example danger alert with an icon</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Alert Links </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert with &lt;Link to="#" className="alert-link"&gt;&lt;/Link&gt;. &lt;/div&gt;</code></h6>

                                    <div className="alert alert-primary" role="alert">A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                    <div className="alert alert-secondary" role="alert">A simple secondary alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                    <div className="alert alert-success" role="alert">A simple success alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                    <div className="alert alert-danger" role="alert">A simple danger alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                    <div className="alert alert-warning" role="alert">A simple warning alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                    <div className="alert alert-info" role="alert">A simple info alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Additional Content </h5>
                                </div>

                                <div className="p-4">
                                    <div className="alert alert-success mb-0" role="alert">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                        <p className="mb-0 border-top pt-3">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Dismissing Alert </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                        <code className="text-danger">
                                            &lt;div className="alert alert-success alert-dismissible fade show" role="alert"&gt; <br/>&nbsp; 
                                            &lt;strong&gt;Well done!&lt;/strong&gt; You successfully read this important alert message. <br/>&nbsp;    
                                            &lt;button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt; &lt;/button&gt;<br/>
                                            &lt;/div&gt; 
                                        </code>
                                    </h6>
                                        
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>

                                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>

                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>

                                    <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
                                        <strong>Oh snap! </strong> Change a few things up and try submitting again.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Advanced Alert </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                        <code className="text-danger">&lt;div className="alert alert-primary alert-pills" role="alert"&gt; <br/>&nbsp;&nbsp;
                                            &lt;span className="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br/>&nbsp;&nbsp;
                                            &lt;span className="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                            &lt;/div&gt;
                                        </code>
                                    </h6>

                                    <div className="d-block">
                                        <div className="alert alert-primary alert-pills" role="alert">
                                            <span className="badge rounded-pill bg-info me-1">New</span>
                                            <span className="content"> A Modern primary alert—check it out! <i className="uil uil-angle-right-b"></i></span>
                                        </div>
                                    </div>

                                    <div className="d-block">
                                        <div className="alert alert-danger alert-pills mb-0" role="alert">
                                            <span className="badge rounded-pill bg-success me-1"> New </span>
                                            <span className="content"> A Modern danger alert—check it out! <i className="uil uil-angle-right-b"></i> </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Advanced Outline Alert </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <br/> 
                                        <code className="text-danger">
                                            &lt;div className="alert alert-outline-primary alert-pills" role="alert"&gt; <br/>&nbsp;&nbsp;
                                            &lt;span className="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br/>&nbsp;&nbsp;
                                            &lt;span className="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                            &lt;/div&gt;
                                        </code>
                                    </h6>
                                </div>

                                <div className="d-block">
                                    <div className="alert alert-outline-primary alert-pills" role="alert">
                                        <span className="badge rounded-pill bg-primary me-1">New</span>
                                        <span className="content"> A Modern primary alert—check it out! <i className="uil uil-angle-right-b"></i></span>
                                    </div>
                                </div>

                                <div className="d-block">
                                    <div className="alert alert-outline-danger alert-pills mb-0" role="alert">
                                        <span className="badge rounded-pill bg-danger me-1"> New </span>
                                        <span className="content"> A Modern danger alert—check it out! <i className="uil uil-angle-right-b"></i> </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}