import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiText(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Text Color</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Text Color</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Text Color </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="text-primary"&gt; Doctris Saas & Software Template &lt;/div&gt;</code></h6>

                                        <h6 className="text-primary">.text-primary</h6>
                                        <h6 className="text-secondary">.text-secondary</h6>
                                        <h6 className="text-success">.text-success</h6>
                                        <h6 className="text-danger">.text-danger</h6>
                                        <h6 className="text-warning">.text-warning</h6>
                                        <h6 className="text-info">.text-info</h6>
                                        <h6 className="text-light bg-dark">.text-light</h6>
                                        <h6 className="text-white bg-dark">.text-white</h6>
                                        <h6 className="text-white-50 bg-dark">.text-white-50</h6>
                                        <h6 className="text-dark mb-0">.text-dark</h6>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}