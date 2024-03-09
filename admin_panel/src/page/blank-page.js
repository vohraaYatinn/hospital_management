import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper";

export default function BlankPage(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Blank Page</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blank Page</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4">
                            <p className="text-muted mb-0"></p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}