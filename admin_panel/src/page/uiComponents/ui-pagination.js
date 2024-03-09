import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiPagination(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Pagination</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Pagination</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Pagination </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                            <pre><code className="text-danger">
                                                    &lt;ul className="pagination mb-0"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" to="#" aria-label="Previous"&gt;Prev&lt;/Link&gt;&lt;/li&gt;<br/>
                                                        &nbsp;&nbsp;&lt;li className="page-item active"&gt;&lt;Link className="page-link" to="#"&gt;1&lt;/Link&gt;&lt;/li&gt;<br/>
                                                        &nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" to="#"&gt;2&lt;/Link&gt;&lt;/li&gt;<br/>
                                                        &nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" to="#"&gt;3&lt;/Link&gt;&lt;/li&gt;<br/>
                                                        &nbsp;&nbsp;&lt;li className="page-item"&gt;&lt;Link className="page-link" to="#" aria-label="Next"&gt;Next&lt;/Link&gt;&lt;/li&gt;<br/>
                                                    &lt;/ul&gt;<br/>
                                            </code></pre>
                                        </h6>
                                        
                                        <ul className="pagination mb-0">
                                            <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}