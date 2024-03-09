import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiBadges(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Badges</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Badges</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Badges </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge bg-primary"&gt; primary &lt;/span&gt;</code></h6>

                                    <span className="badge bg-primary me-2 mt-2">Primary</span>
                                    <span className="badge bg-secondary me-2 mt-2">Secondary</span>
                                    <span className="badge bg-success me-2 mt-2">Success</span>
                                    <span className="badge bg-danger me-2 mt-2">Danger</span>
                                    <span className="badge bg-warning me-2 mt-2">Warning</span>
                                    <span className="badge bg-info me-2 mt-2">Info</span>
                                    <span className="badge bg-light text-dark me-2 mt-2">Light</span>
                                    <span className="badge bg-dark me-2 mt-2">Dark</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Pill Badges </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge rounded-pill bg-primary"&gt; primary &lt;/span&gt;</code></h6>

                                    <span className="badge rounded-pill bg-primary me-2 mt-2">Primary</span>
                                    <span className="badge rounded-pill bg-secondary me-2 mt-2">Secondary</span>
                                    <span className="badge rounded-pill bg-success me-2 mt-2">Success</span>
                                    <span className="badge rounded-pill bg-danger me-2 mt-2">Danger</span>
                                    <span className="badge rounded-pill bg-warning me-2 mt-2">Warning</span>
                                    <span className="badge rounded-pill bg-info me-2 mt-2">Info</span>
                                    <span className="badge rounded-pill bg-light text-dark me-2 mt-2">Light</span>
                                    <span className="badge rounded-pill bg-dark me-2 mt-2">Dark</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Soft Badges </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge bg-soft-primary"&gt; primary &lt;/span&gt;</code></h6>

                                    <span className="badge bg-soft-primary me-2 mt-2">Primary</span>
                                    <span className="badge bg-soft-secondary me-2 mt-2">Secondary</span>
                                    <span className="badge bg-soft-success me-2 mt-2">Success</span>
                                    <span className="badge bg-soft-danger me-2 mt-2">Danger</span>
                                    <span className="badge bg-soft-warning me-2 mt-2">Warning</span>
                                    <span className="badge bg-soft-info me-2 mt-2">Info</span>
                                    <span className="badge bg-soft-light text-dark me-2 mt-2">Light</span>
                                    <span className="badge bg-soft-dark me-2 mt-2">Dark</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Soft Pill Badges </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;span className="badge rounded-pill bg-soft-primary"&gt; primary &lt;/span&gt;</code></h6>

                                    <span className="badge rounded-pill bg-soft-primary me-2 mt-2">Primary</span>
                                    <span className="badge rounded-pill bg-soft-secondary me-2 mt-2">Secondary</span>
                                    <span className="badge rounded-pill bg-soft-success me-2 mt-2">Success</span>
                                    <span className="badge rounded-pill bg-soft-danger me-2 mt-2">Danger</span>
                                    <span className="badge rounded-pill bg-soft-warning me-2 mt-2">Warning</span>
                                    <span className="badge rounded-pill bg-soft-info me-2 mt-2">Info</span>
                                    <span className="badge rounded-pill bg-soft-light text-dark me-2 mt-2">Light</span>
                                    <span className="badge rounded-pill bg-soft-dark me-2 mt-2">Dark</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Link Badges </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="badge bg-primary"&gt; primary &lt;/Link&gt;</code></h6>

                                    <Link to="#" className="badge badge-link bg-primary me-2 mt-2">Primary</Link>
                                    <Link to="#" className="badge badge-link bg-secondary me-2 mt-2">Secondary</Link>
                                    <Link to="#" className="badge badge-link bg-success me-2 mt-2">Success</Link>
                                    <Link to="#" className="badge badge-link bg-danger me-2 mt-2">Danger</Link>
                                    <Link to="#" className="badge badge-link bg-warning me-2 mt-2">Warning</Link>
                                    <Link to="#" className="badge badge-link bg-info me-2 mt-2">Info</Link>
                                    <Link to="#" className="badge badge-link bg-light text-dark me-2 mt-2">Light</Link>
                                    <Link to="#" className="badge badge-link bg-dark me-2 mt-2">Dark</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}