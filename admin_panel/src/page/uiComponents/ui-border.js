import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiBorder(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Borders</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Borders</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Borders </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;span className="border"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border-top"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border-end"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border-bottom"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border-start"&gt;&lt;/span&gt;
                                                </code>
                                            </pre>
                                        </h6>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border-top bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border-end bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border-bottom bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border-start bg-light rounded mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Border Width </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;span className="border border-1"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-2"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-3"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-4"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-5"&gt;&lt;/span&gt;
                                                </code>
                                            </pre>
                                        </h6>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-1 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-2 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-3 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-4 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-5 bg-light rounded mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Border Subtractive </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;span className="border-0"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-top-0"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-end-0"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-bottom-0"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-start-0"&gt;&lt;/span&gt;<br/>
                                                </code>
                                            </pre>
                                        </h6>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border-0 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-top-0 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-end-0 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-bottom-0 bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-start-0 bg-light rounded mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Border Color </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;span className="border border-primary"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-secondary"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-success"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-danger"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-warning"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-info"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-light"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-dark"&gt;&lt;/span&gt;<br/>
                                                    &lt;span className="border border-white"&gt;&lt;/span&gt;<br/>
                                                </code>
                                            </pre>
                                        </h6>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-primary bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-secondary bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-success bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-danger bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-warning bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-info bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-dark bg-light rounded mb-0"></p>
                                        </div>

                                        <div className="d-inline-block me-1 mt-2">
                                            <p className="avatar avatar-small border border-white bg-light rounded mb-0"></p>
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