import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiShadow(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Shadows</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Shadows</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Box Shadows </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;div className="shadow-none p-3 mb-5 bg-light rounded"&gt;No shadow&lt;/div&gt;<br/>
                                                    &lt;div className="shadow-sm p-3 mb-5 bg-body rounded"&gt;shadow-sm&lt;/div&gt;<br/>
                                                    &lt;div className="shadow p-3 mb-5 bg-body rounded"&gt;shadow&lt;/div&gt;<br/>
                                                    &lt;div className="shadow-md p-3 mb-5 bg-body rounded"&gt;shadow-md&lt;/div&gt;<br/>
                                                    &lt;div className="shadow-lg p-3 mb-5 bg-body rounded"&gt;shadow-lg&lt;/div&gt;<br/>
                                                </code>
                                            </pre>
                                        </h6>

                                        <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                                        <div className="shadow-sm p-3 mb-5 bg-body rounded">shadow-sm</div>
                                        <div className="shadow p-3 mb-5 bg-body rounded">shadow</div>
                                        <div className="shadow-md p-3 mb-5 bg-body rounded">shadow-md</div>
                                        <div className="shadow-lg p-3 mb-5 bg-body rounded">shadow-lg</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}